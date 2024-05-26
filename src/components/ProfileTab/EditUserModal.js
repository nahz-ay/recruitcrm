// Importing necessary dependencies
import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./editusermodal.module.scss";

// Define EditUserModal component
function EditUserModal({ isOpen, onRequestClose, userDetails, onSave }) {
    // State to manage form data
    const [formData, setFormData] = useState(userDetails);

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    // Render the component
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit User Details"
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            {/* Modal header */}
            <h2 className={styles.modalheader}>Edit User Details</h2>

            {/* Form for editing user details */}
            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Render form fields based on user details */}
                {Object.keys(userDetails).map((key) => (
                    <div key={key} className={styles.formGroup}>
                        <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                {/* Buttons for save and cancel actions */}
                <div className={styles.btnsDiv}>
                    <button type="submit" className={styles.saveButton}>
                        Save
                    </button>
                    <button type="button" onClick={onRequestClose} className={styles.cancelButton}>
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default EditUserModal; // Export the component
