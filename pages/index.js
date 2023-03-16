import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className='mx-[auto] w-[190px] bg-slate-900 rounded-lg p-[15px] text-center text-2xl'>Mitja Klajnšek</div>
      <div className='mx-[auto] mt-[20px] w-[70%] bg-slate-900 rounded-lg p-[15px] text-justify text-xl'>Hello my name is Mitja and I am a web developer. I can make nextjs and react apps combined with tailwind css.</div>
    </div>
  )
}
