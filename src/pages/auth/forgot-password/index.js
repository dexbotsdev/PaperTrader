import React from 'react'
import { Helmet } from 'react-helmet'
import ForgotPassword from '@vb/components/Auth/ForgotPassword'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const SystemForgotPassword = () => {
  return (
    <div>
      <Helmet title="Forgot Password" />
      <ForgotPassword />
    </div>
  )
}

export default SystemForgotPassword
