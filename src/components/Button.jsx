import axios from 'axios';

const Button = () => {
  const handleClick = async () => {
    try {
      const response = await axios.get('http://your-api-url/data');

      console.log(response.data); // do something with the response
    } catch (error) {
      console.log(error); // handle the error
    }
  };

  return <button onClick={handleClick}>Get Data</button>;
};

export default Button;
