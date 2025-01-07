'use client'

import { useEffect, useState } from 'react'
import { sleep } from '../utils/terminal'

interface TerminalOutputProps {
  content: string;
  typing?: boolean;
  className?: string;
}

export function TerminalOutput({ content, typing = false, className = '' }: TerminalOutputProps) {
  const [displayedContent, setDisplayedContent] = useState('')

  useEffect(() => {
    if (typing) {
      const typeText = async () => {
        setDisplayedContent('')
        for (let i = 0; i < content.length; i++) {
          await sleep(30)
          setDisplayedContent(prev => prev + content[i])
        }
      }
      typeText()
    } else {
      setDisplayedContent(content)
    }
  }, [content, typing])

  return (
    <pre className={`text-orange-500 whitespace-pre-wrap ${className}`}>
      {displayedContent}
    </pre>
  )
}

