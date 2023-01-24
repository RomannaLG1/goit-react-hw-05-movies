import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = () => (
  <ContentLoader height="700" width="1200" viewBox="0 0 265 230">
    <rect x="15" y="15" rx="4" ry="4" width="1200" height="25" />
    <rect x="15" y="50" rx="2" ry="2" width="1200" height="150" />
    <rect x="15" y="230" rx="2" ry="2" width="1200" height="20" />
    <rect x="60" y="230" rx="2" ry="2" width="1200" height="20" />
  </ContentLoader>
)

Loader.metadata = {
  name: 'Didier Munezero',
  github: 'didiermunezero',
  description: 'Grid for content of head and body',
  filename: 'HeadBodyGrid',
}

