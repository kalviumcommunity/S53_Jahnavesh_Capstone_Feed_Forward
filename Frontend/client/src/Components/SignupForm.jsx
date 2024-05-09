import React, { useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth, db } from '../firebase'; 
import { doc, setDoc } from 'firebase/firestore';
import { AppContext } from './ParentContext';
import { useNavigate } from 'react-router-dom';
import bg_img from "../images/BG-2.png";
import logo from "../images/logo.png" ;

const Signup = () => {
  const navigate = useNavigate();
  const { setSignin, setUser } = useContext(AppContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const displayName = data.name;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        phoneNumber: "",
      });

      setSignin(true);
      setUser(data);  
      navigate("/signin");

      console.log("success signup");
    } catch (err) {
      console.log("err: ", err);
    }}

    return (
      <div>
        <img src={bg_img} alt="" className='signup_bg'/>
        <div className="form-container-signup">
          <img src={logo} alt="" className='signup_logo'/>
          <p style={{fontFamily:"grand hotel",fontSize:"30px",marginLeft:"30%"}}> <span style={{color:"orange"}}> Feed </span>Forward</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="form-label" htmlFor="name" style={{marginLeft:"2.5%",fontWeight:"400"}}>Name</label>
              <input className="form-input" placeholder="Please Enter your name" type="text" id="name" {...register('name', { required: true })} />
              {errors.name && <span className="error-message">This field is required</span>}
            </div>
            <div>
              <label className="form-label" htmlFor="email" style={{marginLeft:"2.5%",fontWeight:"400"}}>Email</label>
              <input className="form-input" placeholder="Please Enter your Email" type="email" id="email" {...register('email', { required: true })} />
              {errors.email && <span className="error-message">This field is required</span>}
            </div>
            <div>
              <label className="form-label" htmlFor="password" style={{marginLeft:"2.5%",fontWeight:"400"}}>Password</label>
              <input className="form-input" placeholder="Please Set your password" type="password" id="password" {...register('password', { required: true })} />
              {errors.password && <span className="error-message">This field is required</span>}
            </div>
            <p className='userexists_signup' style={{ cursor: 'pointer', marginTop: '5px' }} onClick={() => navigate("/signin")}>User Already Exists?</p>
            <button className="submit-button-signup" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
};

export default Signup;
