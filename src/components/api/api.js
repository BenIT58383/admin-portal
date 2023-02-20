import axios from "axios";

const url = `https://portal-bh-be.herokuapp.com/api/users`


export async function getData() {
    const response = await DG_axios.get( )
    return response?.data || []
}

export const DG_axios = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    },
});

export async function postDataUser(value) {
    const response = await DG_axios.post(value)
    return response?.data || []
}