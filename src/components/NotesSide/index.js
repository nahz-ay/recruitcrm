import React from "react";
import styles from "./notes.module.scss";

function NotesSide() {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.iconsDiv}>
          <span>
            <i className="bx bxs-file-blank"></i>
          </span>
          <span>
            <i className="bx bxs-phone-call"></i>
          </span>
          <span>
            <i className="bx bxs-sticker"></i>
          </span>
          <span>
            <i className="bx bxs-calendar-alt"></i>
          </span>
        </div>

        <div className={styles.allnotes}>
          <span className={styles.active}>All</span>
          <span>Notes & Calls</span>
          <span>Tasks</span>
          <span>Meeting</span>
          <span>Files</span>
        </div>
        <div className={styles.notesDiv}>
          <div className={styles.notesOne}>
            <div className={styles.head}>
              <p>
                <i className="bx bxs-file-blank"></i>
                Note
              </p>
              <span>To Do</span>
            </div>
            <p className={styles.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            </p>
            <h5>Association(s)</h5>
            <div className={styles.profFooter}>
              <div>
                <i className="bx bxs-user"></i>
                John Doe
              </div>
              <div>
                <i className="bx bx-time-five"></i>
                12.2023, 11:34 am
              </div>
            </div>
          </div>
        </div>
        <div className={styles.notesDiv}>
          <div className={styles.notesOne}>
            <div className={styles.head}>
              <p>
                <i className="bx bxs-file-blank"></i>
                Note
              </p>
              <span>To Do</span>
            </div>
            <p className={styles.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            </p>
            <h5>Association(s)</h5>
            <div className={styles.profFooter}>
              <div>
                <i className="bx bxs-user"></i>
                John Doe
              </div>
              <div>
                <i className="bx bx-time-five"></i>
                12.2023, 11:34 am
              </div>
            </div>
          </div>
        </div>
        <div className={styles.notesDiv}>
          <div className={styles.notesOne}>
            <div className={styles.head}>
              <p>
                <i className="bx bxs-file-blank"></i>
                Note
              </p>
              <span>To Do</span>
            </div>
            <p className={styles.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            </p>
            <h5>Association(s)</h5>
            <div className={styles.profFooter}>
              <div>
                <i className="bx bxs-user"></i>
                John Doe
              </div>
              <div>
                <i className="bx bx-time-five"></i>
                12.2023, 11:34 am
              </div>
            </div>
          </div>
        </div>
        <div className={styles.notesDiv}>
          <div className={styles.notesOne}>
            <div className={styles.head}>
              <p>
                <i className="bx bxs-file-blank"></i>
                Note
              </p>
              <span>To Do</span>
            </div>
            <p className={styles.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            </p>
            <h5>Association(s)</h5>
            <div className={styles.profFooter}>
              <div>
                <i className="bx bxs-user"></i>
                John Doe
              </div>
              <div>
                <i className="bx bx-time-five"></i>
                12.2023, 11:34 am
              </div>
            </div>
          </div>
        </div>
        <div className={styles.notesDiv}>
          <div className={styles.notesOne}>
            <div className={styles.head}>
              <p>
                <i className="bx bxs-file-blank"></i>
                Note
              </p>
              <span>To Do</span>
            </div>
            <p className={styles.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            </p>
            <h5>Association(s)</h5>
            <div className={styles.profFooter}>
              <div>
                <i className="bx bxs-user"></i>
                John Doe
              </div>
              <div>
                <i className="bx bx-time-five"></i>
                12.2023, 11:34 am
              </div>
            </div>
          </div>
        </div>
        <div className={styles.notesDiv}>
          <div className={styles.notesOne}>
            <div className={styles.head}>
              <p>
                <i className="bx bxs-file-blank"></i>
                Note
              </p>
              <span>To Do</span>
            </div>
            <p className={styles.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            </p>
            <h5>Association(s)</h5>
            <div className={styles.profFooter}>
              <div>
                <i className="bx bxs-user"></i>
                John Doe
              </div>
              <div>
                <i className="bx bx-time-five"></i>
                12.2023, 11:34 am
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesSide;
