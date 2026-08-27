import { projects, type Project } from "./projects";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.preview === "known-state") {
    return (
      <div className="product-ui known-state-ui" aria-hidden="true">
        <div className="ui-topline">
          <span>Known State</span>
          <i />
        </div>
        <div className="metric-row">
          <div><small>YTD spend</small><strong>$12,840</strong></div>
          <div><small>Cash result</small><strong className="positive">+$4,216</strong></div>
          <div><small>Action items</small><strong>07</strong></div>
        </div>
        <div className="chart-block">
          <span style={{ height: "44%" }} />
          <span style={{ height: "66%" }} />
          <span style={{ height: "52%" }} />
          <span style={{ height: "82%" }} />
          <span style={{ height: "71%" }} />
          <span style={{ height: "94%" }} />
        </div>
      </div>
    );
  }

  if (project.preview === "job-watch") {
    return (
      <div className="product-ui job-watch-ui" aria-hidden="true">
        <div className="ui-topline"><span>Priority queue</span><i /></div>
        <div className="job-row"><b>92</b><span><strong>Systems Engineer</strong><small>Strong fit · Remote</small></span><em>Review</em></div>
        <div className="job-row"><b>87</b><span><strong>IT Automation Lead</strong><small>Good fit · Hybrid</small></span><em>Saved</em></div>
        <div className="job-row muted"><b>74</b><span><strong>Platform Support</strong><small>Possible fit · Remote</small></span><em>New</em></div>
      </div>
    );
  }

  return (
    <div className="product-ui home-ledger-ui" aria-hidden="true">
      <div className="ui-topline"><span>Current cycle</span><i /></div>
      <div className="cash-figure"><small>Available cash</small><strong>$2,184.63</strong><span>through September 7</span></div>
      <div className="ledger-bars">
        <div><span>Income</span><i style={{ width: "88%" }} /></div>
        <div><span>Bills</span><i style={{ width: "64%" }} /></div>
        <div><span>Allocated</span><i style={{ width: "42%" }} /></div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-copy">
        <div className="project-meta">
          <span className="project-number">0{index + 1}</span>
          <span className="project-status"><i />{project.status}</span>
        </div>
        <p className="eyebrow">{project.eyebrow}</p>
        <h2>{project.name}</h2>
        <p className="project-summary">{project.summary}</p>
        <p className="project-outcome">{project.outcome}</p>
        <ul>
          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <div className="project-footer">
          <div className="stack-list" aria-label={`${project.name} technology`}>
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          {project.demoUrl && (
            <a className="project-link" href={project.demoUrl} target="_blank" rel="noreferrer">
              Explore live demo <ArrowIcon />
            </a>
          )}
        </div>
      </div>
      <ProjectPreview project={project} />
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Mike Lambert projects home">ML<span>.</span></a>
        <div>
          <a href="#projects">Projects</a>
          <a href="https://github.com/MichaelLambert78" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Product thinking · Systems engineering · Automation</p>
          <h1>I build systems that turn recurring work into <em>clear decisions.</em></h1>
          <p className="hero-intro">
            I&apos;m Mike Lambert. I design, build, deploy, and operate self-hosted software—owning the path from a messy real-world problem to a reliable working product.
          </p>
          <a className="text-link" href="#projects">See the work <span>↓</span></a>
        </div>

        <div className="hero-system" aria-label="Three connected software products">
          <div className="system-core"><span>Built &amp;<br />operated<br />end-to-end</span></div>
          <div className="orbit orbit-one"><span>Known State</span></div>
          <div className="orbit orbit-two"><span>Job Watch</span></div>
          <div className="orbit orbit-three"><span>HomeLedger</span></div>
        </div>
      </header>

      <section className="capability-strip" aria-label="Core capabilities">
        <span>Product architecture</span>
        <span>Data modeling</span>
        <span>Workflow automation</span>
        <span>Secure deployment</span>
        <span>Monitoring &amp; operations</span>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2>Tools built for actual use.</h2>
          </div>
          <p>Each project started with a problem I was living with—and became a production system shaped by real feedback.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow">Built from the problem outward</p>
          <h2>Thoughtful software.<br />Practical outcomes.</h2>
        </div>
        <div className="footer-note">
          <p>Designed, developed, deployed, and maintained by Mike Lambert.</p>
          <a href="https://github.com/MichaelLambert78" target="_blank" rel="noreferrer">github.com/MichaelLambert78 <ArrowIcon /></a>
        </div>
      </footer>
    </main>
  );
}
