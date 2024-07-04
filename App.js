import Card from 'react-bootstrap/Card';
import './App.css';
// import SearchBar from './components/SearchBar';
import { useRef, useState } from 'react';
import Card from '@mui/material/Card';

function App() {

  const urlApi = "https://swapi.dev/api/people/?search="

  const userSearch = useRef('');
  const [data, setData] = useState({});


  const onUserChange = (e) => {
      userSearch.current = e.target.value;
  }

  const getData = async () => {
    let rawData = await fetch(`${urlApi}${userSearch.current}`).then(res => res.json());
    
    return rawData;
  }

  const onSearch = async () => {
    let userData = await getData();
    setData(userData.results);
    console.log(data);
  }

  return (
    <div className="App">
      <div>
          <input type="text" placeholder="user name" onChange={onUserChange}></input>
          <button onClick={onSearch}>submit</button>
        </div>
        <Card>
          
        </Card>
    </div>
  );
}

export default App;
