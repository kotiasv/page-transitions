import Head from 'next/head';

import { motion as m } from 'framer-motion';
import { container, item } from '../animations';

export default function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: .75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className='text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16'>
      <Head>
        <title>Page transitions</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <div className='my-96 p-1 overflow-hidden'>
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: .5, delay: .5 }}
            className='text-6xl text-center lg:text-right lg:text-9xl'>Happy Pickle</m.h1>
        </div>
        <div className="flex justify-between">
          <m.div variants={container} initial='hidden' animate='show'>
            <div className='overflow-hidden'>
              <m.h2 variants={item}>Design</m.h2>
            </div>
            <div className='overflow-hidden'>
              <m.h2 variants={item}>Company</m.h2>
            </div>
            <div className='overflow-hidden'>
              <m.h2 variants={item}>2022</m.h2>
            </div>
          </m.div>
          <m.div variants={container} initial='hidden' animate='show'>
            <div className='overflow-hidden'>
              <m.h3 variants={item}>This pickle gonna make you smile.</m.h3>
            </div>
            <div className='overflow-hidden'>
              <m.h3 variants={item}>Scottish designs to make you happy.</m.h3>
            </div>
            <div className='overflow-hidden'>
              <m.h3 variants={item}>Click contact for cool transitions.</m.h3>
            </div>
          </m.div>
        </div>
      </main>
    </m.div>
  )
}
