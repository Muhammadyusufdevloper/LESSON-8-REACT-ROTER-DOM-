import React from 'react'
import error from"../../assets/image/notFound/error.jpg"

const NotFound = () => {
  return (
    <>
        <section>
            <div className='error__img'>
                <img src={error} alt="error img" />
            </div>
        </section>
    </>
  )
}

export default NotFound