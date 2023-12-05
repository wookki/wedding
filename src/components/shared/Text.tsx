import React from 'react'

const Text = ({ children }: { children: string }) => {
  const message = children.split('\n').map((str, idx, arr) => (
    <React.Fragment key={idx}>
      {str}
      {idx === arr.length - 1 ? null : <br />}
    </React.Fragment>
  ))

  return <div>{message}</div>
}

export default Text
