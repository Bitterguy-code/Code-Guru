import axios, { Axios } from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

/**
 * Used in router loader -> whenever you go to route, userConfirmation called
 * adds auth token to API headers and fetches current user
 * @return {Object} user object if valid, null if not
 */
export const userConfirmation = async () => {
  let token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    let response = await api.get("user/info/");
    if (response.status === 200) {
      return response.data.user;
    }
  }
  return null;
};

/**
 * Used in sign up page -> creates user instance and logs in/sets token
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @return {string} username if successful sign up, null if not
 */
export async function userSignUp(username, email, password) {
  try {
    let response = await api.post("user/signup/", {
      username: username,
      email: email,
      password: password,
    });

    if (response.status === 201) {
      let { username, token } = response.data;
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      return username;
    } else {
      alert("Sign up unsuccessful");
      return null;
    }
  } catch (error) {
    if (error.response && error.response.data) {
      alert(error.response.data);
      return null;
    }
  }
}

/**
 * Used in log in page -> logs in as user and sets token
 * @param {string} username
 * @param {string} password
 * @return {string} username if successful sign up, null if not
 */
export async function userLogIn(username, password) {
  try {
    let response = await api.post("user/login/", {
      username: username,
      password: password,
    });
    if (response.status === 200) {
      let { username, token } = response.data;
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      return username;
    } else {
      alert(response.data);
      return null;
    }
  } catch (error) {
    if (error.response && error.response.data) {
      alert(error.response.data);
      return null;
    }
  }
}

/**
 * Used in log out element on navbar-> logs user out and deletes token
 */
export const userLogOut = async () => {
  let response = await api.delete("user/logout/");
  if (response.status === 204) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete api.defaults.headers.common["Authorization"];
    return null;
  }
  alert("Something went wrong and logout failed");
};

//TODO: comment
export function getDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

//TODO: comment
export async function getAPIDailyChallengeData() {
  const currentDate = getDate();
  let response = await api.get(`challenge/html/${currentDate}/`, {});

  if (response.status === 200) {
    return response.data;
  } else {
    console.log(response.data);
  }
  // console.log(response.data)
  return null;
}

export async function putAPIDailyChallengeAnswer(challengeID, answerCode, answerLanguage){
    // api.defaults.headers.common["Authorization"] = "Token 73ae179ee705ce29b4a024b0a1f6d2961fd46258" // this is a test token
    let response = await api.put("challenge/answer/", {
        "challengeID": challengeID,
        "answerCode": answerCode,
        "answerLanguage": answerLanguage
    })

  // if(response.status === 200){
  //     console.log(response.data)
  // }
  console.log(response.data);
  return response.data;
}

//TODO: comment
export async function putAPIPlaygroundAnswer(language, code, question) {
  let response = await api.put("playground/answer/", {
    language,
    code,
    question,
  });
  console.log(response.data);
  return response.data;
}

/**
 * Used in challenge progress page
 * @return {array} array of completed challenge objects
 */
export async function getCompletedChallenges() {
  let response = await api.get("challenge/answer/");
  // console.log(response.data);
  return response.data;
}
