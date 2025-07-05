function DisplayGeneralInfo({ firstName, lastName, email, phoneNumber }) {
  return (
    <div>
      <h1>
        <strong>
          {firstName} {lastName}
        </strong>
      </h1>
      <p>
        <strong>Email:</strong> {email} | <strong>Phone Number:</strong>{" "}
        {phoneNumber}
      </p>
    </div>
  )
}

export default DisplayGeneralInfo
