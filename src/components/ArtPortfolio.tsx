import React from 'react';
import { Paintbrush, Palette, Heart, Eye, Brush, Image as ImageIcon, Star, Calendar, MapPin, Mail, ArrowLeft, Sparkles, Layers, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './ScrollReveal';
import { ArtPortfolioScrollSpy } from './ArtPortfolioScrollSpy';
import { ImageCarousel } from './ImageCarousel';
import { artworks } from '../data/artworks';

export function ArtPortfolio() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <ArtPortfolioScrollSpy />
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,115,85,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(140,115,85,0.08),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-900 font-medium mb-6">
                <Palette className="w-4 h-4" />
                <span>Visual Artist</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                My Artistic Journey
              </h1>
              <p className="text-1xl text-gray-600 mb-8 font-medium tracking-tight">
                "Through layers of color and texture, I explore the delicate balance between chaos and harmony, creating pieces that invite viewers into a world of emotional resonance and visual discovery."
                </p>
              <p className="text-1xl text-gray-600 mb-8 font-medium tracking-tight">
                As an artist, I am deeply fascinated by the interplay of colors and textures. My work explores the boundaries between chaos and harmony, using various mediums to create pieces that engage both visually and tactilely. Each artwork is a journey of discovery, where layers of paint and texture build upon each other to reveal unexpected compositions.
              </p>
        <p className="text-1xl text-gray-600 mb-8 font-medium tracking-tight">
                Through my art, I seek to create immersive experiences that invite viewers to explore their own emotional responses to color, form, and texture. My process is both intuitive and deliberate, allowing for moments of spontaneity while maintaining a thoughtful approach to composition and material selection."
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
               
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">Abstract Art</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">Mixed Media</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">Texture Work</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">Color Theory</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">Impressionnisme</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100 p-8">
                <div className="aspect-square rounded-xl mb-6 flex items-center justify-center">
                  <ImageCarousel />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-600">Passionate about exploring textures and colors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brush className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-600">Mixed media artist specializing in abstract works</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-600">Creating immersive visual experiences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-primary-50">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{artwork.title}</h3>
                  <p className="text-sm text-gray-600">{artwork.medium} • {artwork.size} • {artwork.year}</p>
                </div>
                <div className="absolute inset-0 bg-accent-dark/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    
                    <p className="text-sm opacity-80">{artwork.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            
          </div>
        </div>
      </section>

      {/* Techniques & Materials */}
      <section id="techniques" className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Techniques & Materials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary-600" />
                  Layering Technique
                </h3>
                <p className="text-gray-600">
                  Building depth and texture through multiple layers of media, allowing each layer to interact and create unique patterns and effects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                  Mixed Media Approach
                </h3>
                <p className="text-gray-600">
                  Combining various materials including acrylics, textural mediums, and found objects to create rich, multidimensional surfaces.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Materials I Work With</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Acrylic Paints",
                  "Oil paints",
                  "watercolour paint",
                  "gouache paints",
                  "Modeling Pastes",
                  "Natural Textures",
                  "Metallic Mediums",
                  "Gel Mediums",
                  "Found Objects"
                ].map((material, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    <span className="text-gray-600">{material}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Workshops */}
      <section id="workshops" className="py-20 bg-primary-50 reveal">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Art Workshops</h2>
          <div className="space-y-12">
            {/* Adult Workshops */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Brush className="w-6 h-6 text-primary-600" />
                    <h3 className="text-2xl font-bold">Adult Art Workshops</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Immersive art sessions designed for adults to explore creativity, learn new techniques, and develop their artistic skills in a supportive environment.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                      <span className="text-gray-600">Abstract Painting Techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                      <span className="text-gray-600">Mixed Media Exploration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                      <span className="text-gray-600">Color Theory & Composition</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://drscdn.500px.org/photo/1108376651/q%3D80_m%3D600/v2?sig=69ada204afa3e4f8f7d47e2b055905b9f512e103a6f2a02c4f77fe98eef4d3ab"
                    alt="Adult workshop - painting session"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <img
                    src="https://drscdn.500px.org/photo/1108407123/q%3D80_m%3D600/v2?sig=1d3707367cc7b7c0e1c29afe2b1cef4a41606f43a5c6c82f8f973d124f6bcb4d"
                    alt="Adult workshop - creative process"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Kids Workshops */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="w-6 h-6 text-primary-600" />
                    <h3 className="text-2xl font-bold">Kids Art Adventures</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Fun and educational art sessions where children can have  space to explore their creativity, and express themselves freely 
        Through playful painting <Paintbrush className="inline text-primary-500" />, creative crafts, and storytelling in art.</p>
        
          <p className="text-gray-600 mb-6">
           I guide them in expressing their ideas freely while learning fundamental concepts like color theory, composition, and texture. </p>
           <p className="text-gray-600 mb-6">
        What I love most about these workshops is witnessing the children's imagination come to life—seeing their unique perspectives unfold on canvas <Palette className="inline text-primary-500" /> is truly inspiring!
      </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                      <span className="text-gray-600">Playful Painting Discovery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                      <span className="text-gray-600">Creative Crafts & Textures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                      <span className="text-gray-600">Imagination & Story Art</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://drscdn.500px.org/photo/1108407120/q%3D80_m%3D600/v2?sig=c3a65d0f8a62521b9ab82c1d082584b681dce3233d9f8214451556307c601c4b"
                    alt="Kids workshop - creative activities"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <img
                    src="https://drscdn.500px.org/photo/1108407121/q%3D80_m%3D600/v2?sig=2eb6b3cdee1ab5810a6923efd57b4d8221eaf56325fe410f16bff8cff0910027"
                    alt="Kids workshop - painting session"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     


  {/* Contact Section */}
  <section id="contact" className="py-20 bg-primary-50 reveal">
        <div className="max-w-6xl mx-auto px-4">
        <p className="text-3xl font-bold mb-8">Get in Touch</p>
          <div className="bg-primary rounded-2xl p-12 shadow-lg text-center">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">

            Interested in commissioning a piece or learning more about my work? I'd love to hear from you.

            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="inline-flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-primary-600" />
                <a
                  href="mailto:mona.obbad@gmail.com"
                  className="hover:text-primary-600"
                >
                  mona.obbad@gmail.com
                </a>
              </div>
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>(+337) 45684919</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}