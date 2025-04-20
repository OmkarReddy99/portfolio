import React from 'react'
import project1Img_1 from '../assets/projects/project1_1.png'
import project1Img_2 from '../assets/projects/project1_2.png'
import project1Img_3 from '../assets/projects/project1_3.png'
import project1Img_4 from '../assets/projects/project1_4.png'
import project1Img_5 from '../assets/projects/project1_5.png'
import project2Img_1 from '../assets/projects/project2_1.png'
import project2Img_2 from '../assets/projects/project2_2.png'
import project2Img_3 from '../assets/projects/project2_3.png'
import project2Img_4 from '../assets/projects/project2_4.png'
import project2Img_5 from '../assets/projects/project2_5.png'
import project2Img_6 from '../assets/projects/project2_6.png'
import project2Img_7 from '../assets/projects/project2_7.png'
import ProjectCarousel from './ProjectCarousel'

function Projects() {
  const projectList = [
    {
      name: 'Steganography', 
      description: 'Hiding text files in Images using command Line Tools', 
      techstack: ['Steghide', 'Command Prompt', '7Zip'], 
      images: [project1Img_1, project1Img_2, project1Img_3, project1Img_4, project1Img_5],
      url: 'https://github.com/OmkarReddy99/Steganography'
    },
    
    {
      name: 'Cyber Network Security', 
      description: 'Cyber network security refers to the practices, technologies, and processes designed to protect networks, systems, and data from cyber threats. It encompasses a wide range of security measures that ensure the confidentiality, integrity, and availability of information while safeguarding against unauthorized access, attacks, and damage.', 
      techstack: ['Nmap'], 
      images: [project2Img_1, project2Img_2, project2Img_3, project2Img_4, project2Img_5, project2Img_6, project2Img_7],
      url: 'https://github.com/OmkarReddy99/Cyber-network-security',
    },
  ]
  return (
    <section id='projects' className='w-full py-5 px-4 bg-[var(--secondary-bg-color)]' data-aos="fade-in">
      <h2 className="text-xl md:text-3xl font-bold text-center md:mb-4 mb-2 text-[var(--text-color)]" data-as="fade-down">My Projects</h2>
      <p className='text-[var(--secondary-text-color)] text-center text-sm md:text-lg' data-aos="fade-up">Here are some of the projects I've worked on recently.</p>
      <div>
        {projectList.slice().reverse().map(project => (
          <div key={project.name} className='flex flex-col lg:flex-row justify-center items-center my-4 bg-[var(--background-color)] px-2 py-0 rounded-lg shadow-lg' data-aos="fade-up">
            <div key={project.images} className='w-full lg:w-1/2 flex justify-center md:my-8'>
              <div className='w-full max-w-lg rounded-xl shadow-lg'>
                <ProjectCarousel images={project.images} />
              </div>
            </div>
            <div key={project.name} className='w-full lg:w-1/2 text-left md:text-left mb-2 md:px-2 md:pb-2' data-aos="fade-left">
              <h3 className='text-[var(--text-color)] text-lg md:text-xl font-bold mt-2'> {project.name} </h3>
              <p className='text-[var(--secondary-text-color)] text-sm md:text-lg mt-2 mb-2'> {project.description} </p>
              <div className='flex flex-wrap'>
                {project.techstack.map(tech => (
                  <span key={tech} className='text-white text-sm md:text-lg bg-[#6366F1] px-2 py-1 rounded-xl mr-2 mt-2'> {tech} </span>
                ))}
              </div>
              <div className='mt-4'>
                <a href={project.url} target='_blank' rel='noreferrer noopener' className='text-white md:bg-gray-800 bg-black rounded-xl md:rounded-lg py-1 md:py-2 px-2 text-lg md:text-xl mr-2 cursor-pointer hover:text-gray-400 hover:bg-black duration-300'>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
