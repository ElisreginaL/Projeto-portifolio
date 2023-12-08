import styles from './Navbar.module.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'


function Navbar(){
    return(
        <div className={styles.column}>
            <div className={styles.navbar}>
                <div className={styles.navbarItens}>
                    <ul>
                        <li><Nav.Link href='#Presentation'> Apresentação </Nav.Link> </li>
                        <li><Nav.Link href='#Skills'> Habilidades </Nav.Link></li>
                        <li><Nav.Link href='#Projects'> Projetos </Nav.Link></li>
                    </ul>
                </div>
                <div className={styles.navbarItens}>
                    <ul>
                        <li><a rel="noopener noreferrer" target="_blank" href='https://github.com/ElisreginaL'><FaGithub size={25}/></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/elisregina-matias-12555a299/'><FaLinkedinIn size={25}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar