import React, { useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { AppContext } from './ParentContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const { setSignin, setUser } = useContext(AppContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const displayName = data.name;
    const defaultProfile = 'https://firebasestorage.googleapis.com/v0/b/pawsitive-64728.appspot.com/o/Group%2035913.png?alt=media&token=857c7bc3-4f1f-47d6-ba8b-355944132384';

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: defaultProfile,
        wishlist: [],
        DelivaryAddress: [],
        AddToCart: [],
        MyOrders: [],
        TrackOrder: {},
        phoneNumber: ""
      });

      setSignin(true);
      setUser(data);
      navigate("/profile_user");

      console.log("success signup");
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-label" htmlFor="name">Name:</label>
            <input className="form-input" placeholder="Please Enter your name" type="text" id="name" {...register('name', { required: true })} />
            {errors.name && <span className="error-message">This field is required</span>}
          </div>
          <div>
            <label className="form-label" htmlFor="email">Email:</label>
            <input className="form-input" placeholder="Please Enter your Email" type="email" id="email" {...register('email', { required: true })} />
            {errors.email && <span className="error-message">This field is required</span>}
          </div>
          <div>
            <label className="form-label" htmlFor="password">Password:</label>
            <input className="form-input" placeholder="Please Set your password" type="password" id="password" {...register('password', { required: true })} />
            {errors.password && <span className="error-message">This field is required</span>}
          </div>
          <Link to="signin"><p>User Already Exists?</p></Link>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
