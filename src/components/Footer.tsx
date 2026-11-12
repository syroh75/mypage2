import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#060708] py-12 px-5 sm:px-8 text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2.5">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-extrabold text-white tracking-tight uppercase">
            CREATIVE DIRECTION
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">AI CONTENT PRODUCTION</span>
        </div>

        <div className="text-center sm:text-right space-y-1">
          <p className="text-zinc-300">
            IDEAS INTO VISUAL EXPERIENCES.
          </p>
          <p className="text-zinc-400 text-[11px]">
            © 2026 Creative Portfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
