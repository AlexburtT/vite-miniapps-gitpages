import './style.css'
import { setupCounter } from './counter.js'
import { retrieveLaunchParams, parseInitData } from '@telegram-apps/sdk';

const initDataString = retrieveLaunchParams();
const initDataRaw = parseInitData(initDataString);

console.log(initDataRaw);


// const userName = params.get('tgWebAppPlatform');

const userData = initDataString.platform;
const userPhone = initDataRaw.phone;
// const userPhone = window.Telegram.WebApp.user?.phone
// const userUsername = initDataRaw.
// const userPrem = window.Telegram.WebApp.user?.is_premium
document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Hello ${userPhone || 'anonymous'}</h1>
    
    <h2>Platform: ${userData || 'anonymous'}</h2>
    
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
