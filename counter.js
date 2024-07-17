import WebApp from "@twa-dev/sdk";

export const getItem = (item, defaultValue) => 
new Promise((resolve) => {
  WebApp.CloudStorage.getItem(item, (value) => {
    resolve(value || defaultValue);
  });
}); 

export const setItem = (item, value) => 
new Promise((resolve) => {
  WebApp.CloudStorage.setItem(item, value, () => {
    resolve(value);
  });
});


