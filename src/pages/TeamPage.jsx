const base = import.meta.env.BASE_URL

const team = [
  {
    name: 'Shubham Sharma',
    role: 'Founder | Director',
    photo: 'shubham.png',
    bio: 'The visionary behind Enchanting Himalaya Films. With a deep connection to the mountains and a passion for authentic storytelling, he leads every project with purpose, turning real experiences into compelling visual narratives.',
  },
  {
    name: 'Yash Vardhan Jain',
    role: 'Producer',
    photo: 'yash.png',
    bio: 'With his robust sense of knowledge for non fiction, Lifestyle, Infotainment and Documentary formats, In the span of 10 years in show making business as a Storyteller.',
  },
  {
    name: 'Parth Joshi',
    role: 'Creative Director',
    photo: 'parth.png',
    bio: "The problem-solver at the heart of our team. Throw him any challenge, creative or otherwise, and he'll find a way to turn it into a solution, often better than expected.",
  },
  {
    name: 'Tushar Gupta',
    role: 'Director of Photography',
    photo: 'tushar.png',
    bio: 'Our most trusted eye behind the lens. Known for guarding his camera like treasure, because for him, every frame matters and nothing is left to chance.',
  },
  {
    name: 'Shubham Kumar',
    role: 'Production Manager',
    photo: 'shubham-kumar.png',
    bio: 'The engine that keeps everything running. From logistics to execution, nothing moves without his green signal, and once it does, it moves seamlessly.',
  },
]

export default function TeamPage() {
  return (
    <div className="page fade-in">
      <section className="page-hero">
        <h1 className="page-title">The Team</h1>
        <div className="title-line" />
      </section>
      <section className="team-section">
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-member" key={member.name}>
              <div className="member-photo-wrapper">
                <img
                  src={`${base}${member.photo}`}
                  alt={member.name}
                  className="member-photo"
                />
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              {member.bio && <p className="bio">{member.bio}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
