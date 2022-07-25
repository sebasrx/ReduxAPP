import React from 'react';
import '../assets/styles/components/Empty.scss';
import emptyImage from '../assets/static/images/empty.png';

const Empty = () => (
    <div>
        <h1>You haven't favorites characters.</h1>
        <img src={emptyImage} alt='empty-rikimorty'/>
    </div>
);

export default Empty;