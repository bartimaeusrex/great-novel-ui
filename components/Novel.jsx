import React from 'react'

export default ({ id, title, name }) => (
  <div key={id} className="novel">
    {`${title} by ${name}`}
  </div>
)
