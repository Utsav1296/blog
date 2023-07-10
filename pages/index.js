import Head from 'next/head'
import styles from '../styles/Home.module.css'

// import Script from 'next/script'
// import Image from 'next/image'
// import Link from 'next/link'
// import Dummy from '../component/dummy'
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <style jsx>
        {
          `
          h2{
            font-size: 32px;
          }
          h3{
            font-size: 24px;
          }`
        }
      </style> */}

      <Head>
        <title>Hunting coder</title>
        <meta name="description" content="This is a blog by Utsav" />
        <meta name="keywords" content="next, utsav , hunting coder blog" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="/sc.js"></script> */}
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload" onLoad={() => {
        console.log([1, 2, 3, 4])
      }}>
      </Script> */}
      {/* <Dummy /> */}


      <main className={styles.main}>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeImg.jfif" width={320} height={158} quality={75} priority={false} /> */}
          <img src="/homeImg.jfif" alt="coder" width={158} height={158} className={styles.myImg} />
        </div>
        <h1 className={`${styles.title} mySpan dummy`}>
          &lt;CoderBlog&gt;
        </h1>
        {/* <span className={styles.description}>A blog by coder for coders. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima itaque ullam asperiores suscipit nulla.</span> */}


        <div className="blogs">
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button type='button' className={styles.btn}>Load more</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button type='button' className={styles.btn}>Load more</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button type='button' className={styles.btn}>Load more</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
