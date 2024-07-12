import './style.css'
import { setupCounter } from './counter.js'


const userName = window.Telegram.WebApp.user?.first_name
const userPhone = window.Telegram.WebApp.user?.phone
const userUsername = window.Telegram.WebApp.user?.username
const userPrem = window.Telegram.WebApp.user?.is_premium
document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Hello ${userName || 'anonymous'}</h1>
    <h2>Phone: ${userPhone || 'anonymous'}</h2>
    <h2>Platform: ${userUsername || 'anonymous'}</h2>
    <h2>Color: ${userPrem || 'anonymous'}</h2>
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
