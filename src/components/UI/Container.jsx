import React from 'react'

const Container = (props) => {
  return (
    <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>{props.children}</div>
  )
}

export default Container