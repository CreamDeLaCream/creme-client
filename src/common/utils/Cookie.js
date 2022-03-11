// const setCookie = (name, value, exp = 5) => {
//   let date = new Date();
//   date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
//   document.cookie = `${name} = ${value}; expires=${date.toUTCString()}`;
// };

// const getCookie = (name) => {
//   let value = '; ' + document.cookie;
//   let parts = value.split(`; ${name}=`);
//   if (parts.length === 2) {
//     return parts.pop().split(';').shift();
//   }
// };

// const deleteCookie = (name) => {
//   let date = new Date('2020-01-01').toUTCString();
//   document.cookie = name + '=; expires=' + date;
// };

// export { setCookie, getCookie, deleteCookie };

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};
