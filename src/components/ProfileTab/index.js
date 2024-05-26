// Importing necessary dependencies
import React, { useState } from "react";
import Image from "next/image";
import EditUserModal from "./EditUserModal";
import styles from "./profiletab.module.scss";

// Define ProfileTab component
function ProfileTab() {
    // State for managing modal open/close and user details
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({
        organization: "World Bank Group",
        skills: "HTML,CSS,Javascript",
        availableFrom: "World HTML,CSS js",
        salary: "$6000",
        noticePeriod: "60Days",
        address: "HTML,CSS js",
        resume: "Q Rd New York World",
        experience: "6 years",
    });

    // Functions to manage modal open/close and save user details
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleSave = (updatedDetails) => {
        setUserDetails(updatedDetails);
        closeModal();
    };

    // Render the component
    return (
        <>
            {/* Profile Tab */}
            <div className={styles.profileTab}>
                <div className={styles.breadCrumb}>
                    <p> Candidates</p>
                    <span><i className="bx bx-chevron-right"></i></span>
                    <p> Robert Hardy </p>
                    <div className={styles.id}> ID- 231</div>
                </div>
                <div className={styles.profBtnsGrp}>
                    <button> Request Profile Update</button>
                    <button> Previous</button>
                    <button> Next </button>
                </div>
            </div>

            {/* User Card and Details */}
            <div className={styles.cardTableProf}>
                <div className={styles.logoContent}>
                    <div className={styles.imgDiv}>
                        <Image src="/icons/avatar.svg" width={64} height={64} />
                    </div>
                    <div className={styles.contentsUser}>
                        <div className={styles.firstline}>
                            <h2> William Sample</h2>
                            <div className={styles.socialIcons}>
                                {/* Social icons */}
                                {[...Array(5)].map((_, index) => (
                                    <i key={index} className="bx bxl-facebook-circle"></i>
                                ))}
                            </div>
                        </div>
                        {/* User profile designation */}
                        <div className={styles.profileDesigntn}>
                            <p> Senior Product Manager</p>
                            <p> United States</p>
                            <p> Dalias </p>
                        </div>
                    </div>
                </div>
                {/* User action buttons */}
                <div className={styles.talebtnDivs}>
                    <button className={styles.contactBtn}>Contact Linked</button>
                    <button><i className="bx bx-star"></i></button>
                    <button><i className="bx bxs-hot"></i></button>
                    <button onClick={openModal}><i className="bx bxs-edit"></i></button>
                    <button><i className="bx bx-dots-vertical-rounded"></i></button>
                </div>
            </div>

            {/* User Details Table */}
            <div className={styles.tabelHeader}>
                <div className={styles.emailDiv}>
                    <div className={styles.one}><i className="bx bx-envelope"></i><p> williamsmith@gmail.com</p></div>
                    <div className={styles.one}><i className="bx bx-phone"></i><p> +1 2342 4545 53</p></div>
                </div>
                <div className={styles.tableUserName}>
                    <div className={styles.one}><i className="bx bx-user"></i><p> Phykkis yang</p></div>
                    <div className={styles.one}><i className="bx bx-time"></i><p> July 14, 2023 4:04pm</p></div>
                </div>
            </div>

            {/* User Details */}
            <div className={styles.tableDiv}>
                {[...Array(2)].map((_, index) => (
                    <div key={index} className={styles.columnOne}>
                        {[...Array(8)].map((_, rowIndex) => (
                            <div key={rowIndex} className={styles.rowOne}>
                                {/* Display user details */}
                                <h4>{Object.keys(userDetails)[rowIndex]}</h4>
                                <h5>{Object.values(userDetails)[rowIndex]}</h5>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Edit User Modal */}
            <EditUserModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                userDetails={userDetails}
                onSave={handleSave}
            />
        </>
    );
}

export default ProfileTab; // Export the component
