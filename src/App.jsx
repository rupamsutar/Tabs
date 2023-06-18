import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

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
      <JobInfo jobs={jobs}/>
    </section>
  )
};
export default App;
