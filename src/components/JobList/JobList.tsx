import React, { useEffect } from "react";
import styles from "./JobList.module.css";
import Job from "../Job/Job";
import JobData from "../../data.json";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { useState } from "react";

type JobItem = {
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
  keywordList: [];
};

function JobList() {
  const [jobListData, setJobListData] = useState([]);

  const selectedKeywordList = useSelector((state: RootState) => state.keyword);
  console.log(selectedKeywordList);
  function makeListWithKeyword() {
    let tempList: any = [];
    JobData.map((job: any) => {
      let tempKeywordList: any = [];
      if (job.languages.length > 0) {
        tempKeywordList.push(...job.languages);
      }
      if (job.tools.length > 0) {
        tempKeywordList.push(...job.tools);
      }
      tempKeywordList.push(job.role);
      tempKeywordList.push(job.level);
      tempList.push({ ...job, keywordList: tempKeywordList });
    });

    setJobListData(tempList);
  }

  // useEffect(() => {
  //   makeListWithKeyword();
  //   let tempList: any = [];
  //   if (jobListData.length > 0 && selectedKeywordList.length > 0) {
  //     jobListData.map((job: any) => {
  //       let count: number = 0;
  //       if (job.keywordList.length > 0) {
  //         for (let i = 0; i < job.keywordList.length; i++) {
  //           for (let j = 0; j < selectedKeywordList.length; j++) {
  //             if (job.keywordList[i] === selectedKeywordList[j]) {
  //               count++;
  //             }
  //           }
  //         }
  //         if (count === selectedKeywordList.length) {
  //           tempList.push(job);
  //         }
  //       }
  //     });
  //     setJobListData(tempList);
  //   }
  // }, [selectedKeywordList]);

  useEffect(() => {
    makeListWithKeyword();
  }, []);

  return (
    <div className={styles.wrappedListDiv}>
      {jobListData.map((job: JobItem) => (
        <Job item={job} key={job.id} />
      ))}
    </div>
  );
}

export default JobList;
