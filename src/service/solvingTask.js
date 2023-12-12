import { collection, getDocs } from "@firebase/firestore"
import { fireStoreDatabase } from "../firebase"
import { useSelector } from "react-redux"

export const getFoodByRes = (restaurantId) => {
    console.log("res Id :  " + restaurantId)
    const { restaurantList, foodList } = useSelector(state => state.supply);
    const getMenu = () => {
        const menu = foodList.filter((food) => food.restaurantId === restaurantId)

        return menu.length > 0 ? menu : []

    }

    return { getMenu }

}
