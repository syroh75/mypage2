import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CreativeNote } from '../types'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { BookOpen, FileText, X, ArrowUpRight } from 'lucide-react'

interface CreativeNotesSectionProps {
  notes: CreativeNote[]
}

export const CreativeNotesSection: React.FC<CreativeNotesSectionProps> = ({ notes }) => {
  const [selectedNote, setSelectedNote] = useState<CreativeNote | null>(null)

  return (
    <section id="notes" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5 bg-[#08090b]">
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
            <BookOpen className="w-4 h-4" />
            <span>05 / CREATIVE NOTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase">
            PRODUCTION ARCHIVE
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            콘텐츠 기획, 영상 연출 아이디어, AI 도구 워크플로, 비주얼 스타일 연구 등 전문적인 작업 기록과 인사이트입니다.
          </p>
        </motion.div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              onClick={() => setSelectedNote(note)}
              className="cursor-pointer group"
            >
              <Card className="h-full border border-white/10 group-hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <Badge variant="accentOutline" className="text-[10px]">
                      {note.category}
                    </Badge>
                    <span>{note.date}</span>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-2">
                    {note.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                    {note.summary}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white border-t border-white/5">
                    <span>작업 노트 열기</span>
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note Detail Modal */}
        <AnimatePresence>
          {selectedNote && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedNote(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#111317] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <Badge variant="accentOutline">{selectedNote.category}</Badge>
                  <button
                    onClick={() => setSelectedNote(null)}
                    className="p-1 rounded-md text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400">{selectedNote.date}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedNote.title}
                  </h3>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
                  {selectedNote.summary}
                </div>
                <div className="text-sm text-zinc-300 leading-loose whitespace-pre-line">
                  {selectedNote.content}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
