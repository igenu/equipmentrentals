import React from 'react'
import Hero from './Hero'
import SpareParts from './SpareParts'
import Equipment from './Equipment'
import EquipmentInventory from './EquipmentInventory'
import MarketSection from './MarketSection'
import ERIPlatform from './ERIPlatform'
import Categories from './Categories'



function Home() {
  return (
    <div>
        <Hero />
        <Equipment />
        <SpareParts />
        <Categories />
        <MarketSection />
        <ERIPlatform />
        <EquipmentInventory />
    </div>
  )
}


export default Home