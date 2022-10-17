import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
   const { signIn} = useContext(AuthContext);
  const navigate  = useNavigate();
  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/';
   

   const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);


      signIn(email, password)
      .then(res => {
         console.log(res.user); 
         form.reset();
         navigate(from, { replace: true }); 
      })
      .catch(err => console.log(err))
   };

   
   return (
      <div className="login-container">
         <div className="form-container">
            <form onSubmit={handleSignIn}>
               <h2 className="form-title">Login</h2>
               <div className="form-control">
                  <label htmlFor="email">Email: </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Enter your email : "
                     required
                  />
               </div>
               <div className="form-control">
                  <label htmlFor="password">Password: </label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Enter your password : "
                     required
                  />
               </div>
               <input className="login-button" value="login" type="submit" />
               <p className="helping-message">
                  New to Ema-John ?{" "}
                  <Link to="/register">Create an account</Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Login;
