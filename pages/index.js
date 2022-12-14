import React from 'react'
import Head from 'next/head'
import Pagina from "../components/products"
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Carregando</div>
  }

  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>HOME</title>
      </Head>

      <Pagina />
    </div>
  )
}
