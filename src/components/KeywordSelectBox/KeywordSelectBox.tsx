import React, { useEffect, useState } from "react";
import styles from "./KeywordSelectBox.module.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../modules/keywordList";

const KeywordSelectBox: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const searchOptions: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Ruby",
    "React",
    "Sass",
    "RoR",
    "Vue",
    "Django",
    "Frontend",
    "Fullstack",
    "Backend",
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setKeyword(selected));
  }, [selected]);

  return (
    <div className={styles.headerDiv}>
      <Typeahead
        id="keywords"
        multiple
        onChange={setSelected}
        options={searchOptions}
        selected={selected}
        maxResults={10}
      />
    </div>
  );
};

export default KeywordSelectBox;
