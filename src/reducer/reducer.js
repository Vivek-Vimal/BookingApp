const initialState = {
    shoppingCart: [],
    quantity: 0
}

const Reducer = (state = initialState, action) =>{
    const {shoppingCart, quantity} = state;
    let currentItem
    let updatedQuantity
    switch(action.type){
        case 'ADD_TO_CART':
            if(shoppingCart.find(e => e.id === action.ID)){
                return state
            }
             else{
                currentItem = action.eachWholeProduct
            
                                           // qty yaha add kyu kiye vro?? kyuki cart m total quantiy dikha sake //solved
                currentItem['qty'] = 1     // Yaha jo item tha n eachWholeProduct usme add kiye h 'quantity' jaise ki id,price etc hai n waise hi
                updatedQuantity = state.quantity + 1     
                return{ shoppingCart :[currentItem, ...shoppingCart], quantity:updatedQuantity }
            }    
        case 'REMOVE':
            let arrAfterRemove 
            arrAfterRemove= shoppingCart.filter(s => s.id !== action.ID) // filter ek new array return krta h jisme ki jo condition hua hota h uski ko return kr deta h
            currentItem = action.currentWholeProduct
            updatedQuantity = quantity - (currentItem.qty)
            return {shoppingCart: [...arrAfterRemove], quantity:updatedQuantity}
        default: return state
    }
}

export default Reducer