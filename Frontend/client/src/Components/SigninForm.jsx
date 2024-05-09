import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './ParentContext';
import bg_img from "../images/BG-2.png"
import logo from "../images/logo.png"

const Signin = () => {
  const { setUser, setSignin } = useContext(AppContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setSignin(true);
        navigate('/');
      })
      .catch((error) => {
        console.error('Sign in error:', error.message);
      });
  };

  return (
    <div>
      <img src={bg_img} alt="" className='signin_bgimg'/>
      <div className="form-container-signin"> 
        <img src={logo} alt="" className='signin_logo'/>
        <p style={{fontFamily:"grand hotel",fontSize:"35px"}} className='title_signin'> <span style={{color:"orange"}}> Feed </span>Forward</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{marginTop:"5%"}}>
            <label className="form-label" htmlFor="email" style={{fontWeight:"400",fontFamily:"Arial",marginLeft:"3.5%",fontSize:"20px"}}>Email</label><br />
            <input className="form-input" placeholder="Enter your Email" type="email" id="email" {...register('email', { required: true })} />
            {errors.email && <span className="error-message">This field is required</span>}
          </div>
          <div style={{marginTop:"5%"}}>
            <label className="form-label" htmlFor="password" style={{fontWeight:"400",fontFamily:"Arial",marginLeft:"3.5%",fontSize:"20px"}}>Password</label><br />
            <input className="form-input" placeholder="Enter Password" type="password" id="password" {...register('password', { required: true })} />
            {errors.password && <span className="error-message">This field is required</span>}
          </div>
          <button className="submit-button-signin" type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
