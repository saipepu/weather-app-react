import { actionTypes } from "./actionConstants";
import axios from "axios";
import { BASE_URL } from "./Api";
import { toast } from "react-toastify";

export const FetchWeatherData = (location = "mandalay") => async(dispatch) => {
    dispatch({ type: actionTypes.PENDING})
    axios.get(BASE_URL, {
        params: {
            q: location,
            units: "Metric",
            lang: "en"
        }
    })
    .then(response => {
        dispatch({ type: actionTypes.SUCCESS, payload: response.data})
    })
    .catch(err => {
        console.log(err.response, err);
        toast.error(err.response.data.message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
        });
        dispatch({ type: actionTypes.FAIL, payload: err.response})
    })
}