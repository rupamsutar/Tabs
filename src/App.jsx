import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1)

  const fetchJobs = async() => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if(isloading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return(
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      <JobInfo jobs={jobs} currentIndex={currentIndex}/>
    </section>
  )
};
export default App;
