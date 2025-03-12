import dataTtype from "@/data-types";
import router from "@/routes";
import axios from "axios";

export async function login(req) {
    const result = await axios.post(dataTtype.base_url + '/um/login', req)
    return result.data;
}

export async function refreshToken(req) {
    const result = await axios.post(dataTtype.base_url + '/um/refreshToken', req)
    return result.data;
}

export async function logout() {
    localStorage.clear('user')
    router.push({ name: 'Admin' })
}

export async function getAllUsers() {
    const result = await axios.get(dataTtype.base_url + '/um/getAllUsers')
    return result;
}

export async function getAllActiveRoles() {
    const result = await axios.post(dataTtype.base_url + '/um/getAllActiveRoles')
    return result;
}

export async function getDesignations() {
    const result = await axios.post(dataTtype.base_url + '/um/getDesignation')
    return result;
}

export async function addOrUpdateUser(req) {
    const result = await axios.post(dataTtype.base_url + '/um/updateUser', req)
    return result;
}

export async function deleteUserById(req) {
    const result = await axios.post(dataTtype.base_url + '/um/deleteUser', req)
    return result;
}








//Auto Logout
const timeoutInMS = 300000; // 3 minutes -> 3 * 60s * 1000ms
let timeoutId;

function handleInactive() {
    // Here you want to logout a user and/or ping your token
    console.warn("Hello Auto logout")
    // logout()
}

function startTimer() {
    // setTimeout returns an ID (can be used to start or clear a timer)
    timeoutId = setTimeout(handleInactive, timeoutInMS);
}

function resetTimer() {
    clearTimeout(timeoutId);
    startTimer();
}

export function setupTimers() {
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);

    startTimer();
}

//auto logout