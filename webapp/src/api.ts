import { QueryFunctionContext } from "@tanstack/react-query"
import axios from "axios"

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

export const getCampGrounds = () => {
    return instance.get(`camping/`).then(response => response.data)
}

export const getCampGround = ({queryKey}:QueryFunctionContext) => {
    const [_, campGroundId] = queryKey
    return instance.get(`camping/${campGroundId}`).then(response => response.data)
}