import React from 'react';

const Form = (props) => {

  const { change, submit, errors } = props
  const {name, email, password, tos } = props.values;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  const onChange = evt => {
    const {name, value, checked, type} = evt.target;
    const completeValue = type === 'checkbox' ? checked : value;
    change(name, completeValue);
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <div>
      <h2>Create a NEW Account, it is SIMPLE and EASY!</h2>
      <div>{errors.name}</div>
      <div>{errors.email}</div>
      <div>{errors.password}</div>
      <div>{errors.tos}</div>

      <h3>Information Here 🡳 </h3>
      <label>Full Name:
      <input 
        value={name}
        onChange={onChange}
        name='name'
        type='text'
      />
      </label>

      <label>Email:
      <input 
        value={email}
        onChange={onChange}
        name='email'
        type='email'
      />
      </label>

      <label>Password:
      <input 
        value={password}
        name='password'
        type='password'
        onChange={onChange}
      />
      </label>

      <label>Terms of Service:
        <input 
        type='checkbox'
        name='tos'
        checked={tos}
        onChange={onChange}
        />
      </label>
      <button>submit</button>
      </div>

    </form>
  )
}

export default Form; 