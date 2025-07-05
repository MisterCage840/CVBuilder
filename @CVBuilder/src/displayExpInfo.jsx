function DisplayExpInfo({ experienceList }) {
  const list = experienceList.map((exp) => (
    <div key={exp.id}>
      <p>
        <strong> {exp.companyName} </strong> | <strong>Position: </strong>{" "}
        {exp.positionTitle}
        <strong>
          {exp.workStartDate} --- {exp.workFinishDate}
        </strong>
      </p>
      <p>{exp.responsibility}</p>
    </div>
  ))
  return <div>{list}</div>
}

export default DisplayExpInfo
