import { unsetToken } from '../../utils/auth'
import securePage from '../../components/hocs/securePage'
import Router from 'next/router'
import Dashboard from '../../components/Dashboard'
import PageTitle from '../../components/PageTitle';
import TaskList from '../../components/mytasks/TaskList'
import TableList from '../../components/mytasks/TableList'

const tasks = [
  {
    id: 0,
    title: "Создам футбольную команду в Госдуме",
    responsible: "Газзаев Валерий",
    executor: "Газзаев Валерий",
    limitation: "2019/08/23",
    finish: true
  },
  {
    id: 1,
    title: "К 2035 году до Марса можно будет долететь за 80 суток",
    responsible: "Маск Илон",
    executor: "Газзаев Валерий",
    limitation: "2019/09/23",
    finish: false
  },
  {
    id: 2,
    title: "Создам футбольную команду в Госдуме",
    responsible: "Газзаев Валерий",
    executor: "Газзаев Валерий",
    limitation: "2019/08/08",
    finish: false
  },
  {
    id: 3,
    title: "К 2035 году до Марса можно будет долететь за 80 суток",
    responsible: "Маск Илон",
    executor: "Газзаев Валерий",
    limitation: "2019/08/08",
    finish: false
  },
  {
    id: 4,
    title: "Создам футбольную команду в Госдуме",
    responsible: "Газзаев Валерий",
    executor: "Газзаев Валерий",
    limitation: "2019/08/08",
    finish: true
  },
  {
    id: 5,
    title: "К 2035 году до Марса можно будет долететь за 80 суток",
    responsible: "Маск Илон",
    executor: "Газзаев Валерий",
    limitation: "2019/08/08",
    finish: false
  }
]

class DashboardPage extends React.Component {
  render() {
    const { loggedUser, userRole, currentUrl } = this.props
    return (
      <Dashboard userName={loggedUser} userRole={userRole} currentUrl={currentUrl}>
        <PageTitle>Мои задачи</PageTitle>
        <div className="row">
          <div className="col-md-4 text-center">
            <h5>Задачи</h5>
            <TaskList tasks={tasks} />
          </div>
          <div className="col-md-4 text-center">
            <h5>В работе</h5>
            <TaskList tasks={tasks} />
          </div>
          <div className="col-md-4 text-center">
            <h5>Отменен</h5>
            <TaskList tasks={tasks} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h5>Выполненные</h5>
            <TableList tasks={tasks} />
          </div>
        </div>
      </Dashboard>
    )
  }
}

export default securePage(DashboardPage)