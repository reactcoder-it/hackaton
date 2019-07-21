const Task = ({ task }) => {
  console.log(task)
  return (
    <div className="task">
      <div className="id">id: {task.id}</div>
      <div className="title">{task.title}</div>
      <div className="responsible">Ответственный: {task.responsible}</div>
      <div className="executor">Исполнитель: {task.executor}</div>
      <div className="limitation">Срок: {new Date(task.limitation).toLocaleString()}</div>
      <style jsx>{`
        .task {
          text-align: left;
          border: 1px solid black;
          cursor: pointer;
          border-bottom: none;
          font-size: 14px;
        }
        .id {
          font-size: 10px;
        }
        .title {
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default ({ tasks }) => {
  console.log(tasks)
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task task={task} />
      ))}
      <style jsx>{`
        .tasks {
          max-height: 150px;
          overflow-y: scroll;
        }
      `}</style>
    </div>
  )
}