// eslint-disable-next-line no-unused-vars
import React from 'react'
import { withRouter } from 'react-router-dom'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const PublicLayout = ({ children }) => {
  return children
}

export default withRouter(PublicLayout)
