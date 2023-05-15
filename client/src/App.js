import logo from './logo.svg'
import './App.css'

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './routes/login'
import PublicRoutes from './routes/publicRoutes'
import PrivateRoutes from './routes/privateRoutes'
import Root from './routes/root'
import Profile from './routes/profile'

// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './features/counter/counterSlice'

// function Counter () {
//   const count = useSelector(state => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label='Increment value'
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label='Decrement value'
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }

function App () {
  return (
    <div>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        ></Route>
        <Route
          path='/'
          element={
            <PrivateRoutes>
              <Root />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path='/profile'
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
