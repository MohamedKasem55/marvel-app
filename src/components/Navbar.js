import React, { useContext, useEffect, useRef, useState } from 'react'
import SearchItemContext from '../context/searchItemContext'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Badge,Avatar } from 'antd';
import { ShoppingCartOutlined,UserOutlined } from "@ant-design/icons";
import  "../App.css";
function Navbar() {
    /* const searchItem = useRef('') */
    const searchItemCtx = useContext(SearchItemContext)
    const searchItemUpdater = (event) => {
        console.log(event.target.value);
        searchItemCtx.itemSetter(event.target.value)
    }
    let location = useLocation()
    const state = useSelector(state => state)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid ">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row col-12 justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-lg-4 row justify-content-evenly align-items-center">
                        <li className="nav-item col-lg-2 cart-icon">
                            <Link className="nav-link " to={'/cart'}>
                                <Badge count={state.cart.commicCart.length} >
                                    <ShoppingCartOutlined style={{ fontSize: '35px', color: 'white' }} />
                                </Badge>
                            </Link>
                        </li>
                        <li className="nav-item col-lg-2 cart-icon">
                        <Avatar style={{cursor:'pointer'}} shape="circle" size={35} icon={<UserOutlined />} />
                        </li>
                        <li className="nav-item col-lg-4 h4">
                            <Link className="nav-link" to={'/charachters'}>Characters</Link>
                        </li>

                    </ul>
                        {location.pathname === '/charachters' && <input className="form-control w-50 col-sm-12 mx-2"
                            onChange={searchItemUpdater} type="search" placeholder="Search" aria-label="Search" />}
                    {/*                     <form className="d-flex col-5 justify-content-between " >
                        <button className="btn btn-outline-danger col-3 text-white " type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar