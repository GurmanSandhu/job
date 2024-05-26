import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {


      const user = result.user;

    }).catch((error) => {

      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <div>
     
      <div className='h-screen w-full flex items-center justify-center'>
        {/* <button className='bg-blue px-8 text-white py-2' onClick={handleLogin}>Login</button> */}
        <div>
          <button onClick={"/home"}>Home</button>
        </div>
      </div>
      
    </div>
  )
}

export default Login
