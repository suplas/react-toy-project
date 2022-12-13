import axios from 'axios'
import { Provider } from 'mobx-react'
import { AppProps } from 'next/app'
import React from 'react'
import BaseStore from '../app/stores/BaseStore'
import CalendarStore from '../app/stores/CalendarStore'
import '../styles/globals.css'

const base = new BaseStore()
const calendar = new CalendarStore()

const store = {
  base,
  calendar,
}

const Page = ({ Component, pageProps }: AppProps, stars: any) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// Page.getInitialProps = async ctx => {
//   const { data } = await axios.get('index.tsx')

//   return { stars: data }
// }

export default Page
