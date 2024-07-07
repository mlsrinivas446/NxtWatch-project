import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactContext from '../../context/ReactContext'
import './index.css'
import {
  LoginContainer,
  LoginCardContainer,
  ImageElement,
  NameContainer,
  NameLabel,
  UsernameInput,
  CheckBoxContainer,
  CheckBoxElement,
  CheckBoxLabel,
  LoginButton,
} from './LoginStyledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    isError: false,
  }

  setUsername = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  setPasswordStatus = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    console.log(url)

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.status === 200) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({isError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {showPassword, errorMsg, isError} = this.state

    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const lodoImgUrl = isDarkMode ? (
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          )

          return (
            <LoginContainer isDarkMode>
              <LoginCardContainer
                isDarkMode={isDarkMode}
                onSubmit={this.submitForm}
              >
                {lodoImgUrl}
                <NameContainer>
                  <NameLabel htmlFor="username" isDarkMode>
                    USERNAME
                  </NameLabel>
                  <UsernameInput
                    isDarkMode
                    type="text"
                    id="username"
                    placeholder="rahul"
                    onChange={this.setUsername}
                  />
                </NameContainer>
                <NameContainer isDarkMode>
                  <NameLabel isDarkMode htmlFor="password">
                    PASSWORD
                  </NameLabel>
                  <UsernameInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="rahul@2021"
                    onChange={this.setPassword}
                    isDarkMode
                  />
                </NameContainer>
                <CheckBoxContainer>
                  <CheckBoxElement
                    type="checkbox"
                    id="checkboxId"
                    isDarkMode={isDarkMode}
                    onChange={this.setPasswordStatus}
                  />
                  <CheckBoxLabel htmlFor="checkboxId" isDarkMode={isDarkMode}>
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>

                <LoginButton isDarkMode>Login</LoginButton>
                {isError && <p className="error-Msg">*{errorMsg}</p>}
              </LoginCardContainer>
            </LoginContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default LoginForm
