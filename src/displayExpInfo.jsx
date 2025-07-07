import "./displayExpInfo.css"

function DisplayExpInfo({ experienceList }) {
  const list = experienceList.map((exp) => (
    <div className="work-entry" key={exp.id}>
      <p>
        <strong>{exp.companyName}</strong>
      </p>
      <p>
        <strong>Position:</strong> {exp.positionTitle} | {exp.workStartDate} ---{" "}
        {exp.workFinishDate}
      </p>
      <p className="responsibility-display">{exp.responsibility}</p>
    </div>
  ))

  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {list}
    </div>
  )
}

export default DisplayExpInfo
