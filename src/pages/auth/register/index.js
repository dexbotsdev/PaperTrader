import React from 'react'
import { Helmet } from 'react-helmet'
import Register from '@vb/components/Auth/Register'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const SystemRegister = () => {
  return (
    <div>
      <Helmet title="Register" />
      <Register />
    </div>
  )
}

export default SystemRegister
