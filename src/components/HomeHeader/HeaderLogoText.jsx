import React from "react";
import Image from "next/image";
import classes from "./HeaderLogoText.module.css";

const HeaderLogoText = () => {
  return (
    <div className={classes.header__logo__text}>
      <Image
        className={classes.header__rectangle}
        src={"/Rectangle.svg"}
        alt="Rectangle"
        width={877}
        height={865}
      />

      <div className={classes.logo__content}>
        <Image src={"/tooliify-icon.svg"} alt="logo" width={75} height={91} />
        <div>
          <Image
            src={"/tooliify-text.svg"}
            alt="logo"
            width={239}
            height={38}
          />
          <p>all in one</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogoText;
