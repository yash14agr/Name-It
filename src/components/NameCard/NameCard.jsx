import React from 'react';
import './NameCard.css';

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';


const NameCard = ({ Result }) => {

    return (
        <a
            target="_blank"
            rel='noreferrer'
            className='NameCard-link' href={`${nameCheapUrl} ${Result}`} >
            <div className="NameCard-container">
                <p className='NameCard-element'>{Result}</p>
            </div>
        </a >
    )
}

export default NameCard