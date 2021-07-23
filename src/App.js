import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
// import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
// import Header from './components/Header/Header'
// import SignUp from './components/SignUp/SignUp'
// import SignIn from './components/SignIn/SignIn'
// import SignOut from './components/SignOut/SignOut'
// import ChangePassword from './components/ChangePassword/ChangePassword'

// import HeaderContainer from './components/Soleaf/DashHeaders/HeaderContainer'
import MainPage from './components/Soleaf/MainPage'
// import NewsTab from './components/Soleaf/RSSTabs/NewsTab'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    // const { msgAlerts, user } = this.state

    return (
      <div className='wrapper'>
        <Route path='/' render={() => (
          <MainPage msgAlert={this.msgAlert} setUser={this.setUser} />
        )} />
        {/* A route to <MainContentSection/> component w/ each category passed as a prop??? Not sure */}
      </div>
    )
  }
}

export default App
