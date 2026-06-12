import { ArrowUpRight, BriefcaseBusiness, Check, Globe2, Mail, MapPin, Sparkles, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Language, Project, profile } from './data/profile';

function App() {
  const [language, setLanguage] = useState<Language>('cn');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const content = profile[language];
  const alternateLanguage: Language = language === 'cn' ? 'en' : 'cn';

  useEffect(() => {
    document.documentElement.lang = language === 'cn' ? 'zh-CN' : 'en';
  }, [language]);

  const navItems = useMemo(
    () => [
      { href: '#projects', label: content.nav.projects },
      { href: '#skills', label: content.nav.skills },
      { href: '#timeline', label: content.nav.timeline },
      { href: '#contact', label: content.nav.contact }
    ],
    [content]
  );

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label={content.hero.name}>
          <span>AI</span>
          <span>{language === 'cn' ? '作品集' : 'Portfolio'}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="language-button" type="button" onClick={() => setLanguage(alternateLanguage)}>
          <Globe2 aria-hidden="true" size={16} />
          <span>{content.ui.switchLanguage}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-heading">
          <img className="hero-image" src={profile.assets.heroImage} alt="" />
          <div className="hero-scrim" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="signal-label">
                <Sparkles aria-hidden="true" size={16} />
                {content.hero.availability}
              </p>
              <h1 id="hero-heading">{content.hero.name}</h1>
              <p className="hero-role">{content.hero.role}</p>
              <p className="hero-intro">{content.hero.intro}</p>
              <div className="hero-actions" aria-label="Hero actions">
                <a className="primary-action" href="#projects">
                  {content.hero.primaryAction}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <a className="secondary-action" href="#contact">
                  {content.hero.secondaryAction}
                </a>
              </div>
            </div>

            <div className="signal-panel" aria-label="Portfolio metrics">
              {content.hero.metrics.map((metric) => (
                <div key={metric.label} className="metric-row">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-band projects-band" aria-labelledby="projects-heading">
          <div className="section-heading">
            <p>{content.ui.selectedWork}</p>
            <h2 id="projects-heading">{language === 'cn' ? '把想法变成可运行系统' : 'Turning intent into shipped systems'}</h2>
          </div>

          <div className="project-grid">
            {content.projects.map((project) => (
              <button
                key={project.title}
                className="project-card"
                type="button"
                onClick={() => setActiveProject(project)}
                aria-label={`${project.title} ${content.ui.projectDetails}`}
              >
                <img src={project.image} alt="" />
                <span className="project-kicker">{project.kicker}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-summary">{project.summary}</span>
                <span className="project-stack" aria-label={content.ui.coreStack}>
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="skills" className="content-band skills-band" aria-labelledby="skills-heading">
          <div className="section-heading compact">
            <p>{content.ui.coreStack}</p>
            <h2 id="skills-heading">{language === 'cn' ? '围绕交付组织能力' : 'Capabilities organized around delivery'}</h2>
          </div>
          <div className="skills-grid">
            {content.skills.map((skill) => (
              <article key={skill.title} className="skill-item">
                <div className="skill-icon">
                  <BriefcaseBusiness aria-hidden="true" size={18} />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="timeline" className="content-band timeline-band" aria-labelledby="timeline-heading">
          <div className="section-heading compact">
            <p>{content.nav.timeline}</p>
            <h2 id="timeline-heading">{language === 'cn' ? '近期工作轨迹' : 'Recent working arc'}</h2>
          </div>
          <div className="timeline-list">
            {content.timeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className="timeline-item">
                <time>{item.year}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-band" aria-labelledby="contact-heading">
          <div>
            <p className="signal-label dark">
              <Sparkles aria-hidden="true" size={16} />
              {content.nav.contact}
            </p>
            <h2 id="contact-heading">{content.contact.title}</h2>
            <p>{content.contact.copy}</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${content.contact.email}`}>
              <Mail aria-hidden="true" size={18} />
              {content.contact.email}
            </a>
            <span>
              <MapPin aria-hidden="true" size={18} />
              {content.contact.location}
            </span>
          </div>
        </section>
      </main>

      {activeProject ? (
        <ProjectDialog project={activeProject} content={content} onClose={() => setActiveProject(null)} />
      ) : null}
    </div>
  );
}

function ProjectDialog({
  project,
  content,
  onClose
}: {
  project: Project;
  content: (typeof profile)['cn'];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close project details">
          <X aria-hidden="true" size={20} />
        </button>
        <img src={project.image} alt="" />
        <div className="dialog-body">
          <p className="project-kicker">{project.kicker}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.summary}</p>
          <div className="dialog-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <h3>{content.ui.impact}</h3>
          <ul>
            {project.impact.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
