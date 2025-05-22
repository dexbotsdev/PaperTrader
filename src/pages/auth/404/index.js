import React from 'react'
import { Helmet } from 'react-helmet'
import Error404 from '@vb/components/Errors/404'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const System404 = () => {
  return (
    <div>
      <Helmet title="Page 404" />
      <Error404 />
    </div>
  )
}

export default System404
