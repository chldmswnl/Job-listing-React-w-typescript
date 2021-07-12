import React from "react";
import KeywordSelectBox from "../KeywordSelectBox/KeywordSelectBox";
import styles from "./HeaderSection.module.css";
import bgImg from "../../img/bg-header-desktop.svg";

const HeaderSection: React.FC = () => {
  return (
    <div
      className={styles.wrappedHeader}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <KeywordSelectBox />
    </div>
  );
};

export default HeaderSection;
