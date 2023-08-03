import React from "react";
import classes from "./HeaderSocial.module.css";
import Image from "next/image";
import Link from "next/link";

const HeaderSocial = () => {
  return (
    <div className={classes.header__social}>
      <Image src={"/google.svg"} alt="social-logo" width={24} height={24} />
      <Image src={"/facebook.svg"} alt="social-logo" width={24} height={24} />
      <Image src={"/whatsapp.svg"} alt="social-logo" width={24} height={24} />
      <Image src={"/linkedin.svg"} alt="social-logo" width={24} height={24} />
    </div>
  );
};

export default HeaderSocial;
