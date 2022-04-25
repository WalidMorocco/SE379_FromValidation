import './App.css';
import React, { useState, useEffect } from 'react';

export const Modal = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Age, setAge] = useState('');
    const [ErrorName, setErrorName] = useState('');
    const [ErrorAge, setErrorAge] = useState('');
    const [ValidationName, setValidationName] = useState(true);
    const [ValidationAge, setValidationAge] = useState(true);

    const submitForm = (event) => {
        event.preventDefault();
        if (ValidationName === true && ValidationAge === true) {
            console.log(Age)
            setFirstName('');
            setLastName('');
            setAge('');
            props.dismissModal();
        } else {
            console.log(ValidationName);
            console.log(ValidationAge);
        }
    }

    const cancelForm = (event) => {
        props.dismissModal();
    }

    useEffect(() => {
        if  (firstName === '' && lastName === ''){
            setErrorName('')
            setValidationName(false)
        }else if (firstName.length <= 2 || lastName.length <= 2){
            setErrorName('First and Last names must be more than 2 characters')
            setValidationAge(false)
        }else{
            setErrorName('')
            setValidationName(true)
        }
    }, [firstName, lastName]);

    useEffect(() => {
        if  (isNaN(Age)){
            setErrorAge('Age must be a number')
            setValidationAge(false)
        } else if(Age <= 17){
            setErrorAge('WARNING: You must be over 18 years old')
            setValidationAge(false)
        } else{
            setErrorAge('')
            setValidationAge(true)
        }
    }, [Age]);
    

    return (
        <fragment>
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
                    <label className="form-label">Age: </label>
                    <input
                        type="Age"
                        value={Age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button onClick={submitForm} className="button">
                        Submit
                    </button>
                    <button onClick={cancelForm} className="button">
                        Cancel
                    </button>
                </div>   

            </form>    
        </div>
        <div >
            <label className="form-label" id="errors" >{ErrorName}</label>
        </div>   
        <div >
            <label className="form-label" id="errors"> {ErrorAge}</label>
        </div> 
        
        </fragment> 
    );
};
