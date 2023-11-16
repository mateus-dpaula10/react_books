import styled from 'styled-components'
import logoImg from '../../assets/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImg 
                src={logoImg} 
                alt="logo" 
            />
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}
