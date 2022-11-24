import {getAllProductDetails} from '../../Services/api';

export const getListofProducts = (token)=>{
    
    return async(dispatch)=>{
        var productDetails = await getAllProductDetails(token);
        dispatch(getAllProducts(productDetails.data))
    }
}

export const getAllProducts = (productDetails)=>{
    return{ 
        type:'FETCHDASHBOARDFUNCTIONALITY',
        payload:productDetails
    } 
}