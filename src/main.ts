import WebApp from "@twa-dev/sdk";
import "./assets/main.css";

WebApp.ready();

if (
  WebApp.platform === "android" ||
  WebApp.platform === "ios" ||
  WebApp.platform === "weba" ||
  WebApp.platform === "tdesktop"
) {
  // Данные пользователя
  const nameUser = WebApp.initDataUnsafe.user?.first_name;
  const nameUserLast = WebApp.initDataUnsafe.user?.last_name;
  const nameUserName = WebApp.initDataUnsafe.user?.username;
  const lanquageUser = WebApp.initDataUnsafe.user?.language_code;
  const isPremiumUser = WebApp.initDataUnsafe.user?.is_premium;
  // ID пользователя
  const userID = WebApp.initDataUnsafe.user?.id;
  // Проверка на бота
  const isBot = WebApp.initDataUnsafe.user?.is_bot;
  //  Проверка на добавления в меню приложений
  const isAttachmentMenu = WebApp.initDataUnsafe.user?.added_to_attachment_menu;
  //  Проверка разрешения писать боту
  const isAllowsWriteToPm = WebApp.initDataUnsafe.user?.allows_write_to_pm;
  // Фото, аватар пользователя возвращается только если бот добавлен в меню приложений (доступно для крупных рекламодателей)
  // const userPhoto = WebApp.initDataUnsafe.user?.photo_url;

  // Данные чата
  // Только через меню приложений
  // const chatID = WebApp.initDataUnsafe.chat?.id;
  // const chatTitle = WebApp.initDataUnsafe.chat?.title;
  // const chatUserName = WebApp.initDataUnsafe.chat?.username;
  const chatType = WebApp.initDataUnsafe.chat_type;

  // С какой платформы пользователь зашёл
  const platformUser = WebApp.platform;

  // Облачное хранилище (ключ, значение)
  const storage = WebApp.CloudStorage;

  const item: string = "key";
  const defaultValueStorage: string = "Я значение по умолчанию";
  let valueStorage = "Значение из хранилища";

  // Сохранение данных в хранилище
  storage.setItem(item, valueStorage, () => {
    console.log("Сохранено");
    console.log("Значение из SetMetoda: ", valueStorage);
  });
  // Чтение данных из хранилища
  const getItem = (item: string, defaultValueStorage: string) => new Promise((resolve) => {
    storage.getItem(item, (valueStorage) => {
      if (valueStorage === null) {
        resolve(defaultValueStorage);
      } else {
        console.log("Значение из GetMetoda: ", valueStorage);
        resolve(valueStorage);        
      }
    });
  }); 

  const rezultStorage = await getItem(item, defaultValueStorage);

  //  Время открытия приложения
  const userDateLogin: number = parseInt(
    WebApp.initDataUnsafe.auth_date.toLocaleString()
  );

  let convertDate = new Date(userDateLogin * 1000);
  let year = convertDate.getFullYear();
  let months = convertDate.getMonth() + 1;
  let dates = convertDate.getDate();
  let hours = convertDate.getHours();
  let minutes = convertDate.getMinutes();
  let seconds = convertDate.getSeconds();
  let time = `${year}-${months}-${dates} ${hours}:${minutes}:${seconds}`;

  let app = document.getElementById("tgWebMiniApps");

  app!.innerHTML = `
    <div>       
        <h1>Привет, <span>${nameUser || "путник"} ${
    nameUserLast || ""
  }!</span></h1>
        <p>Твой юзернейм: ${nameUserName || "нет юзернейма"}</p>
        <p>Твой ID пользователя: ${userID}</p>
        <p>Ты ${isBot ? "бот" : "не бот"}</p>
        <p>Твой язык: ${lanquageUser}</p>
        <p>Ты ${
          isPremiumUser ? "премиум пользователь" : "не премиум пользователь"
        }</p>
        <p>Ты ${
          isAttachmentMenu
            ? "добавил бота в меню приложений"
            : "не добавил бота в меню приложений"
        }</p>
        <p>Ты ${
          isAllowsWriteToPm
            ? "разрешаешь писать боту"
            : "не разрешаешь писать боту"
        }</p>
        <p>Дата и время входа в приложения: ${time}</p>
        <p>Ты зашел c платформы: ${platformUser}</p>
        
        <br>
        <h1>Данные чата</h1>
        <p>Твой тип чата: ${chatType}</p>
  
        
        <br>
        <h1>Хранилище</h1>
        <p>Значение хранилища: ${rezultStorage}</p>
    </div>
`;
} else {
  let app = document.getElementById("tgWebMiniApps");

  app!.innerHTML = `
        <div>
            <h1>Привет, <span>Путник!</span></h1>       
            <p>Ты зашёл на сайт без платформы Telegram, необходимо зайти из <a href="https://t.me/Vitestjs_bot/TgWebMiniApps">Telegram</a></p> 
        </div>
    `;
}
