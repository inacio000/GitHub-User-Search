import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/global.scss'
import { RepoList } from './components/RepoList/RepoList'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RepoList/>
  </React.StrictMode>,
)
