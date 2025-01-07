'use client'

import { useState, useRef, useEffect } from 'react'

interface TerminalInputProps {
  onCommand: (command: string) => void;
  prompt?: string;
}

export function TerminalInput({ onCommand, prompt = "nikaruSystem: ~" }: TerminalInputProps) {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onCommand(input.trim().toLowerCase())
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <span className="text-orange-500 mr-2">{prompt}</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent text-orange-500 outline-none caret-orange-500"
        autoFocus
      />
    </form>
  )
}

