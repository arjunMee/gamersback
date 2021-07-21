import React from 'react'

function Stats({ defaultData, data }) {
  return (
    <div
      style={{
        borderBottom: '1px solid #fff3',
        maxWidth: '250px',
        marginTop: '20px',
        paddingBottom: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
      }}
    >
      <p>{defaultData}</p>
      <span>{data}</span>
    </div>
  )
}

export default Stats
