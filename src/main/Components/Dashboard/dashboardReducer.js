const initial_state = {
    productsData:[]
}

export const dashboardReducer = (state=initial_state,action)=>{
    console.log(action)
    switch (action.type){
        case 'FETCHDASHBOARDFUNCTIONALITY':
            return {
                ...state,productsData:action.payload
            }
        default:
            return{...state,productsData:[]}
    }
}