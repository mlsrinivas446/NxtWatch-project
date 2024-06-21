import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import {IoHomeSharp} from 'react-icons/io5'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddFill} from 'react-icons/ri'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Games'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'

import ReactContext from './context/ReactContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const menuItemsList = [
  {
    id: 'HOME',
    logo: IoHomeSharp,
    text: 'Home',
    linkText: '/',
  },
  {
    id: 'TRENDING',
    logo: HiFire,
    text: 'Trending',
    linkText: '/trending',
  },
  {
    id: 'GAMES',
    logo: IoLogoGameControllerB,
    text: 'Gaming',
    linkText: '/gaming',
  },
  {
    id: 'SAVEDVIDEOS',
    logo: RiMenuAddFill,
    text: 'Saved Videos',
    linkText: '/saved-videos',
  },
]

class App extends Component {
  state = {
    isDarkMode: false,
    menuList: [...menuItemsList],
    savedList: [],
  }

  changeThemeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  navMenuStyle = id => {
    this.setState(prevState => ({
      menuList: prevState.menuList.map(each => {
        if (each.id === id) {
          return {...each, isActive: !each.isActive}
        }
        return {...each, isActive: false}
      }),
    }))
  }

  changeThemeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onSave = videoItemDetails => {
    console.log(videoItemDetails)
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedList.some(
        item => item.id === videoItemDetails.id,
      )
      if (!isAlreadySaved) {
        return {
          savedList: [...prevState.savedList, videoItemDetails],
        }
      }
      return null
    })
  }

  render() {
    const {isDarkMode, menuList, savedList} = this.state

    return (
      <ReactContext.Provider
        value={{
          isDarkMode,
          changeThemeMode: this.changeThemeMode,
          menuList,
          navMenuStyle: this.navMenuStyle,
          onSave: this.onSave,
          savedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route component={NotFound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
