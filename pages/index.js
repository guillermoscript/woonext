import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Product from "../components/Products";
import fetch from 'isomorphic-unfetch';
import { siteUrl } from "../client-config";
import client from '../components/ApolloClient';
import { gql } from '@apollo/client';
// import '../styles/Style.css';


const PRODUCTS_QUERY = gql`query{
    products(first: 10) {
        nodes {
            averageRating
            slug
            image {
                link
                sourceUrl(size: LARGE)
                slug
            }
            name
            onSale
            shortDescription(format: RAW)
            link
            id
            description(format: RAW)
            ... on SimpleProduct {
                id
                name
                price(format: RAW)
            }
        }
    }
}`


export async function getStaticProps() {
    // try {
        const result = await client.query( { query: PRODUCTS_QUERY } )
        const productsData = await result.data.products.nodes
        return {
            props: { productsData }
        }
    // } catch (error) {
        return error
    // } 
}


function Index(props) {
    // console.log(props, '<<<<<<<<<<<<< prop');

    // console.warn(products, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    return (
        <Layout>
            {/* {allproducts.length ?  allproducts.map(product => <Product product={product} />) : ' espera '} */}
            <div className="product-cont">
                {/* {console.log(props, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')} */}
                { props.productsData.length ? 
                    props.productsData.map(product => <Product  key={product.id} product={product} />) 
                    : 'aasa'
                }
                
            </div>
        </Layout>
    )
}

// export async function getStaticProps() {
// //   try {   
//     const data = await fetch(siteUrl + '/getProducts')
//     console.log(data);
//     const productsData = await data.json()
//     console.log(productsData);
//     return { props: { productsData } }
// //   } catch (error) {
//     //   return error
// //   }
// }

export default Index
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
