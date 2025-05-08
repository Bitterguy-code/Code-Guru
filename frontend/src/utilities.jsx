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



export async function getAPIDailyChallengeData(){
    const currentDate = getDate()
    let response = await api.get(`challenge/html/${currentDate}/`, {})

    if(response.status === 200){
        return response.data
    }else{
        console.log(response.data)
    }
    // console.log(response.data)
    return null
   }

export async function putAPIDailyChallengeAnswer(challengeID, answerCode, answerLanguage){
    api.defaults.headers.common["Authorization"] = "Token 73ae179ee705ce29b4a024b0a1f6d2961fd46258" // this is a test token
    let response = await api.put("challenge/answer/", {
        "challengeID": challengeID,
        "answerCode": answerCode,
        "answerLanguage": answerLanguage
    })

    // if(response.status === 200){
    //     console.log(response.data)
    // }
    console.log(response.data)
    return response.data

}