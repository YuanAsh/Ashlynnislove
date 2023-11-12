import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I Love You Ash <br> All those times together with you and Everythings we have done together <br> Those are my precious Memories and <br> I wanna create much more beautiful memories with you Ash. <br> The Source of my Happiness is You My Little Princess. <br> Let's Be Together Forever Ash " />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
