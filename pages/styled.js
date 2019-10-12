import styled from 'styled-components'

const ParentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  border: 1px solid black;
  margin: auto;

  * {
    margin: auto;
    padding: .5rem 1rem;
    display: grid;
  }
`

const HeaderForm = styled.div`
  > p {
    font-size: 1.5em;
    font-weight: 600;
  }
`

const FormMainBody = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin: auto;

  label {
    text-align: left;
    text-transform: uppercase;
    font-weight: 600;
  }

  input {
    border: 1px solid black;
    padding: 5px 10px;
    caret-color: green;
  }
`

const StyleButton = styled.button`
  padding: 5px 20px;
  color: white;
  background-color: ${props => [props.bgColor]};
`

function Styled() {
  return (
    <ParentForm>
      <HeaderForm>
        <p>This is my page!!!</p>
      </HeaderForm>
      <FormMainBody>
        <h1>My Page</h1>
        <p>Hello world!</p>
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="text" />
        </label>
        <StyleButton>Login</StyleButton>
      </FormMainBody>
    </ParentForm>
  )
}

export default Styled