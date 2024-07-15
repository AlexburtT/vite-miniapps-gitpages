import './style.css'
import { setupCounter } from './counter.js'
import { retrieveLaunchParams } from '@telegram-apps/sdk';

const userData = retrieveLaunchParams();
const userPhone = userData.version;
const userUsername = userData.initData?.user.username || userData.initData?.user.usernameRaw || 'anonymous';


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
