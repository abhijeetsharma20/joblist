import React, { useState } from 'react'
import { useEffect } from 'react'
import { getJobs, getSearchJobs } from '../api/apiClient'
import '../App.css'
import Navbar from '../Navbar'


const JobFetch = () => {

  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {text.length > 2 ? fetchQueryJob(text):refresHome()},[text])

  function refresHome() {
    getJobs()
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => console.log(err));

  }

  const fetchQueryJob = (text) => {
    getSearchJobs(text)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }


  return (

    <>
    <Navbar />
    <div className='search'>
      <input type="text" className="ip" onChange={(e) => setText(e.target.value)} value={text}/>
      <button onChange={() => fetchQueryJob(text)}>Search</button>
    </div>
      <div className='big-box'>
        {data.map((job) => (
          <div key={job.id} className='job-box'>
            <h2>Profile : {job.profile}</h2>
            <p>Job Description : {job.desc}</p>
            <p>Experience Required : {job.exp}</p>
            <p>Technologies Required : {job.techs.length > 0 ? job.techs.map((tech) => (<span>{tech} </span>)):""}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default JobFetch