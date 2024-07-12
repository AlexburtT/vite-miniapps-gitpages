import './style.css'
import { setupCounter } from './counter.js'

window.Telegram.WebApp.ready()
window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
  window.Telegram.WebApp.close()
})

const userName = window.Telegram.WebApp.initDataUnsafe.user?.username
const userPhone = window.Telegram.WebApp.initDataUnsafe.user?.phone
const userPlatform = window.Telegram.WebApp.initDataUnsafe.platform
const userColor = window.Telegram.WebApp.initDataUnsafe.user?.color
document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Hello ${userName || 'anonymous'}</h1>
    <h2>Phone: ${userPhone || 'anonymous'}</h2>
    <h2>Platform: ${userPlatform || 'anonymous'}</h2>
    <h2>Color: ${userColor || 'anonymous'}</h2>
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
