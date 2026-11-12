import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Video, Lightbulb, Box, Clock, Sparkles } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5 bg-[#08090b]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2 text-xs font-mono text-accent">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>02 / ABOUT & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase">
            CREATIVE IDENTITY
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Creative Direction & AI Content Production 중심의 전문 영역과 창작 역량을 소개합니다.
          </p>
        </motion.div>

        {/* 가) 맨 위 한 줄 소개 — 제가 어떤 사람인지 한 문장으로 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#111317]">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="accentOutline" className="text-xs font-bold">
                가) 한 줄 소개
              </Badge>
              <span className="text-xs font-mono text-zinc-400">CORE IDENTITY</span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
              기획에서 영상까지, 아이디어를 독창적인 비주얼 콘텐츠로 구현하며 AI와 크리에이티브 기술을 활용해 새로운 시각적 경험을 만들어 갑니다.
            </p>
          </div>
        </motion.div>

        {/* 나) 보여 줄 것 세 가지 — 제가 할 수 있는 일을 세 덩어리로 */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Badge variant="accentOutline" className="text-xs font-bold">
              나) 보여 줄 것 세 가지
            </Badge>
            <span className="text-xs font-mono text-zinc-400">THREE PILLARS</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:border-accent/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 transition-colors">
                    <Video className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">PILLAR 01</span>
                  <CardTitle className="text-lg sm:text-xl">
                    AI 영상 제작 & 비주얼 연출
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    AI 도구와 제작 기술을 활용하여 아이디어를 고화질 영상으로 구현합니다. 기획 의도와 비주얼 연출 방향에 맞춘 스토리텔링 영상을 제작합니다.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-[11px]">AI Video Production</Badge>
                    <Badge variant="secondary" className="text-[11px]">영상 연출</Badge>
                    <Badge variant="secondary" className="text-[11px]">Visual Storytelling</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:border-accent/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 transition-colors">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">PILLAR 02</span>
                  <CardTitle className="text-lg sm:text-xl">
                    콘텐츠 기획 & 크리에이티브 디렉션
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    단순 생성을 넘어 메시지와 구조를 갖춘 콘텐츠를 기획합니다. 브랜드 및 숏폼 콘텐츠 기획, 콘셉트 도출, 제작 프로세스를 총괄합니다.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-[11px]">Creative Direction</Badge>
                    <Badge variant="secondary" className="text-[11px]">콘텐츠 기획</Badge>
                    <Badge variant="secondary" className="text-[11px]">브랜드·숏폼 기획</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full hover:border-accent/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 transition-colors">
                    <Box className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">PILLAR 03</span>
                  <CardTitle className="text-lg sm:text-xl">
                    캐릭터 디자인 & 디지털 프로젝트
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    AI 기반 캐릭터 제작 및 반려견 캐릭터 콘텐츠, 웹앱 및 디지털 서비스 기획 등 영상 외 다양한 디지털 창작 프로젝트를 수행합니다.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-[11px]">Character Design</Badge>
                    <Badge variant="secondary" className="text-[11px]">반려견 캐릭터</Badge>
                    <Badge variant="secondary" className="text-[11px]">Digital Projects</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* 다) 걸어온 길 — 시기 순서대로 네다섯 줄 */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Badge variant="accentOutline" className="text-xs font-bold">
              다) 걸어온 길
            </Badge>
            <span className="text-xs font-mono text-zinc-400">CHRONOLOGY / FOCUS TIMELINE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-[#111317] p-6 sm:p-8"
          >
            <div className="space-y-6">
              {/* 줄 1 */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-sm font-bold text-white tracking-tight">
                      1. 콘텐츠 기획 및 비주얼 스토리텔링 기초 구축
                    </span>
                    <span className="text-xs font-mono text-zinc-400">STAGE 01</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    아이디어를 시각 언어로 구체화하는 콘셉트 기획 및 스토리텔링 구조 연구
                  </p>
                </div>
              </div>

              {/* 줄 2 */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-sm font-bold text-white tracking-tight">
                      2. AI 기반 창작 도구 탐구 및 비주얼 실험
                    </span>
                    <span className="text-xs font-mono text-zinc-400">STAGE 02</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    다양한 생성형 AI 툴과 프롬프트 엔지니어링을 활용한 스타일 및 시각화 테스트
                  </p>
                </div>
              </div>

              {/* 줄 3 */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-sm font-bold text-white tracking-tight">
                      3. 캐릭터 디자인 및 디지털 콘텐츠 프로젝트 전개
                    </span>
                    <span className="text-xs font-mono text-zinc-400">STAGE 03</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    AI 기반 캐릭터 제작, 반려견 캐릭터 콘텐츠, 웹 서비스 및 디지털 기획물 개발
                  </p>
                </div>
              </div>

              {/* 줄 4 */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-sm font-bold text-white tracking-tight">
                      4. AI 영상 제작 및 독립 크리에이티브 디렉션
                    </span>
                    <span className="text-xs font-mono text-zinc-400">STAGE 04</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    기획부터 영상 연출, 후반 작업까지 아우르는 전문 영상 포트폴리오 작업 진행
                  </p>
                </div>
              </div>

              {/* 줄 5 */}
              <div className="flex items-start space-x-4 pt-2 border-t border-white/5">
                <div className="mt-1 w-2 h-2 rounded-full bg-zinc-600 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-sm font-semibold text-zinc-300 tracking-tight">
                      5. 공인 이력 및 자격 사항
                    </span>
                    <span className="text-xs font-mono text-zinc-400">VERIFIED INFO ONLY</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    * 실제 경력, 회사명, 학력, 자격증, 수상 이력은 본인이 확인한 정보만 입력하며 임의로 기재하지 않습니다. (관리자 CMS에서 추가 가능)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 라) 할 수 있는 것 — 잘하는 것을 쉼표로 나열 */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Badge variant="accentOutline" className="text-xs font-bold">
              라) 할 수 있는 것
            </Badge>
            <span className="text-xs font-mono text-zinc-400">SKILLS & CAPABILITIES</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111317]"
          >
            <p className="text-sm sm:text-base md:text-lg text-zinc-200 font-medium leading-loose">
              Creative Direction, AI Video Production, Content Planning, Visual Storytelling, Character Design, Digital Projects, AI 영상 제작, 콘텐츠 기획, 비주얼 스토리텔링, 디지털 크리에이티브, AI 캐릭터 제작, 반려견 캐릭터 콘텐츠, 웹앱 및 디지털 서비스 기획, 숏폼 콘텐츠 기획, 비주얼 스타일 연구
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
