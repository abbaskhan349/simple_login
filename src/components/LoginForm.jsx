import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://your-api-url/login', {
        username,
        password,
      });

      console.log(response.data); // do something with the response
    } catch (error) {
      console.log(error); // handle the error
    }
  };

  return (
    <form onSubmit={handleSubmit} className='p-10'>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/home">
        <button type="submit">Login</button>
      </Link>
    </form>
  );
};

export default LoginForm;
