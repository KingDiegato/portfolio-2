import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { RoughNotation } from 'react-rough-notation'
import { handleLoad, srcs } from '../content/kingImgs'

export default function AboutMe() {
  const [images, setImages] = useState(handleLoad(srcs))

  useEffect(() => {
    setImages(handleLoad(srcs))
  }, [images])
  return (
    <article id='About-Me' className='flex flex-col items-center my-[4rem]'>
      <h2 className='text-6xl font-bold'>About Me</h2>
      <section className='flex flex-col lg:flex-row items-center justify-evenly w-full'>
        <div>
          <p className='text-fuchsia-200 pb-10'>
            <strong className='text-5xl'>
              Hi! My name is{' '}
              <RoughNotation
                type='underline'
                color='yellow'
                animationDuration={800}
                show
                strokeWidth={3}
              >
                Diego
              </RoughNotation>
            </strong>
          </p>
          <p className='text-xl max-w-[50ch] pb-10'>
            FrontEnd Developer with Strong habilities in{' '}
            <RoughNotation
              show
              color='fuchsia'
              strokeWidth={2}
              type='box'
              animationDuration={800}
            >
              UI & UX Design
            </RoughNotation>
            <RoughNotation
              show
              type='box'
              color='skyblue'
              animationDuration={800}
              strokeWidth={2}
            >
              Excellent knowledge
            </RoughNotation>{' '}
            in HTML5, CSS3, JavaScript and ReactJS Developed Single Page
            Applications.
          </p>
          <p className='text-xl max-w-[50ch]'>
            i'm from Venezuela & 24 years old, i'm a CPA entering in the IT and
            prepared for solve business problems
          </p>
        </div>
        <figure>
          <div className='absolute w-[300px] h-[120px] -translate-x-72 bg-fuchsia-500 opacity-20 blur-3xl rounded-full' />
          <div className='absolute w-[200px] h-[220px] translate-x-72 bg-orange-500 opacity-20 blur-3xl rounded-full' />
          {(
            <img
              className='aspect-square w-96 object-contain rounded-full'
              alt='Images of my Favorite Cartoon'
              loading='lazy'
              src={images}
            />
          ) || <Skeleton width={384} height={384} />}
          <div className='absolute w-[400px] h-[120px] translate-x-72 bg-blue-500 opacity-20 blur-3xl rounded-full' />
        </figure>
      </section>
      <section className='flex flex-col items-center justify-evenly w-full mt-[4rem]'>
        <p className='text-xl lg:max-w-[100ch] max-w-[50ch] pb-10'>
          In addition to technical skills, i have strong communication and
          collaboration skills,{' '}
          <RoughNotation
            type='underline'
            show
            animationDuration={800}
            color='yellow'
            multiline
          >
            experience in community management and coaching
          </RoughNotation>{' '}
          in many areas. I should also stay up to date with the latest web
          development technologies and trends to learn to create cutting-edge
          websites and applications.
        </p>
        <p className='text-xl lg:max-w-[100ch] max-w-[50ch] pb-10'>
          I'm Trilingual{' '}
          <RoughNotation
            type='underline'
            show
            animationDuration={800}
            color='yellow'
            multiline
          >
            Spanish [native], Portuguese [native] and english [fluent],
          </RoughNotation>{' '}
          Currently i'm studying on my own and practicing everyday to improve my
          skills
        </p>
      </section>
    </article>
  )
}
