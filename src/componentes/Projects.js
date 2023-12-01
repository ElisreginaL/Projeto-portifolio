import styles from './Projects.module.css'
import portifolio from '../images/portifolio.svg'
import landingPage from '../images/landing-page.svg'
import Card from './Card.js'

function Projects(){
    return(
        
        <div>
            <div className={styles.Projects}>
                <div id="Projects">
                    <h1> Projetos </h1>
                </div>
                <div className={styles.projectsimg}>
                    <div>
                        <a rel="noopener noreferrer" target="_blank" href={'https://projetodncportifolio.netlify.app/'}>
                        <img width='500px' src={portifolio}  alt='error'></img>
                        </a>
                    </div>
                    <div className={styles.Card}>
                    <Card title={'Portifólio'} tech={'HTML e CSS'} 
                    resume={'Habilidades de Front-End adquiridas durante o primeiro projeto após duas semanas de curso.'}/>
                    </div>
                </div>
            </div>
            <br></br>
            <div className={styles.Projects}>
                <div className={styles.projectsimg}>
                    <div>
                        <a rel="noopener noreferrer" target="_blank" href={'https://projectlandingpageccxp.netlify.app/'}>
                        <img width='500px' src={landingPage}  alt='error'></img>
                        </a>
                    </div>
                    <div className={styles.Card}>
                    <Card title={'Landing Page'} tech={'HTML, CSS e Javascript FUNCIONA?'} 
                    resume={'Habilidades de Front-End adquiridas durante o segundo projeto após um mês de curso.'}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects