


function AboutPage() {
  
     
  return (
    <div className="main-container">
      {/* Page Title */}
      <div className="about-title">
        <h1>About Tutor Finder</h1>
        <p>Bridging the Gap Between Learning and Teaching</p>
      </div>

      {/* About Content Sections */}
      <div className="about-sections">
        {/* Section 1 - Text Left, Image Right */}
        <div className="about-section">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>At Tutor Finder, we believe that everyone deserves access to quality education. 
            Our platform connects passionate educators with eager learners, creating meaningful 
            learning experiences that transform lives.</p>
          </div>
          <div className="about-image">
            <img src="/about-mission.jpg" alt="Our Mission" />
          </div>
        </div>

        {/* Section 2 - Image Left, Text Right */}
        <div className="about-section reverse">
          <div className="about-image">
            <img src="/about-vision.jpg" alt="Our Vision" />
          </div>
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>We envision a world where distance and resources are no longer barriers to 
            education. Through our platform, we&apos;re building a global community of learners 
            and educators, united by the pursuit of knowledge.</p>
          </div>
        </div>

        {/* Section 3 - Text Left, Image Right */}
        <div className="about-section">
          <div className="about-text">
            <h2>What We Offer</h2>
            <p>From academic subjects to practical skills, our platform offers a diverse 
            range of learning opportunities. We carefully vet our tutors to ensure they 
            meet our high standards of expertise and teaching ability.</p>
          </div>
          <div className="about-image">
            <img src="/about-offers.jpg" alt="Our Offerings" />
          </div>
        </div>

        {/* Section 4 - Image Left, Text Right */}
        <div className="about-section reverse">
          <div className="about-image">
            <img src="/about-platform.jpg" alt="Our Platform" />
          </div>
          <div className="about-text">
            <h2>Our Platform</h2>
            <p>Our user-friendly platform makes it easy to find the perfect tutor. 
            With advanced matching algorithms and detailed profiles, we ensure that 
            every learning journey starts on the right foot.</p>
          </div>
        </div>

        {/* Section 5 - Text Left, Image Right */}
        <div className="about-section">
          <div className="about-text">
            <h2>Community Impact</h2>
            <p>We&apos;re proud to have helped thousands of students achieve their learning 
            goals. Our community of tutors and learners continues to grow, creating 
            positive impact in education across the globe.</p>
          </div>
          <div className="about-image">
            <img src="/about-impact.jpg" alt="Community Impact" />
          </div>
        </div>

        {/* Section 6 - Image Left, Text Right */}
        <div className="about-section reverse">
          <div className="about-image">
            <img src="/about-future.jpg" alt="Our Future" />
          </div>
          <div className="about-text">
            <h2>Future Goals</h2>
            <p>As we look to the future, we&apos;re committed to expanding our reach and 
            enhancing our services. We&apos;re constantly innovating to make education 
            more accessible, effective, and enjoyable for everyone.</p>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}

export default AboutPage;