import PageHero from "../components/PageHero";
import newsHero from "../assets/images/heroes/board-hero.webp";

import kickoff2026 from "../assets/images/news/kickoff-2026.webp";
import flitpris2025 from "../assets/images/news/flitpris-2025.webp";
import manna2025 from "../assets/images/news/25-manna-2025.webp";
import dmStafett2025 from "../assets/images/news/dm-stafett-2025.webp";
import kmSprint2025 from "../assets/images/news/km-sprint-2025.webp";
import pmTjoget2025 from "../assets/images/news/pm-tjoget-2025.webp";
import minitjoget2025 from "../assets/images/news/minitjoget-2025.webp";
import kladshoppen2025 from "../assets/images/news/kladshoppen-2025.png";
import tjoget2025 from "../assets/images/news/tjoget-2025.webp";
import klubblager2025 from "../assets/images/news/km-sprint-2025.webp";
import kickoff2025 from "../assets/images/news/kickoff-2026.webp";

import "./News.css";

function News() {
  return (
    <>
      <PageHero title="Nyheter" />
      <section className="news">
        {/* Featured/Latest News */}
        <article className="news__featured">
          <a href="/news/kickoff2026" className="news__featured-link">
            <figure className="news__featured-image">
              <img src={kickoff2026} alt="Kickoff" />
              <time className="news__date-badge" dateTime="2025-12-15">
                15 december 2025
              </time>
            </figure>
            <div className="news__featured-content">
              <h2 className="news__featured-title">
                Kickoff och Markbygdsgalan
              </h2>
              <p className="news__featured-excerpt">
                Äntligen så närmar sig säsongen 2026 och det är hög tid...
              </p>
              <span className="news__read-more">Läs mer →</span>
            </div>
          </a>
        </article>

        {/* Other News */}
        <div className="news__grid">
          <article className="news__card">
            <a href="/news/markbygdens-ok-flitpris" className="news__card-link">
              <figure className="news__card-image">
                <img src={flitpris2025} alt="Markbygdens OK flitpris" />
                <time className="news__card-date" dateTime="2025-09-19">
                  19 september 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">
                  Markbygdens OK flitpris ställning
                </h3>
                <p className="news__card-excerpt">
                  Nu finns en sammanställning för ställningen i vårt
                  nyinstiftade flitpris...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/25-manna" className="news__card-link">
              <figure className="news__card-image">
                <img src={manna2025} alt="25-Manna" />
                <time className="news__card-date" dateTime="2025-08-28">
                  28 AUGUSTI 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">25-Manna</h3>
                <p className="news__card-excerpt">
                  25-manna går i år av stapeln helgen 11-13 oktober strax...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/dm-stafett" className="news__card-link">
              <figure className="news__card-image">
                <img src={dmStafett2025} alt="DM-Stafett" />
                <time className="news__card-date" dateTime="2025-08-22">
                  22 AUGUSTI 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">DM-Stafett 7/9</h3>
                <p className="news__card-excerpt">
                  Nu drar det ihop sig inför DM i medeldistans/stafett som...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/km-sprint" className="news__card-link">
              <figure className="news__card-image">
                <img src={kmSprint2025} alt="KM sprint" />
                <time className="news__card-date" dateTime="2025-08-13">
                  13 AUGUSTI 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">KM Sprint 21/8</h3>
                <p className="news__card-excerpt">
                  Välkomna att springa vårt öppna KM vid Vävarehallen i Skene...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/pm-tjoget" className="news__card-link">
              <figure className="news__card-image">
                <img src={pmTjoget2025} alt="PM Tjoget" />
                <time className="news__card-date" dateTime="2025-06-29">
                  29 Juni 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">PM Tjoget</h3>
                <p className="news__card-excerpt">
                  Nu finns ett PM för MBOK Tjoget 2025 där laguppställningen...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/minitjoget" className="news__card-link">
              <figure className="news__card-image">
                <img src={minitjoget2025} alt="Minitjoget" />
                <time className="news__card-date" dateTime="2025-06-09">
                  9 juni 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">Minitjoget</h3>
                <p className="news__card-excerpt">
                  Nu är det dags att anmäla sig till årets höjdpunkt
                  Minitjoget...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/kladshoppen" className="news__card-link">
              <figure className="news__card-image">
                <img src={kladshoppen2025} alt="Klädshoppen" />
                <time className="news__card-date" dateTime="2025-05-30">
                  30 maj 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">Minitjoget</h3>
                <p className="news__card-excerpt">
                  Nu är äntligen klädshoppen öppen, tyvärr så är det kort...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/tjoget2025" className="news__card-link">
              <figure className="news__card-image">
                <img src={tjoget2025} alt="Tjoget 2025" />
                <time className="news__card-date" dateTime="2025-05-30">
                  30 maj 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">Tjoget 2025</h3>
                <p className="news__card-excerpt">
                  Tjoget närmar sig och nu är det dags för att...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/klubblager" className="news__card-link">
              <figure className="news__card-image">
                <img src={klubblager2025} alt="Klubbläger" />
                <time className="news__card-date" dateTime="2025-04-29">
                  29 april 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">
                  Klubbläger vid sommarlandssprinten
                </h3>
                <p className="news__card-excerpt">
                  Nu finns det en inbjudan till årets Klubbläger vis
                  Sommarlandssprinten...
                </p>
              </div>
            </a>
          </article>

          <article className="news__card">
            <a href="/news/kickoff2025" className="news__card-link">
              <figure className="news__card-image">
                <img src={kickoff2025} alt="Kickoff 2025" />
                <time className="news__card-date" dateTime="2025-01-12">
                  12 januari 2025
                </time>
              </figure>
              <div className="news__card-content">
                <h3 className="news__card-title">
                  Kickoff och Markbygdsgala 25/1
                </h3>
                <p className="news__card-excerpt">
                  Välkomna till årets planeringsdag/kickoff med markbygdsgala på
                  kvällen. För mer...
                </p>
              </div>
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default News;
