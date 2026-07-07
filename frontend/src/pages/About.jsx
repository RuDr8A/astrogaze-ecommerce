import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div className="about-content">
    
    <img src="/rudra-profile.jpg" alt="Rudra Pratap Singh" className="profile-img" />
    
    <h2>About Me</h2>
    <h3 className="accent-text">Rudra Pratap Singh</h3>
    
    <p>
        Computer Science Engineering student at National Institute of Technology, Raipur. 
        Passionate about full-stack web development, competitive programming in Java, and building scalable digital architectures. Welcome to my custom astronomy equipment marketplace!
    </p>

    
    <div className="social-buttons-grid">
        <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer" className="social-btn github">
            <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noreferrer" className="social-btn linkedin">
            <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noreferrer" className="social-btn leetcode">
            <i className="fas fa-code"></i> LeetCode
        </a>
        <a href="https://codeforces.com/profile/your-codeforces-username" target="_blank" rel="noreferrer" className="social-btn codeforces">
            <i className="fas fa-chart-bar"></i> Codeforces
        </a>
    </div>
</div>
  );
};

export default About;
