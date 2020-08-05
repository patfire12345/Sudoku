import React from 'react';

function Display({board}) {
    const display = board.map((row,a) => (
        <ul key = {a}>
        <div>{row}</div>
        </ul>
    ));

    return(display);
}

export default Display;