// Importing necessary dependencies
import React from "react";
import styles from "./header.module.scss"; // Assuming this is your SCSS file
import Image from "next/image";

// Define Header component
function Header() {
    // Render the component
    return (
        <>
            {/* Main header container */}
            <div className={styles.mainDivHeader}>
                {/* Input search field */}
                <div className={styles.inputDiv}>
                    <div className={styles.inuptIcon}>
                        {/* Search icon */}
                        <i class='bx bx-search-alt-2 bx-sm'></i>
                    </div>
                    <input type="text" placeholder="Search PipeDrive"></input>
                </div>

                {/* Logo */}
                <div className={styles.logoImg}>
                    <Image src="/logo.svg" width={155} height={34} />
                </div>

                {/* Buttons and profile section */}
                <div className={styles.btnsDiv}>
                    {/* Plus button */}
                    <div className={styles.plusBtn}>+</div>
                    <span className={styles.seperator}></span>
                    {/* Icon buttons */}
                    <div className={styles.circle}>
                        <i class='bx bx-gift bx-burst-hover'></i>
                    </div>
                    <div className={styles.circle}>
                        <i class='bx bx-envelope bx-burst-hover'></i>
                    </div>
                    <div className={styles.circle}>
                        <i class='bx bx-bell bx-tada-hover'></i>
                    </div>
                    {/* Profile section */}
                    <div className={styles.profDiv}>
                        <div className={styles.circle}>
                            <Image src="/logo.svg" width={40} height={40} />
                        </div>
                        <div className={styles.name}>
                            <h5> Phyllis Yang</h5>
                            <h6>Sillicon Link syc</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header; // Export the component
