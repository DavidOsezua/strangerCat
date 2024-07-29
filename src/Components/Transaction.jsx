import React from "react";
import "../App.css";
import Table from "./Table";
import styles from "./Transaction.module.css";

const Transaction = () => {
  return (
    <section className={`section `}>
      <div className={`sectionContainer py-0 ${styles.transactionContainer}`}>
      <div>
        <p></p>
      </div>
        <Table />
      </div>
    </section>
  );
};

export default Transaction;
