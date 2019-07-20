import defaultPage from '../components/hocs/defaultPage'
import fetch from 'isomorphic-unfetch'
import { setToken } from '../utils/auth'
import Router from 'next/router'

const Button = ({ color, children, wide, mr, ...props }) => (
  <button {...props}>
    {children}
    <style jsx>{`
      button {
        background-color: ${color === 'green' ? '#b8ccb8' : 'bdccd4' };
        border-radius: 10px;
        border: none;
        box-shadow: 0px 2px 6px rgba(0,0,0,.2);
        padding: .5rem 1rem;
        ${ wide ? 'width: 100%' : '' };
        ${ mr ? 'margin-right: 10px' : ''};
      }
      :global(img) {
        width: 25px;
        height: auto;
      }
      button:hover {
        box-shadow: 0px 0px 6px rgba(0,0,0,.2);
      }
    `}</style>
  </button>
)

const Input = ({ ...props }) => (
  <>
    <input {...props} />
    <style jsx>{`
      input {
        display: block;
        border-radius: 25px;
        border: 1px solid grey;
        width: 100%;
        padding: 10px 20px;
      }
      input:hover {
        border: 1px solid #ccc;
      }
      input:focus {
        border: 1px solid ;
      }
    `}</style>
  </>
)

const Label = ({ ...props }) => (
  <>
    <label {...props} />
    <style jsx>{`
      label {
        display: block;
        padding: 10px 20px 0px 20px;
      }
    `}</style>
  </>
)

const Checkbox = ({ children, ...props }) => (
  <label>
    <input type="checkbox" {...props} />
    { children }
    <style jsx>{`
      label {
        padding: 10px 20px;
      }
      input {
        margin-right: 10px;
      }
    `}</style>
  </label>
)

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    checked: false,
    error: ""
  }

  onSubmit = async (e) => {
    e.preventDefault()

    const email = this.state.email
    const password = this.state.password
    const url = this.props.apiUrl

     // Проверяем на пустоту, если пустые - запрос на сервер не выполняем
     if (email === '' || password === '') {
      this.setState({ error: "Поля не должны быть пустыми!" })
      return
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      console.log(`sign-in: ${url}`)

      if (response.ok) {
        // TODO: берем токен и достаем из него информацию и сохраняем в куки
        const { token } = await response.json()
        console.log(`token: ${token}`)
        setToken(token)
        Router.push('/dashboard')
      } else {
        this.setState({ error: "Неверное имя пользователя или пароль. Попробуйте снова!" })
      }
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  onCheckboxChange = (e) => {
    this.setState({ checked: e.target.checked })
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="col-4 offset-md-4 text-center box">
          <h1>Вход</h1>
          <form className="text-left" onSubmit={this.onSubmit}>

            <Label htmlFor="email">Логин</Label>
            <Input type="email" name="email" id="email" placeholder="логин" onChange={this.onEmailChange} value={this.state.email} />

            <Label htmlFor="password">Пароль</Label>
            <Input type="password" name="password" id="password" placeholder="пароль" onChange={this.onPasswordChange} value={this.state.password} />

            <Checkbox defaultChecked={this.state.checked} onChange={this.onCheckboxChange}>Чужой компьютер</Checkbox>

            <div className="d-flex justify-content-between">
              <Button mr><img src="/static/bio.png" /></Button>
              <Button color="green" wide>Войти</Button>
            </div>
          </form>
        </div>
        <style jsx>{`
          .box {
            box-shadow: 0px 3px 6px rgba(0,0,0,.2);
            border-radius: 20px;
            padding: 2rem 1rem;
          }
          .bio {
            display: block;
            width: 40px;
            margin-right: 10px;
          }
          .login {
            flex: 1;
            width: 100%;
          }
          .input {
            border-radius: 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default defaultPage(SignIn)