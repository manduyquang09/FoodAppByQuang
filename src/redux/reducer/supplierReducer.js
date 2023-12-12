
const initialState = {
    restaurantList: [],
    foodList: [],
};

const supplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_RESTAURANT":
            return {
                ...state,
                restaurantList: action.payload,
            };
        case "GET_FOOD":
            return {
                ...state,
                foodList: action.payload,
            };
        default:
            return state;
    }
};

export default supplierReducer;
