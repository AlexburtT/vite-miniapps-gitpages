import './style.css'
import { setupCounter } from './counter.js'
import { parseInitData } from '@telegram-apps/sdk';

const userData = parseInitData();
const userPhone = userData?.user?.firstName;
const userUsername = userData?.user?.username;


document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Hello ${userPhone || 'anonymous'}</h1>
    
    <h2>Platform: ${userUsername || 'anonymous'}</h2>
    
    <h2>Telegram Web App</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Жмякни тут и получишь результат
    </p>
  </div>
`
setupCounter(document.querySelector('#counter'))
