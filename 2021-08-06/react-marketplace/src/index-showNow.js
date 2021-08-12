
import { showNow } from "./show-now"
import { showDay } from "./show-weekday"

showNow();
setInterval(showNow, 1000);

// const rootElement = document.getElementById("root");
// rootElement.innerHTML = "Hello world";


showDay();