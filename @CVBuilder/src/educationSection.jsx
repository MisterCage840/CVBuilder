import { useState } from "react"
import "./educationSection.css"

function EducationSection({
  schoolName,
  fieldofStudy,
  studyStartDate,
  studyFinishDate,
  setSchoolName,
  setFieldofStudy,
  setStudyStartDate,
  setStudyFinishDate,
  setEducationList,
  setEducationCounter,
}) {
  return (
    <div className="educationHeader">
      <fieldset>
        <section>
          <div className="labels">
            <label htmlFor="schoolName">School Name:</label>
            <label htmlFor="fieldofStudy">Field of Study: </label>
            <label htmlFor="studyStartDate">Start Date:</label>
            <label htmlFor="studyFinishDate">Finish Date: </label>
          </div>
          <div className="inputs">
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              placeholder="Phoneix University"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <input
              type="text"
              name="fieldofStudy"
              id="fieldofStudy"
              placeholder="Business Administration"
              value={fieldofStudy}
              onChange={(e) => setFieldofStudy(e.target.value)}
            />
            <input
              type="date"
              name="studyStartDate"
              id="studyStartDate"
              value={studyStartDate}
              onChange={(e) =>
                setStudyStartDate(new Date(e.target.value).toLocaleDateString())
              }
            />
            <input
              type="date"
              name="studyFinishDate"
              id="studyFinishDate"
              value={studyFinishDate}
              onChange={(e) =>
                setStudyFinishDate(
                  new Date(e.target.value).toLocaleDateString()
                )
              }
            />
          </div>
        </section>
        <button
          onClick={function addEducation() {
            const education = {
              id: Date.now(),
              schoolName: schoolName,
              fieldofStudy: fieldofStudy,
              studyStartDate: studyStartDate,
              studyFinishDate: studyFinishDate,
            }
            setEducationList((prev) => [...prev, education])
            setEducationCounter((prev) => prev + 1)
          }}
        >
          Submit
        </button>
      </fieldset>
    </div>
  )
}

export default EducationSection
