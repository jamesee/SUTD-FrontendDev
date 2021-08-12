import React from 'react';
import ReactDOM from 'react-dom';

const target = document.querySelector('#root');

export function showNow() {
    const now = new Date().toLocaleTimeString();

    // React Element in javascript
    // const el = React.createElement(
    //     'small',
    //     {},
    //     'Now is ',
    //     React.createElement('span', {className: 'font-bold'}, now)
    // );

    // React Element in jsx
    const el = (
        <small >
            Now is <span className="font-bold">{now}</span>
        </small>
    )

    ReactDOM.render(el, target)
}