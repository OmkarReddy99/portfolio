import React, {useState} from 'react'
import Network from '../assets/skills/Network.jpg'
import Hacking from '../assets/skills/Hacking.jpeg'
import Incident from '../assets/skills/Incident.jpeg'
import Metasploit from '../assets/skills/Metasploit.jpeg'
import VAT from '../assets/skills/VAT.png'
import Linux from '../assets/skills/Linux.jpeg'
import Burpsuite from '../assets/skills/Burpsuite.png'
import Java from '../assets/skills/Java.png'
import HTMLCSS from '../assets/skills/HTMLCSS.jpeg'
function Skills() {
  const [isLoaded, setIsLoaded] = useState(false)
  const Skills = [
    {name: 'Network Security', image: Network},
    {name: 'Ethical Hacking & Penetration Testing', image: Hacking },
    {name: 'Incident Detection & Response', image: Incident},
    {name: 'Metasploit', image: Metasploit},
    {name: 'Vulnerability Assesment Tools', image: VAT},
    {name: 'Operating Systems Security', image: Linux},
    {name: 'Burpsuite', image: Burpsuite},
    {name: 'Java', image: Java},
    {name: 'HTML & CSS', image: HTMLCSS},
  ]
  return (
    <section id='skills' className='text-center w-full py-5 px-4' data-aos="fade-in">
      <h2 className="text-xl md:text-3xl font-bold text-center text-[var(--text-color)] md:mb-4 mb-2 " data-aos="fade-down">Skills</h2>
      <p className='text-[var(--secondary-text-color)] text-sm md:text-lg' data-aos="fade-up">The Skills, Tools, and Technologies I'm familiar with</p>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-6 w-full px-4 py-6 '>
        {Skills.map(skill => (
          <div key={skill.name} className='flex flex-col items-center' data-aos="zoom-in">
            {!isLoaded && (
              <div className='w-14 h-14 md:w-25 md:h-25 bg-gray-700 animate-pulse rounded-lg'></div>
            )}
            <img src={skill.image} alt={`Image of ${skill.name}`} className={`${isLoaded ? 'block' : 'hidden'} w-14 h-14 md:w-25 md:h-25 object-contain hover:scale-110 duration-300 cursor-pointer`} onLoad={() => setIsLoaded(true)} onContextMenu={(e) => e.preventDefault()} draggable="false" />
            {!isLoaded && (
              <div className='w-36 h-6 bg-gray-700 animate-pulse rounded-lg'></div>
            )}
            <p className={`${isLoaded ? 'block' : 'hidden'} text-[var(--secondary-text-color)] text-sm md:text-lg mt-2`} onLoad={() => setIsLoaded(true)}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
