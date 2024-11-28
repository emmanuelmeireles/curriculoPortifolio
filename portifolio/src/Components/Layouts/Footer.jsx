import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../Layouts/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                <a href="https://www.linkedin.com/in/emmanuel-meireles-silva/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/meirelesemmanuel/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                <a href="https://www.facebook.com/profile.php?id=100089827215278" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/emmanuelmeireles" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span> Portifolio</span> &copy; 2024
            </p>
        </footer>
    );
}

export default Footer;
