import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAccessToken, setAdmin } from '../features/admin/adminSlice'
import { useNavigate } from 'react-router'
import axios from 'axios'
export default function Login () {
  const [admin, setAdmin] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleChange (e) {
    e.preventDefault()
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit (e) {
    e.preventDefault()
    try {
      const res = await axios({
        method: 'POST',
        url: `http://localhost:3030/api/v1/admins/login`,
        data: admin
      })

      const { data } = await res.data

      const accessToken = localStorage.setItem('access_token', data)

      dispatch(setAccessToken(accessToken))
      navigate('/')
    } catch (err) {}
  }
  return (
    <div className='container'>
      <div class='row'>
        <div class='mx-auto col-10 col-md-8 col-lg-6'>
          <form class='form-example' action='' method='post'>
            <h1>Login Admin</h1>

            <div class='form-group'>
              <label for='email'>email:</label>
              <input
                type='text'
                class='form-control username'
                id='email'
                name='email'
                onChange={e => handleChange(e)}
              />
            </div>
            <div class='form-group'>
              <label for='password'>Password:</label>
              <input
                type='password'
                class='form-control password'
                id='password'
                placeholder='Password...'
                name='password'
                onChange={e => handleChange(e)}
              />
            </div>
            <button
              type='submit'
              class='btn btn-primary btn-customized mt-4'
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
