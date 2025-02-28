import dataTtype from "@/data-types";
import axios from "axios";

export async function getLookupByTypeName(req) {
    const result = await axios.post(dataTtype.base_url + '/um/getLookupByTypeName', req)
    return result.data;
}

export async function getLookupByValueMap(req) {
    const result = await axios.post(dataTtype.base_url + '/um/getLookupByValueMap', req)
    return result.data;
}