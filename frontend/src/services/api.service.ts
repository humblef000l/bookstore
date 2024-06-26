import { hasCookie } from "cookies-next"

type apiParams = {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT',
    headers?: any,
    url: string,
    body?: any,
    key?: string
}

const checkToken = (key: string) => {
    if (key !== 'login' && key !== 'signup') {
        if (hasCookie('authToken')) {
            return true;
        } return false;
    }
    return false;
}

export const makeCall = async ({ url, method, headers = {}, body = {}, key }: apiParams) => {
    let configObj: RequestInit = { // Specify RequestInit type for configObj
        method,
        headers,
        credentials: 'include' as RequestCredentials // Explicitly cast 'include' to RequestCredentials type
    }
    if (method === 'PUT' || method === 'PATCH' || method === 'POST') {
        configObj.body = JSON.stringify(body);
    }
    try {
        let resp = await fetch(`http://localhost:5000/${url}`, configObj);
        resp = await resp.json();
        if (resp?.status === 401) {
            window && window.location.replace('/');
        }
        return resp;
    } catch (err) {
        return err;
    }


}
