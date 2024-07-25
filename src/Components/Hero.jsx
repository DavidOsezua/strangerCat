import React from "react";
import styles from "./Hero.module.css";
import "../App.css";
import Time from "./Time";
import { Cats, HeroImage } from "../assets";
import { visionCard } from "../Data/data";

export const Line = () => {
  return (
    <span>
      <svg
        width="100%"
        height="10"
        viewBox="0 0 623 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 7.48528 2.51472 9.5 5 9.5V0.5ZM618 9.5H622.5V0.5H618V9.5ZM5 9.5H618V0.5H5V9.5Z"
          fill="url(#paint0_linear_56_56)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_56_56"
            x1="5"
            y1="5.5"
            x2="618"
            y2="5.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#12B76A" />
            <stop offset="1" stop-color="#425108" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

const Hero = () => {
  return (
    <section className={`section ${styles.heroSection}`}>
      <div className={`sectionContainer ${styles.heroContainer}`}>
        <img src={HeroImage} className="w-[145%]" />

        <div className={styles.wrapper}>
          <img src={Cats} className={styles.catsImage} />

          <div className={styles.catsSecondColumn}>
            <div className={styles.textContent}>
              <p className="font-bold">
                Total Raised = <span className="text-[#CE3DD8]">$0</span>
              </p>

              <p>
                <span className="text-[#CE3DD8]">0.01 </span>USDT = 1 $STRANGER
              </p>

              <p>Next Stage Price = 0.0125 USDT</p>
            </div>

            <div>
              {" "}
              <Line />
            </div>

            <div className="flex justify-between gap-5 mt-0">
              <div>
                <p className="text-[#CE3DD8] font-bold"> 0 $STRANGER</p>
                <p>Tokens Sold</p>
              </div>

              <div>
                <p>850,000 </p>
                <p>Remaining</p>
              </div>

              <div>
                <p>0% Sold</p>
              </div>
            </div>

            <div>

            </div>

            <button className={styles.btn}>Buy Token</button>

            <a href="/">How to buy</a>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className="">
            <h1 className="mb-[2rem] text-[2rem]">Deflationary Vision</h1>
            <p className={`${styles.text}`}>
              We have four burn initiatives to constantly support value: Airdrop
              Burns, Secret Team Burns, Roadmap Burns and Community Burns.
              Everything sent to the Solana wallet will be burned and everyone
              can participate and contribute to achieving scarcity for
              $STRANGER.
            </p>
          </div>

          <div className={`${styles.vision}`}>
            {visionCard.map((visionCard) => (
              <div key={visionCard.title} className={styles.visionCard}>
                <img src={visionCard.image} className="w-[50px]" />
                <h3>{visionCard.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
