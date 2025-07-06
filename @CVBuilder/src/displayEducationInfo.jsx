import "./displayEducationInfo.css"

function DisplayEducationInfo({ educationList }) {
  const list = educationList.map((education) => (
    <div className="education-entry" key={education.id}>
      <p>
        <strong>{education.schoolName}</strong>
      </p>
      <p>
        <strong>Field:</strong> {education.fieldofStudy} |{" "}
        {education.studyStartDate} --- {education.studyFinishDate}
      </p>
    </div>
  ))

  return (
    <div className="education-section">
      <h2>Education</h2>
      {list}
    </div>
  )
}

export default DisplayEducationInfo
