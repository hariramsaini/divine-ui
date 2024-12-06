import base_url from "@/data-types";
import router from "@/routes";
import axios from "axios";

export async function login(req) {
    const result = await axios.post(base_url + '/um/login', req)
    return result.data;
}

export async function logout(){
    localStorage.clear('user')
    router.push({name:'Admin'})
}