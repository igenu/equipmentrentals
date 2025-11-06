import React from 'react'
import Hero from './Hero'
import SpareParts from './SpareParts'
import Equipment from './Equipment'
import EquipmentInventory from './EquipmentInventory'
import MarketSection from './MarketSection'
// import ConstructionInsurance from './ConstructionInsurance'
import ERIPlatform from './ERIPlatform'
import EquipmentInfo from './EquipmentInfo'
import Products from './Products'


function Home() {
  return (
    <div>
        <Hero />
        <MarketSection />
        <SpareParts />
        <Equipment />
        <EquipmentInventory />
        {/* <ConstructionInsurance /> */}
        <ERIPlatform />
        <EquipmentInfo />
        {/* <Products /> */}
    </div>
  )
}

export default Home