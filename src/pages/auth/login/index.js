import React from 'react'
import { Helmet } from 'react-helmet'
import Login from '@vb/components/Auth/Login'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const SystemLogin = () => {
  return (
    <div>
      <Helmet title="Login" />
      <Login />
    </div>
  )
}

export default SystemLogin
