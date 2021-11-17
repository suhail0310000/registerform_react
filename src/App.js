import './App.css';
// import { useState } from 'react'

function App() {
  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <h3>Informasjon</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        <button>Jeg har konto</button>
      </div>
      <div className="flex-item-right">
        <h3>Opprett bruker</h3>
        <form className="register-form">
          <div className="div1">
            <label>
              <p>Fornavn</p>
              <input type="text"/>
            </label>
            <label style={{marginLeft:"2%"}}>
              <p>Etternavn</p>
              <input type="text"/>
            </label>
          </div>  
          <label>
              <p>E-postadresse</p>
              <input type="email"/>
          </label>
          <div>
            <label>
              <p style={{margin:"0px"}}>Passord</p>
              <input type="text"/>
            </label>
            <label style={{marginLeft:"2%"}}>
              <p style={{margin:"0px"}}>Gjenta passord</p>
              <input type="text"/>
            </label>
          </div> 
          <input type="checkbox"></input>
          <label> Jeg godtar databehandlingsavtalen</label>
          <button>Registrer</button>
        </form>
      </div>
    </div>
  );
}

export default App;
