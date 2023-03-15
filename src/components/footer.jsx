import React from 'react'
import CloudinarySvg from '../svg'

export default function Footer() {
  return (
    <footer className='flex flex-col-reverse lg:flex-row border-t-2 h-[22rem] lg:h-[16rem] justify-evenly items-center'>
      <div>
        <a
          href='https://www.cloudinary.com'
          className='text-xl'
          target='_blank'
          rel='noreferrer'
        >
          Support Your Images with <CloudinarySvg />
        </a>
        <br />
        <a
          className='text-xl'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          target='_blank'
          rel='noreferrer'
        >
          The secret to be the best developer
        </a>
      </div>
      <div>
        <h2>Contact me:</h2>
        <nav className='text-xl'>
          <ul>
            <li>
              <a>Discord as Diegato#4880</a>
            </li>
            <li>
              <a
                href='linkedin.com/in/diego-gonzalez-950aa422b/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn ↗
              </a>{' '}
              <a
                href='https://twitter.com/Diegato99'
                target='_blank'
                rel='noreferrer'
              >
                Twitter ↗
              </a>
            </li>
            <li className='text-[#ffffffa1]'>gonzalezbusnego@gmail.com</li>
            <li className='text-[#ffffffa1]'>+58 424 375 56 21</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
