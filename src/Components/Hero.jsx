import React from "react";
import styles from "./Hero.module.css";
import "../App.css";
import Time from "./Time";
import { Cats, HeroImage } from "../assets";
import { visionCard } from "../Data/data";

const Hero = () => {
  return (
    <section className={`section ${styles.heroSection}`}>
      <div className={`sectionContainer ${styles.heroContainer}`}>
        <img src={HeroImage} className="w-[145%]" />

        <div className={styles.wrapper}>
          <img src={Cats} className={styles.catsImage} />

          <div className={styles.catsSecondColumn}>
            <h1 className={styles.catsHeading}>
              Stranger Cats Presale Starts in:
            </h1>

            <div className="flex justify-center">
              <Time />
            </div>

            <div></div>
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
