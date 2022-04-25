import './App.css';
import { Modal } from './Modal';
import React, { useState } from 'react';

export const SignUpForm = () => {
    const [showModal, setShowModal] = useState(false);

    const onDismissModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div class="card">
                <button onClick={() => setShowModal(true)} className="btn btn-primary">Form</button>
                { showModal && <Modal dismissModal={onDismissModal} />}
            </div>
            
        </>
    );
};
