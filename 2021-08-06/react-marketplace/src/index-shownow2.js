

import { showNow } from "./show-now"
import {  showDayJSX } from "./show-weekday"

showNow();
setInterval(showNow, 1000);

// const rootElement = document.getElementById("root");
// rootElement.innerHTML = "Hello world";


// showDay();
showDayJSX();
