import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//import 
import Form from './Form';
import formSchema from './formSchema';
// import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  //checkbox
  tos: false,
  //button
  submit: '',
}

const initialFormError = {
  name: '',
  email: '',
  password: '',
  //button
  submit: '',
}

const initialApplication = []
const initialDisabled = true


function App() {

  const [form, setForm] = useState(initialFormValues)
  // const [formValues, setFormValues] = useState(initialFormValues)
  // const [formErrors, setFormErrors] = useState(initialFormError)
  // const [disabled, setDisabled] = useState(initialDisabled)

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value })
  }

  const onSubmit = () => {
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to FriendPal</h1>
        <img src={'https://www.logolynx.com/images/logolynx/1b/1be8160b5d2ef5b3254ecd8f378c8caf.png'} className="App-logo" alt="logo" />
      
      <Form
      values={form}
      change={onChange}
      />
      </header>
    </div>
  );
}

export default App;
