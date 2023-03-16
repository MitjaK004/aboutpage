import React from "react"
import Link from 'next/link'
import Head from 'next/head'

export default function Navbar() {
  return (
    <div className="mb-12">
      <Head>
       <nav className="bg-slate-900 w-screen h-14">
        <ul className="absolute list-none bg-slate-900 mt-[1%] right-0 rounded-lg">
          <li className="inline m-3 top-0 rounded-lg"><Link href='/' className="inline p-3 hover:bg-cyan-900 bg-slate-800 rounded-lg">Home</Link></li>
          <li className="inline m-3 top-0 rounded-lg"><Link href='/Game' className="inline p-3 hover:bg-cyan-900 bg-slate-800 rounded-lg">Game</Link></li>
        </ul>
      </nav>
     </Head>
    </div>
  )
}
