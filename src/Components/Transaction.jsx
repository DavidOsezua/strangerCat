import React from "react";
import "../App.css";
import Table from "./Table";
import styles from "./Transaction.module.css";

const Transaction = () => {
  return (
    <section className={`section `}>
      <div className={`sectionContianer py-0 ${styles.transactionContainer}`}>
        <Table />
      </div>
    </section>
  );
};

export default Transaction;
