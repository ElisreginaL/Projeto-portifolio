import styles from './Presentation.module.css'
import BotaoA from './BotaoA'

function Presentation(){
    return(
        <div id="Presentation" className={styles.Presentation}>
            <h2>Bem-vindo(a) ao meu portifólio</h2>
            <h1> Olá, eu sou a Elisregina</h1>
            <p>
                Atualmente, aprimoro minhas habilidades em Front End (HTML, CSS, 
                JavaScript e React) e desenvolvo habilidades de back-end por meio do  
                curso de Formação em Tecnologia da Escola DNC, tenho experiência na 
                análise de qualidade e atualmente tenho o objetivo de transitar para 
                o cargo de desenvolvedora full stack. Minha abordagem é marcada por 
                constante aprendizado e rápida adaptação a novas tecnologias, 
                reforçadas por habilidades interpessoais e colaborativas.
            </p>
            <BotaoA link={'https://github.com/ElisreginaL'} text={'Conecte-se comigo!'}/> <br/>
        </div>
    )
}

export default Presentation