import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = ({ Result }) => {

    const ResultJsx = Result.map((ele) => {
        return <NameCard Result={ele} key={ele} />
    })

    return (
        <div className='result-container'>{ResultJsx}</div>
    )
};

export default ResultContainer