export const setLocalStorage = (key: string, value: string) => {
  new Promise((resolve) => {
    resolve(localStorage.setItem(key, value));
  });
};

export const getLocalStorage = (key: string) =>
  new Promise<string>((resolve, reject) => {
    const dataLocal: string | null = localStorage.getItem(key);
    if (dataLocal === null) {
      reject("Данные не получены");
    } else {
      resolve(dataLocal);
    }    
  }).then((value) => {
    console.log("Из промиса getLocalStorage: ", value);
  });

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
