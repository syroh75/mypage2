import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { VideoItem } from '../types'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { VideoThumbnailVisual } from './VideoThumbnailVisual'
import { VideoDetailModal } from './VideoDetailModal'
import { Film, Filter, ChevronRight, PlusCircle } from 'lucide-react'

interface VideoPortfolioSectionProps {
  videos: VideoItem[]
  onOpenAdmin: () => void
}

export const VideoPortfolioSection: React.FC<VideoPortfolioSectionProps> = ({
  videos,
  onOpenAdmin,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null)

  const categories = ['ALL', 'AI Video', 'Visual Storytelling', 'Creative Direction', 'Short-form']

  const filteredVideos = videos.filter((video) => {
    if (!video.isPublic) return false
    if (selectedCategory === 'ALL') return true
    return video.category === selectedCategory
  })

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5 bg-[#08090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2 text-xs font-mono text-accent">
              <Film className="w-4 h-4" />
              <span>03 / VIDEO PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase">
              AI VIDEO WORKS
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              AI를 활용해 제작한 영상 작품 갤러리입니다. 각 작품을 클릭하여 기획 의도와 연출 방향, 사용 기술을 확인할 수 있습니다.
            </p>
          </motion.div>

          {/* Quick add / CMS link */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenAdmin}
              className="text-xs gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5 text-accent" />
              <span>작품 등록 (관리자)</span>
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-white/10 pb-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-accent" />
            <span>CATEGORY:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-accent text-ink-950 font-bold shadow'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveModalVideo(video)}
              className="cursor-pointer group"
            >
              <Card className="h-full overflow-hidden border border-white/10 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_-5px_rgba(163,230,53,0.15)] transition-all duration-300">
                {/* Visual Thumbnail with Hover Preview */}
                <VideoThumbnailVisual
                  title={video.title}
                  category={video.category}
                  patternIndex={video.accentColorPattern || idx + 1}
                  isHovered={hoveredId === video.id}
                />

                <CardHeader className="p-5 sm:p-6 pb-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="text-accent">{video.category}</span>
                    <span>{video.year}</span>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-1">
                    {video.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-5 sm:p-6 pt-0 space-y-4">
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {video.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {video.aiTools.slice(0, 3).map((tool, i) => (
                      <Badge key={i} variant="secondary" className="text-[10px] py-0 px-2">
                        {tool}
                      </Badge>
                    ))}
                    {video.aiTools.length > 3 && (
                      <span className="text-[10px] text-zinc-400 self-center">
                        +{video.aiTools.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>역할: {video.role}</span>
                    <span className="inline-flex items-center text-accent group-hover:translate-x-1 transition-transform">
                      상세 보기 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Detail Modal */}
        <VideoDetailModal
          video={activeModalVideo}
          onClose={() => setActiveModalVideo(null)}
        />
      </div>
    </section>
  )
}
