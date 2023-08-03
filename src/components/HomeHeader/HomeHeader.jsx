import React from "react";
import Image from "next/image";

import classes from "./HomeHeader.module.css";
import Links from "./Links";
import Button from "../UI/Button.jsx";
import HeaderLogoText from "./HeaderLogoText";
import HeaderSocial from "./HeaderSocial";
import ExploreMore from "../UI/ExploreMore";

const HomeHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__head}>
        <Links />
        <Button>start now</Button>
      </div>

      <div className={classes.header__body}>
        <div className={classes.header__text}>
          <p>all in one</p>
          <p>plugins upsell sales</p>
          <p>we develop plugins.</p>
        </div>

        <HeaderLogoText />

        <HeaderSocial />

        <Button className={classes.header__btn}>
          start now
          <Image
            src={"/arrow-right.svg"}
            alt="arrow-right"
            width={24}
            height={24}
          />
        </Button>

        <ExploreMore />
      </div>
    </header>
  );
};

export default HomeHeader;
