import React from 'react'
import './charachterCard.css'
function Card(props) {
    
    return (
        <div className="card mb-3 shadow mb-5 bg-body rounded " style={{width: '100%',cursor:'pointer'}} onClick={()=>props.cardClickHandler({charachterId:props.charachter.id})}>
            <img 
            src={props.charachter.image} 
            className="card-img-top" alt="" ></img>
            <div className="card-body">
                <h6 style={{textDecoration:'none'}}>{props.charachter.name}</h6>
                <p className="card-text"></p>
            </div>
        </div>
    )
}

export default Card
/*    const charachterCtx = useContext(CharachterContext)
     const charachterUpdate =()=>{
        let data={
            name:props.charachter.name,
            image:props.charachter.thumbnail.path+'/portrait_fantastic.'+props.charachter.thumbnail.extension,
            description:props.charachter.description
        }
        charachterCtx.charachterSetter(data)
        window.location.assign(`/charachterdetails/${[props.charachter.id]}`)
    } */