
import styles from './BotaoB.module.css'

function BotaoB({text, link}){
    return(
        <div>
            <a href={link} rel="noopener noreferrer" target="_blank">
            <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

export default BotaoB