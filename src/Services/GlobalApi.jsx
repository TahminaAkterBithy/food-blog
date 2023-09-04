import axios from "axios";


// const BASE_URL='http://localhost:1337/api';
// const BASE_URL='https://tubeguruji-admin.herokuapp.com/api'
const BASE_URL ='https://www.themealdb.com/api/json/v1/1/categories.php'

const getPost=axios.get(BASE_URL);
// const getPostById=(id)=>axios.get(BASE_URL+'/blogs/'+id+'?populate=*');
// const getPostById=(category)=>axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
export default{
    getPost,
    // getPostById
}
