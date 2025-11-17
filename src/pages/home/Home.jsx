import React from 'react'
import Hero from './Hero'
import SpareParts from './SpareParts'
import Equipment from './Equipment'
import EquipmentInventory from './EquipmentInventory'
import MarketSection from './MarketSection'
import ERIPlatform from './ERIPlatform'
import EquipmentInfo from './EquipmentInfo'
import Categories from './Categories'



function Home() {
  return (
    <div>
        <Hero />
        <MarketSection />
        {/* <Categories /> */}
        <SpareParts />
        <Equipment />
        <ERIPlatform />
        <EquipmentInventory />
        <EquipmentInfo />
    </div>
  )
}

export default Home