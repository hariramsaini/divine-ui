import base_url from "@/data-types";
import axios from "axios";

export async function getLookupByTypeName(req) {
    const result = await axios.post(base_url + '/um/getLookupByTypeName', req)
    return result.data;
}