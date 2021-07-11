import React from "react";
import JobList from "./components/JobList/JobList";
import styles from "./App.module.css";
import HeaderSection from "./components/HeaderSection/HeaderSection";

const App: React.FC = () => {
  return (
    <div className={styles.wrappingDiv}>
      <HeaderSection />
      <JobList />
    </div>
  );
};

export default App;
