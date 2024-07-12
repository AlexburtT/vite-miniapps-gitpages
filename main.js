import './style.css'
import { setupCounter } from './counter.js'
import { retrieveLaunchParams } from '@telegram-apps/sdk';

const { initDataRaw, initData } = retrieveLaunchParams();

console.log(initDataRaw, initData);

const userName = initData?.user?.first_name
// const userPhone = window.Telegram.WebApp.user?.phone
const userUsername = initDataRaw?.user?.username
// const userPrem = window.Telegram.WebApp.user?.is_premium
document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Hello ${userName || 'anonymous'}</h1>
    
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
