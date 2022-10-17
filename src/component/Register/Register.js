import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import './Register.css'; 

const Register = () => {
   const [passwordError , setPasswordError] = useState(''); 
   const {createUser} = useContext(AuthContext); 
   const handleSubmitForm = (event) => { 
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const confirmPassword = form.confirmPassword.value;
      const password = form.password.value;
      console.log(confirmPassword , email, password);
   
      if(password.length < 6){
         setPasswordError('Password length must be 6 or more.'); 
         return ; 
      }

      if(password !== confirmPassword){
         setPasswordError(`Your password didn't match`); 
         return ; 
      }

      createUser(email, password)
      .then(res => {
         console.log(res.user); 
         form.reset(); 
      })
      .catch(err => console.log(err)); 

   };
   return (
      <div className="login-container">
         <div className="form-container">
            <form onSubmit={handleSubmitForm}>
               <h2 className="form-title">Register</h2>
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
               <div className="form-control">
                  <label htmlFor="confirmPassword">Confirm Password: </label>
                  <input
                     type="password"
                     id="confirmPassword"
                     name="confirmPassword"
                     placeholder="Enter your password : "
                     required
                  />
               </div>
               {
                  passwordError && <p className="text-error">{passwordError}</p>
               }
               <input className="login-button" value="Register" type="submit" />
               <p className="helping-message">
                  Already have a account ? <Link to="/login">login</Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Register;
