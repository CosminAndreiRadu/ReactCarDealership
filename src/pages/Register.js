import React, {useState,setState} from 'react';
import './style.css';
import ReusableFooter from '../components/reusable/ReusableFooter.js';

import { useNavigate } from 'react-router-dom';
import ReusableButton from '../components/reusable/ReusableButton';
import { database } from '../firebase';
import {ref,push,child,update} from "firebase/database";


const RegistrationForm = () => {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const navigate = useNavigate();



    let obj2 = {
        firstName : "admin",
        lastName:"admin",
        email:"admin@admin.com",
        password:"admin",
        confirmPassword:"admin",
        } 
    localStorage.setItem("admin", JSON.stringify(obj2))



    const handleSubmit = (e) => {
        e.preventDefault();
        let obj1 = {
        firstName : firstName,
        lastName:lastName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        } 
        
        if(password !== confirmPassword)
        {
            alert("Passwords unmatch!")
        }
        else
        {
            var user = "user".concat(email)
            localStorage.setItem(user, JSON.stringify(obj1))
            const newPostKey = push(child(ref(database), 'posts')).key;
            const updates = {}
            updates['/' + newPostKey] = obj1
            return update(ref(database), updates);

            navigate("/login")
        }

    }


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }


    return(
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <div style={{ flexGrow: 1 }}>
      <form className="form" onSubmit={handleSubmit}>
            <h1 style={{testAlignVertical: "center",textAlign: "center"}}> Create new account</h1>
              <div className="username">
                    <p></p>
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input name='firstName' className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="FirstName" /> 
                    <p></p>
              </div>
              <div className="lastname">
                    <p></p>
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="lastName" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                    <p></p>
              </div>
              <div className="email">
                    <p></p>
                    <label className="form__label" htmlFor="email">Email </label>
                    <input name="email" type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                    <p></p>
              </div>
              <div className="password">
                    <p></p>
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" name = "password" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                    <p></p>
              </div>
              <div className="confirm-password">
                    <p></p>
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" name = "confirmpassword" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                    <p></p>

              </div>
          <div class="footer">
            
              <ReusableButton name="submitbtn" type="submit" class="btn">Register</ReusableButton>
          </div>
      </form>
      </div>
      <div>
    <ReusableFooter/>
    </div>
    </div>
    )       
}
export default RegistrationForm;