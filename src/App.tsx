import { ReactElement } from "react";
import "./App.css";

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

type JobProps = {
  header: string;
  children: ReactElement;
  dateEnd?: string;
  dateStart: string;
  image?: string;
  role: string;
};

const Job = ({
  header,
  children,
  dateEnd,
  dateStart,
  image,
  role,
}: JobProps) => {
  return (
    <>
      <p
        style={{
          fontStyle: "italic",
          color: "var(--subtitle)",
          margin: "0 0 0 0",
          transform: "translateY(1rem)",
        }}
      >
        {role}
      </p>
      <div className="App-grid-main-content-span">
        <div className="App-grid-main-content-span-header">
          {image && <img src={`logos/${image}`} alt="" />}
          <h3 className="clampText">{header}</h3>
        </div>
        <p className="subtitle">
          {dateStart} - {dateEnd ?? "Now"}
        </p>
      </div>
      {children}
    </>
  );
};

type ProjectProps = {
  heading: string;
  link?: string;
  period?: string;
};

const Project = ({ heading, link, period }: ProjectProps) => {
  return link ? (
    <div className="App-grid-main-content-span">
      <div className="App-grid-main-content-span-header">
        <a href={link}>
          <h4 className="">{heading}</h4>
        </a>
      </div>
      <p className="subtitle">{period}</p>
    </div>
  ) : (
    <div className="App-grid-main-content-span">
      <div className="App-grid-main-content-span-header">
        <h4 className="clampText">{heading}</h4>
      </div>
      <p className="subtitle">{period}</p>
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
            <img src="profile.jpg" alt="Head shot of Alakbar" />
            <div className="App-grid-info-summary-content">
              <h1>Alakbar</h1>
              <p>hello@alak.bar</p>
              <p>Edinburgh, UK</p>
              <p>07478447100</p>
              <a href="https://alak.bar/">https://alak.bar</a>
              <a href="https://www.linkedin.com/in/alakbarz/">LinkedIn</a>
            </div>
          </div>

          <div className="App-grid-info-content">
            <SummarySection header="Who Me?">
              <>
                <p>
                  I love being creative, making, and tinkering with things to
                  find out how they work. Sometimes breaking things, but always
                  fixing them back up!
                </p>
                <br />
                <p>
                  My favourite hobbies are video editing, graphic design and
                  astrophotography. I daily drive Ubuntu, Windows, MacOS 😩 and
                  GrapheneOS on Android.
                </p>
              </>
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
            <SummarySection header="Programming Languages">
              <ul>
                <li>TypeScript/JavaScript</li>
                <li>React/Vue</li>
                <li>Python</li>
                <li>Go</li>
              </ul>
            </SummarySection>
            <SummarySection header="Skills">
              <ul>
                <li>CI/CD & DevOps (GitHub Actions)</li>
                <li>Playwright/Cypress/Percy automated visual testing</li>
                <li>Incident management (incident.io) and New Relic</li>
                <li>
                  Core Web Vitals (CWVs) and automated performance testing with
                  Lighthouse
                </li>
                <li>Mentoring</li>
              </ul>
            </SummarySection>
            <SummarySection header="Other Skills">
              <ul>
                <li>Photography & videography</li>
                <li>Blender</li>
                <li>Adobe Creative suite</li>
              </ul>
            </SummarySection>
            <SummarySection header="Miscellaneous">
              <ul>
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
                <p>Still to fill in!</p>

                <Project
                  heading="Automated Regression Testing with Playwright"
                  period="2024"
                />
                <p>Still to fill in!</p>

                <Project heading="TypeScript Migration" period="2024" />
                <p>Still to fill in!</p>
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
                  Working on the core product which serves flight results to
                  travellers, with an emphasis on performance and accessibility.
                </p>

                <Project heading="Save To List" period="2023" />
                <p>
                  Led Save To List work-stream on web, allowing travellers to
                  save flights to their profile, increasing revenue by £1.2
                  million annually.
                </p>

                <Project
                  heading="Presenting at Lean Agile Scotland"
                  period="October 2022"
                  link="https://leanagile.scot/programme/why-agile-still-hard-2022"
                />
                <p>
                  I wrote and presented a talk on "Why is agile still hard in
                  2022?" with Ramsay at Lean Agile Scotland, bringing in two new
                  employees.
                </p>

                <Project heading="Homepage Consolidation" period="2022" />
                <p>
                  Implementing redesign of new homepage and switching
                  microservice/microsite.
                </p>
              </>
            </Job>

            <Job
              header="Team ESTEEM"
              role="Software engineer & leading audiovisual/website teams"
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
                />
                <p>
                  Team lead for building website using React from scratch and
                  writing software to connect smart systems together.{" "}
                  <a href="https://github.com/TeamEsteem">See GitHub</a>.
                </p>

                <Project
                  heading="Audiovisual Team Lead"
                  link="https://www.youtube.com/watch?v=PT8aveu2Asg"
                />
                <p>
                  Created videos, graphics, images, summing to an impressive
                  brand identity that won us two awards: 1st place for social
                  media presence (SDME) and Public Engagement Award (HWU).
                </p>
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
                Mentoring under 18s, helping them learn programming and Computer
                Science fundamentals. Also repairing and deploying OS images to
                the laptops.
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
                  announcements, and resources for students.
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
              on a Go web server. Very performant. Briefly hosted in the cloud (
              <a href="https://cloud.google.com/">GCP VPS</a>), now in my
              homelab.
            </p>

            <Project
              heading="Optiplex Homelab"
              link="https://alak.bar/blog/NAS/"
            />
            <p>
              I use <a href="https://unraid.net/">Unraid</a> to host my Plex
              server (all legit 😇), <a href="https://filerun.com/">Filerun</a>{" "}
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
