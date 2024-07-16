import './style.css'
import WebApp from '@twa-dev/sdk'

WebApp.ready();


function setupCounter(element) {
  let setCounterTg = WebApp.CloudStorage.setItem('counter', 0);
  const setCounter = () => {
    count = WebApp.CloudStorage.get('counter') || count;
    element.innerHTML = `count is ${count}`;
  };  

  element.addEventListener('click', () => setCounter(setCounterTg + 1));
  setCounter();
  };

const userFirstName = WebApp.initDataUnsafe.user.first_name;
const userLastName = WebApp.initDataUnsafe.user.last_name;
const userUserName = WebApp.initDataUnsafe.user.username;
const userId = WebApp.initDataUnsafe.user.id;
const userIsBot = WebApp.initDataUnsafe.user.is_bot;
const userLanguageCode = WebApp.initDataUnsafe.user.language_code;
const userIsPremium = WebApp.initDataUnsafe.user.is_premium;
const userPhoto = WebApp.initDataUnsafe.user.photo;
const userPlatform = WebApp.platform;

console.log(WebApp);

document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Hello ${userFirstName || 'Пётр'}</h1>
    
    <p>Platform: ${userLastName || 'Петровски'}</p>
    <p>Platform: ${userUserName || 'Петрочанский'}</p>
    <p>Platform: ${userId || 'нет id'}</p>
    <p>Platform: ${userIsBot || 'не bot'}</p>
    <p>Platform: ${userLanguageCode || 'марсианин'}</p>
    <p>Platform: ${userIsPremium || 'не Premium'}</p>
    <img src="${userPhoto}" alt="photo" width="200" height="200">
    <p>Platform: ${userPlatform || 'anonymous'}</p>
    
    <h2>Telegram Web App</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Жмякни тут и получишь результат your <code>counter</code>
    </p>
  </div>
`
setupCounter(document.querySelector('#counter'))
