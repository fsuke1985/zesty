// @ts-nocheck
import type { NextPage } from 'next'
import Link from 'next/link'
import Form from "../../utilities/Forms";
import { useState } from "react";
import React from 'react'
import { loginrequest } from '~/service/auth';
import { useForm, SubmitHandler} from 'react-hook-form';
import {Button} from 'baseui/button';
import {useStyletron} from 'baseui';

type Inputs = {
  email: string,
  password: string
};

const Login: NextPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>();
    const [css, theme] = useStyletron();

    const authenticate: SubmitHandler<Inputs> = (data: Inputs) => {
        return false
    };
  
    const togglePassword = (e: React.FormEvent<HTMLFormElement>) => {
      if (showPassword) {
        setShowPassword(false);
      } else {
        setShowPassword(true);
      }
    };
    return (
        <div className="row g-0 auth-wrapper">
          <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
            <div className="auth-background-holder"></div>
            <div className="auth-background-mask"></div>
          </div>
    
          <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
            <div className="d-flex flex-column align-content-end">
              <div className="auth-body mx-auto">
                <p>Login to your account</p>
                <div className="auth-form-container text-start">
                  <form
                    className="auth-form"
                    method="POST"
                    onSubmit={handleSubmit(authenticate)}
                    autoComplete={"off"}
                  >
                    <div className="email mb-3">
                      <input
                        className="form-control "
                        placeholder="Email"
                        //onChange={(e) => setEmail(e.target.value)}
                        { ...register("email", { required: true})}
                      />
                      {errors.email && <span>This field is required</span>}
                    </div>
    
                    <div className="password mb-3">
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control "
                          placeholder="Password"
                          { ...register("password", { required: true, maxLength: 10})}
                        />
                        <Button
                          className={css({color: theme.colors.accent100})}
                          onClick={(e) => togglePassword(e)}
                        >
                          <i
                            className={
                              showPassword ? "far fa-eye" : "far fa-eye-slash"
                            }
                          ></i>{" "}
                        </Button>
                      </div>
                      {errors.password && <span>This field is required</span>}
                      <div className="extra mt-3 row justify-content-between">
                        <div className="col-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember"
                              checked={remember}
                              onChange={(e) => setRemember(e.currentTarget.checked)}
                            />
                            <label className="form-check-label" htmlFor="remember">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="forgot-password text-end">
                            {/* <Link to="/forgot-password">Forgot password?</Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Button
                        type="submit"
                        className={css({color: theme.colors.accent100, width: '100%'})}
                      >
                        Log In
                      </Button>
                    </div>
                  </form>
    
                  <hr />
                  <div className="auth-option text-center pt-2">
                    No Account?{" "}
                    {/* <Link className="text-link" to="/register">
                      Sign up{" "}
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
} 

export default Login