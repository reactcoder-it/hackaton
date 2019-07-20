import { unsetToken } from '../../utils/auth'
import securePage from '../../components/hocs/securePage'
import Router from 'next/router'
import Dashboard from '../../components/Dashboard'
import PageTitle from '../../components/PageTitle';

class DashboardPage extends React.Component {
  render() {
    const { loggedUser, userRole, currentUrl } = this.props
    return (
      <Dashboard userName={loggedUser} userRole={userRole} currentUrl={currentUrl}>
        <PageTitle>Мои задачи</PageTitle>
      </Dashboard>
    )
  }
}

export default securePage(DashboardPage)