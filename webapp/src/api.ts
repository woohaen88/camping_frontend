import { QueryFunctionContext } from "@tanstack/react-query"
import axios from "axios"
import Cookie from "js-cookie"
import { ISignUpVariable, IUploadCampGroundVariables } from "./types"

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    withCredentials: true, // 쿠키를 전송
})

export const getCampGrounds = () => {
    return instance.get(`camping/`).then(response => response.data)
}

export const getCampGround = ({ queryKey }: QueryFunctionContext) => {
    const [_, campGroundId] = queryKey
    return instance.get(`camping/${campGroundId}`).then(response => response.data)
}

export const getMe = () => {
    return instance.get("user/me/").then((response) => response.data)
}

export const logOut = () => {
    return instance.post("user/log-out/", null, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
        }
    }).then((response) => response.data)
}


export interface IEmailLoginVariables {
    email: string;
    password: string;
}

export interface IEmailLoginSuccess {
    message: string;
}

export interface IEmailLoginError {
    detail: string;
}



export const emailLogin = ({ email, password }: IEmailLoginVariables) => {
    return instance.post("user/log-in/", { email, password }, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
        }
    }).then((response) => response.data)
}

// "message": "login success"
//   "detail": "Invalid Credentials"




export const createCampGround = (variables: IUploadCampGroundVariables) => {
    return instance.post("camping/", variables, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            "Content-Type": "multipart/form-data",
        }
    }).then((response) => response.data)
}

export const getTag = () => {
    return instance.get("tag/").then((response) => response.data)
}

// Auth
export const createUser = (variables: ISignUpVariable) => {
    return instance.post("user/signup/", variables, {
        headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" }
    }).then((response) => response.data)
}


// *********** Social Login ***********
// Kakao

export const kakaoLogin = (code: string) => {
    return instance.post("user/kakao/", { code }, {
        headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" }
    }).then((respone) => respone.status)
}