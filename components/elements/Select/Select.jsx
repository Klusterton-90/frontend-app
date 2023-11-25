import { React, useState, useRef } from "react";
import styles from "./Select.module.scss";
import Image from "next/image";

export default function Select({list, label, subtext, placeholder}) {
  // selected  type state
  const [selectedType, setSelectedType] = useState(placeholder);
  // show dropdown
  const [dropDownShown, setDropDownShown] = useState(false);

  const handleTypeSelect = (index) => {
    setDropDownShown(!dropDownShown);
    setSelectedType(list[index]);
    console.log(selectedType);
  };

  const ref = useRef(null);

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
          placeholder=""
          type="text"
          readOnly
          value={selectedType}
        />

        <div>
          <Image
            src={"/images/arrow-down.svg"}
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
        {list.map((type, index) => {
          return (
            dropDownShown && (
              <div key={index} onClick={() => handleTypeSelect(index)}>
                {type}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
