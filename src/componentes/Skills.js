import styles from './Skills.module.css'
import html from '../images/skills/html.svg'
import css from '../images/skills/css.svg'
import javascript from '../images/skills/javascript.svg'
import react from '../images/skills/react.svg'

function Skills(){
    return(
        <div className={styles.Skills}>
            <div className={styles.myskills}  id="Skills">
                <h1>Habilidades</h1>
                <p>Conheça um pouco das minhas habilidades e conhecimentos</p>            
                <div>
                    <img src= {html} alt='error'/>
                    <img src= {css} alt='error'/>
                    <img src= {javascript} alt='error'/>
                    <img src= {react} alt='error'/>
                </div>
            </div>
        </div>
    )
}

export default Skills