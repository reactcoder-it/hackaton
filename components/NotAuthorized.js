import Link from 'next/link'

const Heading = ({ children }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        font-size: 50px;
        font-weight: 200;
        line-height: 40px;
        color: #e74c3c;
      }
    `}</style>
  </h1>
)

const Content = ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: 30px;
        font-weight: 200;
        line-height: 40px;
        color: #e74c3c;
      }
    `}</style>
  </p>
)

const ContentLink = ({ children, ...props }) => (
  <a {...props}>
    {children}
    <style jsx>{`
      a {
        color: #e74c3c;
        padding-bottom: 2px;
        border-bottom: 1px solid #c0392b;
        text-decoration: none;
        font-weight: 400;
        line-height: 30px;
        transition: border-bottom .2s;
      }
      a:hover {
        border-bottom-color: #e74c3c;
      }
    `}</style>
  </a>
)

export default () => (
  <div>
    <Heading>Вы не авторизованы!</Heading>
    <Content>
      <Link href='/signin' passHref><ContentLink>Войти</ContentLink></Link>
    </Content>
    <style jsx>{`
      div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)