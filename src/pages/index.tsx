import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-slate-900 to-black px-24 text-center">
      <Image
        src="/icons/icon-144x144.png"
        alt="hero"
        width={144}
        height={144}
      />
      <h1 className="bg-gradient-to-r from-lipa to-tamagotchi bg-clip-text text-4xl font-bold text-transparent">
        Welcome to Luegopago Next.js App!
      </h1>
    </div>
  )
}
