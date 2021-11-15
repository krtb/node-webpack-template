import logMessage from './js/logger'
import component from "./component";
import image from "./js/image";
import mario from "./images/marioTada.png"

import './css/style.css';
// Log message to console
logMessage('Welcome to Webpack!')


document.body.appendChild(component());
document.body.appendChild(image());
