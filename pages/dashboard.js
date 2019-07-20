import { unsetToken } from '../utils/auth'
import securePage from '../components/hocs/securePage'
import Router from 'next/router'

class Dashboard extends React.Component {
  onLogout = () => {
    unsetToken()
    Router.push('/signin')
  }

  render() {
    const { loggedUser, userRole } = this.props
    return (
      <div>
        Hi <strong>{loggedUser}</strong>!
        Hi <strong>{userRole}</strong>!
        <a onClick={this.onLogout}>Выход</a>
      </div>
    )
  }
}

export default securePage(Dashboard)