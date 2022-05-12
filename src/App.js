//Import react
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import title from './assets/image 2.png'
//Import components
import Location from './components/Location';
import ResidentInfo from './components/ResidentInfo';

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
    <>
      <header>
        <img src={title} alt="Title" />
      </header>
      <div className='browser'>
            <div className="search">
                <input type="text" placeholder='Search for' required/>
                <button className="btn">
                    <i className='bx bx-search-alt-2'></i>
                </button>
            </div>
        </div>
      <Location name={locationData.name} type={locationData.type} dimension={locationData.dimension} population={locationData.residents?.length}/>
      {
        load ? (
          <div className="load">
            <img src="https://media2.giphy.com/media/McIBYFNF5pkayHj6vl/200.gif" alt="Load" />
          </div>
        ) : (
          <div className='card-sealer'>     
            {
              residentEndPoint.length <= 0 ? (
                <h1 className='message'>There are no inhabitants in these lands</h1> 
              ) : (
                residentEndPoint.map(endPoint => (
                          <ResidentInfo link={endPoint} key={endPoint}/>
                      ))
              )
            }
          </div>
        )
      }
      <div className="change-page">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </>
  );
}

export default App;
