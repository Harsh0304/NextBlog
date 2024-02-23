"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>NextLevel Blog</div>
      <div className={styles.nav__links}>
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
          Blog
        </Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
          ABout
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
