import React from 'react';

const person = (props) => {
    return (
        <div className="person">
            <p>I am {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;