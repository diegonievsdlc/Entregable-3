//Import react
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import title from './assets/image 2.png'
//Import components
import Location from './components/Location';
import ResidentInfo from './components/ResidentInfo';
import Pagination from './components/Pagination';

function App() {
  const [locationData, setLocationData] = useState({})
  const [residentEndPoint, setResidentEndPoint] = useState([])
  const [load, setLoad] = useState(true)
  const [input, setInput] = useState('')
  const [curretPage, setCurretPage] = useState(1)
  const [postsPerPage] = useState(12)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126)}`)
      .then(res => {
        setLocationData(res.data)
        setResidentEndPoint(res.data.residents)
        setTimeout(() => {
          setLoad(false)
        }, 1000)
      })
  }, [])

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/?name=${input.replaceAll(' ', '&')}`)
      .then(res => {
        setLocationData(res.data.results[0])
        setResidentEndPoint(res.data.results[0].residents)
        setTimeout(() => {
          setLoad(false)
        }, 1000)
      })
    setCurretPage(1)
  }

  const indexOfLastPost = curretPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = residentEndPoint.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurretPage(pageNumber)
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
              currentPosts.length <= 0 ? (
                <h1 className='message'>There are no inhabitants in these lands</h1> 
              ) : (
                currentPosts.map(endPoint => (
                  <ResidentInfo link={endPoint} key={endPoint}/>
                ))
              )
            }
          </div>
        )
      }
      <Pagination postsPerPage={postsPerPage} totalPosts={residentEndPoint.length} paginate={paginate}/>
    </>
  );
}

export default App;
