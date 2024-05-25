"use client";
import React, { useState } from "react";
import styles from "./sidenav.module.scss";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import ProfileTab from "../ProfileTab";
import DetailsTable from "../DetailsTable";
import NotesSide from "../NotesSide";

const SideNav = () => {
  const [widthState, setWidthState] = useState("false");

  const clickToggle = () => {
    setWidthState(!widthState);
  };

  return (
    <div className={styles.layoutDiv}>
      <div className={widthState ? styles.main : styles.mainExpand}>
        <div className={styles.menus} onClick={clickToggle}>
          <div className={styles.imgDiv}>
            <i class="bx bx-menu-alt-left bx-sm"></i>
            <span> {widthState ? "" : " _ Logo _"}</span>
          </div>
        </div>
        <ul>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bxs-dashboard bx-sm"></i>
                <span> {widthState ? "" : "Dashboard"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <Image src="/icons/user.svg" width={20} height={20} />
                <span> {widthState ? "" : "User"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-buildings bx-sm"></i>{" "}
                <span> {widthState ? "" : "Accounts"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-user-pin bx-sm"></i>
                <span> {widthState ? "" : "Management"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-box bx-sm"></i>{" "}
                <span> {widthState ? "" : "Reports"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-envelope bx-sm"></i>{" "}
                <span> {widthState ? "" : "Messages"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-calendar bx-sm"></i>{" "}
                <span> {widthState ? "" : "Dates"}</span>
              </div>
            </Link>
          </li>

          <li>
            <div className={styles.seperator}>
              <span> {widthState ? "_____" : "________________"}</span>
            </div>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-dollar-circle bx-sm"></i>{" "}
                <span> {widthState ? "" : "Economy"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-chart bx-sm"></i>{" "}
                <span> {widthState ? "" : "Analytics"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-card bx-sm"></i>{" "}
                <span> {widthState ? "" : "Bankings"}</span>
              </div>
            </Link>
          </li>

          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-cog bx-sm"></i>{" "}
                <span> {widthState ? "" : "Settings"}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className={styles.imgDiv}>
                <i class="bx bx-dots-horizontal-rounded bx-sm"></i>{" "}
                <span> {widthState ? "" : "More"}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={
          widthState ? styles.mainDivContent : styles.mainDivContentExtended
        }
      >
        <div className={styles.stickyDiv}>
          <Header />
        </div>
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
