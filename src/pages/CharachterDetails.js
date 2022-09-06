import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { getCharachterById, getCharachterComics } from '../service/HeroesService'
import { cartActions } from '../store/cartSlice'
import { PlusCircleOutlined } from '@ant-design/icons';
import {  Modal } from 'antd';
function CharachterDetails() {
  const { confirm } = Modal;
  const dispatch=useDispatch()
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

  const oncardClick = (type,payload)=>{
    confirm({
      title: 'Do you Want to add this item to cart?',
      icon: <PlusCircleOutlined style={{color:'green'}}/>,
      /* content: 'Some descriptions', */
      onOk() {
        dispatch(cartActions.addCommic(payload))
      },
      onCancel() {
        console.log('Cancel');
      },
    });
      
  }
  
  return (
    <div className='container' >
      <div className='row justify-content-between bg-dark py-3' >
        <div className='col-lg-3'>
          <img
            style={{ objectFit: 'cover' }}
            src={charachter.image} alt="" />
        </div>
        <div className='col-lg-9' >
          <h6 className='text-light' > <span>Hero Name : </span> {charachter.name}</h6>
          {charachter.description && <p className="text-light"><span>Hero Info : </span> {charachter.description}</p>}
        </div>
      </div>
      <h2>Commics:</h2>
      <div className='col-12' >
        <div className='row justify-content-center' >
          {charachter.comics && charachter.comics.items.map((comic,i) => (
            <div className='col-lg-2 col-md-6 col-8' key={i} >
              <Card cardClickHandler={()=>oncardClick(cartActions.addCommic,comic)} charachter={comic} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharachterDetails