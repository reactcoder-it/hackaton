import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const P = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

function Styled() {
  return (
    <>
      <Title>My Page</Title>
      <P>This is my page!!!</P>
    </>
  )
}

export default Styled