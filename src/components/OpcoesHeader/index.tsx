import styled from 'styled-components'

const Opcao = styled.ul`
    display: flex;
`

const Opcoes = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

export default function OpcoesHeader(){
    const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return (
        <Opcao>
            {textOpcoes.map((texto) => (
                <Opcoes>
                    <p>{texto}</p>
                </Opcoes>
            ))}            
        </Opcao>
    )
}
