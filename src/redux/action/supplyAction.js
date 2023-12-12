import { collection, doc, setDoc, getDocs, getDoc } from 'firebase/firestore';
import { fireStoreDatabase } from '../../firebase';
export const getRestaurant = (restaurants) => ({
    type: "GET_RESTAURANT",
    payload: restaurants,
});

export const getFood = (food) => ({
    type: "GET_FOOD",
    payload: food
})

export const getMenu = () => {

}
export const getAllRestaurant = () => {

    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(fireStoreDatabase, 'Restaurant'));

            const resturantLsit = querySnapshot.docs.map((doc) => ({
                restaurantId: doc.id,
                ...doc.data(),

            }));

            dispatch(getRestaurant(resturantLsit));
        } catch (error) {
            console.error('Error :', error);
        }
    };
};


export const getAllFood = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(fireStoreDatabase, 'Food'));

            const foodList = querySnapshot.docs.map((doc) => ({
                foodId: doc.id,
                unit: 0,
                ...doc.data(),
            }));

            dispatch(getFood(foodList));
        } catch (error) {
            console.error('Error :', error);
        }
    };
};
