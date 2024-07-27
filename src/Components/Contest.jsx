// import React from 'react
import "../App.css";
import { cats } from "../Data/data";
import styles from "./Contest.module.css";

const Contest = () => {
  return (
    <section className={`section`}>
      <div className="text-center text-[#fff]">
        <h1 className="pb-[2rem] text-[2rem] ">MEME CONTEST HOW IT WORKS</h1>

        <p className="max-w-[1000px] mx-auto">
          Create your meme, send through our portal to enter competition. The
          community will vote on which is the best meme. The meme with the most
          votes will be featured in our top spot and WIN $STRANGER Airdrops.
        </p>
      </div>

      <div className={`sectionContainer`}>
        <div className={styles.cats}>
          {cats.map((cat) => (
            <img src={cat.image} key={cat.image}  className={styles.cat}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contest;