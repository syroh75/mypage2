import React from 'react'
import { Play, Sparkles } from 'lucide-react'

interface ThumbnailVisualProps {
  title: string
  category: string
  patternIndex?: number
  isHovered: boolean
}

export const VideoThumbnailVisual: React.FC<ThumbnailVisualProps> = ({
  title,
  category,
  patternIndex = 1,
  isHovered,
}) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0a0c10] flex items-center justify-center border-b border-white/10 select-none">
      {/* Background geometric grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

      {/* Pattern 1: Orbital Conduits */}
      {patternIndex % 3 === 1 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-36 h-36 rounded-full border border-white/15 transition-transform duration-700 ${
              isHovered ? 'scale-125 border-accent/40 rotate-45' : 'scale-100'
            }`}
          />
          <div
            className={`w-20 h-20 rounded-lg border border-accent/30 transition-transform duration-500 ${
              isHovered ? 'rotate-90 scale-110' : 'rotate-12'
            }`}
          />
          <div className="absolute w-24 h-24 bg-accent/10 rounded-full blur-xl" />
        </div>
      )}

      {/* Pattern 2: Waveform & Hexagonal Array */}
      {patternIndex % 3 === 2 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-40 h-28 border border-white/10 rounded-xl transition-all duration-700 ${
              isHovered ? 'border-accent/40 -translate-y-1' : ''
            }`}
          />
          <div className="absolute flex space-x-1.5 items-center">
            {[40, 65, 85, 50, 95, 70, 45, 60].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-accent/60 rounded-full transition-all duration-300"
                style={{
                  height: isHovered ? `${Math.min(h * 1.3, 70)}px` : `${h * 0.4}px`,
                  opacity: 0.4 + (i % 3) * 0.25,
                }}
              />
            ))}
          </div>
          <div className="absolute w-28 h-28 bg-accent/10 rounded-full blur-2xl" />
        </div>
      )}

      {/* Pattern 3: Minimalist Horizon Lines */}
      {patternIndex % 3 === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-48 h-48 rounded-full border border-dashed border-white/20 transition-transform duration-1000 ${
              isHovered ? 'rotate-180 scale-110 border-accent/50' : ''
            }`}
          />
          <div className="w-16 h-16 border-2 border-accent/40 rounded-full flex items-center justify-center" />
          <div className="absolute w-32 h-1 bg-accent/30" />
        </div>
      )}

      {/* Dynamic scanlines on hover (video preview effect) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'
        }`}
      />

      {/* Center play icon overlay */}
      <div
        className={`relative z-10 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? 'bg-accent border-accent text-ink-950 scale-110 shadow-lg'
            : 'bg-black/50 border-white/20 text-zinc-300 backdrop-blur-sm'
        }`}
      >
        <Play className="w-5 h-5 ml-0.5" />
      </div>

      {/* Badges in visual frame */}
      <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-black/60 px-2 py-0.5 rounded border border-white/10 text-[10px] font-mono text-zinc-300">
        <Sparkles className="w-3 h-3 text-accent" />
        <span>{category}</span>
      </div>

      <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-0.5 rounded border border-white/10 text-[10px] font-mono text-zinc-400">
        PREVIEW AVAILABLE
      </div>
    </div>
  )
}
