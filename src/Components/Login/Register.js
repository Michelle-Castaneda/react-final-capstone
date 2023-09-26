import React, {useState, useEffect} from "react";
import axios from "axios";


function Register () {
const [username, setUsername] = useState('');
const [validUsername, setValidUsername] = useState(false);

const [password, setPassword] = useState('');
const [validPassword, setValidPassword] = useState(false);

const [matchPassword, setMatchPassword] = useState('')
const [validMatch, setValidMatch] =useState(false);

// const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState(false)



useEffect(() => {
    const isUsernameValid = username.includes(username)
    console.log(isUsernameValid,username)
    setValidUsername(isUsernameValid);
}, [username])

useEffect(() => {
    const isPasswordValid = password.includes(password)
    console.log(isPasswordValid,password)
    setValidPassword(isPasswordValid)
    const match = password ===matchPassword
    setValidMatch(match);
},[password,matchPassword])

// useEffect (() => {
//     setErrorMessage('')
// }, [username,password,matchPassword])


const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username,password)
        try {
            const response = await axios.post("http://localhost:4000/register", {
                username,
                password
            });
            if (response.data) {
                setSuccessMessage(true);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }


return (
successMessage ? (
    <div>
    <h1>Signup successful! Welcome to Gofer Motors LLC! </h1>
    <p>
    <a href="#">Sign In </a>
    </p>
    </div>
):(
    <div className="register_container">
        {/* <p className="err_msg">(`{errorMessage}`)</p> */}
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="username_form">Username: </label>
            <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
            <p className="usernameInstructions">Username must have 5 to 25 characters. <br />
            Letters, numbers and underscores are allowed.
            </p>

            <label htmlFor="password" className="password_form">Password: </label>
            <input type="password" id= "password" onChange={(e) => setPassword(e.target.value)} />
            <p className="passwordInstructions">Password must have 5 to 12 characters. <br />
            Only letters and numbers are allowed.
            </p>
            
            <label htmlFor="confirmPassword" className="confirmpassword_form">Confirm Password: </label>
            <input type="password" id= "confirmPassword" onChange={(e) => setMatchPassword(e.target.value)} />
        

            <button disabled={!validUsername || !validPassword || !validMatch ? true : false } className="signupBtn">Sign Up</button>

        </form>

        <p>Already Registered? <br/>
        <a href="#" >Sign In </a>
        </p>
    </div>
    )
)

}

export default Register;