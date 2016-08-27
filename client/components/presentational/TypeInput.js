import React from 'react';

const TypeInput = (props) => {
    return (
        <div className="type-input mdl-cell mdl-cell--6-col">
            <div>
                <a><i className="material-icons">local_dining</i></a>
            </div>
            <div>
                <a><i className="material-icons">local_convenience_store</i></a>
            </div>
            <div>
                <a><i className="material-icons">directions_railway</i></a>
            </div>
            <div>
                <a><i className="material-icons">local_bar</i></a>
            </div>
            <div>
                <a><i className="material-icons">local_cafe</i></a>
            </div>
        </div>
    );
}

export default TypeInput;
