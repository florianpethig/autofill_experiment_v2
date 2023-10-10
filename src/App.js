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
        <p>Please now write about 200 words about yourself.</p> 
<p>You can start by writing a few things about yourself, such as your age and occupation. You can use the following questions to continue your text:</p>	
<p>(a) What are your hobbies and interests?</p>
<p>(b) How would you describe your friendships and what do you like to do with your friends for fun?</p>
<p>(c) What kinds of activities do you like to do on weekends?</p>
<p>(d) What would you like to do with new people you meet?</p>
<p>As you write, the writing assistant will give you text suggestions. You can use these suggestions if you like.</p>
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
