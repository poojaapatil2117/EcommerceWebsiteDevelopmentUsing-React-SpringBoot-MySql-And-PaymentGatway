import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { mensShoesPage1 } from '../../../Data/mensShoesPage1'
import { mens_shirt } from '../../../Data/mens_shirt'
import { women_saree } from '../../../Data/women-saree'
import { women_dress } from '../../../Data/women_dress'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
      <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
      <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
      <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirts"}/>
      <HomeSectionCarousel data={women_saree} sectionName={"Women's Saree"}/>
      <HomeSectionCarousel data={women_dress} sectionName={"Women's Dress"}/>
      </div>
    </div>
  )
}

export default HomePage