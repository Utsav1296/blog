import React from 'react'

const Dummy = () => {
   return (
      <>
         <style jsx global>
            {`
          .dummy{
              background: yellow;
              padding:1rem 3rem;
              border-radius:12px;
          }
          `}
         </style>
         <div className='dummy'>I am dummy component</div>
      </>
   )
}

export default Dummy