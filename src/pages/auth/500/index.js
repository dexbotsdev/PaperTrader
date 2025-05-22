import React from 'react'
import { Helmet } from 'react-helmet'
import Error500 from '@vb/components/Errors/500'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const System500 = () => {
  return (
    <div>
      <Helmet title="Page 500" />
      <Error500 />
    </div>
  )
}

export default System500
