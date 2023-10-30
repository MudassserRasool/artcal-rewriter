import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Home = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const [showInput3, setShowInput3] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const [combinedData, setCombinedData] = useState('');

  const handleInputChange = (event, fieldName) => {
    if (isEditable) {
      setInputValues({
        ...inputValues,
        [fieldName]: event.target.value,
      });
    }
  };

  const combineInputValues = () => {
    if (isEditable) {
      setCombinedData(
        (prevCombinedData) =>
          `${inputValues.input1}\n${inputValues.input2}\n${inputValues.input3}`
      );
      setIsEditable(false); // Disable editability after submission
    }
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
    <div className="container mt-4">
      <div className="row ">
        <div className="d-flex flex-column gap-4 col-4">
        <TextField
          id="outlined-select-post-type"
          select
          label="Select Type"
          defaultValue="Blog"
          helperText="Please select your Post type"
        >
          {articalType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-action"
          select
          label="Select Action"
          defaultValue="Action"
          helperText="Please select your action"
        >
          {actions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-Length"
          select
          label="Select Length"
          defaultValue="Length"
          helperText="Please select your Length"
        >
          {size.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <div className="d-flex justify-content-between">
        <FormControlLabel control={<Checkbox />} label="Add Heading" />
        <FormControlLabel control={<Checkbox />} label="Add List" />
        </div>
        </div>
        <div className="col-8 ">
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
            <Button variant="contained" onClick={combineInputValues}>
              Submit
            </Button>
            <Button variant="contained" onClick={toggleInput3}>
              Add More
            </Button>
            <Button variant="contained" onClick={addAgain}>
              Add Again
            </Button>
          </div>
        </div>
      </div>
      {/* Input fields */}

      <TextEditor combinedData={combinedData} />
    </div>
  );
};

export default Home;
