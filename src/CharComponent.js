import React from 'react';

function Box(props) {
    const styles = {
        border: '1px solid black',
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px'
    };
    const letter = (props.letter);
    const box = letter.map((el, index) => {
        return (
            <p key={index}
               style={styles}
               >
                {el}</p>
        )
    });

    return (
        <div onClick={props.click}>{box}</div>
    )
}

export default Box;