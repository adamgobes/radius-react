import React from 'react';

const RadiusInput = (props) => {
    return (
        <div className="radius-input-circle">
            <div className="radius-input">
                <input type="number" defaultValue="100" onChange={props.onRadiusChange} />
            </div>
        </div>
    );
}

RadiusInput.propTypes = {
    onRadiusChange: React.PropTypes.func.isRequired
}

export default RadiusInput;
