
import styles from './BotaoA.module.css'

function BotaoA({text, link}){
    return(
        <a rel="noopener noreferrer" target="_blank" href={link}>
            <div>
                <button className={styles.btn}>{text}</button>
            </div>
        </a>
    )
}

export default BotaoA