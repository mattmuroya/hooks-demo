import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black');

  useEffect(() => {

    const changeColorOnClick = () => { // helper function
      if (color === 'black') {
        setColor('red');
      } else {
        setColor('black');
      }
    };

    document.getElementById('myDiv').addEventListener('click', changeColorOnClick); // runs on mount, and update (depending on dependency array)
    
    return () => { // component will unmount
      document.getElementById('myDiv').removeEventListener('click', changeColorOnClick);
    };
  }, [color]); // if empty, works like component will mount. If filled, component will update (when dependency changes). If null, runs after initial render and on update.

  return (
      <div
        id="myDiv"
        style={{
          color: 'white',
          width: '100px',
          height: '100px',
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
  );
}

export default App;
