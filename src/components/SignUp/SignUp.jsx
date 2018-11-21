import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userClubs, setUserClubs] = useState([]);

  function handleChange(event) {
    const data = event.target.value;
    switch (event.target.name) {
      case 'name':
        setUsername(data);
        break;
      case 'email':
        setEmail(data);
        break;
      case 'password':
        setPassword(data);
        break;
      default:
        console.log('default');
    }
  }

  function submit() {
    console.log('submit');
    const user = {
      username,
      email,
      password,
      userClubs
    };
    fetch('/api/user', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(user),
    }).then(response => console.log(response));
  }

  return (
    <div className="d-flex justify-content-center pt-5 p-3 w-100">
      <form className="d-flex flex-column w-25">
        <div className="form-group py-2">
          <label htmlFor="inputName">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={handleChange}
            name="name"
            id="inputName"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleChange}
            name="email"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handleChange}
            name="password"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
