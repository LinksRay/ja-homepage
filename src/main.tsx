import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ConfigProvider} from 'antd'
import jaJP from 'antd/locale/ja_JP'
import days from 'dayjs'
import 'dayjs/locale/ja'

days.locale('ja')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={jaJP}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
