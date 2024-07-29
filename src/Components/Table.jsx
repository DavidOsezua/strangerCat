// import React from "react"
import { data } from "../Data/data";
import styles from "./Table.module.css";

const HEADERS = ["Game", "User", "Action", "Amount", "Time"];

const Table = () => {
  return (
    <div className="table-responsive ">
      <table className={`${styles.tableStyle}`}>
        <thead>
          <tr>
            {HEADERS.map((th, index) => (
              <th className={`${styles.thStyle}`} key={index}>
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={
                (index + 1) % 2 === 0 ? "bg-[#7B548DB2]" : "bg-[#7B548D8C]"
              }
            >
              <td className={`${styles.tdStyle}`}>
                {" "}
                <div className="flex items-center gap-[3px]">
                  <img
                    src=""
                    className={`${styles.image}  w-[2rem] rounded-md`}
                  />
                  {item.Game}
                </div>
              </td>

              <td className={`${styles.tdStyle}`}>
                <div className="flex items-center">
                  <img src="" className={`${styles.UserImage}`} />
                  {item.User}
                </div>
              </td>

              <td
                className={`${styles.tdStyle} ${
                  item.Action === "ENTRY" ? "text-[#FFC72E]" : "text-[#56FF47]"
                }`}
              >
                {item.Action}
              </td>

              <td className={`${styles.tdStyle}`}>
                <div className="flex items-center">
                  <img src="" />
                  {item.Amount}
                </div>
              </td>

              <td className={`${styles.tdStyle} text-[#FF6665]`}>
                {item.Time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
