import Navigation from "../Navigation/Navigation";
// styles
import styles from "../../styles/Header.module.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  const onCoordScroll = () => {
    return window.scrollY > 80 ? setScrolling(true) : setScrolling(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onCoordScroll);

    return () => window.removeEventListener("scroll", onCoordScroll);
  }, []);

  return (
    <header
      style={{
        zIndex: scrolling ? 9999 : 8,
        backgroundColor: scrolling
          ? "rgba(21, 38, 50, 0.8)"
          : "rgba(21, 38, 50, 0.1)",
        backdropFilter: "blur(8px)",
        boxShadow: scrolling && "2px 11px 17px -12px rgba(0, 0, 0, 0.2)",
      }}
      className={styles.header}
    >
      <Navigation />
    </header>
  );
}
