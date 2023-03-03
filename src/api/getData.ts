import axios from "axios"
import AxiosError from "axios-error"
import { ITodo } from '../models'

// Пример с использованием промисов

export const getData = (url: string, par: any) => {
    return new Promise(async (resolve, reject) => {
        await axios.get(url, par)
            .then((res) => {
                resolve(res)
            })
            .catch((err: unknown) => {
                reject(err)
            })
    })
}