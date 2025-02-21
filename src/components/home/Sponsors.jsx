
//Sponsor data 
const sponsors =[
    {name: 'Nkwa', logo:'/download (1).jpg'},
    {name: 'Tech Chantier', logo:'/download.jpg'},
    {name: 'Buyam', logo:'/download.png'},
    {name: 'Afro Vision', logo:'/download (2).jpg'}
  ];

const Sponsors = () => {
  return (
    <section className="sponsors">
          <div className="section-header">
            <h2>Trusted by Leading Institutions</h2>
            <p>Partnering with top organizations </p>
          </div>
          <div className="sponsor-grid">
            {sponsors.map((sponsor, index) =>(
              <div key={index} className='sponsor-card'>
                <div className="sponsor-img">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
                <div className="sponsor-content">
                  <h3>{sponsor.name}</h3>
                  <p>Leading Institution</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Sponsors