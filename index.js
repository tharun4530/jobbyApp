import './index.css'
import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'

const Jobs = () => {
  const [jobsData, setJobsData] = useState([])
  const [loader, setLoader] = useState(true)

  const getJobsData = async () => {
    const response = await fetch('https://apis.ccbp.in/jobs')
    const data = await response.json()
    setLoader(false)
    console.log(data)
  }

  useEffect(() => getJobsData(), [])

  return (
    <div className="main-container">
      <div className="left-side-container">
        <div className="profile-container">
          <h1 className="profile-heading">Sai Tharun Chappidi</h1>
          <p>Front end developer</p>
        </div>
        <hr />
        <div>
          <h1 className="filter-heading">Type of Employment</h1>
          <div>
            <input type="checkbox" id="fullTime" />
            <label className="label-heading" htmlFor="fullTime">
              Full Time
            </label>
          </div>
          <div>
            <input type="checkbox" id="partTime" />
            <label className="label-heading" htmlFor="partTime">
              Part Time
            </label>
          </div>
          <div>
            <input type="checkbox" id="freelance" />
            <label className="label-heading" htmlFor="freelance">
              Freelance
            </label>
          </div>
          <div>
            <input type="checkbox" id="internship" />
            <label className="label-heading" htmlFor="internship">
              Internship
            </label>
          </div>
        </div>
        <hr />
        <div>
          <h1 className="filter-heading">Salary Range</h1>
          <div>
            <input type="checkbox" id="10LPA" />
            <label className="label-heading" htmlFor="10LPA">
              10 LPA and above
            </label>
          </div>
          <div>
            <input type="checkbox" id="20LPA" />
            <label className="label-heading" htmlFor="20LPA">
              20 LPA and above
            </label>
          </div>
          <div>
            <input type="checkbox" id="30LPA" />
            <label className="label-heading" htmlFor="30LPA">
              30 LPA and above
            </label>
          </div>
          <div>
            <input type="checkbox" id="40LPA" />
            <label className="label-heading" htmlFor="40LPA">
              40 LPA and above
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <input type="search" />
          {loader ? (
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          ) : (
            <h1>loaded </h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Jobs
