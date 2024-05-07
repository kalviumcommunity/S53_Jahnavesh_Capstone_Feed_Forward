import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './ParentContext';

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
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-label" htmlFor="email">Email:</label>
            <input className="form-input" placeholder="Enter your Email" type="email" id="email" {...register('email', { required: true })} />
            {errors.email && <span className="error-message">This field is required</span>}
          </div>
          <div>
            <label className="form-label" htmlFor="password">Password:</label>
            <input className="form-input" placeholder="Enter Password" type="password" id="password" {...register('password', { required: true })} />
            {errors.password && <span className="error-message">This field is required</span>}
          </div>
          <button className="submit-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
