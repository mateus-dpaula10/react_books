import { livros } from './dadosUltimosLancamentos'

export default function UltimosLancamentos(){
    return (
        <section>
            <h2>Último Lançamentos</h2>
            { livros.map( livro => (
                <img src={livro.src} />
            ) ) }
        </section>
    )
}