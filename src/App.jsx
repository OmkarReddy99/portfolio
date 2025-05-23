import React, { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const siteProps = {
    name: 'Omkar Reddy',
    description: 'I\'m a CyberSecurity Analyst, Skilled in identifying vulnerabilities, monitoring threats, and responding to incidents to safeguard digital assets. Proficient in ethical hacking, risk assessment, and implementing proactive security measures.',
    email: 'omkarreddyaenugu22@gmail.com',
    location: 'Nalgonda, India',
    socialLinks: [
      { name: 'github', url: 'https://github.com/OmkarReddy99' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/omkar-reddy-357551220/' },
      { name: 'twitter', url: 'https://x.com/Omkarreddy199' },
      { name: 'leetcode', url: 'https://leetcode.com/u/omkarreddy999/' },
    ],
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: 'mobile',
    })
    window.addEventListener('scroll', AOS.refresh);
    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    }
  }, [])

  return (
    <div className="App">
      {!isPageLoaded && (
        <div className='fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black opacity-90'>
          <div className='animate-pulse'>
            <i className='fas fa-circle-notch text-5xl text-[#6366F1] animate-spin'></i>
          </div>
        </div>
      )}
      <div className={`${isPageLoaded ? 'block' : 'hidden'}`} onLoad={() => setIsPageLoaded(true)}>
        <Navbar />
        <Sidebar email={siteProps.email} socialLinks={siteProps.socialLinks} />
        <Home name={siteProps.name} description={siteProps.description} location={siteProps.location} />
        <About />
        <Skills />
        <Projects />
        <Contact email={siteProps.email} socialLinks={siteProps.socialLinks} />
        <Footer name={siteProps.name} />
      </div>
    </div>
  )
}

export default App
