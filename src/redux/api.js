import axios from "axios";

const YOUR_APP_ID="4e4630f6";
const YOUR_APP_KEY="bdaabfad1bc4dcee5b2b62b48a58bdec";



export const getRecipes = async (query) =>{
    const url =  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    return await axios.get(url);
}