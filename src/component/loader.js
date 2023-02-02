import React from 'react';
import './css/loader.css';

function Loader() {
    return (
        <div className="lds-ripple" style={{background:"red"}}>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader