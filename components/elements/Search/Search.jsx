import { React, useState, useRef, useEffect } from "react";
import styles from "./Search.module.scss";
import Image from "next/image";

export default function Search({ list, label, subtext, placeholder, getValue }) {
  // search value state
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  // show dropdown
  const [dropDownShown, setDropDownShown] = useState(false);

  //   handle search and select
  const handleTypeSelect = (index) => {
    setDropDownShown(!dropDownShown);
    setSelectedValue(list[index]);
    setSearchValue(selectedValue);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setDropDownShown(true);
    setSearchValue(event.target.value.toLowerCase());
    console.log(searchValue);
  };
  // handle enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchValue(event.target.value.toLowerCase());
    }
    setDropDownShown(false);
  };

  const ref = useRef(null);

  useEffect(()=>{
    getValue(searchValue);
  })

  return (
    <div className={styles.dropDownInputContainer}>
      <label>
        {label} {subtext && <span>({subtext})</span>}
      </label>
      <div
        className={styles.dropDownInput}
        onClick={() => setDropDownShown(!dropDownShown)}
      >
        <input
          ref={ref}
          placeholder={placeholder}
          type="text"
          onChange={handleSearch}
          value={searchValue}
          onKeyDown={handleKeyDown}
        />

        <div>
          <Image
            src={"/images/search.svg"}
            alt="dropdown"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div
        className={styles.dropDownContainer}
        style={{ display: dropDownShown ? "block" : "none" }}
      >
        {list.map((type, index) =>
          type.toLowerCase().includes(searchValue)
            ? dropDownShown && (
                <div key={index} onClick={() => handleTypeSelect(index)}>
                  {type}
                </div>
              )
            : null
        )}
      </div>
    </div>
  );
}
