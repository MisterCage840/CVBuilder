import "./displayGeneralInfo.css"

function DisplayGeneralInfo({ firstName, lastName, email, phoneNumber }) {
  return (
    <div className="general-info">
      <h1>
        {firstName} {lastName}
      </h1>
      <p>
        <strong>Email:</strong> {email} | <strong>Phone Number:</strong>{" "}
        {phoneNumber}
      </p>
    </div>
  )
}

export default DisplayGeneralInfo
