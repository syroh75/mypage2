import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroBackground } from './components/HeroBackground'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { VideoPortfolioSection } from './components/VideoPortfolioSection'
import { CreativeProjectsSection } from './components/CreativeProjectsSection'
import { CreativeNotesSection } from './components/CreativeNotesSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { AdminDrawer } from './components/AdminDrawer'
import { INITIAL_VIDEOS, INITIAL_PROJECTS, INITIAL_NOTES } from './data/initialData'
import { VideoItem, CreativeProject, CreativeNote } from './types'

export function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false)

  // Load videos from localStorage or fallback
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    try {
      const saved = localStorage.getItem('creative_portfolio_videos')
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.error(e)
    }
    return INITIAL_VIDEOS
  })

  // Load projects from localStorage or fallback
  const [projects, setProjects] = useState<CreativeProject[]>(() => {
    try {
      const saved = localStorage.getItem('creative_portfolio_projects')
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.error(e)
    }
    return INITIAL_PROJECTS
  })

  // Creative Notes
  const [notes] = useState<CreativeNote[]>(INITIAL_NOTES)

  // Save to localStorage whenever videos change
  const handleUpdateVideos = (updated: VideoItem[]) => {
    setVideos(updated)
    try {
      localStorage.setItem('creative_portfolio_videos', JSON.stringify(updated))
    } catch (e) {
      console.error(e)
    }
  }

  // Save to localStorage whenever projects change
  const handleUpdateProjects = (updated: CreativeProject[]) => {
    setProjects(updated)
    try {
      localStorage.setItem('creative_portfolio_projects', JSON.stringify(updated))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-[#08090b] text-[#cbd5e1] relative selection:bg-accent selection:text-black">
      {/* Background visual canvas */}
      <HeroBackground />

      {/* Global Navbar */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. HOME */}
        <HeroSection />

        {/* 2. ABOUT (가, 나, 다, 라) */}
        <AboutSection />

        {/* 3. VIDEO PORTFOLIO */}
        <VideoPortfolioSection
          videos={videos}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 4. CREATIVE PROJECTS */}
        <CreativeProjectsSection projects={projects} />

        {/* 5. CREATIVE NOTES */}
        <CreativeNotesSection notes={notes} />

        {/* 6. CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* CMS / Content Management Drawer */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        videos={videos}
        onUpdateVideos={handleUpdateVideos}
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
      />
    </div>
  )
}

export default App
