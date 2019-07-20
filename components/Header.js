import { unsetToken } from '../utils/auth'
import Router from 'next/router'
import Link from "next/link"

const UserAvatar = ({ userName, userRole }) => (
  <div className="user">
    <div className="title">
      <div className="name">{userName}</div>
      <div className="role">{userRole}</div>
    </div>
    <div className="avatar">
      <i className="far fa-user"></i>
    </div>
    <style jsx>{`
      .user {
        display: inline-flex;
        justify-content: space-between;
      }
      .avatar {
        width: 45px;
        height: 45px;
        background-color: #ccc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0px 2px 6px rgba(0,0,0,.2) inset;
        cursor: pointer;
        margin-left: 10px;
      }
      .role {
        font-size: 12px;
      }
    `}</style>
  </div>
)

const HeaderLink = ({ href, activeUrl, children }) => (
  <>
    <Link href={href}><a>{children}</a></Link>
    <style jsx>{`
      a {
        display: inline-block;
        background-color: ${href === activeUrl ? '#fff' : '#033059' };
        color: ${href === activeUrl ? '#033059' : '#fff' };
        padding: 5px 10px;
        text-decoration: none;
        border-radius: 10px;
      }
    `}</style>
  </>
)

export default class Header extends React.Component {
  onLogout = () => {
    unsetToken()
    Router.push('/signin')
  }

  render() {
    const { userName, userRole, currentUrl } = this.props
    return (
      <div className="header">
        <div className="logo">КОНТРОЛЬ.РФ</div>
        <ul className="menu">
          <li><HeaderLink href="/dashboard" activeUrl={currentUrl}>Данные</HeaderLink></li>
          <li><HeaderLink href="/dashboard/mytasks" activeUrl={currentUrl}>Мои задачи</HeaderLink></li>
          <li><HeaderLink href="/dashboard/mymessages" activeUrl={currentUrl}>Сообщения</HeaderLink></li>
          <li><HeaderLink href="/dashboard/mycalendar" activeUrl={currentUrl}>Календарь</HeaderLink></li>
        </ul>
        <UserAvatar userName={userName} userRole={userRole} />
        <button onClick={this.onLogout}>Выход</button>
        <style jsx>{`
          .logo {
            font-weight: 900;
            margin-right: 30px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #033059;
            color: #fff;
            padding: 10px 20px;
          }
          .menu {
            list-style-type: none;
            padding: 0;
            margin: 0;
            margin-right: auto;
            display: inline-flex;
            align-items: center;
          }
          a {
            display: inline-block;
            padding: 0 10px;
            color: #fff;
          }
          button {
            background: transparent;
            border: none;
            color: #fff;
          }
        `}</style>
      </div>
    )
  }
}