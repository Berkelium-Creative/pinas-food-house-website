"use client";
import { Modak, Inter, JetBrains_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Modak({ subsets: ["latin"], weight: ["400"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono" });

const WALNUT = "#7C2D12";
const WALNUT_DARK = "#431407";
const SAFFRON = "#D97706";
const PALM = "#166534";
const CREAM = "#FEF3C7";
const INK = "#1C1917";
const MUTED = "#78716C";

const HERO_PHOTO = "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=1800&q=80&auto=format&fit=crop";
const SHOP_PHOTO = "https://images.unsplash.com/photo-1576866209830-589e1bfbaa8d?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`} style={{ backgroundColor: CREAM, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float-soft { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .display-text { font-family: var(--font-display); }
        .mono-text { font-family: var(--font-mono); }
        .float-soft { animation: float-soft 4s ease-in-out infinite; }
        .leaf-bg {
          background-image:
            radial-gradient(circle at 20% 20%, ${PALM}25 12px, transparent 14px),
            radial-gradient(circle at 80% 30%, ${SAFFRON}30 10px, transparent 12px),
            radial-gradient(circle at 50% 80%, ${PALM}25 16px, transparent 18px),
            radial-gradient(circle at 90% 75%, ${SAFFRON}30 8px, transparent 10px);
          background-size: 180px 180px;
        }
      `}</style>

      <header className="border-b-4" style={{ borderColor: WALNUT_DARK, backgroundColor: CREAM }}>
        <div className="text-center py-2.5 mono-text text-[10px] uppercase tracking-[0.4em] font-bold" style={{ backgroundColor: PALM, color: CREAM }}>
          ☼ GLASSELL PARK · OPEN 7 DAYS · 7 AM TO 7 PM · KAMUSTA! ☼
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="display-text text-4xl leading-none" style={{ color: WALNUT_DARK }}>Piñas</div>
            <div className="mono-text text-[10px] uppercase tracking-[0.4em] mt-1" style={{ color: SAFFRON }}>FOOD HOUSE · GLASSELL PARK</div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm font-bold uppercase tracking-wider">
            <a href="#about" style={{ color: INK }}>The House</a>
            <a href="#menu" style={{ color: INK }}>Menu</a>
            <a href="#reviews" style={{ color: INK }}>Reviews</a>
            <a href="#visit" style={{ color: INK }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-5 py-2.5 text-base" style={{ backgroundColor: WALNUT, color: CREAM }}>Call</a>
        </nav>
      </header>

      <section className="relative py-20 leaf-bg border-b-4" style={{ borderColor: WALNUT_DARK }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-6 inline-block px-3 py-1.5 font-bold" style={{ backgroundColor: SAFFRON, color: WALNUT_DARK }}>{c.hero.eyebrow}</div>
            <h1 className="display-text text-6xl md:text-9xl leading-[0.88] mb-8" style={{ color: WALNUT_DARK }}>
              {c.hero.heading}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: INK }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text px-10 py-4 text-2xl inline-flex items-center gap-3" style={{ backgroundColor: PALM, color: CREAM }}>
                {c.hero.ctaText} →
              </a>
              <div className="text-sm">
                <div className="font-bold mb-1" style={{ color: INK }}>★ 4.5 · 17 REVIEWS</div>
                <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: PALM }}>// W AVE 40 · GLASSELL PARK</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 fade-up delay-2 relative">
            <div className="overflow-hidden border-4 float-soft" style={{ borderColor: WALNUT_DARK, aspectRatio: "4/5", borderRadius: "20px" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            <div className="absolute -top-6 -right-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center -rotate-6" style={{ backgroundColor: SAFFRON, color: WALNUT_DARK }}>
              <div className="display-text text-2xl leading-none">SARAP</div>
              <div className="mono-text text-[10px] uppercase tracking-widest mt-1">DELICIOUS</div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center rotate-6" style={{ backgroundColor: PALM, color: CREAM }}>
              <div className="display-text text-3xl leading-none">7AM</div>
              <div className="mono-text text-[10px] uppercase tracking-widest mt-1">EVERY DAY</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b-4" style={{ borderColor: WALNUT_DARK, backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden border-4" style={{ borderColor: WALNUT_DARK, aspectRatio: "3/4", borderRadius: "20px" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${SHOP_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3 inline-block px-3 py-1.5 font-bold" style={{ backgroundColor: PALM, color: CREAM }}>{c.about.label}</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[1.0] mb-8" style={{ color: WALNUT_DARK }}>{c.about.heading}</h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: INK }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 border-b-4" style={{ borderColor: WALNUT_DARK, backgroundColor: WALNUT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3 inline-block px-3 py-1.5 font-bold" style={{ backgroundColor: SAFFRON, color: WALNUT_DARK }}>THE MENU</div>
            <h2 className="display-text text-5xl md:text-8xl leading-[0.95]" style={{ color: CREAM }}>Filipino comfort.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.map((s: any, i: number) => (
              <article key={i} className="p-7 border-4 flex flex-col h-full" style={{ borderColor: SAFFRON, backgroundColor: WALNUT_DARK, borderRadius: "20px" }}>
                <div className="display-text text-7xl leading-none mb-4" style={{ color: SAFFRON }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="display-text text-3xl mb-4 leading-tight" style={{ color: CREAM }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: CREAM, opacity: 0.9 }}>{s.description}</p>
                <div className="display-text text-2xl pt-3" style={{ color: SAFFRON, borderTop: `2px solid ${SAFFRON}` }}>{s.price}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b-4" style={{ borderColor: WALNUT_DARK, backgroundColor: PALM }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3 inline-block px-3 py-1.5 font-bold" style={{ backgroundColor: SAFFRON, color: WALNUT_DARK }}>FROM THE TABLE</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95]" style={{ color: CREAM }}>What they say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-7 border-4 flex flex-col h-full" style={{ backgroundColor: CREAM, borderColor: WALNUT_DARK, borderRadius: "20px" }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: SAFFRON, fontSize: 22 }}>★</span>)}
                  </div>
                  <div className="display-text text-2xl" style={{ color: WALNUT }}>0{i + 1}</div>
                </div>
                <blockquote className="text-base leading-relaxed mb-6 flex-grow" style={{ color: INK }}>"{r.text}"</blockquote>
                <figcaption className="pt-4" style={{ borderTop: `3px solid ${SAFFRON}` }}>
                  <div className="display-text text-2xl leading-tight" style={{ color: WALNUT_DARK }}>{r.name}</div>
                  <div className="mono-text text-[10px] uppercase tracking-widest mt-1" style={{ color: PALM }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: SAFFRON }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-4 inline-block px-3 py-1.5 font-bold" style={{ backgroundColor: WALNUT, color: CREAM }}>VISIT US</div>
            <h2 className="display-text text-6xl md:text-8xl leading-[0.9] mb-8" style={{ color: WALNUT_DARK }}>Halika na!</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: WALNUT_DARK }}>On West Avenue 40 just off Eagle Rock Boulevard. Open seven days a week, seven in the morning to seven at night. Dine in, take out, or order a family-size tray ahead.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1 font-bold" style={{ color: WALNUT }}>ADDRESS</dt>
                <dd className="text-xl font-semibold" style={{ color: WALNUT_DARK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1 font-bold" style={{ color: WALNUT }}>CALL</dt>
                <dd className="display-text text-4xl"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: WALNUT_DARK }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-2 font-bold" style={{ color: WALNUT }}>HOURS</dt>
                <dd>
                  <table className="text-sm" style={{ color: WALNUT_DARK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-bold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden border-4" style={{ borderColor: WALNUT_DARK, minHeight: 420, borderRadius: "20px" }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: WALNUT_DARK, color: CREAM }}>
        <div className="display-text text-5xl mb-2" style={{ color: SAFFRON }}>Piñas Food House</div>
        <div className="mono-text text-xs uppercase tracking-[0.4em]" style={{ color: CREAM, opacity: 0.85 }}>// W AVE 40 · GLASSELL PARK · MARAMING SALAMAT</div>
        <div className="mono-text text-xs uppercase tracking-[0.35em] mt-4 opacity-60">© {new Date().getFullYear()} · Piñas Food House · Los Angeles</div>
      </footer>
    </main>
  );
}
