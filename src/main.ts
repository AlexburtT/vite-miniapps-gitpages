import WebApp from "@twa-dev/sdk";
import "./assets/main.css";

WebApp.ready();

const nameUser = WebApp.initDataUnsafe.user?.first_name;
const userDateRegister: number = parseInt(WebApp.initDataUnsafe.auth_date.toLocaleString());

let convertDate = new Date(userDateRegister * 1000);
let year = convertDate.getFullYear();
let months = convertDate.getMonth() + 1;
let dates = convertDate.getDate();
let hours = convertDate.getHours();
let minutes = convertDate.getMinutes();
let seconds = convertDate.getSeconds();
let time = `${year}-${months}-${dates} ${hours}:${minutes}:${seconds}`;


console.log(`Пользователь ${nameUser} зарегистрировался ${time}`);

document.querySelector("h1")!.innerHTML = `Привет, ${nameUser || "путник"}!`;
