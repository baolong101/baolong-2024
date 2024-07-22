import axios from "axios";

export const instance= axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000
})

export const getAll= async()=>{
    try {
        const {data}= await instance.get('/products')
        return data
    } catch (error) {
        console.log("Error: ", error)
    }
}