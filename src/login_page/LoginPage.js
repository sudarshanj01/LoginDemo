import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [credentials] = useState({
    user1: {
      username: 'sudarshan',
      password: 'password'
    },
    user2: {
      username: 'john',
      password: 'password'
    },
    user3: {
      username: 'Ram',
      password: 'password'
    }
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validUser = Object.values(credentials).find(user => user.username === username && user.password === password);
    console.log(validUser);
    if (validUser) {
      navigate(`/dashboard/${validUser.username}`);
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <>

      <div className="container">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <button className="btn btn-primary btn-block" onClick={handleSubmit}>LOGIN</button>
      </div>


    </>
  )
}

export default LoginPage;
