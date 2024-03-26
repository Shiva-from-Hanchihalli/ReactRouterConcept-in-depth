



import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [educationDetails, setEducationDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);

  const jobDetails = {
    'Software Engineer': {
      criteria: 'Bachelor\'s degree in Computer Science or related field',
      procedures: 'Develop, test, and deploy software applications',
      responsibilities: 'Write clean, maintainable code; collaborate with team members',
    },
    'Product Manager': {
      criteria: 'Bachelor\'s degree in Business Administration or related field',
      procedures: 'Define product vision, strategy, and roadmap',
      responsibilities: 'Gather and prioritize product requirements; coordinate product launches',
    },
    'UX/UI Designer': {
      criteria: 'Bachelor\'s degree in Design or related field',
      procedures: 'Create wireframes, mockups, and prototypes',
      responsibilities: 'Conduct user research; design intuitive user interfaces',
    },
    'Marketing Specialist': {
      criteria: 'Bachelor\'s degree in Marketing or related field',
      procedures: 'Develop marketing campaigns and strategies',
      responsibilities: 'Analyze market trends; execute digital marketing initiatives',
    },
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApply = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setSelectedJob(null);
    setShowForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
    // Reset form state
    setShowForm(false);
    setSelectedJob(null);
  };

  const addEducationDetail = () => {
    setEducationDetails([...educationDetails, { institution: '', department: '', degree: '', date: '', currentlyPursuing: false }]);
  };

  const addExperienceDetail = () => {
    setExperienceDetails([...experienceDetails, { occupationTitle: '', company: '', designation: '', date: '', currentlyPursuing: false }]);
  };

  const handleInputChange = (index, type, event) => {
    const { name, value, type: fieldType, checked } = event.target;
    const newData = type === 'education' ? [...educationDetails] : [...experienceDetails];
    newData[index][name] = fieldType === 'checkbox' ? checked : value;
    type === 'education' ? setEducationDetails(newData) : setExperienceDetails(newData);
  };


  return (
    <div className="job-details-container">
      <h1>Careers</h1>
      <p>Welcome to our Careers page! Explore our current job openings below:</p>
      {selectedJob ? null : (
        <div>
          <h2>Open Positions</h2>
          <ul>
            {Object.keys(jobDetails).map((job) => (
              <li key={job} onClick={() => handleJobClick(job)}>
                <Box boxShadow={3} p={2} mb={2}>
                  <Typography variant="body1">{job}</Typography>
                  <span style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "10px"
                  }}>Bangalore urban,India</span>
                </Box>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedJob && (
        <div>
          <h2>{selectedJob}</h2>
          <ul>
            <li>Criteria: {jobDetails[selectedJob].criteria}</li>
            <li>Working Procedures: {jobDetails[selectedJob].procedures}</li>
            <li>Responsibilities: {jobDetails[selectedJob].responsibilities}</li>
          </ul>
          <div style={{ marginBottom: '20px' }}></div>
          {showForm ? (
            <form onSubmit={handleSubmit} style={{ border: '2px solid green', padding: '20px', borderRadius: '5px', background: 'Beige', marginBottom: '5px' }}>
              <h2 style={{ color: 'blue' }}>Candidate Details</h2>
              <div style={{ marginBottom: '10px', borderBlock: 'red', width: '75%' }}>
                <TextField label="First Name" variant="outlined" required fullWidth />
              </div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Last Name" variant="outlined" required fullWidth />
              </div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Email" variant="outlined" required fullWidth />
              </div>

             
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Phone NO:" variant="outlined" required />
              </div>
              <div style={{ color: 'grey' }}>Address Information*</div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Street" variant="outlined" required fullWidth />
              </div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="City" variant="outlined" required fullWidth />
              </div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="State/Province " variant="outlined" required fullWidth />
              </div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Zip/Postal Code" variant="outlined" required fullWidth />
              </div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Country " variant="outlined" required fullWidth />
              </div>
              <div style={{ color: 'grey' }}>Professional Details*</div>

              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Current Job Title" variant="outlined" required fullWidth />
              </div>
              <div style={{ marginBottom: '10px', width: '75%' }}>
                <TextField label="Skill Set" variant="outlined" required fullWidth />
              </div>

              <div>
                <p style={{color:'grey'}}>EducationDetails*</p>
                <button onClick={addEducationDetail}> + Add </button>
              </div>
              {educationDetails.map((detail, index) => (
                <div key={index}>
                  <h2 style={{ color: 'blue', marginTop: '20px' }}>Education Details</h2>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Institution Name" variant="outlined" name="institution" required fullWidth value={detail.institution} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Department" variant="outlined" name="department" required fullWidth value={detail.department} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Degree" variant="outlined" name="degree" required fullWidth value={detail.degree} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Date" variant="outlined" name="date" required fullWidth value={detail.date} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div>
                  <label style={{gap:'5px',display:'flex'}}>
                      <input type="checkbox" name="currentlyPursuing" checked={detail.currentlyPursuing} onChange={(e) => handleInputChange(index, e)} />
                      <span style={{ color: 'grey' }}  >Currently Pursuing</span>
                    </label>
                  </div>    
                </div>
              ))}
               <div>
                <p style={{color:'grey'}}>ExperienceDetails*</p>
                <button onClick={addExperienceDetail}> + Add </button>
              </div>
              {experienceDetails.map((detail, index) => (
                <div key={index}>
                  <h2 style={{ color: 'blue', marginTop: '20px' }}>Experience Details</h2>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Occupation / Title" variant="outlined" name="Occupation / Title" required fullWidth value={detail.institution} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Company" variant="outlined" name="Company" required fullWidth value={detail.department} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Summary" variant="outlined" name="Summary" required fullWidth value={detail.degree} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div style={{ marginBottom: '10px', width: '75%' }}>
                    <TextField label="Work Duration" variant="outlined" name="Work Duration" required fullWidth value={detail.date} onChange={(e) => handleInputChange(index, e)} />
                  </div>
                  <div>
                  <label style={{gap:'5px',display:'flex'}}>
                      <input type="checkbox" name="currentlyPursuing" checked={detail.currentlyPursuing} onChange={(e) => handleInputChange(index, e)} />
                      <span style={{ color: 'grey' }}  > I Currently Work Here </span>
                    </label>
                  </div>    
                </div>
              ))}

              <div>
                <p style={{ color: 'grey' }}> Upload Your Resume Here* </p>
                <div style={{ marginBottom: '50px' }}>
                  <TextField label="" type="file" variant="outlined" required />
                </div>

                <Button type="submit" variant="contained">Submit</Button>
              </div>
            </form>
          ) : (
            <div>
              <Button variant="contained" onClick={handleApply}>Apply</Button>
              <Button variant="contained" onClick={handleCancel} sx={{ marginLeft: '10px', color: 'red' }}>Cancel</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Careers;

