import axios from "axios";

(async () => {
    let result = await axios.get("https://api.github.com/rinkuhasija")
    console.log(result);
})()