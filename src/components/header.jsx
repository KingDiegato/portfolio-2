import React from 'react'

export default function Header() {
  return (
    <header className='flex sticky flex-col lg:flex-row place-items-baseline place-content-evenly py-2 px-16 border-b border-fuchsia-500 w-screen'>
      <div>
        <div className='absolute w-[120px] lg:w-[400px] z-[-1] h-[120px] left-4 lg:translate-x-72 bg-fuchsia-500 opacity-20 blur-3xl rounded-full' />
        <h2 className='text-purple-100'>Diego Gonzalez Busnego</h2>
        <span className='text-fuchsia-100'>FrontEnd Developer</span>
      </div>
      <nav className='flex gap-6 flex-wrap text-[calc(0.75rem+0.4vw)]'>
        <a href='#Projects'>Projects</a>
        <a href='#About-Me'>About Me</a>
        <a href='#Skills'>Skills</a>
        <a
          href='https://descriptive-rover-eb3.notion.site/Diego-Gonzalez-fd5627ac11294a1490794ac2872f7ff0'
          target='_blank'
          rel='noreferrer'
        >
          Curriculum ↗
        </a>
        <a
          href='https://github.com/KingDiegato'
          target='_blank'
          rel='noreferrer'
        >
          Github ↗
        </a>
      </nav>
    </header>
  )
}
