import Image from 'next/image'

export default function Home() {
  return (
    <main className='mainContent flex flex-col'>
      <div className='flex flex-col items-center justify-center p-48'>
        <h1 className='mainHeader flex'>Welcome</h1>
        <p className='mainUnder flex'>This is my website</p>
      </div>
    </main>
  )
}
