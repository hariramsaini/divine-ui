import base_url from "@/data-types";
import axios from "axios";

export async function createAdmissionEnquiry(req) {
    const result = await axios.post(base_url + '/divine/createAddmissionEnquiry', req)
    return result.data;
}