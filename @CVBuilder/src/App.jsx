import { use, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import GeneralSection from "./generalSection.jsx"
import EducationSection from "./educationSection.jsx"
import ExperienceSection from "./experienceSection.jsx"
import DisplayGeneralInfo from "./displayGeneralInfo.jsx"
import DisplayEducationInfo from "./displayEducationInfo.jsx"
import DisplayEducList from "./displayEducList.jsx"
import DisplayExpInfo from "./displayExpInfo.jsx"
import DisplayExpList from "./displayExpList"

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const [schoolName, setSchoolName] = useState("")
  const [fieldofStudy, setFieldofStudy] = useState("")
  const [studyStartDate, setStudyStartDate] = useState("")
  const [studyFinishDate, setStudyFinishDate] = useState("")
  const [educationList, setEducationList] = useState([])
  const [educationCounter, setEducationCounter] = useState(1)
  const [currentEditingId, setCurrentEditingId] = useState(null)

  const [companyName, setCompanyName] = useState("")
  const [positionTitle, setPositionTitle] = useState("")
  const [responsibility, setResponsibility] = useState("")
  const [workStartDate, setWorkStartDate] = useState("")
  const [workFinishDate, setWorkFinishDate] = useState("")
  const [experienceList, setExperienceList] = useState([])
  const [experienceCounter, setExperienceCounter] = useState(1)
  const [currentExpEditingId, setCurrentExpEditingId] = useState(null)

  const editList = (id) => {
    setCurrentEditingId(id)
  }
  const deleteList = (id) => {
    let newList = educationList.filter((edu) => edu.id != id)
    setEducationList(newList)
  }
  const onChange = (id, field, newValue) => {
    setEducationList((prev) =>
      prev.map((edu) => (edu.id == id ? { ...edu, [field]: newValue } : edu))
    )
  }

  const onSave = () => setCurrentEditingId(null)

  //for Experience Section

  const editExpList = (id) => {
    setCurrentExpEditingId(id)
  }
  const deleteExpList = (id) => {
    let newList = experienceList.filter((exp) => exp.id != id)
    setExperienceList(newList)
  }
  const onExpChange = (id, field, newValue) => {
    setExperienceList((prev) =>
      prev.map((exp) => (exp.id == id ? { ...exp, [field]: newValue } : exp))
    )
  }

  const onExpSave = () => setCurrentExpEditingId(null)

  return (
    <div className="mainContainer">
      <div className="inputSection">
        <GeneralSection
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
        />
        <EducationSection
          schoolName={schoolName}
          fieldofStudy={fieldofStudy}
          studyStartDate={studyStartDate}
          studyFinishDate={studyFinishDate}
          educationList={educationList}
          educationCounter={educationCounter}
          setSchoolName={setSchoolName}
          setFieldofStudy={setFieldofStudy}
          setStudyStartDate={setStudyStartDate}
          setStudyFinishDate={setStudyFinishDate}
          setEducationList={setEducationList}
          setEducationCounter={setEducationCounter}
        />
        <DisplayEducList
          educationList={educationList}
          onEdit={editList}
          onDelete={deleteList}
          currentEditingId={currentEditingId}
          onSave={onSave}
          onChange={onChange}
        />
        <ExperienceSection
          companyName={companyName}
          positionTitle={positionTitle}
          responsibility={responsibility}
          workStartDate={workStartDate}
          workFinishDate={workFinishDate}
          experienceCounter={experienceCounter}
          experienceList={experienceList}
          setCompanyName={setCompanyName}
          setPositionTitle={setPositionTitle}
          setResponsibility={setResponsibility}
          setWorkStartDate={setWorkStartDate}
          setWorkFinishDate={setWorkFinishDate}
          setExperienceCounter={setExperienceCounter}
          setExperienceList={setExperienceList}
        />
        <DisplayExpList
          experienceList={experienceList}
          onEdit={editExpList}
          onDelete={deleteExpList}
          currentExpEditingId={currentExpEditingId}
          onSave={onExpSave}
          onChange={onExpChange}
        />
      </div>
      <div className="cvDisplay">
        <DisplayGeneralInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
        />
        <DisplayEducationInfo
          educationList={educationList}
          educationCounter={educationCounter}
          setEducationCounter={setEducationCounter}
        />
        <DisplayExpInfo experienceList={experienceList} />
      </div>
    </div>
  )
}

export default App
