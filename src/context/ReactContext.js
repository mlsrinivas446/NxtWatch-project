import React from 'react'

const ReactContext = React.createContext({
  isDarkMode: false,
  changeThemeMode: () => {},
  navMenuStyle: () => {},
  menuList: [],
  savedList: [],
  onLike: () => {},
  onDisLike: () => {},
  onSave: () => {},
  getVideosListApi: () => {},
  homeVideoList: [],
  trendingVideoList: [],
  gamesVideoList: [],
  onRetryFailure: () => {},
  onChangeActiveId: () => {},
})

export default ReactContext
