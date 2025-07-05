function DisplayEducationInfo({ educationList }) {
  const list = educationList.map((education) => (
    <div key={education.id}>
      <p>
        <strong> {education.schoolName} </strong> | <strong>Field: </strong>{" "}
        {education.fieldofStudy}
        <strong>
          {education.studyStartDate} --- {education.studyFinishDate}
        </strong>
      </p>
    </div>
  ))
  return <div>{list}</div>
}

export default DisplayEducationInfo
