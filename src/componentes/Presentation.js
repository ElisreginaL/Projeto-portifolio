import styles from './Presentation.module.css'
import BotaoA from './BotaoA'
import {useState, useEffect}  from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['a Elisregina Lobo', 'Desenvolvedora Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeliting, setIsDeliting] = useState(false);
    const period = 1000;
    const [delta, setDelta] =useState(100);

    useEffect(()=> {
        let ticker = setInterval(()=>{
            toType()
        }, delta);
        return () => {clearInterval(ticker)};
    },[text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0, text.length+1);
        
        setText(updatedText);

        if(!isDeliting && updatedText === fullText){
            setIsDeliting(true);
            setDelta(period);
        }
        else if (isDeliting && updatedText = ''){
            setIsDeliting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }






    return(
        <div id="Presentation" className={styles.Presentation}>
            <h2>Bem-vindo(a) ao meu portifólio</h2>
            <h1> Olá, eu sou Elisregina</h1>
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