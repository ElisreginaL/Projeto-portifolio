import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                    <li><a rel="noopener noreferrer" target="_blank" href='https://github.com/ElisreginaL'><FaGithub size={25}/></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/elisregina-matias-12555a299/'><FaLinkedinIn size={25}/></a></li>
            </ul>
            <p>E-mail: elisregina.matias@gmail.com</p>
            <p>Elisregina Lobo © 2023</p>
        </div>
    )
}

export default Footer