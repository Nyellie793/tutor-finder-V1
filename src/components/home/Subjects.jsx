/* eslint-disable no-unused-vars */


//subject icons mapping
const subjectIcons ={
    'Mathematics': '',
    'English': '',
    'Science': '',
    'Programming': '',
    'Music': '',
    'Art': '',
    'Cooking': '',
    'Baking': ''
  };


const Subjects = () => {
  return (
    <section className="popular-subjects">
          <div className="section-header">
            <h2>Explore Popular Subjects</h2>
            <p>Find expert tutors/teachers in your favorite subjects</p>
          </div>
          <div className="subject-grid">
           {Object.entries(subjectIcons).map(([subject, iconPath]) => (
            <div key={subject} className='subject-card'>
              <div className="subject-icon">
              </div>
              <h3>{subject}</h3>
              <p>Learn From expert {subject.toLowerCase()} tutors</p>
              <button className="subject-btn">Explore</button>
            </div>
           ))}
          </div>
        </section>


  )
}

export default Subjects