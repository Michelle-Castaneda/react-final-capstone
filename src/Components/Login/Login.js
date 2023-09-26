import React, {useState, useContext} from "react";
import axios from "axios";
import AuthContext from "../../AuthProvider";



function Login () {
    const { setAuth  } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    


 const handleSubmit = async (e) => {
     e.preventDefault();
    console.log(username,password)
    try {
        const response = await axios.post("/authentication", {
            username,
            password
        });
        const accessToken = response?.data?.accessToken;
        setAuth({ username, password, accessToken });
    // if (response.data.token) {
    //     localStorage.setItem("authToken", response.data.token)
    // } else {
    //     console.error(response.data.error)
    // }
} catch (err) {
    if (!err?.response) {
        setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
    } else {
        setErrMsg('Login Failed');
    }}
};

    return (
        success ? (
            <section>
                <h1>You are logged in! Welcome to Gofer Motors LLC</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
        <div>
            <h1 className="signIn_header">Welcome to Gofer Motors LLC</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" onChange={(e) =>setUsername(e.target.value)} />

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" onChange={(e) =>setPassword(e.target.value)} />

            <button className="signInLoginBtn" type="onSubmit">Sign In</button>
        
            </form>
            <p>Create an Account
            <a href="#">Sign Up</a>
            </p>
        </div>
    )
    )
}

export default Login;



