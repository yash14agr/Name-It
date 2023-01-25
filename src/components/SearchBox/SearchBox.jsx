import React from 'react';
import './SearchBox.css'

const SearchBox = ({ OnInputChange }) => {
    return (
        <div className="search-container">
            <input onChange={(event) => OnInputChange(event.target.value)} type="text" placeholder='Type Keywords' className='search-input' />
        </div>
    );
};

export default SearchBox