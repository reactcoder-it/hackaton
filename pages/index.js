import Head from 'next/head'

class Counter extends React.Component {
  state = {
    counter: this.props.defaultValue
  }

  onDown = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter - 1
      }
    })
  }

  onUp = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter + 1
      }
    })
  }

  render() {
    return (
      <div className="counter" {...this.props}>
        <div className="counter__count">{this.state.counter}</div>
        <div className="counter__dislike" onClick={this.onDown}><i className="fas fa-thumbs-down"></i></div>
        <div className="counter__like" onClick={this.onUp}><i className="fas fa-thumbs-up"></i></div>
        <style jsx>{`
          .counter {
            display: inline-flex;
            align-items: center;
            position: absolute;
            top: 420px;
            right: 280px;
          }
          .counter__dislike,
          .counter__like {
            padding: 10px;
            border: 1px solid #888;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
          }
          .counter__like:hover,
          .counter__dislike:hover {
            background-color: #888;
          }
          .counter__dislike {
            color: red;
          }
          .counter__like {
            color: green;
          }
        `}</style>
      </div>
    )
  }
}

export default class extends React.Component {
  render() {
    return (
      <div className="hello">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css" />
        </Head>
        <img src="/static/index.png" />
        <Counter defaultValue={100} />
        <Counter defaultValue={56} style={{ top: 700 }} />
        
        <style jsx global>{`
          body {
            padding: 0;
          }
        `}</style>
        <style jsx>{`
          img {
            width: 100%;
            height: auto;
          }
          .hello {
            position: relative;
          }
        `}</style>
      </div>
    )
  }
}