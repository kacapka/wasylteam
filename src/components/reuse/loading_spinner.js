import React from 'react';
import { DotLoader } from 'react-spinners';

const Spinner = (props) => {
    return (
        <div className="loading-spinner">
            <DotLoader
            color={'#2A2A2A'} />
            <span>wczytuję...</span>
        </div>    
    );
}

export default Spinner;