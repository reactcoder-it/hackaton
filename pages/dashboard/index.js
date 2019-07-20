import { unsetToken } from '../../utils/auth'
import securePage from '../../components/hocs/securePage'
import Router from 'next/router'
import Dashboard from '../../components/Dashboard'
import PageTitle from '../../components/PageTitle'

class DashboardPage extends React.Component {
  onLogout = () => {
    unsetToken()
    Router.push('/signin')
  }

  render() {
    const { loggedUser, userRole, currentUrl } = this.props
    return (
      <Dashboard userName={loggedUser} userRole={userRole} currentUrl={currentUrl}>
        <PageTitle>Данные</PageTitle>
        <a onClick={this.onLogout}>Выход</a>
      </Dashboard>
    )
  }
}

export default securePage(DashboardPage)