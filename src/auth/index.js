import { API } from '../config'

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const authenticate = (data, callBack) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        callBack()
    }
}

export const signout = (callBack) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
        return fetch(`${API}/signout`, {
            method: 'GET'
        })
            .then(response => {
                console.log('Signout', response)
                callBack()
            })
            .catch(err => {
                console.log(err)
            })
    }
}