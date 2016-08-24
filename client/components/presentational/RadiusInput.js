import React from 'react';

const RadiusInput = (props) => {
    return (
        <div className="radius-input-cirlce mdl-cell mdl-cell--6-col">
            <div className="circle-header">
                <a>
                    <i className="material-icons">local_dining</i>
                </a>
            </div>
            <div className="radius-input">
                <input type="number" />
                </div>
                <div className="find-btn">
                    <button id="generate" className="btn waves-effect waves-light">
                        Find
                    </button>
                </div>
            </div>
    );
}

export default RadiusInput;
