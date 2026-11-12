import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreativeProject } from '../types'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Layers, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

interface CreativeProjectsSectionProps {
  projects: CreativeProject[]
}

export const CreativeProjectsSection: React.FC<CreativeProjectsSectionProps> = ({ projects }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0]?.id || '')

  const currentProject = projects.find((p) => p.id === activeProjectId) || projects[0]

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5 bg-[#08090b]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2 text-xs font-mono text-accent">
            <Layers className="w-4 h-4" />
            <span>04 / CREATIVE PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase">
            DIGITAL & EXPERIMENTAL
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            영상 이외의 AI 기반 캐릭터 제작, 반려견 캐릭터 콘텐츠, 웹앱 및 디지털 서비스 기획 등 다양한 창작 결과물입니다.
          </p>
        </motion.div>

        {/* Project Selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectId(proj.id)}
              className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-200 ${
                activeProjectId === proj.id
                  ? 'border-accent bg-accent/10 shadow-[0_0_15px_rgba(163,230,53,0.15)]'
                  : 'border-white/10 bg-[#111317] hover:border-white/20'
              }`}
            >
              <span className="text-[10px] font-mono text-zinc-400 block mb-1">
                {proj.category}
              </span>
              <span
                className={`text-xs sm:text-sm font-bold block line-clamp-1 ${
                  activeProjectId === proj.id ? 'text-accent' : 'text-zinc-200'
                }`}
              >
                {proj.title}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Project Full Display Showcase */}
        {currentProject && (
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-[#111317] p-6 sm:p-10 space-y-8"
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <Badge variant="accentOutline" className="text-xs mb-2">
                  {currentProject.category}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentProject.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
                {currentProject.tools.map((tool, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {currentProject.description}
            </p>

            {/* Structured 3 Column Display: 기획 의도, 제작 과정, 결과물 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* 기획 의도 */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-3">
                <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>기획 의도 (INTENTION)</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentProject.intention}
                </p>
              </div>

              {/* 제작 과정 */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-3">
                <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>제작 과정 (PROCESS)</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentProject.process}
                </p>
              </div>

              {/* 결과물 */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/30 space-y-3">
                <div className="flex items-center space-x-2 text-accent text-xs font-mono font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>결과물 (OUTCOME)</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentProject.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
