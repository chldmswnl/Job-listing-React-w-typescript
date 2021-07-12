import React from "react";
import styles from "./JobList.module.css";
import Job from "../Job/Job";

const JobList: React.FC = () => {
  return (
    <div className={styles.wrappedListDiv}>
      <Job />
    </div>
  );
};

export default JobList;
