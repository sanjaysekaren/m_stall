import * as urls from './url_routes';
import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/json';

export const loginUser = async (userObj)=>{
    try{
        // var result = await Axios(urls.login({body:userObj})) ;
        var result = await axios.post(urls.login, userObj)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // console.log(result);
        return result.data;
    }
    catch (err){
        return {
            error:err
        }
    }
}

export const getAllProductDetails = async(token)=>{
    try{
        console.log(token)
        var headers ={
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials':'true',
            'Authorization':'Bearer '+token
        }
        var result = await axios.get(urls.getAllProductDetails,{headers:headers})
        console.log(result)
        return result;
    }
    catch (err){
        return {
            error:err
        }
    }
}