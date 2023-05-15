import React, {useRef} from 'react'
import {logInWithEmailAndPassword, signInWithGoogle} from '../../firebase'
import {useNavigate} from "react-router-dom"


export default function HomeTest() {
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	const navigate = useNavigate();
 	const logIn = async function() {
		const email = emailRef.current.value
		const password = passwordRef.current.value
		const res = await logInWithEmailAndPassword(email.trim(), password.trim())
		if (res) {
			navigate('/dashtest');
		}
		console.log(res)
  	}

  return (
	<div className="hero min-h-screen bg-primary">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body text-black">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" ref={emailRef} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" ref={passwordRef} className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={logIn} className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
