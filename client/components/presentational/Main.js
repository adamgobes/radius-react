import React from 'react';
import Header from '../presentational/Header';

const Main = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
}

export default Main;
