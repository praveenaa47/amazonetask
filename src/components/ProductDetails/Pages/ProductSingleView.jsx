import React from 'react'
import AmazonHeader from '../../../pages/Header'
import ProductDetailsPage from '../components/HeroSection'
import Review from '../components/Review'
import AmazonFooter from '../../../pages/Footer'

function ProductSingleView() {
  return (
    <div>
      <AmazonHeader/>
      <ProductDetailsPage/>
      <Review/>
      <AmazonFooter/>
      
    </div>
  )
}

export default ProductSingleView
