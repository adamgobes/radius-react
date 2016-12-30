import React from 'react';

const Loading = (props) => {
        const isLoading = props.isLoading;
        const hiddenStyle = {
            display: "none"
        }
        if (isLoading) {
            return <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        } else {
            return <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate" style={hiddenStyle}></div>
        }
}

export default Loading;
