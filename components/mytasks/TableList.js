export default ({ tasks }) => (
  <div className="tablelist">
    <table>
      <tr>
        <th>ID:</th>
        <th>Наименование:</th>
        <th>Ответственный:</th>
        <th>Исполнитель:</th>
        <th>Срок:</th>
        <th>Выполнено</th>
      </tr>
      
      {tasks.map(task => (
        <tr>
          <td key={task.id}>{task.id}</td>
          <td key={task.id}>{task.title}</td>
          <td key={task.id}>{task.responsible}</td>
          <td key={task.id}>{task.executor}</td>
          <td key={task.id}>{task.limitation}</td>
          <td key={task.id}>{task.finish ? 'выполнено' : 'невыполнено' }</td>
        </tr>
      ))}
    </table>
    <style jsx>{`
      table {
        width: 100%;
      }
      tr {
        border-bottom: 1px solid #ccc;
      }
      td {
        text-align: left;
      }
      .tablelist {
        max-height: 200px;
        overflow-y: scroll;
      }
    `}</style>
  </div>
)