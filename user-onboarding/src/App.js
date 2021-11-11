// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//import 
import Form from './Form';
import schema from './formSchema';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  //checkbox
  tos: false,
}

const initialFormError = {
  name: '',
  email: '',
  password: '',
}

function App() {

  const [form, setForm] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [account, setAccount] = useState([]);

  const onChange = (name, value) => {
    validate(name, value);
    setForm({ ...form, [name]: value })
  }

  const onSubmit = () => {
    axios.post('https://reqres.in/api/users', form)
    .then(res => {
      setAccount([res.data, ...account])
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setForm(initialFormValues));
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to FriendPal</h1>
        <img src={'https://www.logolynx.com/images/logolynx/1b/1be8160b5d2ef5b3254ecd8f378c8caf.png'} className="App-logo" alt="logo" />
      
      <Form
      values={form}
      change={onChange}
      errors={formErrors}
      submit={onSubmit}
      />
      {account.map(acc => (
        <div key={acc.id}>
          <p>{acc.createdAt}</p>
          <p>{acc.email}</p>
        </div>
      ))}
      </header>
    </div>
  );
}

export default App;
