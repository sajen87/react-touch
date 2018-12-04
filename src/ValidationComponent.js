import React from 'react';

function ValueLength(props) {
    let conditionalContent = null;

    if (props.value < 4) {
        conditionalContent =
            <p>Text too short</p>

    }
    else {
        conditionalContent =
            <p>Text long enough</p>

    }
    return (
        <div>
            {conditionalContent}
        </div>
    )
}

export default ValueLength;