import React from 'react';
import placeTypes from '../../../utils/placeTypes';

const TypeInput = (props) => {
    const types = [];
    let key = 0;
    for (var place in placeTypes) {
        types.push(
            <div className="type-div" key={key}>
                <a onClick={props.onTypeChange}><i className="material-icons">{placeTypes[place]}</i></a>
            </div>
        );
        key += 1;
    }
    return <div className="type-input mdl-cell mdl-cell--6-col">{types}</div>;
}

export default TypeInput;
