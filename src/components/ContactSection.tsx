import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Mail, Send, Check, Copy, ExternalLink, MessageSquare } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '프로젝트 협업 제안',
    message: '',
  })

  const contactEmail = 'contact@creativedirection.ai'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', type: '프로젝트 협업 제안', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5 bg-[#08090b]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2 text-xs font-mono text-accent">
            <Mail className="w-4 h-4" />
            <span>06 / CONTACT & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase">
            LET'S CREATE TOGETHER
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            AI 영상 제작, 콘텐츠 기획, 비주얼 스토리텔링 및 디지털 창작 프로젝트 문의와 협업 제안을 환영합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111317] space-y-6">
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-1">DIRECT INQUIRY</span>
                <h3 className="text-xl font-bold text-white tracking-tight">이메일 문의</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  프로젝트 제안서, 레퍼런스 및 세부 의뢰 내용을 전달해 주시면 신속하게 검토 후 회신드립니다.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate mr-2">
                  {contactEmail}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="h-8 px-3 text-xs gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>복사</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Inquiry Categories */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="text-xs font-mono text-zinc-400">주요 협업 분야</span>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary">AI 영상 제작 의뢰</Badge>
                  <Badge variant="secondary">비주얼 스토리텔링</Badge>
                  <Badge variant="secondary">콘텐츠 기획 및 디렉션</Badge>
                  <Badge variant="secondary">AI 캐릭터 개발</Badge>
                  <Badge variant="secondary">디지털 서비스 기획</Badge>
                </div>
              </div>
            </div>

            {/* Channels & Links */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111317] space-y-4">
              <span className="text-xs font-mono text-zinc-400 block">CHANNELS & NETWORKS</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#home"
                  className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-black/30 hover:border-accent text-xs font-mono text-zinc-300 hover:text-accent transition-colors"
                >
                  <span>YOUTUBE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#home"
                  className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-black/30 hover:border-accent text-xs font-mono text-zinc-300 hover:text-accent transition-colors"
                >
                  <span>VIMEO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#home"
                  className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-black/30 hover:border-accent text-xs font-mono text-zinc-300 hover:text-accent transition-colors"
                >
                  <span>INSTAGRAM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#home"
                  className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-black/30 hover:border-accent text-xs font-mono text-zinc-300 hover:text-accent transition-colors"
                >
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: In-page Consultation / Collaboration Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#111317] space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">협업 제안 양식</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  프로젝트의 목표와 일정을 기재해 주시면 신속하게 회신을 드립니다.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-3 rounded-xl bg-accent/10 border border-accent/30">
                  <Check className="w-8 h-8 text-accent mx-auto" />
                  <h4 className="text-base font-bold text-white">협업 문의가 전송되었습니다.</h4>
                  <p className="text-xs text-zinc-300">
                    기재해 주신 내용을 바탕으로 신속하게 연락드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">성함 / 담당자명</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="홍길동"
                        className="w-full h-11 px-3.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">이메일 주소</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@domain.com"
                        className="w-full h-11 px-3.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">문의 유형</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="프로젝트 협업 제안" className="bg-[#111317]">프로젝트 협업 제안</option>
                      <option value="AI 영상 제작 문의" className="bg-[#111317]">AI 영상 제작 문의</option>
                      <option value="콘텐츠 기획 및 크리에이티브 디렉션" className="bg-[#111317]">콘텐츠 기획 및 크리에이티브 디렉션</option>
                      <option value="캐릭터 및 디지털 프로젝트" className="bg-[#111317]">캐릭터 및 디지털 프로젝트</option>
                      <option value="기타 제휴 문의" className="bg-[#111317]">기타 제휴 문의</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">문의 내용 및 프로젝트 개요</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="프로젝트의 목적, 희망 일정, 작업 범위 등을 간략히 작성해 주세요."
                      className="w-full p-3.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full font-bold gap-2 text-sm h-12">
                    <Send className="w-4 h-4" />
                    <span>협업 제안 보내기</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
