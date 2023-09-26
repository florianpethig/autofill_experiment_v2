import React from 'react';
import './styles.css';
import './autocompleteTextbox'
import AutocompleteTextbox from './autocompleteTextbox';
const App = () => {
  return (
    <>
    <img src="" alt="" />
    <div className="container">
      <div className="prompt">
        <p>Please write about 200 words about yourself.</p>
      </div>
      <div className="response">
        <h2>Your Answer:</h2>
        <AutocompleteTextbox>
          
        </AutocompleteTextbox>
      </div>
    </div>

    </>
  );
};

export default App;
