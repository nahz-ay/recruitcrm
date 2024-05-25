"use client";
import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className={styles.mainDivHeader}>
        <div className={styles.inputDiv}>
          <div className={styles.inuptIcon}>
          <i class='bx bx-search-alt-2 bx-sm' ></i>
       
          </div>
          <input type="text" placeholder="Search PipeDrive"></input>
        </div>

        <div className={styles.logoImg}>
          <Image src="/logo.svg" width={155} height={34} />
        </div>

        <div className={styles.btnsDiv}>
          <div className={styles.plusBtn}>+</div>
          <span className={styles.seperator}></span>
          <div className={styles.circle}>
          <i class='bx bx-gift bx-burst-hover'></i>
          </div>
          <div className={styles.circle}>
          <i class='bx bx-envelope bx-burst-hover' ></i>
                    </div>
          <div className={styles.circle}>
          <i class='bx bx-bell bx-tada-hover' ></i>
          </div>
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

export default Header;
