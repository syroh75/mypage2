import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VideoItem, CreativeProject } from '../types'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import {
  X,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Shield,
  Video,
  Layers,
  Lock,
  Unlock,
} from 'lucide-react'

interface AdminDrawerProps {
  isOpen: boolean
  onClose: () => void
  videos: VideoItem[]
  onUpdateVideos: (videos: VideoItem[]) => void
  projects: CreativeProject[]
  onUpdateProjects: (projects: CreativeProject[]) => void
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  videos,
  onUpdateVideos,
  projects,
  onUpdateProjects,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Direct access for user, protected by modal
  const [activeTab, setActiveTab] = useState<'videos' | 'projects'>('videos')

  // New video form state
  const [newVideo, setNewVideo] = useState<Partial<VideoItem>>({
    title: '',
    category: 'AI Video',
    year: '2026',
    role: 'Creative Direction & AI Production',
    summary: '',
    intention: '',
    direction: '',
    aiTools: ['Midjourney', 'Runway Gen-3', 'Sora', 'Premiere Pro'],
    process: '',
    videoUrl: '',
    isPublic: true,
  })

  const [aiToolsInput, setAiToolsInput] = useState('Midjourney, Runway Gen-3, Premiere Pro')

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newVideo.title) return

    const tools = aiToolsInput.split(',').map((t) => t.trim()).filter(Boolean)

    const item: VideoItem = {
      id: `vid-${Date.now()}`,
      title: newVideo.title || '새 영상 작품',
      category: newVideo.category || 'AI Video',
      year: newVideo.year || '2026',
      role: newVideo.role || 'Creative Direction & AI Production',
      summary: newVideo.summary || '기획 및 AI 기반 비주얼 영상 작품',
      intention: newVideo.intention || '아이디어의 비주얼 구체화',
      direction: newVideo.direction || '감각적인 비주얼 스토리텔링 연출',
      aiTools: tools.length > 0 ? tools : ['Generative AI', 'Video Edit'],
      process: newVideo.process || '기획 -> 프롬프트 설계 -> 비주얼 생성 -> 편집',
      videoUrl: newVideo.videoUrl || '',
      isPublic: newVideo.isPublic ?? true,
      accentColorPattern: Math.floor(Math.random() * 3) + 1,
    }

    onUpdateVideos([item, ...videos])
    // Reset form
    setNewVideo({
      title: '',
      category: 'AI Video',
      year: '2026',
      role: 'Creative Direction & AI Production',
      summary: '',
      intention: '',
      direction: '',
      aiTools: ['Midjourney', 'Runway Gen-3'],
      process: '',
      videoUrl: '',
      isPublic: true,
    })
    setAiToolsInput('')
  }

  const handleDeleteVideo = (id: string) => {
    onUpdateVideos(videos.filter((v) => v.id !== id))
  }

  const handleTogglePublic = (id: string) => {
    onUpdateVideos(
      videos.map((v) => (v.id === id ? { ...v, isPublic: !v.isPublic } : v))
    )
  }

  const handleMoveVideo = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= videos.length) return
    const updated = [...videos]
    const temp = updated[index]
    updated[index] = updated[targetIndex]
    updated[targetIndex] = temp
    onUpdateVideos(updated)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Slide-over Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-2xl bg-[#0e1014] border-l border-white/10 h-full overflow-y-auto z-10 flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40 sticky top-0 z-20">
            <div className="flex items-center space-x-2.5">
              <Shield className="w-5 h-5 text-accent" />
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  콘텐츠 관리 시스템 (CMS)
                </h3>
                <span className="text-[11px] text-zinc-400 font-mono">
                  ADMINISTRATION & CONTENT CONTROL
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 bg-[#121418] px-6">
            <button
              onClick={() => setActiveTab('videos')}
              className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center space-x-2 transition-colors ${
                activeTab === 'videos'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>영상 포트폴리오 관리 ({videos.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center space-x-2 transition-colors ${
                activeTab === 'projects'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>디지털 프로젝트 관리 ({projects.length})</span>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 space-y-8 flex-1">
            {activeTab === 'videos' && (
              <div className="space-y-8">
                {/* Add New Video Form */}
                <div className="p-5 rounded-xl border border-white/10 bg-[#14171d] space-y-4">
                  <div className="flex items-center space-x-2">
                    <Plus className="w-4 h-4 text-accent" />
                    <h4 className="text-sm font-bold text-white">신규 영상 작품 등록</h4>
                  </div>

                  <form onSubmit={handleAddVideo} className="space-y-3.5 text-xs">
                    <div>
                      <label className="text-zinc-300 block mb-1">작품명 *</label>
                      <input
                        type="text"
                        required
                        value={newVideo.title}
                        onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                        placeholder="예: CHRONICLES OF TOMORROW"
                        className="w-full h-9 px-3 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-zinc-300 block mb-1">카테고리</label>
                        <select
                          value={newVideo.category}
                          onChange={(e) =>
                            setNewVideo({
                              ...newVideo,
                              category: e.target.value as VideoItem['category'],
                            })
                          }
                          className="w-full h-9 px-2 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent"
                        >
                          <option value="AI Video">AI Video</option>
                          <option value="Visual Storytelling">Visual Storytelling</option>
                          <option value="Creative Direction">Creative Direction</option>
                          <option value="Short-form">Short-form</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-zinc-300 block mb-1">제작 연도</label>
                        <input
                          type="text"
                          value={newVideo.year}
                          onChange={(e) => setNewVideo({ ...newVideo, year: e.target.value })}
                          placeholder="2026"
                          className="w-full h-9 px-3 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-zinc-300 block mb-1">담당 역할</label>
                        <input
                          type="text"
                          value={newVideo.role}
                          onChange={(e) => setNewVideo({ ...newVideo, role: e.target.value })}
                          placeholder="Creative Direction, Prompt"
                          className="w-full h-9 px-3 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="text-zinc-300 block mb-1">유튜브 또는 영상 URL</label>
                        <input
                          type="text"
                          value={newVideo.videoUrl}
                          onChange={(e) => setNewVideo({ ...newVideo, videoUrl: e.target.value })}
                          placeholder="https://youtube.com/..."
                          className="w-full h-9 px-3 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-zinc-300 block mb-1">사용한 AI 도구 (쉼표로 구분)</label>
                      <input
                        type="text"
                        value={aiToolsInput}
                        onChange={(e) => setAiToolsInput(e.target.value)}
                        placeholder="Midjourney, Runway Gen-3, Sora, Topaz"
                        className="w-full h-9 px-3 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="text-zinc-300 block mb-1">작품 소개</label>
                      <textarea
                        rows={2}
                        value={newVideo.summary}
                        onChange={(e) => setNewVideo({ ...newVideo, summary: e.target.value })}
                        placeholder="작품의 핵심 내용을 간략히 소개"
                        className="w-full p-2.5 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-zinc-300 block mb-1">기획 의도</label>
                        <textarea
                          rows={2}
                          value={newVideo.intention}
                          onChange={(e) => setNewVideo({ ...newVideo, intention: e.target.value })}
                          placeholder="기획 배경 및 제작 목적"
                          className="w-full p-2 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent resize-none"
                        />
                      </div>
                      <div>
                        <label className="text-zinc-300 block mb-1">스토리 및 연출 방향</label>
                        <textarea
                          rows={2}
                          value={newVideo.direction}
                          onChange={(e) => setNewVideo({ ...newVideo, direction: e.target.value })}
                          placeholder="시각 연출과 톤앤매너"
                          className="w-full p-2 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent resize-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-zinc-300 block mb-1">제작 과정</label>
                      <textarea
                        rows={2}
                        value={newVideo.process}
                        onChange={(e) => setNewVideo({ ...newVideo, process: e.target.value })}
                        placeholder="아이디어 기획 -> 비주얼 프롬프트 -> 생성 -> 컷 편집"
                        className="w-full p-2 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent resize-none"
                      />
                    </div>

                    <Button type="submit" size="sm" className="w-full font-bold">
                      작품 등록하고 갤러리에 즉시 반영하기
                    </Button>
                  </form>
                </div>

                {/* Existing Videos Management List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase">
                    등록된 영상 목록 ({videos.length})
                  </h4>

                  <div className="space-y-2">
                    {videos.map((vid, idx) => (
                      <div
                        key={vid.id}
                        className="p-3.5 rounded-lg border border-white/10 bg-[#121418] flex items-center justify-between text-xs"
                      >
                        <div className="space-y-1 flex-1 mr-3">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                              {vid.title}
                            </span>
                            <Badge variant={vid.isPublic ? 'accentOutline' : 'outline'} className="text-[10px]">
                              {vid.isPublic ? '공개' : '비공개'}
                            </Badge>
                          </div>
                          <div className="text-[11px] text-zinc-400 font-mono">
                            {vid.category} | {vid.year} | {vid.role}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center space-x-1 shrink-0">
                          {/* Order Change */}
                          <button
                            onClick={() => handleMoveVideo(idx, 'up')}
                            disabled={idx === 0}
                            className="p-1 text-zinc-400 hover:text-white disabled:opacity-30"
                            title="위로 이동"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleMoveVideo(idx, 'down')}
                            disabled={idx === videos.length - 1}
                            className="p-1 text-zinc-400 hover:text-white disabled:opacity-30"
                            title="아래로 이동"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>

                          {/* Public/Private toggle */}
                          <button
                            onClick={() => handleTogglePublic(vid.id)}
                            className="p-1 text-zinc-400 hover:text-accent"
                            title={vid.isPublic ? '비공개로 전환' : '공개로 전환'}
                          >
                            {vid.isPublic ? (
                              <Eye className="w-3.5 h-3.5 text-accent" />
                            ) : (
                              <EyeOff className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDeleteVideo(vid.id)}
                            className="p-1 text-zinc-400 hover:text-red-400"
                            title="삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-white/10 bg-[#14171d] text-xs text-zinc-300">
                  <p className="font-bold text-white mb-1">디지털 및 창작 프로젝트 목록</p>
                  <p className="text-zinc-400">
                    AI 기반 캐릭터 제작, 반려견 콘텐츠, 웹앱 및 디지털 서비스 기획 결과물이 전시되고 있습니다.
                  </p>
                </div>

                <div className="space-y-2">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3.5 rounded-lg border border-white/10 bg-[#121418] space-y-1.5 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{proj.title}</span>
                        <Badge variant="secondary" className="text-[10px]">
                          {proj.category}
                        </Badge>
                      </div>
                      <p className="text-zinc-400 line-clamp-1">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="p-4 border-t border-white/10 bg-black/40 text-[11px] text-zinc-400 font-mono text-center">
            * 변경된 내용은 브라우저 로컬 저장소와 포트폴리오에 실시간으로 반영됩니다.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
