import styled from 'styled-components'
import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'

const Icones = styled.li`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

export default function IconesHeader(){
    const icones = [perfil, sacola]

    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone} /></Icone>
            ))}                    
        </Icones>
    )
}