import React, { useState} from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import './App.css';



function App() {
    const [searchTerm, setSearchTerm] = useState(null);
    const [prevSearch, setPrevSearchTerm] = useState(null);
   
    function searchHandler(event) {
        if (event.key === 'Enter') {
            if (searchTerm) {
                setPrevSearchTerm(prevSearch => searchTerm);
            }
            console.log(event.target.value);
            const term = event.target.value;
            setSearchTerm(searchTerm => term);
           
        }
    }

   

  return (
      <div className="App">
          <Header
              searchTerm={searchTerm}
              searchHandler={searchHandler} />
          <Gallery
              prevSearch={prevSearch}
              searchTerm={searchTerm}              
          />
      </div>
  );
}

export default App;
