const QuizPage = ({ id, activePage, children }) => (
  <div className={`quizpage ${id === activePage ? 'show' : '' }`}>
    {children}
    <style jsx>{`
      .quizpage.show {
        display: block;
      }
      .quizpage {
        display: none;
      }
    `}</style>
  </div>
)

export default class Quiz extends React.Component {
  state = {
    title: "",
    responsible: "",
    executor: "",
    text: "",
    limitation: "",
    activePage: 0
  }

  onNext = () => (
    this.setState(({ activePage }) => {
      return {
        activePage: activePage + 1
      }
    })
  )

  onPrev = () => (
    this.setState(({ activePage }) => {
      return {
        activePage: activePage - 1
      }
    })
  )

  onSubmit = async () => {

    const data = {
      title,
      responsible,
      executor,
      text,
      limitation,
      activePage
    }

    const url = this.props.apiUrl

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        // TODO: ok
      } else {
        this.setState({ error: "Неверное имя пользователя или пароль. Попробуйте снова!" })
      }
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  render() {

    const { title, responsible, executor, text, limitation, activePage } = this.state

    return (
      <div className="quiz">
        <QuizPage id={0} activePage={activePage}>
          <div className="quiz__inner">
            <div className="group">
              <label>Название проекта:</label>
              <input type="text" value={title} />
            </div>
            <div className="group">
              <label>Ответственный:</label>
              <input type="text" value={responsible} />
            </div>
            <div className="group">
              <label>Исполнитель:</label>
              <input type="text" value={executor} />
            </div>
            <div className="group">
              <label>Описание проекта:</label>
              <textarea value={text}></textarea>
            </div>
          </div>
          <div className="button-block">
            <button onClick={this.onNext}>Продолжить</button>
          </div>
        </QuizPage>
        <QuizPage id={1} activePage={activePage}>
          <div className="quiz__inner">
            <div className="group">
              <label>Министерство:</label>
              <input type="text" />
            </div>
            <div className="group">
              <label>Министр:</label>
              <input type="text" />
            </div>
            <div className="group">
              <label>Зам. министра:</label>
              <input type="text" />
            </div>
            <div className="group">
              <label>Описание проекта:</label>
              <textarea></textarea>
            </div>
            <div className="group">
              <label>Срок окончания проекта:</label>
              <input type="text" />
            </div>
          </div>
          <div className="button-block">
            <button onClick={this.onPrev}>Назад</button>
            <button onClick={this.onNext}>Продолжить</button>
          </div>
        </QuizPage>
        <QuizPage id={2} activePage={activePage}>
          <div className="quiz__inner">
            <table>
              <tr>
                <th>№</th>
                <th>Контроль выполнения</th>
                <th>Дата</th>
              </tr>
              <tr>
                <td>1</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><button>+</button></td>
              </tr>
            </table>
          </div>
          <div className="button-block">
            <button onClick={this.onPrev}>Назад</button>
            <button onClick={this.onSubmit}>Ok</button>
            <button>Печать</button>
          </div>
        </QuizPage>

        <style jsx>{`
          .quiz__inner {
            padding: 2rem 0 1rem 0;
          }
          .group {
            display: flex;
            padding-bottom: 10px;
          }
          .button-block {
            padding: 10px;
            text-align: center;
          }
          label {
            width: 200px;
          }
          input {
            width: 100%;
          }
          textarea {
            width: 100%;
          }
          button {
            background: #CCCCCC;
            box-shadow: 0 3px 20px rgba(0,0,0,.2);
            border: none;
            border-radius: 10px;
            padding: .5rem 2rem;
            margin: 0 10px;
          }
          table {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}