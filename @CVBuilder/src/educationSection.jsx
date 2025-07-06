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
    <div className="education-section">
      <fieldset>
        <legend>Education</legend>
        <div className="field">
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            placeholder="Phoenix University"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="fieldofStudy">Field of Study:</label>
          <input
            type="text"
            id="fieldofStudy"
            placeholder="Business Administration"
            value={fieldofStudy}
            onChange={(e) => setFieldofStudy(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="studyStartDate">Start Date:</label>
          <input
            type="date"
            id="studyStartDate"
            value={studyStartDate}
            onChange={(e) =>
              setStudyStartDate(new Date(e.target.value).toLocaleDateString())
            }
          />
        </div>
        <div className="field">
          <label htmlFor="studyFinishDate">Finish Date:</label>
          <input
            type="date"
            id="studyFinishDate"
            value={studyFinishDate}
            onChange={(e) =>
              setStudyFinishDate(new Date(e.target.value).toLocaleDateString())
            }
          />
        </div>
        <div className="field button-field">
          <button
            onClick={() => {
              const education = {
                id: Date.now(),
                schoolName,
                fieldofStudy,
                studyStartDate,
                studyFinishDate,
              }
              setEducationList((prev) => [...prev, education])
              setEducationCounter((prev) => prev + 1)
              setSchoolName("")
              setFieldofStudy("")
              setStudyStartDate("")
              setStudyFinishDate("")
            }}
          >
            Add Education
          </button>
        </div>
      </fieldset>
    </div>
  )
}

export default EducationSection
