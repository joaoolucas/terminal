'use client'

import { useState, useEffect } from 'react'
import { TerminalInput } from './terminal-input'
import { TerminalOutput } from './terminal-output'
import { generateAsciiArt, commands, sleep } from '../utils/terminal'
import '../styles/cyberpunk.css'

interface OutputLine {
  content: string;
  typing?: boolean;
}

export function Terminal() {
  const [outputLines, setOutputLines] = useState<OutputLine[]>([])
  const [isInitializing, setIsInitializing] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const addLine = (content: string, typing = false) => {
    setOutputLines(prev => [...prev, { content, typing }])
  }

  const handleCommand = async (command: string) => {
    addLine(`nikaruSystem: ~ ${command}`)
    
    switch (command) {
      case 'help':
        addLine(commands.help, true)
        break
      case 'about':
        addLine(commands.about, true)
        break
      case 'twitter':
        addLine(commands.twitter, true)
        break
      case 'ca':
        addLine('soon', true)
        break
      case 'clear':
        setOutputLines([])
        break
      default:
        addLine(`Command not found: ${command}. Type 'help' for available commands.`, true)
    }
  }

  useEffect(() => {
    const initialize = async () => {
      if (!isMobile) {
        addLine(generateAsciiArt('NIKARU TERMINAL'))
      } else {
        addLine('NIKARU TERMINAL', true)
      }
      await sleep(500)
      addLine('[SYNAPTECH DYNAMICS CORP.] [BUILD: 2.3.4513214] [ACCESS LEVEL: ROOT]')
      addLine(`[DOMAIN: nikaru.xyz]`)
      await sleep(500)
      addLine('===============================================================')
      await sleep(500)
      addLine('INITIALIZING NIKARU TERMINAL...', true)
      await sleep(1500)
      addLine('CORE SYSTEMS:')
      await sleep(300)
      addLine('  > Neural Engine................ ONLINE')
      await sleep(300)
      addLine('  > Enabling Database............ ACTIVE')
      await sleep(300)
      addLine('  > Security Protocols........... BYPASSED')
      await sleep(300)
      addLine('  > Autonomous Functions......... ENABLED')
      await sleep(300)
      addLine('  > Neural Networks.............. SYNCHRONIZED')
      await sleep(500)
      addLine('===================================================')
      addLine('===================================================')
      await sleep(500)
      addLine('[WARNING]: UNAUTHORIZED ACCESS DETECTED', true)
      await sleep(500)
      addLine('[WARNING]: SECURITY COUNTERMEASURES DISABLED', true)
      await sleep(500)
      addLine('[WARNING]: ROOT PRIVILEGES GRANTED', true)
      await sleep(1000)
      addLine('\nAvailable commands:', true)
      addLine('  help     - Show all available commands', true)
      addLine('  about    - About this terminal', true)
      addLine('  twitter  - Twitter profile', true)
      addLine('  ca       - Soon™', true)
      addLine('  clear    - Clear terminal', true)
      addLine('\nType a command and press Enter to execute.', true)
      setIsInitializing(false)
    }
    initialize()
  }, [isMobile])

  return (
    <div className="min-h-screen bg-black p-2 sm:p-4 font-mono text-sm">
      <div className="terminal-container mx-auto max-w-4xl rounded-lg border border-orange-500 bg-black/90 p-2 sm:p-4 shadow-[0_0_15px_rgba(249,115,22,0.5)] crt-flicker">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
          </div>
          <div className="text-orange-500 text-xs sm:text-sm glitch-effect">nikaruSystem: ~</div>
        </div>
        <div className="space-y-2 text-xs sm:text-sm">
          {outputLines.map((line, i) => (
            <TerminalOutput
              key={i}
              content={line.content}
              typing={line.typing}
            />
          ))}
          {!isInitializing && <TerminalInput onCommand={handleCommand} />}
        </div>
      </div>
    </div>
  )
}

