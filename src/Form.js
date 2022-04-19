import './App.css';
import React, { useState } from 'react';

export const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const clearForm = (event) => {
        event.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="form">
            <form>

                <div className="form-group">
                    <label className="form-label">First Name: </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Last Name: </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="form-group">
                    <button onClick={clearForm} className="button">
                        Submit
                    </button>
                </div>   
            </form>    
        </div>
    );
};

export default SignUpForm;