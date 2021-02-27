import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'
export default function Layout({ children, title = 'Home | Xerorama' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <div className="container-fluid bg-greyXero h-full">{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string
}
