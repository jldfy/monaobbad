import React from 'react';
import { Hero } from './Hero';
import { ProblemStatement } from './ProblemStatement';
import { ProjectGoals } from './ProjectGoals';
import { ResearchMethods } from './ResearchMethods';
import { UserPersonas } from './UserPersonas';
import { JourneyMaps } from './JourneyMaps';
import { IdeatePhase } from './IdeatePhase';
import { TestPhase } from './TestPhase';
import { DesignProcess } from './DesignProcess';
import { LowFiPriceDistribution } from './LowFiPriceDistribution';
import { PaperWireframe } from './PaperWireframe';
import { PriceDistribution } from './PriceDistribution';
import { Footer } from './Footer';
import { useScrollReveal } from './ScrollReveal';
import { CaseStudyScrollSpy } from './CaseStudyScrollSpy';

export function CaseStudy() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyScrollSpy />
      <section id="hero">
        <Hero />
      </section>
      <section id="problem" className="bg-primary-50">
        <ProblemStatement />
      </section>
      <section id="goals">
        <ProjectGoals />
      </section>
      <section id="research" className="bg-white">
        <ResearchMethods />
      </section>
      <section id="personas" className="bg-primary-50">
        <UserPersonas />
        <JourneyMaps />
      </section>
      <section id="ideate">
        <IdeatePhase />
      </section>
      <section id="design" className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Design Evolution</h2>
          
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Paper Wireframe</h3>
            <p className="text-gray-600 mb-8">Initial sketches exploring layout and functionality</p>
            <PaperWireframe />
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Digital Wireframe</h3>
            <p className="text-gray-600 mb-8">Basic digital layout with core UI elements and interactions</p>
            <LowFiPriceDistribution />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">3. Design Process & High-Fidelity Design</h3>
            <p className="text-gray-600 mb-8">Final design with complete styling, interactions, and visual polish</p>
            <DesignProcess />
            <div className="mt-12">
              <PriceDistribution />
            </div>
          </div>
        </div>
      </section>
      <section id="test">
        <TestPhase />
      </section>
      <section id="learnings" className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Learnings and Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <h3 className="text-xl font-bold mb-4">Key Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Transparency in pricing is crucial for trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Direct artist-collector connections drive engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Impact visualization increases social contributions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <h3 className="text-xl font-bold mb-4">Future Improvements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Enhanced analytics dashboard for artists</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Mobile app development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Integration with more payment methods</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <h3 className="text-xl font-bold mb-4">Next Steps</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Beta testing with selected artists</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Partnership expansion with NGOs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Launch marketing campaign</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}