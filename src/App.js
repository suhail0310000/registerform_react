import './App.css';
import { useState } from 'react'

function App() {
  const [fornavn, setFornavn] = useState('')
  const [etternavn, setEtternavn] = useState('')
  const [email, setEmail] = useState('')
  const [passord, setPassord] = useState('')
  const [nyPassord, setnyPassord] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [formError, setFormError] = useState(null)
  // const [formError, setFormError] = useState(null)
  const resetForm = () => {
    setFornavn('')
    setEtternavn('')
    setEmail('')
    setPassord('')
    setnyPassord('')
    setCheckbox(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError(null)
    const entry = {
      fornavn: fornavn,
      etternavn: etternavn,
      email: email,
      passord: passord,
      nyPassord: nyPassord
    }

    //Inputvalidering
    // if(fornavn.length < 1){
    //   console.log('Skriv inn fornavn for å registrere deg')
    //   setFormError('ERROR! Skriv inn fornavn for å registrere deg')
    //   return
    // }
    // if(etternavn.length < 1){
    //   console.log('Skriv inn etternavn for å registrere deg')
    //   setFormError('ERROR! Skriv inn etternavn for å registrere deg')
    //   return
    // }
    // if(email.length < 1){
    //   console.log('Skriv inn email for å registrere deg')
    //   setFormError('ERROR! Skriv inn email for å registrere deg')
    //   return
    // }
    if(passord.length < 1){
      console.log('Skriv inn passord for å registrere deg')
      setFormError('ERROR! Skriv inn passord for å registrere deg')
      return
    }
    if(nyPassord.length < 1){
      console.log('gjenta passordet ditt, dersom du ønsker å  registrere deg')
      setFormError('ERROR! gjenta passordet ditt, dersom du ønsker å  registrere deg')
      return
    }
    if(passord.trim() !== nyPassord){
      console.log('passord må være like')
      setFormError('ERROR! gjenta passordet ditt, dersom du ønsker å  registrere deg')
      return
    }
    if(checkbox === false){
      console.log('Check av selectbox for å registrere deg!')
      setFormError('ERROR! Check av selectbox for å registrere deg!')
      return
    }
    fetch(`${window.origin}/register`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(entry),
      cache: "no-cache",
      headers: new Headers({
          "content-type": "application/json"
      })
    })
    .then(function (response){
        if(response.status !== 200){
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(function(data){
            console.log(data)
        })
    })
    console.log(entry)
    resetForm()
  }
  // const [fornavn, setFornavn] = useState('')
  // const [fornavn, setFornavn] = useState('')
  // const [fornavn, setFornavn] = useState('')

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  // }
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
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="div1">
            <label>
              <p>Fornavn</p>
              <input required type="text" label="password" onChange={(e) => setFornavn(e.target.value)} value={fornavn}/>
            </label>
            <label style={{marginLeft:"2%"}}>
              <p>Etternavn</p>
              <input required type="text" onChange={(e) => setEtternavn(e.target.value)} value={etternavn}/>
            </label>
          </div>  
          <label>
              <p>E-postadresse</p>
              <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </label>
          <div>
            <label>
              <p style={{margin:"0px"}}>Passord</p>
              <input type="text" data-testid="pass1" label="textbox" onChange={(e) => setPassord(e.target.value)} value={passord}/>
            </label>
            <label style={{marginLeft:"2%"}}>
              <p style={{margin:"0px"}}>Gjenta passord</p>
              <input type="password" data-testid="pass2" onChange={(e) => setnyPassord(e.target.value)} value={nyPassord}/>
            </label>
          </div> 
          <input type="checkbox" onChange={(e) => setCheckbox(e.target.value)} value={checkbox}></input>
          <label> Jeg godtar <a href="">databehandlingsavtalen</a></label>
          <button data-testid="button">Registrer</button>
          {formError && <p className="error" data-testid="errormsg">{formError}</p>}
          {/* <p>Fornavn {fornavn}</p>
          <p>Etternavn {etternavn}</p>
          <p>Email {email}</p>
          <p>Passord {passord}</p>
          <p>Gjenta passord {nyPassord}</p> */}
          {/* <p onClick={resetForm}>Resetform</p> */}
        </form>
      </div>
    </div>
  );
}

export default App;
