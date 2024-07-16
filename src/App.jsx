import React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Modal, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import './App.css'
import { useState, useEffect } from 'react'
import LookingForJob from './Components/LookingForJob';
import CurrentlyWorking from './Components/CurrentlyWorking';
import StudySchoolInfo from './Components/StudySchoolInfo';
import StudyCollegeInfo from './Components/StudyCollegeInfo';
import Navbar from './Components/Navbar';

function App() {
  const [studyValue, setStudyValue] = useState('');
  const [schoolValue, setSchoolValue] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedGratuationYear, setSelectedGratuationYear] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [selectedJobTitle, setSelectedJobTitle,] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleStudySelect = event => {
    setStudyValue(event.target.value);
  }

  const handleSchoolSelect = event => {
    setSchoolValue(event.target.value);
  }

  const handleCurrentPosition = event => {
    setCurrentPosition(event.target.value);
  }

  // console.log(schoolName)  

  useEffect(() => {
    console.log(studyValue, schoolValue, selectedGrade, selectedDegree, selectedGratuationYear, schoolName, collegeName, currentPosition, companyName);
  }, [studyValue, schoolValue, selectedDegree, selectedGrade, selectedGratuationYear, currentPosition, selectedJobTitle, selectedExperience, schoolName, collegeName, companyName, selectedExperience, selectedJobTitle]);

  const schoolGrades = ['Six', 'Seven', 'Eight', 'Nine', 'Ten', "Eleven", "Twelve"];
  const collegeDegree = ["HSC", "Diploma", "BSC", "MSC"];
  const gratuationYear = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const experiences = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const occupations = ['Frontend Developer', "Backend Developer", "Full-Stack Developer", "Graphic Designer"];

  const handleChange = (event) => {

    switch (event.target.name) {
      case 'grade':
        setSelectedGrade(event.target.value);
        break;
      case 'degree':
        setSelectedDegree(event.target.value);
        break;
      case 'graduationYear':
        setSelectedGratuationYear(event.target.value);
        break;
      case 'experience':
        setSelectedExperience(event.target.value);
        break;
      case 'jobTitle':
        setSelectedJobTitle(event.target.value);
        break;
      default:
        break;
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />


      <div className='main-content'>
        <h2>Hello, Welcome back Pabel</h2>
        <div style={{ textAlign: 'start' }}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Are you currently Studing?</FormLabel>
            <RadioGroup
              onChange={handleStudySelect}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={studyValue}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes, I'm" />
              <FormControlLabel value="no" control={<Radio />} label="I'm Not" />
            </RadioGroup>
          </FormControl>


          {studyValue === 'yes' &&
            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Are you in?</FormLabel>
                <RadioGroup
                  onChange={handleSchoolSelect}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="school" control={<Radio />} label="In School" />
                  <FormControlLabel value="college" control={<Radio />} label="In College" />
                </RadioGroup>
              </FormControl>


              {schoolValue === 'school' &&
                <StudySchoolInfo selectedGrade={selectedGrade} handleChange={handleChange} setSchoolName={setSchoolName} schoolGrades={schoolGrades} />}
              {schoolValue === 'college' &&
                <StudyCollegeInfo selectedDegree={selectedDegree} handleChange={handleChange} collegeDegree={collegeDegree} gratuationYear={gratuationYear} setCollegeName={setCollegeName} selectedGratuationYear={selectedGratuationYear} />}
            </div>}
          {studyValue === 'no' &&
            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Are you Currently?</FormLabel>
                <RadioGroup
                  onChange={handleCurrentPosition}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="Looking for job" control={<Radio />} label="Looking for job" />
                  <FormControlLabel value="working" control={<Radio />} label="working" />
                </RadioGroup>
              </FormControl>

              {currentPosition === "Looking for job" && <LookingForJob selectedDegree={selectedDegree} handleChange={handleChange} collegeDegree={collegeDegree} graduationYear={gratuationYear} selectedGraduationYear={selectedGratuationYear} setCollegeName={setCollegeName} />}


              {currentPosition === "working" && <CurrentlyWorking setCompanyName={setCompanyName} collegeDegree={collegeDegree} experiences={experiences} occupations={occupations} selectedJobTitle={selectedJobTitle} selectedExperience={selectedExperience} handleChange={handleChange}/>}
            </div>}
        </div>

        <Button onClick={handleOpen} variant="outlined" color='success'>Submit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              About Pabel
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* {`${studyValue === 'yes' && s}`} */}
              {`He is currently ${studyValue === 'yes'
                ?
                (schoolValue === 'school'
                  ?
                  `studying in school at ${schoolName} and his grade is ${selectedGrade}.`
                  :
                  `studying in college at ${collegeName} on ${selectedDegree} degree and his graduation year is ${selectedGratuationYear}.`)
                :
                // `not studying and currently ${currentPosition}}` && 
                (currentPosition === 'Looking for job') ? `not studying and currently ${currentPosition}, graduated from ${collegeName} on ${selectedDegree} degree in ${selectedGratuationYear}.`
                  :
                  `not studying and currently ${currentPosition} in ${companyName} with ${selectedExperience} years of experience as ${selectedJobTitle}.`
                }`}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default App;