import { BrowserRouter, Route, Routes } from 'react-router'

import { Error } from '@pages/error'
import { Home } from '@pages/home'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/*'
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  )
}
