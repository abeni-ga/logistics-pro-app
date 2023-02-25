export const setToken = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const setId = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getId = () => {
  const item = localStorage.getItem("company_id");
  return JSON.parse(item);
};
export const getToken = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

export const clearLocalStorage = () => {
  const prefix = "pool_";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key);
    }
  }
};
