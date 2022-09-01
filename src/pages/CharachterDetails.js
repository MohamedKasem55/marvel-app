import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { getCharachterById, getCharachterComics } from '../service/HeroesService'
function CharachterDetails() {

  let { id } = useParams()
  const [charachter, setCharachter] = useState({})

  useEffect(() => {
    fetchCharachterDetails()
    fetchcharactercomics()
  }, [])

  const fetchCharachterDetails = async () => {
    let res = await getCharachterById(id)
    console.log(res[0]);
    setCharachter((charachter)=>({...charachter,...res[0]}))
  }
  const fetchcharactercomics=async ()=>{
    let res = await getCharachterComics(id)
    setCharachter((charachter)=>({...charachter,comics:{...charachter.comics,items:res}}))
    console.log(res);
  }
  const oncardClick = ()=>{

  }
  return (
    <div className='container' >
      <div className='row justify-content-between bg-dark py-3' >
        <div className='col-3'>
          <img
            style={{ objectFit: 'cover' }}
            src={charachter.image} alt="" />
        </div>
        <div className='col-9' >
          <h6 className='text-light' > <span>Hero Name : </span> {charachter.name}</h6>
          {charachter.description && <p className="text-light"><span>Hero Info : </span> {charachter.description}</p>}
        </div>
      </div>
      <h2>Commics:</h2>
      <div className='col-12' >
        <div className='row' >
          {charachter.comics && charachter.comics.items.map((comic,i) => (
            <div className='col-lg-2 col-md-6' key={i} >
              <Card cardClickHandler={oncardClick} charachter={comic} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharachterDetails