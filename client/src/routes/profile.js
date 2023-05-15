import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAdmin } from '../features/admin/adminSlice'

export default function Profile () {
  const access_token = useSelector(state => state.admin.accessToken)
  const profile = useSelector(state => state.admin.admin)

  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchProfile () {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:3030/api/v1/admins/profile`,
        headers: {
          access_token: access_token
        }
      })

      const { data } = res.data
      dispatch(setAdmin(data))
    }

    fetchProfile()
  }, [dispatch])
  return (
    <div className='container'>
      <h3>{profile.id}</h3>
    </div>
  )
}
