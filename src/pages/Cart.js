import React from 'react'
import { useSelector } from "react-redux";
import Card from '../components/Card';
function Cart() {
  let comics=useSelector(state=>state.cart.commicCart)
  console.log(comics);
  return (
    <div className='container' >
      <div className='col-12' >
        <div className='row justify-content-center' >
          {comics && comics.map((comic,i) => (
            <div className='col-lg-2 col-md-6 col-8' key={i} >
              <Card cardClickHandler={()=>{}} charachter={comic} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart