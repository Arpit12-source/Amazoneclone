import * as actionType from './Action';
import axios from "axios";
export const Authfail = (error) => {
    return {
        type: actionType.Authfail,
        error: error
    }
}
export const Authstart = (state, action) => {
    return {
        type: actionType.Authstart
    }
}
export const Authsuccess = (token, userId) => {
    return {
        type: actionType.Authsuccess,
        token: token,
        userId: userId
    }
}
export const Logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("expiresin")
    localStorage.removeItem("userId")
    return {
        type: actionType.Logout,

    }

}
export const checkAuthTimeout = (checktime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(Logout());
        }, checktime * 1000);
    };

}
export const Auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(Authstart())
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHCfRGu2mE8Ru5_1sJ47EVQErb29K3JdE"


        axios.post(url, data)
            .then(response => {
                console.log(response);
                const expirationtime = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem("token", response.data.idToken)
                localStorage.setItem("expiresin", expirationtime)
                localStorage.setItem("userId", response.data.localId)
                dispatch(Authsuccess(response.data.idToken, response.data.localId));

                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err.response.data.error)
                dispatch(Authfail(err.response.data.error.message));
            });

    }
}
export const sauth = (email, password, isSignup, name) => {
    return dispatch => {
        dispatch(Authstart())
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        const namedata = {
            name: name
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHCfRGu2mE8Ru5_1sJ47EVQErb29K3JdE"


        axios.post(url, data)
            .then(response => {
                console.log(response);
                // const expirationtime=new Date(new Date().getTime()+response.data.expiresIn*1000)
                // localStorage.setItem("token",response.data.idToken)
                // localStorage.setItem("expiresin" , expirationtime)
                // localStorage.setItem("userId" , response.data.localId)
                dispatch(Authsuccess(response.data.idToken, response.data.localId));

                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                // console.log(err.response.data.error)
                dispatch(Authfail(err.response.data.error.message));
            });
        let url1 = "https://ecommerce-329f5-default-rtdb.firebaseio.com/users/7Sq70P6fNgUmabQmO9Oi7lcmP3g2.json"
        axios.post(url1, namedata).then(resp => console.log(resp)).catch((err) => console.log(err))

    }
}
export const loginstatus = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        if (!token) {
            dispatch(Logout())
        }
        else {
            const expirationtime = new Date(localStorage.getItem("expiresin"))
            if (expirationtime <= new Date()) {
                dispatch(Logout())
            } else {
                const userId = localStorage.getItem("userId")
                dispatch(Authsuccess(token, userId))
                const finaltime = (expirationtime.getTime() - new Date().getTime()) / 1000
                dispatch(checkAuthTimeout(finaltime))
            }
        }
    }
}