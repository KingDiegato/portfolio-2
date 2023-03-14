import React from 'react'
import { hotely, cloudCreate, gatoCraft, owlShop, ticTacToe } from '../content'
import PortfolioCard from './portfolioCard'

export default function Projects() {
  return (
    <main className='flex flex-col items-center my-10 mx-auto'>
      <h2 className='text-6xl font-bold' id='Projects'>
        Projects
      </h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-16 mt-8 px-8'>
        <PortfolioCard
          title={cloudCreate.title}
          thumbnail={cloudCreate.thumbnail}
          techOne={cloudCreate.techOne}
          techTwo={cloudCreate.techTwo}
          details={cloudCreate.details}
        />
        <PortfolioCard
          title={hotely.title}
          thumbnail={hotely.thumbnail}
          techOne={hotely.techOne}
          techTwo={hotely.techTwo}
          details={hotely.details}
          url={hotely.url}
        />
        <PortfolioCard
          title={gatoCraft.title}
          thumbnail={gatoCraft.thumbnail}
          techOne={gatoCraft.techOne}
          techTwo={gatoCraft.techTwo}
          details={gatoCraft.details}
        />
        <PortfolioCard
          title={ticTacToe.title}
          thumbnail={ticTacToe.thumbnail}
          techOne={ticTacToe.techOne}
          techTwo={ticTacToe.techTwo}
          details={ticTacToe.details}
        />
        <PortfolioCard
          title={owlShop.title}
          thumbnail={owlShop.thumbnail}
          techOne={owlShop.techOne}
          techTwo={owlShop.techTwo}
          details={owlShop.details}
        />
      </section>
    </main>
  )
}
