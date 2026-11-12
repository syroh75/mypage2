import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Play, Pause, Sparkles, ArrowDown, Film, Layers } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Brand identity badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-6"
        >
          <Badge variant="accentOutline" className="text-xs uppercase tracking-wider py-1 px-3">
            Creative Direction & AI Content Production
          </Badge>
          <div className="h-px w-12 bg-white/10 hidden sm:block" />
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
            PORTFOLIO 2026
          </span>
        </motion.div>

        {/* Hero Title: Screen scaling responsive, very bold, tight tracking */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.95]">
            IDEAS INTO <br className="hidden sm:inline" />
            <span className="text-accent">VISUAL</span> EXPERIENCES.
          </h1>

          <div className="pt-2 max-w-2xl space-y-2">
            <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-200 tracking-tight leading-relaxed">
              기획에서 영상까지, 아이디어를 독창적인 비주얼 콘텐츠로 구현합니다.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              AI와 크리에이티브 기술을 활용해 새로운 시각적 경험을 만들어 갑니다.
            </p>
          </div>
        </motion.div>

        {/* Brand statement box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 pt-6 border-t border-white/10 max-w-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="text-xs font-mono tracking-widest text-accent uppercase font-bold">
              IDEAS. VISUALS. IMPACT.
            </div>
            <p className="text-xs sm:text-sm text-zinc-400">
              아이디어를 기획하고, 비주얼로 구현하며, 새로운 경험을 만듭니다.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              className="text-xs font-bold gap-2"
              onClick={() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Film className="w-3.5 h-3.5" />
              <span>영상 포트폴리오 보기</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs gap-2"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>소개 및 핵심 역량</span>
            </Button>
          </div>
        </motion.div>

        {/* Featured Video Showreel Frame (Pure code, shapes & animation - NO external images) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 relative rounded-2xl border border-white/10 bg-[#111317] overflow-hidden group shadow-2xl"
        >
          {/* Header Bar */}
          <div className="px-5 py-3.5 border-b border-white/10 bg-black/40 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-mono font-semibold text-white tracking-wider">
                FEATURED SHOWREEL
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                AI CREATIVE DIRECTION 2026
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono text-zinc-400">4K UHD / 60FPS</span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-md hover:bg-white/10 text-zinc-300 hover:text-accent transition-colors"
                aria-label={isPlaying ? '일시정지' : '재생'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Pure Visual Video Canvas (Geometric / Ambient AI Graphic Frame) */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full bg-[#0a0b0e] flex items-center justify-center overflow-hidden">
            {/* Animated Canvas Geometric Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Concentric rotating radar rings */}
              <div
                className={`w-[480px] h-[480px] rounded-full border border-accent/20 absolute ${
                  isPlaying ? 'animate-[spin_24s_linear_infinite]' : ''
                }`}
              />
              <div
                className={`w-[320px] h-[320px] rounded-full border border-dashed border-white/15 absolute ${
                  isPlaying ? 'animate-[spin_16s_linear_infinite_reverse]' : ''
                }`}
              />
              <div
                className={`w-[160px] h-[160px] rounded-full border border-accent/30 absolute ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
              />

              {/* Dynamic Grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

              {/* Ambient radial lighting */}
              <div className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Overlay Center Info */}
            <div className="relative z-10 text-center px-6 max-w-xl space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-mono text-zinc-300">
                  AI-GENERATED MOTION DIRECTION
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                SYNTHESIS OF ART & ALGORITHM
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                아이디어에서 영상까지, 창작의 경계를 확장하는 비주얼 쇼릴
              </p>
            </div>

            {/* Bottom Playback HUD Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold">00:01:24</span>
                <span className="text-zinc-600">/</span>
                <span>00:03:40</span>
              </div>
              <div className="flex-1 mx-6 hidden sm:block">
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-[38%]" />
                </div>
              </div>
              <div className="text-[11px] text-zinc-400 tracking-wider">
                AUDIO MUTE / PRO RES
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center space-y-2 text-zinc-500 hover:text-accent transition-colors group"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">
              EXPLORE PROFILE
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-accent" />
          </a>
        </div>
      </div>
    </section>
  )
}
