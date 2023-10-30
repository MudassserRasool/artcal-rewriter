import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';
import React, { useEffect, useState } from 'react';
import styles from './TextEditor.module.css';

const TextEditor = React.memo(({ combinedData }) => {
  const [data, setdata] = useState();

  useEffect(() => {
    setdata({
      blocks: [
        {
          key: '642r8',
          text: combinedData,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [], // Clear the array
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    });
  }, [combinedData]);

  const save = (data) => {
    console.log(data);
    console.log('This 3 Fields data' + combinedData);
  };

  const myTheme = createTheme();
  Object.assign(myTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginTop: 20,
          width: '80%',
        },
        editor: {
          borderColor: 'lightgray',
          borderWidth: '2px',
          borderStyle: 'solid',
          padding: '20px',
        },
      },
    },
  });

  return (
    <div className="col-12">
      <div className={styles.editorBox}>
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor
            value={JSON.stringify(data)}
            label="Type something here..."
            onSave={save}
            inlineToolbar={true}
            height="500px"
          />
        </ThemeProvider>
      </div>

      <div className="d-flex justify-content-center gap-2 my-3">
        <Button variant="contained" onClick={save}>
          save
        </Button>
        <Button variant="contained">
          Check Plagiarism
        </Button>
      </div>
    </div>
  );
});

export default TextEditor;
