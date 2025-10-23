import React from 'react'
import AmazonHeader from '../../../pages/Header'
import AutoCarousel from '../components/Carousel'
import BrowsingHistoryCarousel from '../components/ProductList'
import ProductShowcase from '../components/RandomProducts'
import AmazonFooter from '../../../pages/Footer'

function ProductHome() {
  return (
    <div>
        <AmazonHeader/>
        <AutoCarousel/>
        <BrowsingHistoryCarousel/>
        <ProductShowcase/>
        <AmazonFooter/>
      
    </div>
  )
}

export default ProductHome
