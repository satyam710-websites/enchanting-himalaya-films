const team = [
  {
    name: 'Shubham Sharma',
    role: 'Founder | Director',
    bio: '',
  },
  {
    name: 'Yash Vardhan Jain',
    role: 'Producer',
    bio: 'With his robust sense of knowledge for non fiction, Lifestyle, Infotainment and Documentary formats, In the span of 10 years in show making business as a Storyteller.',
  },
  {
    name: 'Parth Joshi',
    role: 'Creative Director',
    bio: "The problem-solver at the heart of our team. Throw him any challenge, creative or otherwise, and he'll find a way to turn it into a solution, often better than expected.",
  },
  {
    name: 'Tushar Gupta',
    role: 'Director of Photography',
    bio: 'Our most trusted eye behind the lens. Known for guarding his camera like treasure, because for him, every frame matters and nothing is left to chance.',
  },
  {
    name: 'Shubham Kumar',
    role: 'Production Manager',
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
              <div className="member-photo-placeholder">
                {member.name.charAt(0)}
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
