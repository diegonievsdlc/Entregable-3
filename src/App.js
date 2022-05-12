//Import react
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
//Import components
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';

function App() {
  const [locationData, setLocationData] = useState({})
  const [residentEndPoint, setResidentEndPoint] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126)}`)
      .then(res => {
        setLocationData(res.data)
        setResidentEndPoint(res.data.residents)
        setTimeout(() => {
          setLoad(false)
        }, 1000)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <NavigationBar />
      {
        load ? (
          <div className="load">
            <img src="https://media2.giphy.com/media/McIBYFNF5pkayHj6vl/200.gif" alt="Load" />
          </div>
        ) : (
          <Content name={locationData.name} type={locationData.type} dimension={locationData.dimension} population={locationData.residents?.length} residentEndPoint={residentEndPoint}/>
        )
      }
    </div>
  );
}

export default App;
