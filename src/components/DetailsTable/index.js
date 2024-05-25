"use client";
import { useState } from "react";
import React from "react";
import styles from "./details.module.scss";
import Image from "next/image";

const DetailsTable = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        console.log(`Toggle is ${!isToggled ? 'ON' : 'OFF'}`);
    };
  return (
    <>
      <div className={styles.DetailsTable}>
        <div className={styles.tabsDiv}>
          <button> All Details</button>
          <button> Assigned Jobs</button>
          <button> Related Emails</button>
          <button> Candidate Questions</button>
          <button> Hotlists</button>
          <button> Related Deals</button>
          <button> Contact pitched </button>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tIntro}>
            <div>
              <h5> Assigned job to william Sample</h5>
            </div>
            <div className={styles.assignBtns}>
              <button> Assign to job</button>
              <button> View all Assigned jobs</button>
            </div>
          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
          <div className={styles.tableContentRows}>
            <div className={styles.nameTd}>
              <div className={styles.imgDiv}>
                <Image src="icons/m.svg" width={40} height={40} />
              </div>
              <div className={styles.contents}>
                <h5> Senior Product Manager</h5>
                <p> Recruit CRM</p>
              </div>
            </div>
            <div className={styles.tableTd}>
              <div className={styles.td}>
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span> Willlian Sample</span>
                </div>
                <div>
                  <i class="bx bx-time-five"></i>
                   <span> July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.tableTd}>
                <span className={styles.assigned}>
                    Assigned
                </span>
            </div>
            <div className={styles.tableTd}>
                <button>
                    View Files
                </button>
            </div>
            <div className={styles.tableTd}>
            <div className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
        </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTable;
