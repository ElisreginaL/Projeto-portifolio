import styles from './Presentation.module.css';
import BotaoA from './BotaoA';
import { useState, useEffect, useMemo } from 'react';

function Presentation() {
    const [text, setText] = useState('');
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(100);

    const toRotate = useMemo(() => ['a Elisregina Lobo', 'desenvolvedora Front-End'], []);

    useEffect(() => {
        const toType = () => {
            let i = loop % toRotate.length;
            let fullText = toRotate[i];
            let updatedText;

            if (!isDeleting) {
                updatedText = fullText.substring(0, text.length + 1);
            } else {
                updatedText = fullText.substring(0, text.length - 1);
            }

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(150); // Adapte o período para aguardar antes de começar a deletar
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setDelta(100);
                setLoop(loop + 1);
            }
        };

        let ticker = setInterval(() => {
            toType();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, isDeleting, loop, toRotate]);

    return (
        <div id="Presentation" className={styles.Presentation}>
            <h2>Bem-vindo(a) ao meu portfólio</h2>
            <h1> Olá, eu sou {text}</h1>
            <p>
                Atualmente, aprimoro minhas habilidades em Front End (HTML, CSS,
                JavaScript e React) e desenvolvo habilidades de back-end por meio do
                curso de Formação em Tecnologia da Escola DNC, tenho experiência na
                análise de qualidade e atualmente tenho o objetivo de transitar para
                o cargo de desenvolvedora full stack. Minha abordagem é marcada por
                constante aprendizado e rápida adaptação a novas tecnologias,
                reforçadas por habilidades interpessoais e colaborativas.
            </p>
            <BotaoA link={'https://github.com/ElisreginaL'} text={'Conecte-se comigo!'} /> <br />
        </div>
    );
}

export default Presentation;
