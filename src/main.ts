import WebApp from "@twa-dev/sdk";
import "./assets/main.css";

WebApp.ready();

if (WebApp.platform === "android" || WebApp.platform === "ios" || WebApp.platform === "weba" || WebApp.platform === "tdesktop") {

 const nameUser = WebApp.initDataUnsafe.user?.first_name;

//  Дата регистрации в боте
const userDateRegister: number = parseInt(WebApp.initDataUnsafe.auth_date.toLocaleString());

let convertDate = new Date(userDateRegister * 1000);
let year = convertDate.getFullYear();
let months = convertDate.getMonth() + 1;
let dates = convertDate.getDate();
let hours = convertDate.getHours();
let minutes = convertDate.getMinutes();
let seconds = convertDate.getSeconds();
let time = `${year}-${months}-${dates} ${hours}:${minutes}:${seconds}`;

// С какой платформы пользователь зашёл
const platformUser = WebApp.platform;


let app = document.getElementById("tgWebMiniApps");

app!.innerHTML = `
    <div>
        <h1>Привет, <span>${nameUser || "путник"}!</span></h1>
        <p>Ты зарегистрировался в боте ${time}</p>
        <p>Ты зашел c платформы ${platformUser}</p>
    </div>
`;

console.log(WebApp.initData, WebApp.initDataUnsafe);

} else {
    let app = document.getElementById("tgWebMiniApps");

    app!.innerHTML = `
        <div>
            <h1>Привет, <span>Путник!</span></h1>        
        </div>
    `;
}
