import axios from 'axios'
import { ENDPOINTS } from '../endpoints'
import { useState } from 'react'

const url=ENDPOINTS.api + ENDPOINTS.getLanguages


const fetchLanguages = async () => {

    try{
        const response = await axios.get(url)
        return response.data;
    }

    catch(error){
        console.error("Error Fetching languages :", error)
        throw error;
    }
}

export default fetchLanguages;

