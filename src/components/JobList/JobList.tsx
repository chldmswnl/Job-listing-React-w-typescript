import React, { useEffect } from "react";
import styles from "./JobList.module.css";
import Job from "../Job/Job";
import JobData from "../../data.json";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { useState } from "react";

export type JobItem = {
  company: string;
  contract: string;
  featured: boolean;
  id: number;
  languages: [];
  level: string;
  location: string;
  logo: string;
  isNew: boolean;
  position: string;
  postedAt: string;
  role: string;
  tools: [];
};

function JobList() {
  const [jobListData, setJobListData] = useState<any>([]);

  const selectedKeywordList = useSelector((state: RootState) => state.keyword);

  useEffect(() => {
    const itemList = JobData.filter(({ languages, tools, role, level }) => {
      let tempKeywordList = [role, level, ...tools, ...languages];
      return selectedKeywordList.every((keyword) =>
        tempKeywordList.includes(keyword)
      );
    });
    setJobListData(itemList);
  }, [selectedKeywordList]);

  return (
    <div className={styles.wrappedListDiv}>
      {jobListData.map((job: JobItem) => (
        <Job item={job} key={job.id} />
      ))}
    </div>
  );
}

export default JobList;
