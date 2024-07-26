import WebApp from "@twa-dev/sdk";

 // Облачное хранилище (ключ, значение)
export const setCloudStorage = (key: string, value: string) => {
    new Promise((resolve) => {
        WebApp.CloudStorage.setItem(key, value, () => {
            resolve(value);
        });
    })
}; 

export const getCloudStorage = (key: string, defaultValue) => {
    new Promise((resolve) => {
        WebApp.CloudStorage.getItem(key, ((_, value) => {
            if (value === null) {
                resolve(defaultValue);
            }
            resolve(value);
        }));
    })
};