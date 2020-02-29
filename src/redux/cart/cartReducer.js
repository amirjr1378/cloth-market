export  function cartReducer(state=[], action) {
   switch(action.type) {
      case 'ADD': {
         let find = false;
         const newItems = state.map(cartItem => {
           if ( cartItem.id === action.payload.id )  {
               find = true;
              return ({
                 ...cartItem,
                 count: cartItem.count + 1
              })
            }
            else return cartItem;

         });
         if(find) {
            return newItems;
         }
         else return [...state,{...action.payload, count: 1}] 
      }
      
      case 'DECREASE': {
         let newItems = [];
         let j = 0;
         for(let i = 0; i<state.length; i++) {
            if(state[i].id === action.payload.id) {
               if(state[i].count > 1 ) {
                  newItems[j++] = {...state[i], count: state[i].count -1}
               }
               //else we should'nt push the node to new items
            }
            else newItems[j++] = state[i]
         }
         return newItems;
      }

      default: return state;
   }
}

