import "./style.scss";
// import { getUsers } from "./common/userApi";
// import moment from "moment";


const getUserModule = () => import("./common/userApi");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getUserModule().then(({ getUsers }) => {
      getUsers().then(json => console.log(json));
    });
  });
// const fancyFunc = () => {
//     console.log("Hello Lokesh!")
//   return [1, 2];
// };

// const [a, b] = fancyFunc();




// getUsers().then(json => console.log(json));

