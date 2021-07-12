import React from "react";
import styles from "./Job.module.css";
import logo from "../../img/photosnap.svg";

const Job: React.FC = () => {
  return (
    <div className={styles.wrappedJobDiv}>
      <div className={styles.companyDiv}>
        <img src={logo} alt="logo" />
        <div className={styles.companyInfo}>
          <div>
            <span className={styles.companyName}>Company Name</span>
            <span className={styles.jobStatus}>New!</span>
          </div>
          <span className={styles.jobTitle}>Job title</span>
          <div>
            <span className={styles.jobInfo}>1d ago</span>
            <span className={styles.middleDot}>&#183; </span>
            <span className={styles.jobInfo}>Full Time</span>
            <span className={styles.middleDot}>&#183; </span>
            <span className={styles.jobInfo}>USA only</span>
          </div>
        </div>
      </div>
      <div className={styles.keywordDiv}>
        <span className={styles.keyword}>HTML</span>
        <span className={styles.keyword}>CSS</span>
        <span className={styles.keyword}>Javascript</span>
      </div>
    </div>
  );
};

export default Job;
