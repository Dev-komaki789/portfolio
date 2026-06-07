import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  profile,
  projects,
  skillCharts,
  timeline,
  aboutSite,
  aboutMe,
  type Project,
  type SkillChart,
  type TimelineItem,
} from './content'

// 画像が無いときは「準備中」プレースホルダに差し替える
function fallbackToPlaceholder(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget
  if (!img.src.endsWith('/shots/placeholder.svg')) {
    img.src = '/shots/placeholder.svg'
  }
}

// スクロールで画面に入ったらふわっと表示するラッパー
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// セクション共通の見出し（中央寄せ・下にアクセントの短い線）
function SectionTitle({ en, jp }: { en: string; jp?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-wide text-head">{en}</h2>
      {jp && <p className="mt-2 text-sm text-muted">{jp}</p>}
      <span className="mx-auto mt-4 block h-0.5 w-12 rounded bg-teal" />
    </div>
  )
}

function Header() {
  const nav = [
    ['About', '#about'],
    ['Works', '#works'],
    ['Skills', '#skills'],
    ['Profile', '#profile'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-bold tracking-wide text-head">
          {profile.siteName}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-ink sm:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-teal">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

// ヒーローのアイコン（エンジニアらしくターミナル風）
function HeroIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="52" height="40" rx="6" fill="white" />
      <rect x="6" y="12" width="52" height="11" rx="6" fill="rgba(255,255,255,0.7)" />
      <circle cx="14" cy="17.5" r="2" fill="var(--color-teal)" />
      <circle cx="22" cy="17.5" r="2" fill="var(--color-teal)" />
      <circle cx="30" cy="17.5" r="2" fill="var(--color-teal)" />
      <path
        d="M16 33l7 6-7 6"
        stroke="var(--color-teal)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31 46h14" stroke="var(--color-teal)" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[78vh] flex-col items-center justify-center bg-teal px-4 text-center text-white"
    >
      <Reveal>
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-sm sm:text-6xl">
          {profile.siteName}
        </h1>
        <p className="mt-3 text-base font-medium tracking-widest text-white/90 sm:text-lg">
          {profile.siteSub}
        </p>
        <div className="mt-8 flex justify-center">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
            <HeroIcon />
          </span>
        </div>
      </Reveal>
      <a
        href="#about"
        aria-label="下へスクロール"
        className="absolute bottom-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white/90 transition hover:bg-white/15"
      >
        <span className="animate-bob text-xl leading-none">⌄</span>
      </a>
    </section>
  )
}

function AboutSite() {
  return (
    <section className="dotted bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Reveal>
          <SectionTitle en="About this site" jp="このサイトについて" />
          <p className="mt-8 text-center leading-loose text-ink">{aboutSite}</p>
        </Reveal>
      </div>
    </section>
  )
}

function AboutMe() {
  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Reveal>
          <SectionTitle en="About me" jp="自己紹介" />
        </Reveal>
        <Reveal className="mt-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Avatar name={profile.name} size={88} />
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-head">{profile.name}</p>
              <p className="mt-3 leading-loose text-ink">{aboutMe.text}</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm sm:justify-start">
                {aboutMe.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-teal underline-offset-4 transition hover:underline"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// 画像が無いときの頭文字アバター
function Avatar({ name, size = 64, image }: { name: string; size?: number; image?: string }) {
  const initial = name.replace(/\s/g, '').charAt(0)
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        onError={fallbackToPlaceholder}
        className="shrink-0 rounded-full object-cover ring-4 ring-white"
        style={{ width: size, height: size }}
      />
    )
  }
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-teal/15 font-bold text-teal-dark ring-4 ring-white"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {initial}
    </span>
  )
}

function WorkCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full overflow-hidden rounded-xl border border-line bg-paper text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative overflow-hidden border-b border-line">
        <img
          src={project.images[0] ?? '/shots/placeholder.svg'}
          alt={project.title}
          onError={fallbackToPlaceholder}
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-1 font-mono text-xs text-teal-dark shadow-sm">
          {project.images.length} shots
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-head">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs text-teal">
              #{t}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-ink transition group-hover:text-teal">
          詳しく見る →
        </p>
      </div>
    </button>
  )
}

