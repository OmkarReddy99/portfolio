import React, { useState } from 'react';
import aboutImg from '../assets/about_img.jpg'

const About = () => {
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const quickBits = [
    'Pursuing a Bachelor’s degree in CSE',
    'Currently learning Ethical Hacking CEH from EC Council',
    'Experience with version control systems like Git',
    'Passionate about learning new technologies and frameworks',
    
  ]
  
  return (
    <section id="about" className="w-full py-5 px-4 bg-[var(--secondary-bg-color)]"
     data-aos="fade-in">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 text-[var(--text-color)] ">About Me</h2>
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:gap-10 gap-5 md:px-4">
        <div className="w-full lg:w-1/2 flex justify-center my-auto" data-aos="fade-right">
          {!isImgLoaded && (
            <div className='w-60 h-40 md:w-96 md:h-56 bg-gray-700 animate-pulse rounded-lg overflow-x-hidden'>
            </div>
          )}
          <img
            src={aboutImg}
            alt="About Image"
            className={`w-full max-w-lg rounded-xl shadow-lg ${isImgLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setIsImgLoaded(true)}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left md:text-left">
          <p className="text-[var(--secondary-text-color)] text-sm md:text-lg" data-aos="fade-left">
          As a Cyber Security Analyst, I specialize in identifying vulnerabilities, monitoring threats, and implementing protective measures to safeguard digital assets. I work with tools and frameworks to assess risks, analyze security incidents, and ensure compliance with best practices and industry standards. 
          </p>
          <p className="text-[var(--secondary-text-color)] text-sm md:text-lg mt-2" data-aos="fade-left">
          My responsibilities include:<br/>

1. Conducting security assessments and penetration tests<br/>
2. Monitoring network activity for suspicious behavior<br/>

3. Investigating and responding to incidents and breaches<br/>

4. Developing and enforcing security policies and procedures<br/>

5. Staying updated with the latest threats, tools, and mitigation strategies<br/>

With a strong foundation in network security, ethical hacking, and system hardening, I aim to protect organizations from evolving cyber threats while continuously improving their security posture.
          </p>
          <p className="text-[--secondary-text-color] text-sm md:text-lg mt-2" data-aos="fade-up">Some quick bits about me:</p>
          <ul className="list-disc list-inside text-[var(--secondary-text-color)] mt-2">
            {quickBits.map(bit => (
              <li key={bit} className="mb-2 md:text-lg text-sm" data-aos="fade-up">{bit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
