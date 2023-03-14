/* eslint-disable comma-dangle */
import React from 'react'
import styles from './portfolioCard.module.css'

export default function PortfolioCard({
  thumbnail,
  techOne,
  techTwo,
  details,
  title,
  url
}) {
  function handleMouseMove(el) {
    const target = el.target
    const rect = target.getBoundingClientRect()
    const x = el.clientX - rect.left
    const y = el.clientY - rect.top

    target.style.setProperty('--mouse-x', `${x}px`)
    target.style.setProperty('--mouse-y', `${y}px`)
  }

  function handleMouseLeave(el) {
    const target = el.target

    target.style.setProperty('--mouse-x', '$0px')
    target.style.setProperty('--mouse-y', '$0px')
  }

  return (
    <>
      <div
        className={`${styles.card} rounded-xl relative border-solid border-transparent border-[1px] h-full w-full bg-white bg-opacity-0 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:opacity-0 before:transition-opacity transition-shadow duration-300 before:duration-500 before:content-[''] hover:before:opacity-100 hover:shadow-xl hover:shadow-[#ffffff40] hover:drop-shadow-xl before:z-[3]`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${styles.card_border} rounded-border-inherit  left-0 h-full w-full opacity-100 transition-opacity duration-500 content-[''] group-hover:opacity-110 z-0`}
        >
          <div className='flex flex-col justify-between h-full rounded-border-inherit bg-fadenight'>
            <img src={thumbnail} className='rounded-t-xl' />

            <h2 className='p-4 text-center'>{title}</h2>

            <p className='px-8 pb-4 text-[#ffffffa6]'>{details}</p>
            <h3 className='flex justify-center gap-4 text-center'>
              <a className='relative z-10 cursor-pointer text-center'>
                Details
              </a>
              <a
                className='relative z-10 cursor-pointer text-center'
                href={url || undefined}
                target='_blank'
                rel='noreferrer'
              >
                Site ↗
              </a>
            </h3>
            <div className='flex justify-center p-5 gap-6'>
              <strong className='text-cyan-200 font-mono'>{techOne}</strong>
              <strong className='text-yellow-200 font-mono'>{techTwo}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
