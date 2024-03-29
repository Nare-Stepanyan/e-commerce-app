import React, { FC } from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";

type SearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon} />

      <input
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
