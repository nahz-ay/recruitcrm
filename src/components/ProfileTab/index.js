"use client";

import React from "react";
import styles from "./profiletab.module.scss";
import Image from "next/image";

function ProfileTab() {
  return (
    <>
      <div className={styles.profileTab}>
        <div className={styles.breadCrumb}>
          <p> Candidates</p>
          <span>
            <i class="bx bx-chevron-right"></i>
          </span>
          <p> Robert Hardy </p>
          <div className={styles.id}> ID- 231</div>
        </div>
        <div className={styles.profBtnsGrp}>
          <button> Request Profile Update</button>
          <button> Previous</button>
          <button> Next </button>
        </div>
      </div>

      <div className={styles.cardTableProf}>
        <div className={styles.logoContent}>
          <div className={styles.imgDiv}>
            <Image src="/icons/avatar.svg" width={64} height={64} />
          </div>
          <div className={styles.contentsUser}>
            <div className={styles.firstline}>
              <h2> William Sample</h2>
              <div className={styles.socialIcons}>
                <i class="bx bxl-facebook-circle"></i>
                <i class="bx bxl-facebook-circle"></i>
                <i class="bx bxl-facebook-circle"></i>
                <i class="bx bxl-facebook-circle"></i>
                <i class="bx bxl-facebook-circle"></i>
              </div>
            </div>

            <div className={styles.profileDesigntn}>
              <p> Senior Product Manager</p>
              <p> United States</p>
              <p> Dalias </p>
            </div>
          </div>
        </div>
        <div className={styles.talebtnDivs}>
          <button className={styles.contactBtn}>Contact Linked </button>
          <button>
            {" "}
            <i class="bx bx-star"></i>{" "}
          </button>
          <button>
            <i class="bx bxs-hot"></i>
          </button>
          <button>
            <i class="bx bxs-edit"></i>
          </button>
          <button>
            <i class="bx bx-dots-vertical-rounded"></i>
          </button>
        </div>
      </div>
      <div className={styles.tabelHeader}>
      <div className={styles.emailDiv}>
        <div className={styles.one}>
          <i class="bx bx-envelope"></i>
          <p> williamsmith@gmail.com</p>
        </div>
        <div className={styles.one}>
          <i class="bx bx-phone"></i>
          <p> +1 2342 4545 53</p>
        </div>
      </div>
      <div className={styles.tableUserName}>
      <div className={styles.one}>
          <i class="bx bx-user"></i>
          <p> Phykkis yang</p>
        </div>
        <div className={styles.one}>
          <i class="bx bx-time"></i>
          <p> July 14, 2023 4:04pm</p>
        </div>

      </div>
      </div>
      <div className={styles.tableDiv}>
        <div className={styles.columnOne}>
            <div className={styles.rowOne}>
                <h4> Curent Organization</h4>
                <h5> World Bank Group</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Skills</h4>
                <h5>  HTML,CSS,Javascript</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Available Form</h4>
                <h5> World HTML,CSS js</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Curent Salary</h4>
                <h5> $6000</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Notice period</h4>
                <h5> 60Days</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Full Address</h4>
                <h5>  HTML,CSS js</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Resume</h4>
                <h5> Q Rd New York World</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Total Experience</h4>
                <h5> 6 years</h5>
            </div>

        </div>
        <div className={styles.columnOne}>
            <div className={styles.rowOne}>
                <h4> Curent Organization</h4>
                <h5> World Bank Group</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Skills</h4>
                <h5>  HTML,CSS,Javascript</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Available Form</h4>
                <h5> World HTML,CSS js</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Curent Salary</h4>
                <h5> $6000</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Notice period</h4>
                <h5> 60Days</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Full Address</h4>
                <h5>  HTML,CSS js</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Resume</h4>
                <h5> Q Rd New York World</h5>
            </div>
            <div className={styles.rowOne}>
                <h4> Total Experience</h4>
                <h5> 6 years</h5>
            </div>

        </div>
      </div>
      
    </>
  );
}

export default ProfileTab;
