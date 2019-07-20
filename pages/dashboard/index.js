import securePage from '../../components/hocs/securePage'
import Dashboard from '../../components/Dashboard'
import PageTitle from '../../components/PageTitle'

class DashboardPage extends React.Component {
  render() {
    const { loggedUser, userRole, currentUrl } = this.props
    return (
      <Dashboard userName={loggedUser} userRole={userRole} currentUrl={currentUrl}>
        <PageTitle>Данные</PageTitle>
      </Dashboard>
    )
  }
}

export default securePage(DashboardPage)