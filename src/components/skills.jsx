import React from 'react'
import { logos } from '../content/index'

export default function Skills() {
  return (
    <section id='Skills' className='flex flex-col items-center'>
      <h2 className='text-6xl'>
        <strong>Skills</strong>
      </h2>
      <figure className='p-20 flex flex-wrap w-full justify-evenly'>
        <img className='aspect-square w-16 xl:w-36 lg:w-24' src={logos.React} />
        <img
          className='aspect-square w-16 xl:w-36 lg:w-24'
          src={logos.JavaScript}
        />
        <img
          className='aspect-square w-16 xl:w-36 lg:w-24'
          src={logos.TypeScript}
        />
        <img
          className='aspect-square w-16 xl:w-36 lg:w-24'
          src={logos.Python}
        />
        <img className='aspect-square w-16 xl:w-36 lg:w-24' src={logos.Figma} />
        <img className='aspect-square w-16 xl:w-36 lg:w-24' src={logos.HTML5} />
        <img className='aspect-square w-16 xl:w-36 lg:w-24' src={logos.CSS3} />
      </figure>
    </section>
  )
}
