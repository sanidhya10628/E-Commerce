import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner, Features } from '../components/index'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Home = ({ products, bannerData, footerBannerData }) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Top Trending</h2>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={footerBannerData && footerBannerData[0]} />
      <Features />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  const footerBannerQuery = '*[_type == "footerbanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);


  return {
    props: {
      products, bannerData, footerBannerData
    }
  }
}

export default Home