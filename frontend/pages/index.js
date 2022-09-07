import Head from 'next/head'
import {useQuery} from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import Product from './components/Product'



export default function Home() {

  //fetch products from strapi
  const [results] = useQuery({query: PRODUCT_QUERY})
  const {data, fetching, error} = results;

  //check for data
  if (fetching) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  const products = data.products.data


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {products.map(product => (
          <Product key={product.attributes.Slug} product ={product}/>
        ))}

      </main>
    </div>
  )
}
