import { Terminal } from '../components/terminal'

export default function Home() {
  return (
    <main className="bg-black min-h-screen crt">
      <div className="cyber-bg" />
      <Terminal />
    </main>
  )
}

