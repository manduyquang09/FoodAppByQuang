
const initialState = {
    userData: {},
    login: false,
    cart: []
}
const userReducer = (state = initialState, action) => {
    console.log("adding food to cart:  " + JSON.stringify(action.payload))
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                userData: action.payload,
                login: true
            };
        case "REMOVE_USER":
            return initialState;

        case "UPDATE_CART":
            const existFood = state.cart.find((item) => item.foodId === action.payload.foodId);

            if (existFood) {
                const updatedCart = state.cart.map((food) => {
                    if (food.foodId === action.payload.foodId) {
                        return { ...food, unit: action.payload.unit };
                    }
                    return food;
                });
                return {
                    ...state,
                    cart: updatedCart.filter((food) => food.unit > 0),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            }

        case "DEL_CARTITEM":
            return {
                ...state,
                cart: state.cart.filter((food) => food.foodId !== action.payload)
            }
        default:

            return state;
    }
};

export default userReducer;
