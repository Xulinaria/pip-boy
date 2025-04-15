import { BrowserRouter, Route, Routes } from 'react-router'

import { Error } from '@pages/error'
import { Home } from '@pages/home'

import { AppLayout } from './app-layout'

const IN_DEV = <>В разработке</>

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/habit'
            element={IN_DEV}
          />
          <Route
            path='/economy'
            element={IN_DEV}
          />
          <Route
            path='/trello'
            element={IN_DEV}
          />
          <Route
            path='/book'
            element={IN_DEV}
          />
          <Route
            path='/time-tracker'
            element={IN_DEV}
          />
          <Route
            path='/game'
            element={IN_DEV}
          />
          <Route
            path='/about'
            element={IN_DEV}
          />
          <Route
            path='/version'
            element={IN_DEV}
          />
          <Route
            path='/*'
            element={<Error />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
