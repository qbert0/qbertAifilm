import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../css/base.css'
import '../css/embla.css'
import { EmblaData } from './EmblaData'

interface Props {
  Embla : EmblaData[]
}

const OPTIONS: EmblaOptionsType = {loop : true}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



const Embla = ({Embla} : Props) => {
  return (

  <>
    <EmblaCarousel slide={Embla} slides={SLIDES} options={OPTIONS} />
  </>
)
}

export default Embla
