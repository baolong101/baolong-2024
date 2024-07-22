import React from 'react'
import Banner from './banner'
import HomePage from './homePage'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
        <Banner/>
        <HomePage/>
    </>
  )
}

export default Page