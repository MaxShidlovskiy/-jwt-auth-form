import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import style from "./style.module.scss";
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MyContext from 

export default function Login() {
    const { login } = useAuth();

    const [data, setData] = useState({ email: '', password: '' })

    function change(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    function sendData() {
        const response = await axios.post('http://localhost:3001/user/auth', data, { whithCredentials: true })
        console.log(response);
        login()
    }

    return (
        <div>
            <Header />
            <h1>Sign In</h1>
            <p>
                Log in to access your account or create one. Verify your email for
                seamless access.
            </p>
            <div className={style.inputForm}>
                <div className={style.inputFormContainer}>
                    <p>email</p>
                    <input type="text" placeholder="Your email" />
                </div>
                <div>
                    <p>password</p>
                    <input type="text" placeholder="Must be at least 8 characters." />
                </div>
            </div>
            <div className={style.button} onClick={show}>Continue</div>
            <div className={style.text}>
                Not registered yet? <Link to={"/reg"}><span>Sign Up</span></Link>
            </div>
        </div>
    );
}