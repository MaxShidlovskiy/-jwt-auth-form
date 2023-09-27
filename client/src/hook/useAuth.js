import cookie from 'js-cookie'
import { useState } from 'react';

export default function useAuth() {
    const [token, setToken] = useState(null)
    function login() {
        const token = cookie.get('access_token');
        setToken(token)
    }

    function logout() {
        cookie.remove('access_token')
        setToken(null)
    }
    return { token, login, logout }
}