import React, {useState,setState} from 'react';
import './style.css';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import ReusableFooter from '../components/reusable/ReusableFooter';
import ReusableButton from '../components/reusable/ReusableButton';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        var ok = false

        const loggedadmin = JSON.parse(localStorage.getItem("admin"))
        if(email === loggedadmin.email && password === loggedadmin.password)
        {
            localStorage.setItem("loggedin",true)
            localStorage.setItem("currentUser", "admin")
            navigate("/accounts")
            ok = true
        }




        var user = "user".concat(email)
        const loggeduser = JSON.parse(localStorage.getItem(user))
        if(email === loggeduser.email && password === loggeduser.password)
        {

            localStorage.setItem("loggedin",true)
            localStorage.setItem("currentUser", user)
            navigate("/shop")
            ok = true
        }

        if(ok === false){
            alert("Wrong email or password!")
        }
    


        

    }


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }


    }

    return(
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flexGrow: 1 }}>
        <form  className="form" onSubmit={handleLogin}>
              <h1 style={{testAlignVertical: "center",textAlign: "center"}}> Sign in into your account</h1>

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

            <div class="footer">
                <ReusableButton name="submitbtn" type="submit" class="btn">Login</ReusableButton>
            {/* </div>
            <div class="sub-footer"> */}
                <p>Don't have an account yet?
                    <Link to="/register">
                        <u>Register now!</u>
                    </Link>
                </p>
            </div>
        </form>   
        </div>
        <div>
        <ReusableFooter/>
        </div>
        </div>
      )  
}

export default Login;