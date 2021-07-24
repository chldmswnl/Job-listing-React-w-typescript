import React from "react";
import { JobItem } from "../JobList/JobList";
import styles from "./Job.module.css";

type JobProps = {
  item: JobItem;
};

function Job({
  item: {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    isNew,
    position,
    postedAt,
    role,
    tools,
  },
}: JobProps) {
  const keywordList = [role, level, ...languages, ...tools];
  return (
    <div className={styles.wrappedJobDiv}>
      <div className={styles.companyDiv}>
        <img src={logo} alt="logo" className={styles.logoImg}></img>
        <div className={styles.companyInfo}>
          <div className={styles.infoSentence}>
            <span className={styles.companyName}>{company}</span>
            {isNew && <span className={styles.jobStatus}>NEW!</span>}
            {featured && <span className={styles.featured}>FEATURED</span>}
          </div>
          <div className={styles.infoSentence}>
            <span className={styles.jobTitle}>{position}</span>
          </div>

          <div>
            <span className={styles.jobInfo}>{postedAt}</span>
            <span className={styles.middleDot}>&#183; </span>
            <span className={styles.jobInfo}>{contract}</span>
            <span className={styles.middleDot}>&#183; </span>
            <span className={styles.jobInfo}>{location}</span>
          </div>
        </div>
      </div>
      <div className={styles.keywordDiv}>
        {keywordList.map((keyword) => (
          <span className={styles.keyword} key={keyword}>
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Job;
