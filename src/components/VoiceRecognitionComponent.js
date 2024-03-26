// import React, { useState,useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const VoiceRecognitionComponent = () => {
//   const [response, setResponse] = useState('');
//   const { transcript, resetTranscript } = useSpeechRecognition();
//   const { speak } = useSpeechSynthesis();

//   const commands = [
//     {
//       command: 'give career details',
//       callback: () => {
//         // Call API to fetch career details or perform any other action
//         setResponse('Here are the career details...');
//         speak({ text: 'Here are the career details...' });
//       },
//     },
//     // Add more commands as needed
//   ];
//   const handleListen = () => {
//     SpeechRecognition.startListening({ commands });
//   };
  
//   useEffect(() => {
//     console.log("Transcript:", transcript);
//     // Check if transcript matches any recognized commands
//   }, [transcript]);
  


//   return (
//     <div>
//       <button onClick={handleListen}>Start Listening</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
//       <button onClick={resetTranscript}>Clear</button>
//       <p>{transcript}</p>
//       <p>{response}</p>
//     </div>
//   );
// };

// export default VoiceRecognitionComponent;



// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useSpeechSynthesis } from 'react-speech-kit';


// const VoiceRecognitionComponent = () => {
//   const [response, setResponse] = useState('');
//   const { transcript, resetTranscript } = useSpeechRecognition();
//   const { speak } = useSpeechSynthesis();

//   const commands = [
//     {
//       command: 'give career details',
//       callback: () => {
//         fetchCareerDetails(); // Call API to fetch career details
//       },
//     },
//     // Add more commands as needed
//   ];

//   const handleListen = () => {
//     SpeechRecognition.startListening({ commands });
//   };

//   useEffect(() => {
//     console.log("Transcript:", transcript);
//     // Check if transcript matches any recognized commands
//   }, [transcript]);

//   const fetchCareerDetails = () => {
//     fetch('https://mocki.io/v1/c2ebc477-d6f9-45d5-85af-fc8acb50a274')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Career details:', data);
//         setResponse(data.details);
//         speak({ text: data.details });
//       })
//       .catch(error => {
//         console.error('Error fetching career details:', error);
//         setResponse('Error fetching career details');
//         speak({ text: 'Error fetching career details' });
//       });
//   };

//   return (
//     <div>
//       <button onClick={handleListen}>Start Listening</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
//       <button onClick={resetTranscript}>Clear</button>
//       <p>{transcript}</p>
//       <p>{response}</p>
//     </div>
//   );
// };
// export default VoiceRecognitionComponent;


// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const VoiceRecognitionComponent =        () => {
//   const [response, setResponse] = useState('');
//   const { transcript, resetTranscript } = useSpeechRecognition();
//   const { speak } = useSpeechSynthesis();

//   useEffect(() => {
//     console.log("Transcript:", transcript);
    
    
//     if (transcript.toLowerCase().includes('give career details')) {
//       fetchCareerDetails();
//     }
//   }, [transcript]); 

//   const fetchCareerDetails = () => {
//     fetch('https://mocki.io/v1/c2ebc477-d6f9-45d5-85af-fc8acb50a274')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('API Response:', data);
     
//         const details = data.details; 
//         console.log(details);
//         setResponse(details);
//         speak({ text: details });
//       })
//       .catch(error => {
//         console.error('Error fetching career details:', error);
//         setResponse('Error fetching career details');
//         speak({ text: 'Error fetching career details' });
//       });
//   };

//   return (
//     <div>
//       <button onClick={SpeechRecognition.startListening}>Start Listening</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
//       <button onClick={resetTranscript}>Clear</button>
//       <p>Transcript: {transcript}</p>
//       {response && (
//         <div>
//           <h2>Career Details</h2>
//           <p>Criteria: {response.criteria}</p>
//           <p>Procedures: {response.procedures}</p>
//           <p>Responsibilities: {response.responsibilities}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VoiceRecognitionComponent;





// import React, { useState, useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';



// const VoiceRecognitionComponent = () => {
//   const [response, setResponse] = useState(null);
//   const { transcript, resetTranscript } = useSpeechRecognition();
//   const { speak } = useSpeechSynthesis();

//   useEffect(() => {
//     if (transcript.toLowerCase().includes('give career details')) {
//       fetchCareerDetails();
//     }
//     if (transcript.toLowerCase().includes('generate career details')) {
//       fetchCareerDetails();
//     }
//   }, [transcript]); 
//   const fetchCareerDetails = () => {
//     fetch('https://mocki.io/v1/c2ebc477-d6f9-45d5-85af-fc8acb50a274')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('API Response:', data); 
//         const roles = Object.keys(data); 
//         const roleData = roles.map(role => data[role]); 
//         if (!roleData[0] || !roleData[0].criteria || !roleData[0].procedures || !roleData[0].responsibilities) {
//           throw new Error('API response is missing required fields');
//         }
//         setResponse(roleData[0]); 
//         speak({ text: '' });
//       })
//       .catch(error => {
//         console.error('Error fetching or processing career details:', error);
//         setResponse(null); 
//         speak({ text: 'Error fetching or processing career details' });
//       });
//   };
  
//   console.log('Response:', response);

//   return (
//     <div>
//     <button onClick={SpeechRecognition.startListening} style={{ marginRight: '10px' }}>Start</button>
//     <button onClick={SpeechRecognition.stopListening} style={{ marginRight: '10px' }}>Stop</button>
//     <button onClick={resetTranscript}>Clear</button>
//       <p> {transcript}</p>
//       {response && (
//         <div>
//           <h2>Career Details</h2>
//           <p>Criteria: {response.criteria}</p>
//           <p>Procedures: {response.procedures}</p>
//           <p>Responsibilities: {response.responsibilities}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VoiceRecognitionComponent;


import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Button from '@mui/material/Button';

const VoiceRecognitionComponent = () => {
  const [response, setResponse] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    if (transcript.toLowerCase().includes('give career details') || transcript.toLowerCase().includes('generate career details')) {
      fetchCareerDetails();
    }
  }, [transcript]); 

  const fetchCareerDetails = () => {
    fetch('https://mocki.io/v1/c2ebc477-d6f9-45d5-85af-fc8acb50a274')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data); 
        const roles = Object.keys(data); 
        const roleData = roles.map(role => data[role]); 
        setResponse(roleData); 
        speak({ text: '' });
      })
      .catch(error => {
        console.error('Error fetching or processing career details:', error);
        setResponse(null); 
        speak({ text: 'Error fetching or processing career details' });
      });
  };

  console.log('Response:', response);

  return (
    <div>
      <button onClick={SpeechRecognition.startListening} style={{ marginRight: '10px' }}>Start</button>
      <button onClick={SpeechRecognition.stopListening} style={{ marginRight: '10px' }}>Stop</button>
      <button onClick={resetTranscript}>Clear</button>
      <p> {transcript}</p>
      {response && response.map((career, index) => (
        <div key={index}>
          {index === 0 && <h2>Software Engineer</h2>}
          {index === 1 && <h2>Product Manager</h2>}
          {index === 2 && <h2>UX/UI Designer</h2>}
          {index === 3 && <h2>Marketing Specialist</h2>}
          <p>Criteria: {career.criteria}</p>
          <p>Procedures: {career.procedures}</p>
          <p>Responsibilities: {career.responsibilities}</p>
          <Button variant='contained' style={{ marginRight: '10px' }}>Apply</Button>
         <Button variant='outlined' style={{ color: 'red' }}>Cancel</Button>
        </div>
      ))}
     
    </div>
  );
};

export default VoiceRecognitionComponent;
