import React from 'react'
import { Helmet } from 'react-helmet'
import Lockscreen from '@vb/components/Auth/Lockscreen'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const SystemLockscreen = () => {
  return (
    <div>
      <Helmet title="Lockscreen" />
      <Lockscreen />
    </div>
  )
}

export default SystemLockscreen
