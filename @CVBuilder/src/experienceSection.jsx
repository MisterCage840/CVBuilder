import { useState } from "react"
import "./experienceSection.css"

function ExperienceSection({
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  responsibility,
  setResponsibility,
  workStartDate,
  setWorkStartDate,
  workFinishDate,
  setWorkFinishDate,
  setExperienceCounter,
  setExperienceList,
}) {
  return (
    <div className="header">
      <fieldset>
        <section className="forExp">
          <div className="field">
            <label htmlFor="companyName">Company:</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Morgan Enterprises"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              type="text"
              name="positionTitle"
              id="positionTitle"
              placeholder="Logistics Manager"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="responsibility">Responsibility:</label>
            <textarea
              className="textArea"
              name="responsibility"
              id="responsibility"
              value={responsibility}
              onChange={(e) => setResponsibility(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="workStartDate">Start Date:</label>
            <input
              type="date"
              name="workStartDate"
              id="workStartDate"
              value={workStartDate}
              onChange={(e) =>
                setWorkStartDate(new Date(e.target.value).toLocaleDateString())
              }
            />
          </div>

          <div className="field">
            <label htmlFor="workFinishDate">Finish Date:</label>
            <input
              type="date"
              name="workFinishDate"
              id="workFinishDate"
              value={workFinishDate}
              onChange={(e) =>
                setWorkFinishDate(new Date(e.target.value).toLocaleDateString())
              }
            />
          </div>
        </section>
        <button
          onClick={function addExperience() {
            const experience = {
              id: Date.now(),
              companyName: companyName,
              positionTitle: positionTitle,
              responsibility: responsibility,
              workStartDate: workStartDate,
              workFinishDate: workFinishDate,
            }
            setExperienceList((prev) => [...prev, experience])
            setExperienceCounter((prev) => prev + 1)
          }}
        >
          Add Experience
        </button>
      </fieldset>
    </div>
  )
}

export default ExperienceSection
