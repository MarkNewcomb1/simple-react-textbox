import React, {useState} from 'react';

const TextEditor = ({textArea, addWordToTextArea, undoWordFromTextArea}) => {

  const [word, setWord] = useState('');

  const handleChange = (e) => {
    setWord(e.target.value);
  }

  const handleSubmit = (word) => {
    addWordToTextArea(word)
    setWord('');
  }
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" data-testid="word-input" onChange={(e)=> handleChange(e)} value={word}/>
          <button data-testid="append-button" disabled={!word} onClick={(e) => handleSubmit(word)}>Append</button>
          <button data-testid="undo-button" disabled={!textArea.length} onClick={() => undoWordFromTextArea()}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">
          { textArea.map((t, i) => (
            <span key={i}>{t}&nbsp;</span>
          ))}
        </div>
      </React.Fragment>
    );
}

export default TextEditor;
