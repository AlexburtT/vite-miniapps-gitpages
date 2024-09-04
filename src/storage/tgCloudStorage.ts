import WebApp from "@twa-dev/sdk";

// Облачное хранилище (ключ, значение)
export const setCloudStorage = (key: string, value: string) => {
  new Promise((resolve) => {
    WebApp.CloudStorage.setItem(key, value, () => {
      resolve(value);
    });
  });
};

export const getCloudStorage = (key: string) =>
  new Promise<string>((resolve, reject) => {
    WebApp.CloudStorage.getItem(key, (value) => {
      if (value === null) {
        reject("Данные не получены");
      } else {
        resolve(value);
      }
    });
  });
