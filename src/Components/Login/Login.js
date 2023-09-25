

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(username,password)
//     try {
//         const response = await axios.post("", {
//             username,
//             password
//         });

      
//     if (response.data.token) {
//         localStorage.setItem("authToken", response.data.token)
//     } else {
//         console.error(response.data.error)
//     }
// } catch(error) {
//     console.error("Error logging in: ", error)
// }
// };

//     return (
//         <div className="login_container">
// <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <button className="login_btn" type="submit">Login</button>
                    
//                 </div>
//             </form>
//         </div>
//     )
