import React from 'react';
import ReactDOM from 'react-dom';
   
const target = document.querySelector("#target")


const today = new Date();
const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const todayLabel = dayLabels[today.getDay()];
console.log({ todayLabel });

export function showDay() {
    const txtDay = React.createElement(
        "b",
        {
            className: 'underline'
        },
        todayLabel
    )
    
    const txtDate = React.createElement(
        "span",
        {
            className: 'text-xs'
        },
        'Hello React : Today is ',
        txtDay
    )
    

    ReactDOM.render(txtDate, target)
}


export function showDayJSX() {
    const txtDate = (
        <span className="text-xs">
            Hello React JSX: Today is <b className="underline">{todayLabel}</b>
        </span>
    )

    ReactDOM.render(txtDate, target)
}