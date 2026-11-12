import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VideoItem } from '../types'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { X, Play, Pause, Sparkles, Layers, Calendar, UserCheck, Wrench, Film } from 'lucide-react'

interface VideoDetailModalProps {
  video: VideoItem | null
  onClose: () => void
}

export const VideoDetailModal: React.FC<VideoDetailModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!video) return null

  // Check if videoUrl is a valid youtube link or embed
  const getEmbedUrl = (url?: string) => {
    if (!url) return null
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/')
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'www.youtube.com/embed/')
    }
    return url
  }

  const embedUrl = getEmbedUrl(video.videoUrl)

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#111317] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div className="flex items-center space-x-3">
              <Badge variant="accentOutline">{video.category}</Badge>
              <span className="text-xs font-mono text-zinc-400">
                {video.year} / {video.role}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {video.title}
              </h2>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                {video.summary}
              </p>
            </div>

            {/* Video Player Display Screen */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#08090b] relative aspect-video flex items-center justify-center">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* High-fidelity procedural player interface */
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-[#0f1115] to-[#08090b]">
                  {/* Subtle geometric circles */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                    <div className="w-64 h-64 border border-accent/30 rounded-full animate-ping" />
                    <div className="w-96 h-96 border border-white/10 rounded-full" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-accent text-ink-950 flex items-center justify-center shadow-lg hover:bg-accent-hover hover:scale-105 transition-all mx-auto"
                      aria-label="재생"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </button>
                    <div>
                      <div className="text-xs font-mono text-accent">
                        {isPlaying ? 'PLAYING PREVIEW LOOP' : 'CLICK TO PREVIEW'}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">
                        4K Ultra High-Definition Visual Stream
                      </p>
                    </div>
                  </div>

                  {/* Player bottom control line */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 bg-black/60 px-4 py-2 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-accent font-bold">00:00:45</span>
                      <span>/ 00:02:30</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>1080p 60fps</span>
                      <span>STEREO</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 기획 의도 */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-2">
                <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>기획 의도 (INTENTION)</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {video.intention}
                </p>
              </div>

              {/* 스토리 및 연출 방향 */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-2">
                <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                  <Film className="w-3.5 h-3.5" />
                  <span>스토리 및 연출 방향 (DIRECTION)</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {video.direction}
                </p>
              </div>

              {/* 사용한 AI 도구와 제작 기술 */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-2">
                <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>사용한 AI 도구 & 제작 기술 (TOOLS)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {video.aiTools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 제작 연도 및 담당 역할 */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-2">
                <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>제작 연도 & 담당 역할</span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 space-y-1">
                  <div>
                    <span className="text-zinc-500">연도:</span> {video.year}
                  </div>
                  <div>
                    <span className="text-zinc-500">역할:</span> {video.role}
                  </div>
                </div>
              </div>
            </div>

            {/* 제작 과정 */}
            <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-2">
              <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>제작 과정 (PRODUCTION PROCESS)</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {video.process}
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex justify-end">
            <Button variant="outline" size="sm" onClick={onClose}>
              닫기
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
