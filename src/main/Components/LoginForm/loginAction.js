import { loginUser } from "../../Services/api"

export const loginUserActionHandle =  (emailid,password)=>{
        return async(dispatch) =>{
            var result = await loginUser({emailid:emailid,password:password})
            console.log(result,typeof(result))
            if(result!==undefined && typeof(result)==="string"){
                // console.log('setting true')
                localStorage.setItem("isAuth", "true");
                localStorage.setItem('token',result)
                dispatch(loginUserAction(result))
            }
            else{
                // console.log('setting fasle')
                localStorage.setItem("isAuth", "false");
                dispatch(loginUserAction(result='Login failed'))
            }
            
        }
}

export const loginUserAction = (result)=>{
    return{
        type:'LOGINFUNCTIONALITY',
        payload:result
    } 
}
