

const HowItWorks = () => {
  return (
    <section className="how-it-works">
          <div className="section-header">
            <h2>Simple Steps to start Learning</h2>
            <p>Begin your learning journey in three easy steps</p>
          </div>
          <div className="steps-container">
            <div className="steps-grid">
              <div className="step">
                <div className="step-icon">
                  <img src="/images.jpg" alt="Find Tutor" />
                </div>
                <div className="step-number">1</div>
                <h3>Find Your Tutor</h3>
                <p>Browse through our verified tutors and find your match based on needs</p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step">
                <div className="step-icon">
                  <img src="/images (1).jpg" alt="Schedule" />
                </div>
                <div className="step-number">2</div>
                <h3>Schedule Lessons</h3>
                <p>Choose your preferred time slots and book your session</p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step">
                <div className="step-icon">
                  <img src="/images (2).jpg" alt="Learn" />
                </div>
                <div className="step-number">3</div>
                <h3>Start Learning</h3>
                <p>Connect with your tutor and achieve your learning goals</p>
              </div>
            </div>
          </div>
        </section>
    
  )
}

export default HowItWorks