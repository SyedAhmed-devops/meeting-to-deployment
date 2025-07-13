import Head from 'next/head'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../components/App'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meeting to Deployment MVP</title>
      </Head>
      <App />
    </div>
  )
}
