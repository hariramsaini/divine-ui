import dataTtype from "@/data-types";
import axios from "axios";

export async function createOrderTransaction(req) {
    const result = await axios.post(dataTtype.base_url + '/um/api/payments/createOrder', req);
    return result;
}