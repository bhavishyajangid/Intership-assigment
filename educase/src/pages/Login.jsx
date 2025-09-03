import React from 'react'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Btn from '../components/btn'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Heading Heading='Signin to your PopX account' />
      <form className='flex flex-col gap-5 mt-6'>
        <Input label={'Email Address'} placeholder={'Enter Email Address'} />
        <Input label={'Password'} placeholder={'Enter Password'} />
        <Link to="/setting">
          <Btn label={'Login'} />
        </Link>
      </form>

    </div>
  )
}

export default Login