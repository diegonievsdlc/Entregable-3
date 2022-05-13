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
  const [input, setInput] = useState('')

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

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${input}`)
        .then(res => {
          setLocationData(res.data)
          setResidentEndPoint(res.data.residents)
          setTimeout(() => {
            setLoad(false)
          }, 1000)
        })
        .catch(error => console.error(error))
  }
  return (
    <>
      <div className='header'>
        <img src={title} alt="Title" />
      </div>
      <div className='browser'>
            <div className="search">
                <input type="text" placeholder='Search for' onChange={e => setInput(e.target.value)} value={input} required/>
                <button className="btn" onClick={searchLocation}>
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
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    </>
  );
}

export default App;
