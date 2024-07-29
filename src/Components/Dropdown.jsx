import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { token } from "../Data/data";
import Token from "./Token";

const Dropdown = ({ tokenStateHandler, closeDropdown }) => {
  return (
    <div className={`${styles.card}`}>
      {token.map((token, i) => (
        <Token
          key={i}
          img={token.image}
          token={token.token}
          network={token.network}
          closeDropdown={closeDropdown}
          tokenStateHandler={tokenStateHandler}
        />
      ))}
    </div>
  );
};

export default Dropdown;
