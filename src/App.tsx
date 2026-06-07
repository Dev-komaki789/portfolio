import { profile, projects, skills, type Project } from './content'

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-extrabold tracking-tight text-slate-900">
          {profile.name}
        </a>
        <nav className="flex items-center gap-4 text-sm text-slate-600 sm:gap-6">
          <a href="#about" className="hover:text-brand-700">
            About
          </a>
          <a href="#projects" className="hover:text-brand-700">
            制作物
          </a>
          <a href="#contact" className="hover:text-brand-700">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
      <p className="font-medium text-brand-600">Portfolio</p>
      <h1 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        {profile.tagline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{profile.bio}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-brand-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          制作物を見る
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-50"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900">About / スキル</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-sm font-semibold text-brand-700">{s.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`bg-gradient-to-r ${project.accent} px-6 py-8 text-white`}>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-white/90">{project.subtitle}</p>
      </div>
      <div className="p-6">
        <p className="text-slate-600">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-slate-700">
              <span className="mt-0.5 text-brand-600">✓</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              ライブサイト ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold text-slate-900">制作物</h2>
      <p className="mt-2 text-slate-500">設計から実装・AWS 本番公開まで行ったプロジェクトです。</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
        <p className="mt-3 text-slate-600">お気軽にご連絡ください。</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-brand-600 px-5 py-2.5 font-semibold text-white transition hover:bg-brand-700"
          >
            メールで連絡
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400">
        © 2026 {profile.name}
      </footer>
    </div>
  )
}

export default App
