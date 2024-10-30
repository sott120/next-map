import React from "react";
import Link from "next/link";
import styles from "@/styles/header.module.scss";

interface Props {}

const HeaderComponent = ({}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <img src="" alt="헤더로고" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
