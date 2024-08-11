// src/Modal.js
import React from 'react';


const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-400 opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg z-10 w-11/12 md:w-1/3">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 font-bold">
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;