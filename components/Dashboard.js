import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

export default ({ children, userName, userRole, currentUrl }) => (
  <div>
    <Header userName={userName} userRole={userRole} currentUrl={currentUrl} />
    <Sidebar userRole={userRole} />
    <Main userRole={userRole}>
      {children}
    </Main>
  </div>
)