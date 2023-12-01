import BotaoB from './BotaoB.js'
import styles from './Card.module.css'

function Card({title, tech, resume }){
    return(
    <div>
        <h2>{title}</h2>
        <p><strong>Tecnologia: </strong>{tech}</p>
        <p className={styles.resume}>{resume}</p>
        <BotaoB link={'https://github.com/ElisreginaL'} text={'Acesse o repositório'}/>
    </div>
    )
}

export default Card