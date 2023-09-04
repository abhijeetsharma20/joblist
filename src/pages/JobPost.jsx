import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import { createJobs } from '../api/apiClient'
import Navbar from '../Navbar'


const JobPost = () => {


  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email:'',
    },
    onSubmit: values => {
      console.log(values)
      const job = {
        profile: values.profile,
        desc: values.desc,
        exp: values.exp,
        techs: values.techs.split(',')
      }

      createJobs(job)
        .then(res => {
          console.log(res)
          navigate('/jobs')
        })

        .catch(err => { console.log(err) });
    },
  });
  return (
    <>
    <Navbar />
      <h2>Add Job Details</h2>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="profile">Profile</label>
          <input
            id="profile"
            name="profile"
            type="text"
            onChange={formik.handleChange}
          // value={formik.values.email}
          />

          <label htmlFor="desc">Description</label>
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
          // value={formik.values.email}
          />

          <label htmlFor="exp">Expierence</label>
          <input
            id="exp"
            name="exp"
            type="text"
            onChange={formik.handleChange}
          // value={formik.values.email}
          />

          <label htmlFor="techs">Techs(seprate with space if)</label>
          <input
            id="techs"
            name="techs"
            type="text"
            onChange={formik.handleChange}
          // value={formik.values.email}
          />

          <button type="submit">Submit</button>
        </form>
      </div>


    </>
  )
}

export default JobPost