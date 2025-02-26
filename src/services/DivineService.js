import base_url from "@/data-types";
import axios from "axios";

export async function createAdmissionEnquiry(req) {
    const result = await axios.post(base_url + '/dms/createAddmissionEnquiry', req)
    return result.data;
}

export async function getAddmissionEnquiries(req) {
    const result = await axios.post(base_url + '/dms/getAddmissionEnquiries', req)
    return result;
}

export async function createJobListing(req) {
    const result = await axios.post(base_url + '/dms/createNewJobListing', req)
    return result.data;
}

export async function getJobsListed(req) {
    const result = await axios.post(base_url + '/dms/getJobsListed', req)
    return result;
}

export async function allJobsPosted(req) {
    const result = await axios.post(base_url + '/dms/allJobsPosted', req)
    return result;
}

export async function getJobListedById(req) {
    const result = await axios.post(base_url + '/dms/getJobListedById', req)
    return result;
}

export async function createJobApplication(req) {
    const result = await axios.post(base_url + '/dms/createJobApplication', req)
    return result.data;
}

export async function getJobApplication(req) {
    const result = await axios.post(base_url + '/dms/getJobApplications', req)
    return result.data;
}

export async function downloadResume(req) {
    const result = await axios.post(base_url + '/dms/downloadResume', req)
    return result.data;
}