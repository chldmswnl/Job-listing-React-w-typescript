import React, { useState } from "react";
import styles from "./KeywordSelectBox.module.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "bootstrap/dist/css/bootstrap.min.css";

const KeywordSelectBox: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const searchOptions: string[] = ["Javascript", "HTML", "CSS"];
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
