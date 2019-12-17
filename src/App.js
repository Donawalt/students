import React,{useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';

import Student, {StudentC} from './components/Student'

;

function App() {
  const [students, setStudents] = useState([])

  React.useEffect // Le Hook d’effet permet l’exécution d’effets de bord dans les fonctions composants :
  (
    () => {
     
      fetch("https://jsonplaceholder.typicode.com/users") //Récupère le json de se liens 
          .then(response => response.json()) // stipule le type de donnée 
          .then(json => setStudents(json) ); // rajoute les valeurs dans le hooks students 
    }
   
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          students.map((student, i) =><Student name={student.name} index={i}/>)
        }
      </header>
    </div>
  );
}

export default App;
