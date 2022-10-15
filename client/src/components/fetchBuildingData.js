import React from "react";
import axios from "axios";

const API_URL = "/api/"

const fetchPHH = async (props) => { //pass borough and address as props

    const fetchUrl = API_URL + props.borough + "/phh/" + props.address.toUpperCase(); //gives us API_URL/borough/phh/address
    console.log(fetchUrl);

    const response=await axios.get(fetchUrl);
    console.log(response.data);
    return response.data;

}

export default fetchPHH;