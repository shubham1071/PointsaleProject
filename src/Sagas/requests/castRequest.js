import axios from "axios";

export const requestGetCast = (id,path) => {
    
    return axios.request({
        method: 'get',
        url: `https://api.themoviedb.org/3/${path}/${id}/credits?api_key=a6c91b4d9c18510bb7a3182786395d48&language=en-US`
        
    });
}