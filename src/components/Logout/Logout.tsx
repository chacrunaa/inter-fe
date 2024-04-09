import { useAuthStore } from '@stores/useGlobalStore'
import { Button } from 'react-bootstrap'

const Logout = () => {
    const setToken = useAuthStore(s => s.setToken)
    const hundleLoguot = ()=>{
        setToken('');
    }
  return (
    <Button className='btn btn-warning' onClick={hundleLoguot}>Выйти</Button>
  )
}

export default Logout