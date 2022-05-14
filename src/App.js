//Import react
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import title from './assets/image 2.png'
import namesLocations from './namesLocations.json'
//Import components
import Location from './components/Location';
import ResidentInfo from './components/ResidentInfo';
import Pagination from './components/Pagination';
import Question from './components/Question';

function App() {
  const [locationData, setLocationData] = useState({})
  const [residentEndPoint, setResidentEndPoint] = useState([])
  const [load, setLoad] = useState(true)
  const [input, setInput] = useState('')
  const [curretPage, setCurretPage] = useState(1)
  const [postsPerPage] = useState(12)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126)+1}`)
      .then(res => {
        setLocationData(res.data)
        setResidentEndPoint(res.data.residents)
        setTimeout(() => {
          setLoad(false)
        }, 1000)
      })
  }, [])

  const searchLocation = () => {
    console.log(input)
    axios.get(`https://rickandmortyapi.com/api/location/?name=${input.replaceAll(' ', '&')}`)
    .then(res => {
        setLocationData(res.data.results[0])
        setResidentEndPoint(res.data.results[0].residents)
        setTimeout(() => {
          setLoad(false)
        }, 1000)
        setLoad(true)
      })
    setCurretPage(1)
    setInput('')
  }

  const indexOfLastPost = curretPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = residentEndPoint.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurretPage(pageNumber)
  }

  //search
  const [suggestions, setSuggestions] = useState([])

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = namesLocations.filter(name => {
        const regex = new RegExp(`${text}`)
        return name.name.match(regex)
      })
    }
    setSuggestions(matches)
    setInput(text)
  }

  const selectedSuggestion = (text) => {
    setInput(text)
    setSuggestions([])
  }


//sugefw
  const [si, setSi] = useState(false)

  const openAndClose = () => {
    setSi(!si)
  }

  return (
    <>
      <div className='header'>
        <img src={title} alt="Title" />
      </div>
      <div className='browser'>
        <div className="search">
          <input type="text" placeholder='Search for Location' onChange={e => onChangeHandler(e.target.value)} value={input}/>
          <button className="btn" onClick={searchLocation}>
              <i className='bx bx-search-alt-2'></i>
          </button>
        </div>
        <ul className='suggetions'>
          {
            suggestions && suggestions.map(suggestion => (
              <li onClick={() => selectedSuggestion(suggestion.name)} key={suggestion.name} >{suggestion.name}</li>
            ))
          }
        </ul>
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
      <button onClick={ openAndClose} className='question-btn'><i className='bx bx-question-mark'></i></button>
      {
        si ? (
          <Question lol={openAndClose}/>
        ) : ('') 
      }
    </>
  );
}

export default App;
