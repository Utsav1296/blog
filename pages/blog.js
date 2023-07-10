// "use client"

import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

import * as fs from 'node:fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = ({ blogsData, allCount }) => {
   const [count, setCount] = useState(2)
   const [blogs, setBlogs] = useState(blogsData)
   console.log(blogsData.length, allCount)
   const fetchData = async () => {
      let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
      console.log(d)
      setCount(prevCount => prevCount + 2)
      let data = await d.json()
      setBlogs(data)
   };

   return <div className={styles.container}>
      <main className={styles.main}>
         <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            hasMore={count !== allCount}
            loader={<h4>Loading...</h4>}
            endMessage={
               <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all the feed.</b>
               </p>
            }
         // // below props only if you need pull down functionality
         // refreshFunction={this.refresh}
         // pullDownToRefresh
         // pullDownToRefreshThreshold={50}
         // pullDownToRefreshContent={
         //    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
         // }
         // releaseToRefreshContent={
         //    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
         // }
         >
            {blogs.map((blog, i) => {
               return (<div key={blog.slug}>
                  <Link href={`/blogpost/${blog.slug}`}>
                     <h3 className={styles.blogItemh3}>{blog.title}</h3></Link>
                  <p className={styles.blogItemp}>{blog.metadesc.substr(0, 140)}...</p>
                  <Link href={`/blogpost/${blog.slug}`}><button type='button' className={styles.btn}>Read More</button></Link>
               </div>)
            })}
         </InfiniteScroll>
      </main>
   </div>
};

// export async function getServerSideProps(context) {
//    let data = await fetch('http://localhost:3000/api/blogs')
//    let blogs = await data.json()

//    return {
//       props: { blogs }, // will be passed to the page component as props
//    }
// }

export async function getStaticProps(context) {
   let data = await fs.promises.readdir("blogdata")
   let allCount = data.length;
   let myfile;
   let blogsData = [];
   for (let index = 0; index < 2; index++) {
      const item = data[index];
      // console.log(item)
      myfile = await fs.promises.readFile((`blogdata/${item}`), 'utf-8')
      blogsData.push(JSON.parse(myfile))
   }
   return {
      props: { blogsData, allCount }, // will be passed to the page component as props
   }
}


export default Blog
