import React from 'react';
import './Searchbar.css';
function Searchbar(){
    return(
        <div className="searchbar">
            <input id='search' type="text" placeholder="See what ever you like...."/>
            <button id='searchbtn'>Search</button>

            
        </div>
    );

 }
 export default Searchbar;