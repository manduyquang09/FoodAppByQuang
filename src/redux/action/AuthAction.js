
export const setUser = (user) => ({
    type: "SET_USER",
    payload: user
})

export const removeUser = () => ({
    type: 'REMOVE_USER'
})
export const updateCart = (food) => ({
    type: "UPDATE_CART",
    payload: food
})

export const DelCartItem = (foodId) => ({
    type: "DEL_CARTITEM"
    ,
    payload: foodId

})