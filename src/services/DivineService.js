import base_url from "@/data-types";
import axios from "axios";

export async function createAdmissionEnquiry(req) {
    const result = await axios.post(base_url + '/dms/createAddmissionEnquiry', req)
    return result.data;
}