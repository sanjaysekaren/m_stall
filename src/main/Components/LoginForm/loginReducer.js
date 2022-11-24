const initial_state = {
    emailid:'',password:'',authToken:''
}

export const loginReducer = (state=initial_state,action)=>{
    console.log(action)
    switch (action.type){
        case 'LOGINFUNCTIONALITY':
            return {
                ...state,token:action.payload
            }
        default:
            return{...state,token:''}
    }
}

// export default loginReducer;