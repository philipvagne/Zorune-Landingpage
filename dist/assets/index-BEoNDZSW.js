(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const m=[{title:"Project workspaces",description:"Keep projects, notes and tasks connected inside focused collaborative workspaces.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.75 7.25A2.5 2.5 0 0 1 6.25 4.75h4.1c.62 0 1.2.24 1.64.68l1.08 1.07c.19.19.45.3.72.3h4.96a2.5 2.5 0 0 1 2.5 2.5v8.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5z" />
        <path d="M3.75 9.25h16.5" />
      </svg>
    `},{title:"Task workflows",description:"Track priorities, progress, and active work with workflows built for smaller focused teams.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.25 7.75h8" />
        <path d="M9.25 12h8" />
        <path d="M9.25 16.25h6" />
        <path d="m5.6 7.75 1.05 1.05 1.75-2.05" />
        <path d="m5.6 12 1.05 1.05L8.4 11" />
        <path d="m5.6 16.25 1.05 1.05 1.75-2.05" />
      </svg>
    `},{title:"Kanban / Table / Calendar views",description:"Switch between visual planning, structured tables, and calendar scheduling depending on how your team works.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.25" y="5.25" width="15.5" height="13.5" rx="2.25" />
        <path d="M4.25 10.25h15.5" />
        <path d="M9.5 10.25v8.5" />
        <path d="M14.5 10.25v8.5" />
      </svg>
    `},{title:"Team organization",description:"Organize members, responsibilities, and project ownership inside one shared operational workspace.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 11.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
        <path d="M15.75 10.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
        <path d="M4.75 18.25a4.25 4.25 0 0 1 8.5 0" />
        <path d="M13.5 18.25a3.5 3.5 0 0 1 6 0" />
      </svg>
    `}],g=[{title:"Workspace structure",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 6.75h14.5" />
        <path d="M4.75 12h14.5" />
        <path d="M4.75 17.25h8.5" />
      </svg>
    `},{title:"Task workflows",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.25 7.75h8" />
        <path d="M9.25 12h8" />
        <path d="M9.25 16.25h6" />
        <path d="m5.75 7.75 1 1 1.5-1.75" />
        <path d="m5.75 12 1 1L8.25 11" />
      </svg>
    `},{title:"UI/UX refinement",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.25" y="5.25" width="15.5" height="13.5" rx="2.25" />
        <path d="M9.25 5.25v13.5" />
        <path d="M12.25 10.25h4.5" />
      </svg>
    `},{title:"Product architecture",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.75" y="5.25" width="5.5" height="5.5" rx="1.25" />
        <rect x="13.75" y="5.25" width="5.5" height="5.5" rx="1.25" />
        <rect x="9.25" y="13.25" width="5.5" height="5.5" rx="1.25" />
        <path d="M10.25 8h3.5" />
        <path d="M12 10.75v2.5" />
      </svg>
    `}],f=["Workspace foundation established","Core task workflows evolving","UI system refinement ongoing","Notes and documentation structure expanding","Product architecture continuously improving"],b=[{title:"Redesigned workspace shell",detail:"Refining the outer workspace structure to feel calmer, clearer, and easier to navigate.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.25" y="5.25" width="15.5" height="13.5" rx="2.25" />
        <path d="M4.25 9.75h15.5" />
        <path d="M9.5 9.75v9" />
      </svg>
    `},{title:"Project and task organization",detail:"Tightening the relationship between projects, tasks, and daily organization flows.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 7.25A2.5 2.5 0 0 1 7.25 4.75h3.6c.58 0 1.14.23 1.55.64l1.21 1.21c.19.19.45.3.72.3h2.42a2.5 2.5 0 0 1 2.5 2.5v7.35a2.5 2.5 0 0 1-2.5 2.5H7.25a2.5 2.5 0 0 1-2.5-2.5z" />
        <path d="M8.5 11.25h7" />
        <path d="M8.5 15.25h5" />
      </svg>
    `},{title:"Kanban, Table, and Calendar workflows",detail:"Shaping the core task experience across multiple views without losing cohesion.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.25" y="5.25" width="15.5" height="13.5" rx="2.25" />
        <path d="M9.25 5.25v13.5" />
        <path d="M14.75 9.5v9.25" />
      </svg>
    `},{title:"Full-stack platform foundation",detail:"Building the platform from scratch across frontend, backend/API, and PostgreSQL.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5.25" y="5.25" width="13.5" height="4.5" rx="1.25" />
        <rect x="5.25" y="10.75" width="13.5" height="4.5" rx="1.25" />
        <rect x="5.25" y="16.25" width="13.5" height="2.5" rx="1.25" />
      </svg>
    `}],w=[{label:"LinkedIn",href:"https://www.linkedin.com/in/philip-agn%C3%A9-a86679411/",external:!0,icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="2.25" />
        <path d="M8.1 10.1v5.9" />
        <path d="M8.1 8.2a.55.55 0 1 0 0 1.1.55.55 0 0 0 0-1.1Z" />
        <path d="M11.45 16v-3.15a1.95 1.95 0 0 1 3.75-.78c.1.25.15.52.15.79V16" />
        <path d="M11.45 12.55v-2.45" />
      </svg>
    `},{label:"GitHub",href:"https://github.com/philipvagne",external:!0,icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.75a7.25 7.25 0 0 0-2.3 14.13c.36.07.49-.15.49-.35v-1.23c-2 .43-2.42-.84-2.42-.84a1.9 1.9 0 0 0-.8-1.05c-.65-.45.05-.44.05-.44a1.5 1.5 0 0 1 1.1.74 1.54 1.54 0 0 0 2.1.6 1.54 1.54 0 0 1 .46-.97c-1.6-.18-3.29-.8-3.29-3.58a2.8 2.8 0 0 1 .74-1.94 2.58 2.58 0 0 1 .07-1.92s.6-.2 1.98.74a6.9 6.9 0 0 1 3.6 0c1.38-.94 1.98-.74 1.98-.74.29.6.31 1.29.07 1.92a2.8 2.8 0 0 1 .74 1.94c0 2.79-1.7 3.4-3.32 3.58a1.73 1.73 0 0 1 .49 1.34v1.98c0 .2.13.42.5.35A7.25 7.25 0 0 0 12 4.75Z" />
      </svg>
    `},{label:"Contact",action:"contact-modal",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.25" y="6.25" width="15.5" height="11.5" rx="2" />
        <path d="m5.25 8 6.75 5 6.75-5" />
      </svg>
    `}],k=[{label:"Frontend",detail:"React workspace interface"},{label:"Backend",detail:"API structure"},{label:"Database",detail:"PostgreSQL"},{label:"Product",detail:"Projects, tasks, notes, and teams"}],y=[{title:"Plan work",description:"Create focused spaces for projects, notes, and shared planning.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 6.75h14.5" />
        <path d="M4.75 12h9.5" />
        <path d="M4.75 17.25h11.5" />
        <path d="M17.25 5.75v12.5" />
      </svg>
    `},{title:"Track progress",description:"Move tasks through Kanban, table, and calendar workflows.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.25" y="5.25" width="15.5" height="13.5" rx="2.25" />
        <path d="M9.25 5.25v13.5" />
        <path d="M14.75 9.5v9.25" />
      </svg>
    `},{title:"Keep teams connected",description:"Keep members, ownership, activity, and updates visible in one workspace.",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.75 10.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
        <path d="M15.75 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
        <path d="M4.75 18.25a4.25 4.25 0 0 1 8 0" />
        <path d="M13.25 17.75a3.5 3.5 0 0 1 6 0" />
      </svg>
    `}],x=()=>m.map(e=>`
        <article class="feature-card">
          <div class="feature-icon">${e.icon}</div>
          <h3>${e.title}</h3>
          <p>${e.description}</p>
        </article>
      `).join(""),M=()=>g.map(e=>`
        <article class="status-card">
          <div class="status-icon">${e.icon}</div>
          <p>${e.title}</p>
        </article>
      `).join(""),$=()=>f.map(e=>`
        <div class="progress-row">
          <span class="progress-marker"></span>
          <p>${e}</p>
        </div>
      `).join(""),B=()=>b.map(e=>`
        <article class="timeline-card">
          <div class="timeline-rail">
            <span class="timeline-icon">${e.icon}</span>
          </div>
          <div class="timeline-copy">
            <h3>${e.title}</h3>
            <p>${e.detail}</p>
          </div>
        </article>
      `).join(""),P=()=>w.map(e=>`
        <a
          href="${e.href||"#"}"
          aria-label="${e.label}"
          title="${e.label}"
          ${e.external?'target="_blank" rel="noreferrer noopener"':""}
          ${e.action?`data-action="${e.action}"`:""}
        >
          ${e.icon}
        </a>
      `).join(""),L=()=>k.map(e=>`
        <article class="build-row">
          <div class="build-copy">
            <h4>${e.label}</h4>
            <p>${e.detail}</p>
          </div>
        </article>
      `).join(""),S=()=>y.map(e=>`
        <article class="direction-row">
          <div class="direction-icon">${e.icon}</div>
          <div class="direction-copy">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
          </div>
        </article>
      `).join("");function j(){const e=document.querySelector('[data-action="contact-modal"]'),s=document.querySelector("[data-contact-modal]"),r=document.querySelector("[data-contact-backdrop]"),n=document.querySelector("[data-contact-close]"),t=document.querySelector("[data-contact-form]"),a=document.querySelector("[data-contact-success]");if(!s||!e)return;const i=o=>{o.preventDefault(),s.hidden=!1,document.body.classList.add("modal-open")},c=()=>{s.hidden=!0,document.body.classList.remove("modal-open")};e.addEventListener("click",i),r?.addEventListener("click",c),n?.addEventListener("click",c),document.addEventListener("keydown",o=>{o.key==="Escape"&&!s.hidden&&c()}),t?.addEventListener("submit",o=>{o.preventDefault();const d=new FormData(t),l=String(d.get("name")||"").trim(),p=String(d.get("email")||"").trim(),h=String(d.get("message")||"").trim(),v=encodeURIComponent(`Zorune contact from ${l||"site visitor"}`),u=encodeURIComponent(`Name: ${l}
Email: ${p}

${h}`);a?.removeAttribute("hidden"),window.location.href=`mailto:Philipv.agne@gmail.com?subject=${v}&body=${u}`})}function I(){return`
    <main class="site-page">
      <div class="page-orb page-orb-left"></div>
      <div class="page-orb page-orb-right"></div>

      <header class="top-nav">
        <div class="nav-shell">
          <a class="brand" href="#hero">
            <span class="brand-text">Zorune</span>
          </a>

          <nav class="nav-links" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#showcase">Direction</a>
            <a href="#development">Development</a>
            <a href="#devlog">Devlog</a>
          </nav>

          <a class="nav-cta" href="#development">View progress</a>
        </div>
      </header>

      <section class="hero" id="hero">
        <div class="hero-panel">
          <div class="hero-copy">
            <span class="eyebrow-badge">Built in public</span>
            <h1>
              <span class="headline-line">A calmer workspace</span>
              <span class="headline-line">for projects,</span>
              <span class="headline-line">tasks, and team</span>
              <span class="headline-line">organization.</span>
            </h1>
            <p class="hero-body">
              Zorune helps small teams organize projects, tasks, notes, and workflows without the
              operational chaos.
            </p>

            <div class="hero-actions">
              <a class="button button-primary" href="#showcase">View progress</a>
              <a class="button button-secondary" href="#devlog">Follow development</a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="product-frame product-frame-back">
              <div class="frame-bar"><span></span><span></span><span></span></div>
              <img src="/mockups/team-members-tab.png" alt="Zorune team members mockup" />
            </div>

            <div class="product-frame product-frame-front">
              <div class="frame-bar"><span></span><span></span><span></span></div>
              <img src="/mockups/team-overview-tab.png" alt="Zorune overview mockup" />
            </div>
          </div>
        </div>
      </section>

      <section class="section section-features" id="features">
        <div class="section-shell">
          <div class="section-heading">
            <p class="section-kicker">What is Zorune?</p>
            <h2>The essential parts of work, organized into one calmer system.</h2>
          </div>

          <div class="feature-grid">
            ${x()}
          </div>
        </div>
      </section>

      <section class="section section-showcase" id="showcase">
        <div class="section-shell">
          <div class="section-heading">
            <p class="section-kicker">Product direction</p>
            <h2>Planning, execution, and visibility — together.</h2>
          </div>

          <div class="showcase-grid">
            <article class="direction-card">
              <span class="placeholder-kicker">Product direction</span>
              <h3>
                A calmer structure for planning, execution, and shared team visibility.
              </h3>

              <div class="direction-list">
                ${S()}
              </div>
            </article>

            <aside class="build-snapshot-card">
              <span class="placeholder-kicker">Current foundation</span>
              <h3>Real product foundation in progress.</h3>
              <p>
                Zorune is being built as a full-stack workspace with a React interface, backend
                API, and PostgreSQL database.
              </p>

              <div class="build-list">
                ${L()}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="section section-development" id="development">
        <div class="section-shell">
          <div class="section-heading">
            <p class="section-kicker">Currently in development</p>
            <h2>Zorune is actively being built and refined.</h2>
            <p class="section-support">
              The current focus is workspace structure, task workflows, UI/UX refinement, and
              product architecture.
            </p>
          </div>

          <div class="development-layout">
            <article class="development-story">
              <span class="placeholder-kicker">Current progress</span>
              <div class="progress-list">
                ${$()}
              </div>
            </article>

            <div class="status-grid">
              ${M()}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-devlog" id="devlog">
        <div class="section-shell">
          <div class="section-heading">
            <p class="section-kicker">Tiny devlog / updates</p>
            <h2>Small progress notes from the build.</h2>
          </div>

          <div class="timeline-list">
            ${B()}
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <div class="footer-shell">
          <div class="footer-copy">
            <p class="footer-title">Zorune</p>
            <p class="footer-body">Building Zorune publicly while learning full-stack development.</p>
          </div>

          <div class="footer-links">
            ${P()}
          </div>
        </div>
      </footer>

      <div class="contact-modal" data-contact-modal hidden>
        <div class="contact-backdrop" data-contact-backdrop></div>
        <div class="contact-panel" role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <button class="contact-close" type="button" aria-label="Close contact form" data-contact-close>
            <span></span>
            <span></span>
          </button>
          <p class="placeholder-kicker">Get in touch</p>
          <h2 id="contact-title">Get in touch</h2>
          <p class="contact-body">Send a message about Zorune, collaboration, or the build.</p>

          <form class="contact-form" data-contact-form>
            <label>
              <span>Name</span>
              <input type="text" name="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button class="button button-primary contact-submit" type="submit">Send</button>
          </form>

          <p class="contact-success" data-contact-success hidden>Thanks — your message is ready to send.</p>
        </div>
      </div>
    </main>
  `}document.getElementById("root").innerHTML=I();j();
