import base_url from "@/data-types";
import axios from "axios";

export async function getFiles(req) {
    return await axios.post(base_url + '/dms/getFiles', req)
}

export async function getBinFiles() {
    return await axios.get(base_url + '/dms/getBinFiles')
}

export async function deleteFiles(req) {
    return await axios.post(base_url + '/dms/deleteFiles', req)
}

export async function deleteFilesPermanentaly(req) {
    return await axios.post(base_url + '/dms/deleteFilesPermanently', req)
}

export async function restoreFiles(req) {
    return await axios.post(base_url + '/dms/restoreFiles', req)
}