import React from 'react'

const FormSignin = () => {
    return (
        <div className="form-content">
            <form className="form">
                <h1><strong>G-us</strong></h1>
                <h3>Welcome back to G-Us</h3>
                <h4>New Here ?</h4><a href="https://www.google.com" target="_blank">Create an account</a>

                <div className="form-input">
                    Email
                    <label htmlFor="Email" 
                    className ="form-label">
                        <input
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Email"
                        />
                    </label>
                </div>
                <div className="form-input">
                    Password
                    <label htmlFor="Password" 
                    className ="form-label">
                        <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="password"
                        />
                    </label>
                    </div>

                    <div className="btn-radio">
                        <button className="radio">
                        <input type="radio" id="radio" name="radio" value="radio" />
                        </button>
                    <span className='form-input-login'>Renember this device
                    </span>
                    </div>

                    <button className="button-input-btn" type="submit">Sign in
                    </button>

                    <div className="suggestion">
                        <p>or sign in with</p>
                    </div>
                

            </form>

        </div>
    )
}

export default FormSignin
