import { Button, Typography, MenuItem, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';
import React, { useEffect, useState } from 'react';
import styles from './TextEditor.module.css';

const TextEditor = React.memo(({ combinedData }) => {
  const [data, setData] = useState();
  const [headingLevel, setHeadingLevel] = useState('header-six'); // Default heading level is h1

  useEffect(() => {
    setData({
      blocks: [
        {
          key: 'heading',
          text: 'Your Heading Here',
          type: headingLevel,
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
        {
          key: 'content',
          text: combinedData,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    });
  }, [combinedData, headingLevel]);

  const save = (data) => {
    console.log(data);
    console.log('This 3 Fields data' + combinedData);
  };

  const handleHeadingChange = (event) => {
    setHeadingLevel(event.target.value);
  };

  const myTheme = createTheme();
  Object.assign(myTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          display: 'inline-block',
          flexDirection: 'row',
          alignItems: 'center', // Align items in the center of the row
          marginTop: 5,
          width: '100%',
        },
        editor: {
          borderColor: 'lightgray',
          borderWidth: '2px',
          borderStyle: 'solid',
          padding: '20px',
          borderRadius: '10px',
        },
      },
    },
  });

  return (
    <div className="col-12 border border-1  shadow-sm rounded">
      <div className={styles.editorBox}>
      <Select value={headingLevel}  onChange={handleHeadingChange} style={{height:30, marginTop:23, }}>
            <MenuItem value="header-one">Heading 1</MenuItem>
            <MenuItem value="header-two">Heading 2</MenuItem>
            <MenuItem value="header-three">Heading 3</MenuItem>
            <MenuItem value="header-four">Heading 4</MenuItem>
            <MenuItem value="header-five">Heading 5</MenuItem>
            <MenuItem value="header-six">Heading 6</MenuItem>
          </Select>
        <ThemeProvider theme={myTheme}>
       

          <MUIRichTextEditor
            value={JSON.stringify(data)}
            label="Type something here..."
            onSave={save}
            inlineToolbar={false}
            height="500px"
            clssName="w-100 bg-danger"
          />
        </ThemeProvider>
      </div>

      <div className="d-flex justify-content-center gap-2 my-3">
        <Button variant="contained" onClick={save}
         style={{
                borderRadius: 30,
                paddingInline: 25,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: 'black',
                fontSize: 15,
              }}
        >
          Save
        </Button>
        <Button variant="contained"
         style={{
                borderRadius: 30,
                paddingInline: 25,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: 'black',
                fontSize: 15,
              }}
        >
          Check Plagiarism
        </Button>
      </div>
    </div>
  );
});

export default TextEditor;
