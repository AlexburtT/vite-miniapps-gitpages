import WebApp from "@twa-dev/sdk";
import "./assets/main.css";

WebApp.ready();

const nameUser = WebApp.initDataUnsafe.user?.first_name;
const userDateRegister = WebApp.initDataUnsafe.auth_date.toLocaleString();

console.log(`Пользователь ${nameUser} зарегистрировался ${userDateRegister}`);

document.querySelector("h1")!.innerHTML = `Привет, ${nameUser || "путник"}!`;
