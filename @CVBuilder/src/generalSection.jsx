import { useState } from "react"
import "./generalSection.css"

function GeneralSection({
  firstName,
  lastName,
  email,
  phoneNumber,
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
}) {
  return (
    <div className="header">
      <fieldset>
        <section>
          <div className="labels">
            <label htmlFor="firstName">First Name:</label>
            <label htmlFor="lastName">Last Name:</label>
            <label htmlFor="email">Email:</label>
            <label htmlFor="phoneNumber">Phone Number:</label>
          </div>
          <div className="inputs">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </section>
      </fieldset>
    </div>
  )
}

export default GeneralSection
