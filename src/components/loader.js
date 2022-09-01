import React from 'react'

function Loader() {
    return (
        <div style={{ height: "600px" }} className="text-center align-middle d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-warning " style={{ width: "100px", height: '100px' }} role="status">
            </div>
        </div>)
}

export default Loader