import styles from './conteudo.module.css';

const Conteudo = () => {
    return (
        <div className="container">
            <h2 className={styles.subtitulo}>O que é Cálculo IMC?</h2>
            <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.

            O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.

            Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.
            </p>
            <img className={styles.img} src="https://cdn.pixabay.com/photo/2022/02/22/14/46/body-scale-7028977_1280.png" alt="balança" />
        </div>
    )
}

export default Conteudo