import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Home</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>
//       <div className="max-w-7xl flex w-full justify-between fixed">
//         <button className="text-3xl text-blue-500">Button</button>
//         <button className="text-3xl text-blue-500">Button</button>
//         <button className="text-3xl text-blue-500">Button</button>
//       </div>
//       <div className="flex flex-col justify-center items-center h-screen">
//         <h1 className="text-7xl text-blue-500">Hello</h1>
//       </div>
//       <Image src="/home/Sad-Puppy.jpeg" alt="sad boi" width={1140} height={655} className="w-full" />
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/scripts/script.js"></script>
      </Head>
      <main id="container">
        <div class="section-scroll-anchor" id="home"></div>
        <section id="home-section">
          <div id="home-section__introduction">
            <h2>Hello, I&apos;m</h2>
            <h1>Marvel</h1>
            <h2>a programming-enthusiast in Indonesia.</h2>
          </div>
        </section>

        <section id="home-section-extension">
          <div class="wrapper">
            <h3>
              Hey, Marvel Orleans here. 👋 I&apos;m a highshooler in Indonesia with a
              passion in programming, especially with Python, and AI. I haven&apos;t
              got much experience, but I&apos;m always open to trying out more things
              and gaining some.
            </h3>
            <p>
              Need a simple website, but don&apos;t have the best budget? Give me a
              call &mdash; I&apos;ve got your back.
            </p>
          </div>
        </section>

        <div class="section-scroll-anchor" id="skills"></div>

        <section id="skills-section">
          <div class="line-with-text-container">
            <div class="line-around-text"></div>
            <h2 class="text-between-line">My Skills</h2>
            <div class="line-around-text"></div>
          </div>
          <p class="lg:mt-14">I&apos;m best at…</p>
          <div id="skills-section__best-skill">
            <figure class="skills-icon-figure">
              <Image
                class="skills-icon"
                src="/img/home-page/skills-section/python-logo.svg"
                alt="Python Logo"
                width={1000}
                height={1000}
              />
            </figure>
          </div>
          <p>I also enjoy…</p>
          <div id="skills-section__other-skills">
            <figure class="skills-icon-figure">
              <Image
                class="skills-icon"
                src="/img/home-page/skills-section/html5-logo.svg"
                alt="HTML5 Logo"
                width={1000}
                height={1000}
              />
            </figure>
            <figure class="skills-icon-figure">
              <Image
                class="skills-icon"
                src="/img/home-page/skills-section/css_logo.svg"
                alt="CSS3 Logo"
                width={1000}
                height={1000}
              />
            </figure>
            <figure class="skills-icon-figure">
              <Image
                class="skills-icon"
                src="/img/home-page/skills-section/javascript-logo.svg"
                alt="JavaScript Logo"
                width={1000}
                height={1000}
              />
            </figure>
          </div>
          <p>And I use…</p>
          <div id="skills-section__tools">
            <figure class="skills-icon-figure">
              <Image
                class="skills-icon"
                src="/img/home-page/skills-section/git-logo.svg"
                alt="GitHub Logo"
                width={1000}
                height={1000}
              />
            </figure>
            <figure class="skills-icon-figure">
              <Image
                class="skills-icon"
                src="/img/home-page/skills-section/github-logo.svg"
                alt="GitHub Logo"
                width={1000}
                height={1000}
              />
            </figure>
          </div>
        </section>

        <section id="work-experience">
        </section>

        <div class="section-scroll-anchor" id="projects"></div>

        <section id="projects-section">
          <div class="line-with-text-container">
            <div class="line-around-text"></div>
            <h2 class="text-between-line">Personal Projects</h2>
            <div class="line-around-text"></div>
          </div>

          <div id="projects-section__items-container">
            <article class="projects-section__item">
              <div class="projects-section__item__description">
                <div>
                  <h3>Self-service Reference-sketching App</h3>
                  <p>
                    A user-centric app to help artists practice sketching using
                    their own references.
                  </p>
                </div>
                <div class="projects-section__item__tags">
                  <div class="projects-section__item__tag">
                    Python, CustomTkinter
                  </div>
                  <div class="projects-section__item__tag">Desktop App</div>
                  <div class="projects-section__item__tag">Dec 2023</div>
                </div>
              </div>
              <figure>
                <Image
                  src="/img/home-page/projects-section/image-references.png"
                  alt="Self-service Sketch-referencing App, named &apos;Image References'"
                  width={1000}
                  height={1000}
                />
              </figure>
            </article>

            <hr class="projects-section__horizontal-rule" />

            <article class="projects-section__item">
              <div class="projects-section__item__description">
                <div>
                  <h3>2D Matrix Transformation Visualizer</h3>
                  <p>
                    A tool to help visualize linear transformations in linear
                    algebra.
                  </p>
                </div>
                <div class="projects-section__item__tags">
                  <div class="projects-section__item__tag">
                    Python, Dash, Plotly, NumPy
                  </div>
                  <div class="projects-section__item__tag">Web App</div>
                  <div class="projects-section__item__tag">July 2024</div>
                </div>
              </div>
              <figure>
                <Image
                  src="/img/home-page/projects-section/matrix-visualizer.png"
                  alt="2D Matrix Transformation Visualizer Web App"
                  width={1000}
                  height={1000}
                />
              </figure>
            </article>

            <hr class="projects-section__horizontal-rule" />

            <article class="projects-section__item">
              <div class="projects-section__item__description">
                <div>
                  <h3>Portfolio Site</h3>
                  <p>
                    The website you&apos;re seeing right now &mdash; originally for an
                    assignment.
                  </p>
                </div>
                <div class="projects-section__item__tags">
                  <div class="projects-section__item__tag">HTML, CSS, JS</div>
                  <div class="projects-section__item__tag">Website</div>
                  <div class="projects-section__item__tag">Aug 2024</div>
                </div>
              </div>
              <figure>
                <Image
                  src="/img/home-page/projects-section/portfolio-site.png"
                  alt="An image of this portfolio site."
                  width={1000}
                  height={1000}
                />
              </figure>
            </article>
            <hr class="projects-section__horizontal-rule" />
          </div>
        </section>

        <div class="section-scroll-anchor" id="about"></div>
        <section id="about-section">
          <figure>
            <Image
              src="/img/home-page/about-section/profile-photo.png"
              alt="A profile picture of me, with my face."
              width={1000}
              height={1000}
            />
          </figure>
          <div>
            <div>
              <h2>About me</h2>
              <p>
                I&apos;m passionate about writing, whether that be code or stories from
                my imagination. Being in a vocational major for graphic design,
                I&apos;ve learned quite a bit about what makes things good.
                <br /><br />I don’t have it all figured out yet, and I know I have
                a lot to learn. But I’m okay with that—I’m here to explore, make
                mistakes, and grow along the way. This site is part of that
                journey, showcasing my interests and the things I’ve been working
                on, even if they’re just small steps right now. <br /><br />Got
                something in mind, or just want to chat? Let me know!
              </p>
              <button type="button" class="mt-4" id="copy-email-button">
                hellomarvelorleans@gmail.com &nbsp;
                <Image
                  src="/img/copy-email-button/copy-icon-black.svg"
                  alt="Copy Icon"
                  width={1000}
                  height={1000}
                />
                <span>Copied!</span>
              </button>
            </div>

            <hr />
            <ul>
              <li>
                <a
                  class="standard-link-hover"
                  href="docs/resume.pdf"
                  target="_blank"
                >Resume</a
                >
              </li>
              <li>
                <a
                  class="standard-link-hover"
                  href="https://github.com/CupapiOT"
                  target="_blank"
                >GitHub</a
                >
              </li>
              <li>
                <a
                  class="standard-link-hover"
                  href="https://www.linkedin.com/in/marvel-orleans"
                  target="_blank"
                >LinkedIn</a
                >
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>&copy; Marvel Orleans 2024</footer>
    </>
  );
}
