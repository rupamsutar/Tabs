import React from 'react'

const BtnContainer = ({jobs, setCurrentIndex, currentIndex}) => {
  return (
    <div className="btn-container">
        {
            jobs.map((item, index) => {
                return (
                    <button key={item.id} onClick={() => setCurrentIndex(index)} 
                    className= {index === currentIndex ? "job-btn active-btn" : "job-btn"}>
                        {item.company}
                    </button>
                )
            })
        }
    </div>
  )
}

export default BtnContainer