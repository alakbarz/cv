import type { ReactElement } from "react";
import "./App.css";
import { Job } from "./Job/Job";
import { Project } from "./Project/Project";

type Section = {
  children: ReactElement;
  header: string;
};

const SummarySection = ({ children, header }: Section) => {
  return (
    <div className="App-grid-info-content-section">
      <h4>{header}</h4>
      {children}
    </div>
  );
};

const MainSection = ({ header }: { header: string }) => {
  return (
    <div className="App-grid-main-content-section">
      <h2>{header}</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="App-grid">
        <div className="App-grid-info">
          {/* Info Panel */}
          <div className="App-grid-info-summary">
            <img
              src="profile.jpg"
              alt="Head shot of Alakbar"
              style={{ margin: "auto auto 1rem auto" }}
            />
            <div className="App-grid-info-summary-content">
              <h1>Alakbar</h1>
              <p>hello@alak.bar</p>
              <p>Edinburgh, UK</p>
              <p>07478447100</p>
              <a href="https://alak.bar/">https://alak.bar</a>
              <a
                href="https://www.linkedin.com/in/alakbarz/"
                title="Please don't make me use LinkedIn 🥺"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="App-grid-info-content">
            <p style={{ fontSize: "1.25rem" }}>
              I'm a software engineer who loves{" "}
              <b>driving engineering excellence</b> in teams, empowering
              colleagues through <b>mentorship and knowledge sharing</b>, and
              advocating for <b>pragmatic engineering decisions</b> that foster
              collaborative and <b>maintainable tech</b>.
            </p>
            <SummarySection header="Who Me?">
              <p>
                My favourite hobbies are video editing, graphic design and
                astrophotography. I daily drive Ubuntu, Windows, MacOS 😩 and
                GrapheneOS on Android.
              </p>
            </SummarySection>
            <SummarySection header="Education">
              <>
                <p>BSc Computer Science at Heriot-Watt University (HWU).</p>
                <p
                  style={{
                    fontStyle: "italic",
                    color: "var(--subtitle)",
                    margin: "0.25rem 0 0 0",
                  }}
                >
                  First Class Honours
                </p>
              </>
            </SummarySection>
            <SummarySection header="Technical Skills">
              <ul>
                <li>TypeScript/JavaScript</li>
                <li>React (3 years) & Vue (1 year)</li>
                <li>Python</li>
                <li>Go</li>
                <li>CI/CD & DevOps (GitHub Actions)</li>
                <li>Playwright/Cypress/Percy automated visual testing</li>
                <li>Incident management (incident.io) and New Relic</li>
                <li>
                  Core Web Vitals (CWVs) and automated performance testing with
                  Lighthouse
                </li>
              </ul>
            </SummarySection>
            <SummarySection header="Skills">
              <ul>
                <li>Mentoring</li>
                <li>Observability</li>
              </ul>
            </SummarySection>
            <SummarySection header="Miscellaneous">
              <ul>
                <li>Photography & videography</li>
                <li>Blender</li>
                <li title="You can pirate Adobe software; it's always morally correct">
                  Adobe Creative suite
                </li>
                <li>
                  Member of <a href="https://www.mygov.scot/pvg-scheme">PVG</a>
                </li>
                <li>
                  <span
                    style={{
                      background: "#f50057",
                      color: "#fff",
                      padding: "0 0.25rem",
                      fontWeight: "bold",
                      borderRadius: "0.25rem",
                    }}
                  >
                    #f50057
                  </span>{" "}
                  {/* Template literal because right bracket causing syntax highlighting issues */}
                  {`is my colour :)`}
                </li>
              </ul>
            </SummarySection>
          </div>
        </div>

        {/* Main Panel */}
        <div className="App-grid-main">
          <div className="App-grid-main-content">
            <MainSection header="Experience" />
            <Job
              header="Continuum Industries"
              role="Senior Software Engineer"
              dateStart="May 2024"
              dateEnd="April 2025"
              image="continuum.png"
            >
              <>
                <p>
                  Building an intuitive UI for a sophisticated AI-powered
                  mapping service, focusing on performance under the load of
                  massive datasets.
                </p>

                <p>
                  Setting the benchmark for a culture of excellence and
                  continuous improvement across engineering, including code
                  quality, testing, and maintainability.
                </p>

                <Project
                  heading="Automated E2E Regression Testing with Playwright"
                  period="2024"
                >
                  <>
                    <p>
                      Championed and led the creation of reliable end-to-end
                      automated test suite using Playwright. Created and taught
                      page object models to significantly improve
                      maintainability.
                    </p>

                    <p>
                      Test suite surfaced complex hidden bugs, reduced issue
                      tickets and production incidents by an order of magnitude,
                      and helped build confidence in importance of testing.
                    </p>
                  </>
                </Project>

                <Project
                  heading="Pioneering a Design System"
                  period="2024 - 2025"
                >
                  <p>
                    Designing and implementing Continuum's design system,
                    "Bedrock", from the ground up to improve UI consistency and
                    code reuse. Staff engineer and I built the system,
                    established guidelines, and upskilled engineering.
                  </p>
                </Project>

                <Project heading="TypeScript Migration" period="2024">
                  <>
                    <p>
                      Initiated and led TypeScript migration for the frontend
                      and adoption across engineering, in a seamless and
                      incremental manner to avoid merge freezes. Automated type
                      generation from GraphQL schemas and documents. Catch
                      errors at compile time instead of in production!
                    </p>
                  </>
                </Project>
              </>
            </Job>

            <Job
              header="Skyscanner"
              role="Software Engineer"
              dateStart="Nov 2021"
              dateEnd="May 2024"
              image="skyscanner.png"
            >
              <>
                <p>
                  Maintainer of the homepage and search results pages, I worked
                  on the core product which serves flight results to travellers,
                  with an emphasis on scale, performance, and accessibility.
                </p>

                <Project heading="Save To List" period="2023">
                  <p>
                    Led "Save To List" implementation on web, allowing
                    travellers to save flights to their profile, increasing
                    revenue by £1.2 million annually.
                  </p>
                </Project>

                <Project heading="Homepage Consolidation" period="2022">
                  <p>
                    Shipped the redesigned homepage for Skyscanner, including
                    new search controls. Implementing redesign of new homepage
                    and switching microservice/microsite.
                  </p>
                </Project>

                <Project
                  heading="Presenting at Lean Agile Scotland"
                  period="October 2022"
                  link="https://leanagile.scot/programme/why-agile-still-hard-2022"
                >
                  <p>
                    I co-authored and presented a talk on "Why is agile still
                    hard in 2022?" with Ramsay at Lean Agile Scotland, which
                    resulted in two attendees joining Skyscanner.
                  </p>
                </Project>
              </>
            </Job>

            <Job
              header="Team ESTEEM"
              role="Website & audiovisual team lead"
              dateStart="Dec 2018"
              dateEnd="Nov 2021"
              image="teamesteem.jpg"
            >
              <>
                <p>
                  Extracurriclar university project with over 100 students from
                  HWU taking on the international{" "}
                  <a href="https://www.solardecathlon.gov/international-middle-east.html">
                    SDME
                  </a>{" "}
                  project; designing and building a sustainable and innovative
                  solar powered home. We were the sole UK finalists.
                </p>

                <Project
                  heading="Website in React & Smart Home Systems"
                  link="https://teamesteem.co.uk/"
                >
                  <p>
                    Led website team to overhaul Wordpress website with React
                    from scratch. Also wrote software to connect smart systems
                    together.{" "}
                    <a href="https://github.com/TeamEsteem">See in GitHub</a>.
                  </p>
                </Project>

                <Project
                  heading="Audiovisual Team Lead"
                  link="https://www.youtube.com/watch?v=PT8aveu2Asg"
                >
                  <p>
                    Created an impressive brand identity that won us 1st place
                    for social media presence in SDME competition and Public
                    Engagement Award from HWU. Shot and edited videos,
                    photographs, motion graphics.
                  </p>
                </Project>
              </>
            </Job>

            <MainSection header="Volunteering" />
            <Job
              header="Prewired"
              role="Mentor"
              dateStart="2019"
              image="prewired.jpg"
            >
              <p>
                I help children learn coding, support them with their personal
                projects, and take part in organising competitions and other
                events that they can participate in. I also repair and deploy OS
                images to the laptops.
              </p>
            </Job>
            <Job
              header="HWU Student Union"
              role="Student Representative"
              dateStart="2017"
              dateEnd="2021"
              image="hwu.png"
            >
              <>
                <p>
                  I was a Class Representative for 3 years, then became a School
                  Officer for the school of Computer Science.
                </p>

                <Project
                  heading="Platform: Anonymous Feedback"
                  link="https://alak.bar/projects/platform/"
                />
                <p>
                  Identified demand for anonymous feedback raising system for
                  students. Built a web service with ticketing system,
                  announcements, and resources for students with my fellow rep.
                </p>
              </>
            </Job>

            <MainSection header="Personal" />
            <br />
            <Project
              heading="Personal website alak.bar"
              period="Summer 2020"
              link="https://alak.bar/"
            />
            <p>
              Personal website built from scratch using pure HTML, CSS, running
              on a Go web server. Very performant. Briefly hosted in the cloud
              (Google VPS), now in my home in Edinburgh.
            </p>

            <Project
              heading="Optiplex Homelab"
              link="https://alak.bar/blog/NAS/"
              period="Perpetual"
            />
            <p>
              I use Unraid to host my Plex server (all legit 😇), Filerun
              (Google Drive replacement), virtual machines, Wireguard VPN,
              reverse proxies, and various other Docker containers.
            </p>

            <MainSection header="Awards" />
            <br />
            <ul>
              <li>
                <Project
                  heading="Public Engagement 2022 for Team ESTEEM"
                  link="https://www.hw.ac.uk/uk/research/engage/principals-prize/2022-winners.htm"
                />
              </li>
              <li>
                <Project
                  heading="School Officer of the Year 2021"
                  link="https://www.hwunion.com/ents/event/1305/"
                />
              </li>
              <li>
                <Project
                  heading="Deputy Principal's Award 2021"
                  link="https://www.hw.ac.uk/uk/services/academic-registry/quality/learning-teaching/deputy-principal-s-award-2018-19.htm"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
