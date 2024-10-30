import React from 'react'

import { getCurrentUser } from '../actions/getCurrentUser';
import RegisterClient from '../component/auth/RegisterClient';

const Register = async() => {
  const currentUser = await getCurrentUser();
  return (
    <div>
        <RegisterClient currentUser={currentUser}/>
    </div>
  )
}

export default Register