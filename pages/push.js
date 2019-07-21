import MlabService from '../utils/MlabService'

class PushPage extends React.Component {
  state = {
    promises: []
  }

  mlabService = new MlabService()

  componentDidMount() {
    const promises = this.mlabService.getAllPromises()
    console.log(promises)
    this.setState({ promises })
  }

  render() {
    console.log(this.promises)
    return (
      <div className="sss">
        {this.state.promises && this.state.promises.map(promise => {
          return <p>{promise.title}</p>
        })}
      </div>
    )
  }

}

export default PushPage