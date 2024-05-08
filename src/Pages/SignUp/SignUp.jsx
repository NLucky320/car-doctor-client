import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
const SignUp = () => {
      const  { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {

      

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
            })
            .catch(error => {
            console.log(error)
        })
    }
        return (
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="ml-12 w-1/2">

                        <img src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                             
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                           
                                <input className="btn btn-primary bg-[#FF3811] text-white" type="submit" value='SignUp' />
                            </div>
                        </form>
                        <p className='p-4'>Already Have an account? Please <Link to='/login' className='text-[#FF3811]'>Login</Link></p>
                    </div>
                </div>
            </div>
        );
    };
export default SignUp;