"use client";
import React, { useState } from "react";
import styles from "./sidenav.module.scss";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import ProfileTab from "../ProfileTab";
import DetailsTable from "../DetailsTable";
import NotesSide from "../NotesSide";

// Main component for the side navigation and content layout
const SideNav = () => {
  // State to manage the toggle of the sidebar
  const [widthState, setWidthState] = useState("false");

  // Function to handle the toggle of the sidebar
  const clickToggle = () => {
    setWidthState(!widthState);
  };

  return (
    <div className={styles.layoutDiv}>
      {/* Sidebar */}
      <div className={widthState ? styles.main : styles.mainExpand}>
        {/* Menu button to toggle sidebar */}
        <div className={styles.menus} onClick={clickToggle}>
          <div className={styles.imgDiv}>
            <i className="bx bx-menu-alt-left bx-sm"></i>
            <span>{widthState ? "" : " _ Logo _"}</span>
          </div>
        </div>
        {/* Navigation links */}
        <ul>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bxs-dashboard bx-sm"></i>
                <span>{widthState ? "" : "Dashboard"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <Image src="/icons/user.svg" width={20} height={20} />
                <span>{widthState ? "" : "User"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-buildings bx-sm"></i>
                <span>{widthState ? "" : "Accounts"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-user-pin bx-sm"></i>
                <span>{widthState ? "" : "Management"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-box bx-sm"></i>
                <span>{widthState ? "" : "Reports"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-envelope bx-sm"></i>
                <span>{widthState ? "" : "Messages"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-calendar bx-sm"></i>
                <span>{widthState ? "" : "Dates"}</span>
              </div>
            </Link>
          </li>
          {/* Separator line */}
          <li>
            <div className={styles.seperator}>
              <span>{widthState ? "_____" : "________________"}</span>
            </div>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-dollar-circle bx-sm"></i>
                <span>{widthState ? "" : "Economy"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-chart bx-sm"></i>
                <span>{widthState ? "" : "Analytics"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-card bx-sm"></i>
                <span>{widthState ? "" : "Bankings"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-cog bx-sm"></i>
                <span>{widthState ? "" : "Settings"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
                <span>{widthState ? "" : "More"}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* Main content area */}
      <div className={widthState ? styles.mainDivContent : styles.mainDivContentExtended}>
        {/* Sticky header */}
        <div className={styles.stickyDiv}>
          <Header />
        </div>
        {/* Main sections */}
        <div className={styles.section}>
          <div className={styles.sectionOne}>
            <ProfileTab />
            <DetailsTable />
          </div>
          <div className={styles.sectionTwo}>
            <NotesSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
