import axios from 'axios'

export const accept = async (requestId) =>{
    const request = await GetRequest(requestId) 
    console.log(request)
    await axios.put(`${import.meta.env.VITE_API_ENDPOINT}api/Requests/`+requestId,{
        id:requestId,
        dallUserId: request.dallUserId,
        dateOfRequest: request.dateOfRequest,
        status:"Accepted",
        prompt:request.prompt
    }).then((res)=>{
        console.log(res)
    })
} // Now to Stable diffusion api

export const refuse = async (requestId) =>{
    const request = await GetRequest(requestId) 
    console.log(request)
    await axios.put(`${import.meta.env.VITE_API_ENDPOINT}api/Requests/`+requestId,{
        id:requestId,
        dallUserId: request.dallUserId,
        dateOfRequest: request.dateOfRequest,
        status:"Refused",
        prompt:request.prompt
    }).then((res)=>{
        console.log(res)
    })
}

async function GetRequest (requestId){
    let request = null
    await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/Requests/`+requestId).then((res)=>{
        console.log(res)
        request = res.data
    })
    return request
}