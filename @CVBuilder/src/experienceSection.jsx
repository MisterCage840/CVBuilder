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
    <div className="experience-section">
      <fieldset>
        <legend>Work Experience</legend>
        <div className="field">
          <label htmlFor="companyName">Company:</label>
          <input
            type="text"
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
            id="positionTitle"
            placeholder="Logistics Manager"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="responsibility">Responsibility:</label>
          <textarea
            id="responsibility"
            className="textArea"
            placeholder="Describe your responsibilities..."
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="workStartDate">Start Date:</label>
          <input
            type="date"
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
            id="workFinishDate"
            value={workFinishDate}
            onChange={(e) =>
              setWorkFinishDate(new Date(e.target.value).toLocaleDateString())
            }
          />
        </div>
        <div className="field button-field">
          <button
            onClick={() => {
              const experience = {
                id: Date.now(),
                companyName,
                positionTitle,
                responsibility,
                workStartDate,
                workFinishDate,
              }
              setExperienceList((prev) => [...prev, experience])
              setExperienceCounter((prev) => prev + 1)
              setCompanyName("")
              setPositionTitle("")
              setResponsibility("")
              setWorkStartDate("")
              setWorkFinishDate("")
            }}
          >
            Add Experience
          </button>
        </div>
      </fieldset>
    </div>
  )
}

export default ExperienceSection
