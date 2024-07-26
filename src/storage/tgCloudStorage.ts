import WebApp from "@twa-dev/sdk";

// Облачное хранилище (ключ, значение)
export const setCloudStorage = (key: string, value: string) => {
  new Promise((resolve) => {
    WebApp.CloudStorage.setItem(key, value, () => {
      resolve(value);
    });
  });
};

export const getCloudStorage = (key: string, defaultValue: string) =>
  new Promise((resolve) => {
    WebApp.CloudStorage.getItem(key, (value) => {
      if (value === null) {
        resolve(defaultValue);
      } else {
        resolve(value);
      }
    });
  }).then((value) => {
    return value;
  });
