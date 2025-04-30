import axios, { Axios } from "axios";

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

export async function userSignUp (){
    let response = await api.post("",{});

    return null
    }

export async function userLogIn (){
    let response = await api.post("",{});

    return null
    }

export function getDate(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}



export async function getDailyChallengeData(){
    const currentDate = getDate()
    let response = await api.get(`challenge/${currentDate}/`,{})

    if(response.status === 200){
        console.log(response.data)
    }else{
        console.log(response.data)
    }

    return null
   }