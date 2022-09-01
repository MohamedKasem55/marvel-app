import { MD5 } from "crypto-js"
import { API_config } from "../environments/environment"

const getHash=(ts,privateKey,publicKey)=>{
    return MD5(ts+privateKey+publicKey).toString()
}
const generateURL =(scheme,limit,id)=>{
    let ts=Date.now().toString()
    let hash=getHash(ts,API_config.privateKey,API_config.publicKey)
    let url=`${API_config.baseURL}/v1/public/${scheme}${id?('/'+id+'?'):'?'}ts=${ts}&apikey=${API_config.publicKey}&hash=${hash}`
    if(limit)
    url=url+'&limit='+limit
    return url
}
export const getCharachterComics=async(id)=>{
    let ts=Date.now().toString()
    let hash=getHash(ts,API_config.privateKey,API_config.publicKey)
    let url=`${API_config.baseURL}/v1/public/characters/${id}/comics?ts=${ts}&apikey=${API_config.publicKey}&hash=${hash}` 
    try {
        let response=await fetch(url)
        let result =await response.json()
        let data=await result.data
        console.log(data);
        return mapCharachters(data.results)
        
    } catch (error) {
        return error
    }
}
export const getAllCharachters=async()=>{
    let url = generateURL('characters','12')
    try {
        let res= await fetch(url)
        let jsonResponse = await res.json()
        if(!jsonResponse.data.results)
        throw('No Charachter Results')
        return mapCharachters(jsonResponse.data.results)
    } catch (error) {
        console.error(error)
        return error
    }
}
export const getCharachterById = async (id)=>{
    let url = generateURL('characters',null,id)
    try {
        let res= await fetch(url)
        let jsonResponse = await res.json()
        return mapCharachters(jsonResponse.data.results)
    } catch (error) {
        console.error(error)
        return error
    }
}
const mapCharachters=(results)=>{
    return results.map(ele=>({
        id:ele.id,
        name:ele.name?ele.name:ele.title,
        image:generateImage(ele.thumbnail),
        comics:ele.comics?ele.comics:null,
        description:ele.description?ele.description:null
    }))
}
export const getCharachterByName = async(char)=>{
    let ts=Date.now().toString()
    let hash=getHash(ts,API_config.privateKey,API_config.publicKey)
    let url=`${API_config.baseURL}/v1/public/characters?nameStartsWith=${char}&ts=${ts}&apikey=${API_config.publicKey}&hash=${hash}` 
    try {
        let response=await fetch(url)
        let result =await response.json()
        let data=await result.data
        console.log(data);
        return mapCharachters(data.results)
        
    } catch (error) {
        return error
    }
}
const generateImage= thumbnail=>(`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`)
/* let ts=Date.now().toString()
let hash=getHash(ts,API_config.privateKey,API_config.publicKey) 
let url=`${API_config.baseURL}/v1/public/characters?ts=${ts}&apikey=${API_config.publicKey}&hash=${hash}&limit=12`
fetch(url).then(res=>res.json())  */