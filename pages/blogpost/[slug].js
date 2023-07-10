// "use client"
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';

import * as fs from 'node:fs';

const Slug = ({ data }) => {

   function createMarkup(value) {
      return { __html: value }
   }

   // console.log(data)
   // const router = useRouter();
   // const { slug } = router.query;
   // const [data, setData] = useState()


   // useEffect(() => {
   //    if (!router.isReady) return

   //    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
   //       .then((res) => res.json())
   //       .then((data) => setData(data))

   // }, [router.isReady])




   return <div className={styles.container}>



      <main className={styles.main}>
         <h1>{data?.title}</h1>
         <hr />
         <div>
            {data && <div dangerouslySetInnerHTML={createMarkup(data.content)}></div>}
         </div>
      </main>
   </div>;
};

// export async function getServerSideProps(context) {
//    console.log(context.req.url)
//    console.log(context.query.slug)
//    const slug = context.query.slug
//    let res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//    let data = await res.json()
//    return { props: { data } }
// }

export async function getStaticPaths() {
   return {
      paths: [
         { params: { slug: 'how-to-learn-next' } },
         { params: { slug: 'how-to-learn-js' } },
         { params: { slug: 'how-to-learn-python' } },
      ],
      fallback: true // false or 'blocking'
   };
}



export async function getStaticProps(context) {
   // console.log(context)
   // console.log(context.query.slug)
   const { slug } = context.params
   let data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
   return { props: { data: JSON.parse(data) }, }
}

export default Slug;
