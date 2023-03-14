import React from 'react'
import './imgGalery.css'
import { hotely, cloudCreate, gatoCraft, owlShop, ticTacToe } from '../content'

export function Presentations() {
  return (
    <figure className='head-img-galery'>
      <img loading='lazy' src={hotely.presentation} />
      <img loading='lazy' src={cloudCreate.presentation} />
      <img loading='lazy' src={ticTacToe.presentation} />
      <img loading='lazy' src={gatoCraft.presentation} />
      <img loading='lazy' src={owlShop.presentation} />
    </figure>
  )
}
