import React, { useContext, useEffect, useRef, useState } from 'react'
import SearchItemContext from '../context/searchItemContext'

function Navbar() {
    /* const searchItem = useRef('') */
    const searchItemCtx = useContext(SearchItemContext)
    const searchItemUpdater=(event)=>{
        console.log(event.target.value);
        searchItemCtx.itemSetter(event.target.value)
    }
    
/*     const submitSearchItem =(event)=>{
        event.preventDefault()
        searchItemCtx.itemSetter(searchItem.current.value)
        searchItem.current.value=''
    } */
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid ">
{/*                 <a className="navbar-brand" >Super Heros</a>
 */}                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row col-12 justify-content-center" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/charachters">Charachters</a>
                        </li>
                    </ul> */}
                        <input className="form-control me-2 w-50" onChange={searchItemUpdater} type="search" placeholder="Search" aria-label="Search" />
{/*                     <form className="d-flex col-5 justify-content-between " >
                        <button className="btn btn-outline-danger col-3 text-white " type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar