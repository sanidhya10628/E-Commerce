import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css'
import { Layout } from '../components/Layout';
import { Loader } from '../components/Loader';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  })

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  if (loading) {
    return (
      <StateContext>
        <Loader />
      </StateContext>
    )
  }
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
