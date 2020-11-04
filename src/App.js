import React, {useState} from 'react';
import './App.css';

import TextEditor from './components/TextEditor';

const App = () => {

  const [textArea, setTextArea] = useState([]);

  const addWordToTextArea = (word) => {
    setTextArea([...textArea, word]);
  }

  const undoWordFromTextArea = (word) => {
    const oneRemoved = [...textArea].slice(0, -1);
    setTextArea(oneRemoved);
  }
    return (
      <div className="App">
        <TextEditor 
        textArea={textArea}
        addWordToTextArea={addWordToTextArea}
        undoWordFromTextArea={undoWordFromTextArea}
        />
      </div>
    );
}

export default App;
