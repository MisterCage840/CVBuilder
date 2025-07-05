function DisplayExpList({
  experienceList,
  onEdit,
  onDelete,
  currentExpEditingId,
  onSave,
  onChange,
}) {
  if (experienceList.length) {
    const educList = experienceList.map((exp) => {
      const isEditing = exp.id === currentExpEditingId

      return isEditing ? (
        <div key={exp.id}>
          <input
            type="text"
            value={exp.companyName}
            onChange={(e) => onChange(exp.id, "companyName", e.target.value)}
          />
          <input
            type="text"
            value={exp.positionTitle}
            onChange={(e) => onChange(exp.id, "positionTitle", e.target.value)}
          />
          <input
            type="date"
            value={exp.workStartDate}
            onChange={(e) =>
              onChange(
                exp.id,
                "workStartDate",
                new Date(e.target.value).toLocaleDateString()
              )
            }
          />
          <input
            type="date"
            value={exp.workFinishDate}
            onChange={(e) =>
              onChange(
                exp.id,
                "workFinishDate",
                new Date(e.target.value).toLocaleDateString()
              )
            }
          />
          <textarea
            className="textArea"
            value={exp.responsibility}
            onChange={(e) => onChange(exp.id, "responsibility", e.target.value)}
          />
          <button onClick={() => onSave()}>Save</button>
        </div>
      ) : (
        <div key={exp.id}>
          <p>
            {exp.companyName} | {exp.positionTitle} | {exp.workStartDate} |{" "}
            {exp.workFinishDate} <p>{exp.responsibility}</p>
          </p>
          <button onClick={() => onEdit(exp.id)}>Edit</button>
          <button onClick={() => onDelete(exp.id)}>Delete</button>
        </div>
      )
    })
    return <div>{educList}</div>
  }
}

export default DisplayExpList