function Works({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section id="works" className="dotted bg-mist">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <Reveal>
          <SectionTitle en="Works" jp="制作物" />
          <p className="mt-6 text-center text-muted">
            カードをクリックすると、説明とスクリーンショットが開きます。
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <WorkCard project={p} onOpen={() => onOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== レーダーチャート（依存ライブラリなしの SVG 自作） =====
function RadarChart({ chart, max = 5 }: { chart: SkillChart; max?: number }) {
  const size = 220
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 34 // ラベルのぶん内側に
  const n = chart.axes.length
  const rings = [0.25, 0.5, 0.75, 1]

  // i 番目の軸の角度（真上を起点に時計回り）と、半径 rad の座標
  const point = (i: number, rad: number) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n
    return [cx + rad * Math.cos(angle), cy + rad * Math.sin(angle)]
  }

  const ringPath = (scale: number) =>
    chart.axes
      .map((_, i) => {
        const [x, y] = point(i, r * scale)
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(' ') + ' Z'

  const dataPath =
    chart.axes
      .map((a, i) => {
        const [x, y] = point(i, r * (a.value / max))
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(' ') + ' Z'

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[240px]" role="img"
      aria-label={`${chart.title}のスキルレーダーチャート`}>
      {/* グリッド（同心の多角形） */}
      {rings.map((s) => (
        <path key={s} d={ringPath(s)} fill="none" stroke="var(--color-line)" strokeWidth="1" />
      ))}
      {/* 中心から各頂点への軸線 */}
      {chart.axes.map((_, i) => {
        const [x, y] = point(i, r)
        return (
          <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--color-line)" strokeWidth="1" />
        )
      })}
      {/* データ */}
      <path d={dataPath} fill="var(--color-teal-soft)" stroke="var(--color-teal)" strokeWidth="2" />
      {chart.axes.map((a, i) => {
        const [x, y] = point(i, r * (a.value / max))
        return <circle key={i} cx={x} cy={y} r="2.5" fill="var(--color-teal-dark)" />
      })}
      {/* ラベル */}
      {chart.axes.map((a, i) => {
        const [x, y] = point(i, r + 16)
        const anchor = x < cx - 2 ? 'end' : x > cx + 2 ? 'start' : 'middle'
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fontSize="9.5"
            fill="var(--color-muted)"
          >
            {a.label}
          </text>
        )
      })}
    </svg>
  )
}

function Skills() {
  return (
    <section id="skills" className="bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <Reveal>
          <SectionTitle en="My skill set" jp="スキルセット" />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {skillCharts.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="flex flex-col items-center">
              <RadarChart chart={c} />
              <p className="mt-4 font-bold text-head">{c.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const left = index % 2 === 0
  return (
    <Reveal className="relative md:grid md:grid-cols-2 md:gap-10">
      {/* 中央のノード（アバター） */}
      <div className="absolute left-4 -translate-x-1/2 md:left-1/2">
        <Avatar name={item.title} image={item.image} size={56} />
      </div>

      {/* カード本体（PC では左右交互） */}
      <div
        className={`ml-14 md:ml-0 ${
          left ? 'md:col-start-1 md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'
        }`}
      >
        <span className="label-mono text-xs text-teal">{item.period}</span>
        <div className="mt-2 rounded-xl bg-brown p-5 text-white shadow-sm">
          <h3 className="font-bold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/90">{item.body}</p>
        </div>
      </div>
    </Reveal>
  )
}

function Profile() {
  return (
    <section id="profile" className="dotted bg-mist">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <Reveal>
          <SectionTitle en="Profile" jp="これまでの歩み" />
        </Reveal>
        <div className="relative mt-14">
          {/* 縦のライン */}
          <span className="absolute top-0 bottom-0 left-4 w-px bg-line md:left-1/2" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <TimelineRow key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <SectionTitle en="Contact me" jp="お問い合わせ" />
          <p className="mt-8 text-ink">
            ご連絡はお気軽にどうぞ。下のボタンからメール・GitHub にアクセスできます。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-teal px-6 py-2.5 font-semibold text-white shadow-sm transition hover:bg-teal-dark"
            >
              メールで連絡
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-line bg-paper px-6 py-2.5 font-medium text-ink transition hover:border-teal hover:text-teal"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [current, setCurrent] = useState(0)

  // Esc で閉じる＋背面のスクロールを止める
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="animate-fade fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="animate-pop relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper/90 text-ink backdrop-blur transition hover:border-teal hover:text-teal"
        >
          ✕
        </button>

        <div className="p-5 sm:p-7">
          <p className="label-mono text-xs text-teal">Works</p>
          <h3 className="mt-2 text-2xl font-bold text-head">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>

          {/* 上：選択できるサムネイル一覧 */}
          {project.images.length > 1 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-14 w-20 overflow-hidden rounded-md border-2 transition ${
                    i === current ? 'border-teal' : 'border-line opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={src}
                    alt={`${project.title} の画面 ${i + 1}`}
                    onError={fallbackToPlaceholder}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* 下：選択中のキャプチャを大きく表示 */}
          {project.images.length > 0 && (
            <div className="mt-3 overflow-hidden rounded-xl border border-line bg-mist">
              <img
                src={project.images[current]}
                alt={`${project.title} の画面 ${current + 1}`}
                onError={fallbackToPlaceholder}
                className="aspect-video w-full object-cover"
              />
            </div>
          )}

          <p className="mt-6 text-ink">{project.description}</p>

          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-ink">
                <span className="mt-0.5 font-mono text-teal">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-line bg-mist px-2.5 py-1 font-mono text-xs text-ink"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark"
              >
                ライブサイト ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition hover:border-teal hover:text-teal"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutSite />
        <AboutMe />
        <Works onOpen={setOpenProject} />
        <Skills />
        <Profile />
        <Contact />
      </main>
      <footer className="bg-teal py-12 text-center text-white">
        <p className="text-xl font-bold tracking-wide">Thank you for coming!</p>
        <p className="mt-3 text-sm text-white/80">© 2026 {profile.name}</p>
      </footer>
      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
    </div>
  )
}

export default App
