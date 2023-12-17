import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Tooltip } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor';
import Navbar from '../../components/Navbar/Navbar';
const Home = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const [showInput3, setShowInput3] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
 
  const [isButtonClicked, setIsButtonClicked] = useState(false);

const [result, setResult] = useState()
  const [combinedData, setCombinedData] = useState('');

  const handleInputChange = (event, fieldName) => {
    if (isEditable) {
      setInputValues({
        ...inputValues,
        [fieldName]: event.target.value,
      });
    }
  };

  const combineInputValues = async () => {
    if (isEditable) {
      const inputData = {
        input1: inputValues.input1 || '',
        input2: inputValues.input2 || '',
        input3: showInput3 ? inputValues.input3 || '' : '',
      };
  
      try {
        const response = await fetch('http://127.0.0.1:8000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputData),
        });
  
        const data = await response.json();
        if (response.ok) {
          setCombinedData(data.generated_text); // Set generated text in state
        } else {
          // Handle errors if needed
          console.error('Error:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  
      setIsEditable(false); // Disable editability after submission
    }


    setIsButtonClicked(true); // Set the button clicked state
    setIsEditable(false); // Disable editability after submission
  };

  const toggleInput3 = () => {
    setShowInput3(!showInput3);
  };

  const addAgain = () => {
    setIsEditable(true);
    setInputValues({
      input1: '',
      input2: '',
      input3: '',
    });
  };

  const articalType = [
    {
      value: 'Newsletter',
      label: 'Newsletter',
    },
    {
      value: 'Blog Post',
      label: 'Blog Post',
    },
    {
      value: 'Story',
      label: 'Story',
    },
    {
      value: 'Normal Text',
      label: 'Normal Text',
    },
  ];
  const actions = [
    {
      value: 'Simple Combine',
      label: 'Simple Combine',
    },
    {
      value: 'Summery',
      label: 'Summery',
    },
  ];
  const size = [
    {
      value: 'Small',
      label: 'Small',
    },
    {
      value: 'Medium',
      label: 'Medium',
    },
    {
      value: 'Large',
      label: 'Large',
    },
  ];
  return (
   <div>
<Navbar/>
<div className="container mt-4">
      <div className="row border border-2 shadow p-4 mb-5 bg-body rounded mb-4">
        <div className="d-flex flex-column gap-4 col-2 p-4 ">
          <div className="d-flex gap-1 align-items-center">
            <TextField
              id="outlined-select-post-type"
              select
              label="Select Type"
              defaultValue="Blog"
              // helperText="Please select your Post type"
              size="small"
              className="w-100"
            >
              {articalType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Tooltip title="Post type" placement="top-start">
              ?
            </Tooltip>
          </div>
          <div className="d-flex gap-1 align-items-center">
            <TextField
              id="outlined-select-action"
              select
              label="Select Action"
              defaultValue="Action"
              // helperText="Please select your action"
              size="small"
              className="w-100"
            >
              {actions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Tooltip title="Select Your Action" placement="top-start">
              ?
            </Tooltip>
          </div>
          <div className="d-flex gap-1 align-items-center">
            <TextField
              id="outlined-select-Length"
              select
              label="Select Length"
              defaultValue="Length"
              // helperText="Please select your Length"
              size="small"
              className="w-100"
            >
              {size.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Tooltip title="Select Your Action" placement="top-start">
              ?
            </Tooltip>
          </div>

          <FormControlLabel
            control={<Checkbox />}
            label="Add Heading"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 20 },
              '& .MuiFormControlLabel-label': { fontSize: 14 },
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Add List"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 20 },
              '& .MuiFormControlLabel-label': { fontSize: 14 },
            }}
          />
        </div>
        <div className="col-10 ms-auto  p-3  border-start border-1 ">
          <TextField
            label="Multiline 1"
            multiline
            rows={4}
            value={inputValues.input1}
            className="w-100"
            onChange={(event) => handleInputChange(event, 'input1')}
            disabled={!isEditable} // Disable input if not editable
          />
          <TextField
            label="Multiline 2"
            multiline
            rows={4}
            value={inputValues.input2}
            className="w-100 mt-4"
            onChange={(event) => handleInputChange(event, 'input2')}
            disabled={!isEditable} // Disable input if not editable
          />

          {showInput3 && (
            <TextField
              label="Multiline 3"
              multiline
              rows={4}
              value={inputValues.input3}
              className="w-100 mt-4"
              onChange={(event) => handleInputChange(event, 'input3')}
              disabled={!isEditable} // Disable input if not editable
            />
          )}

          <div className="d-flex gap-3 justify-content-center my-3">
            <Button
              variant="contained"
              onClick={combineInputValues}
              style={{
                borderRadius: 30,
                paddingInline: 25,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: 'black',
                fontSize: 15,
                opacity: isButtonClicked ? 0.25 : 1,
              }}
            >
              Submit
            </Button>

            <Button
              variant="contained"
              onClick={toggleInput3}
              startIcon={showInput3 ? <RemoveIcon /> : <AddIcon />}
              style={{
                borderRadius: 30,
                paddingInline: 25,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: 'black',
                fontSize: 15,
                opacity: showInput3 ? '25%' : '100%', // Set opacity based on showInput3
              }}
            >
              {showInput3 ? 'remove' : 'Add More'}
            </Button>

            <Button
              variant="contained"
              style={{
                borderRadius: 30,
                paddingInline: 25,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: 'black',
                fontSize: 15,
              }}
              startIcon={<ReplayIcon />}
              onClick={addAgain}
            >
              Add Again
            </Button>
          </div>
        </div>
      </div>
      {/* Input fields */}

      {<TextEditor combinedData={combinedData} />}
      {/* <TextEditor /> */}
    </div>
   </div>
  );
};

export default Home;
