'use client'

import Typewriter from 'typewriter-effect'

interface TypeAndDeleteProps {
  texts: string[]
  style: string
}

export const TypeAndDelete: React.FC<TypeAndDeleteProps> = ({ texts, style }) => {
  return (
    <div className={style}>
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
          delay: 50
        }}
      />
    </div>
  )
}
