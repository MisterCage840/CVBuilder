function DisplayEducList({
  educationList,
  onEdit,
  onDelete,
  currentEditingId,
  onSave,
  onChange,
}) {
  if (educationList.length) {
    const educList = educationList.map((education) => {
      const isEditing = education.id === currentEditingId

      return isEditing ? (
        <div key={education.id}>
          <input
            type="text"
            value={education.schoolName}
            onChange={(e) =>
              onChange(education.id, "schoolName", e.target.value)
            }
          />
          <input
            type="text"
            value={education.fieldofStudy}
            onChange={(e) =>
              onChange(education.id, "fieldofStudy", e.target.value)
            }
          />
          <input
            type="date"
            value={education.studyStartDate}
            onChange={(e) =>
              onChange(
                education.id,
                "studyStartDate",
                new Date(e.target.value).toLocaleDateString()
              )
            }
          />
          <input
            type="date"
            value={education.studyFinishDate}
            onChange={(e) =>
              onChange(
                education.id,
                "studyFinishDate",
                new Date(e.target.value).toLocaleDateString()
              )
            }
          />
          <button onClick={() => onSave()}>Save</button>
        </div>
      ) : (
        <div key={education.id}>
          <p>
            {education.schoolName} | {education.fieldofStudy} |{" "}
            {education.studyStartDate} | {education.studyFinishDate}
          </p>
          <button onClick={() => onEdit(education.id)}>Edit</button>
          <button onClick={() => onDelete(education.id)}>Delete</button>
        </div>
      )
    })
    return <div>{educList}</div>
  }
}

export default DisplayEducList
