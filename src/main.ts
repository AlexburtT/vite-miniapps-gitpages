import WebApp from "@twa-dev/sdk";
import "./assets/main.css";

WebApp.ready();

const nameUser = WebApp.initDataUnsafe.user?.first_name;
const userDateRegister: number = parseInt(WebApp.initDataUnsafe.auth_date.toLocaleString());

let convertDate = new Date(userDateRegister * 1000);
let utcString = convertDate.toUTCString();
let time = utcString.slice(17, 25);
let date = utcString.slice(0, 16);
let timeDate = `${date} ${time}`;

console.log(`Пользователь ${nameUser} зарегистрировался ${timeDate}`);

document.querySelector("h1")!.innerHTML = `Привет, ${nameUser || "путник"}!`;
