import React, { useEffect } from "react";
import styles from "./JobList.module.css";
import Job from "../Job/Job";
import JobData from "../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../../modules/jobList";
import { RootState } from "../../modules";

const JobList: React.FC = () => {
  const dispatch = useDispatch();
  const jobListData = useSelector((state: RootState) => state.jobList.jobList);
  useEffect(() => {
    dispatch(setInfo(JobData));
  }, []);

  return (
    <div className={styles.wrappedListDiv}>
      <Job />
    </div>
  );
};

export default JobList;
