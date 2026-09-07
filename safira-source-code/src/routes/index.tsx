import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Menu, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, heroVideo, journal, services, stories, films } from "@/lib/portfolio-data";
import { supabase } from "@/integrations/supabase/client";
import { getYouTubeId } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "theSafira | Cinematic Wedding Photographer Pune" },
    { name: "description", content: "Cinematic wedding, couple and destination photography by theSafira, based in Pune and available across India and worldwide." },
    { property: "og:title", content: "theSafira | Stories worth remembering" },
    { property: "og:description", content: "Authentic photographs, honest emotions and stories captured wherever life takes you." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Home,
});

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.9 } };

function Home() {
  const [menu, setMenu] = useState(false);
  const [solid, setSolid] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [activeFilm, setActiveFilm] = useState<(typeof films)[number] | null>(null);
  useEffect(() => {
    if (!activeFilm) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveFilm(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [activeFilm]);
  useEffect(() => { const onScroll = () => setSolid(window.scrollY > 80); onScroll(); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSending(true);
    const form = new FormData(e.currentTarget);
    const formElement = e.currentTarget;
    const { error } = await supabase.from("enquiries").insert({ name: String(form.get("name")), email: String(form.get("email")), phone: String(form.get("phone") || ""), event_type: String(form.get("event_type") || ""), event_date: String(form.get("event_date") || "") || null, location: String(form.get("location") || ""), budget: String(form.get("budget") || ""), instagram: String(form.get("instagram") || ""), message: String(form.get("message")) });
    setSending(false); if (!error) { setSent(true); formElement.reset(); }
  }

  return <main>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-ink/95 text-paper" : "text-paper"}`}>
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="font-display text-3xl">theSafira</a>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.16em] md:flex">
          <a href="#stories">Stories</a><a href="#films">Films</a><a href="#about">About</a><a href="#journal">Journal</a><a href="#contact">Contact</a>
          <a href="#contact" className="border-b border-current pb-1">Let's Talk</a>
        </nav>
        <Button variant="ghost" size="icon" className="text-current md:hidden" aria-label="Open menu" onClick={() => setMenu(true)}><Menu /></Button>
      </div>
    </header>
    {menu && <div className="fixed inset-0 z-[60] flex flex-col bg-ink p-7 text-paper">
      <div className="flex items-center justify-between"><span className="font-display text-3xl">theSafira</span><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenu(false)}><X /></Button></div>
      <nav className="mt-auto mb-auto flex flex-col gap-4 font-display text-5xl">{["Stories","Films","About","Journal","Contact"].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)}>{x}</a>)}</nav>
    </div>}

    <section id="top" className="relative min-h-[92svh] overflow-hidden bg-ink text-paper">
      <video src={heroVideo} autoPlay muted loop playsInline preload="auto" poster={images.heroImage} className="cinematic-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="relative z-10 flex min-h-[92svh] flex-col items-center justify-center px-6 pb-16 text-center lg:px-12 lg:pb-20">
        <motion.p {...reveal} className="mb-5 text-[10px] uppercase tracking-[0.28em]">Pune · India · Worldwide</motion.p>
        <motion.h1 {...reveal} transition={{ duration: 1, delay: .1 }} className="max-w-5xl text-balance font-display text-[clamp(4rem,10vw,10rem)] leading-[.78]">Stories worth <em>remembering.</em></motion.h1>
        <motion.div {...reveal} transition={{ duration: .9, delay: .25 }} className="mt-8 flex flex-col items-center gap-7">
          <p className="max-w-md text-sm leading-7 text-paper/80">Authentic photographs, honest emotions and stories captured wherever life takes you.</p>
          <div className="flex gap-3"><Button asChild variant="editorialOutline" size="editorial"><a href="#stories">Explore stories</a></Button><Button asChild variant="editorial" size="editorial"><a href="#contact">Let's talk</a></Button></div>
        </motion.div>
        <ArrowDown className="absolute bottom-5 left-1/2 size-4 -translate-x-1/2" />
      </div>
    </section>

    <motion.section {...reveal} className="mx-auto grid max-w-[1400px] gap-14 px-6 py-28 lg:grid-cols-[1.4fr_.6fr] lg:px-12 lg:py-44">
      <h2 className="text-balance text-5xl leading-[1.02] md:text-8xl">I don't photograph moments.<br/><em>I photograph what they feel like.</em></h2>
      <div className="flex flex-col justify-end"><p className="max-w-md text-sm leading-7 text-muted-foreground">From a quiet glance to uncontrollable laughter, from crowded celebrations to moments that belong only to two people — I look for the photographs that make you remember how it felt to be there.</p><p className="mt-10 border-t border-border pt-4 text-[10px] uppercase tracking-[0.18em]">Based in Pune · Available across India & worldwide</p></div>
    </motion.section>

    <section id="stories" className="bg-ink py-28 text-paper lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12"><p className="text-[10px] uppercase tracking-[0.24em] text-paper/55">Selected work · 2025–26</p><h2 className="mt-5 text-7xl md:text-9xl">Stories</h2><p className="mt-3 text-sm text-paper/60">Real people. Real moments. Beautifully imperfect.</p>
        <div className="mt-20 grid grid-cols-12 gap-x-5 gap-y-24">
          {stories.map((story, i) => <motion.article {...reveal} key={story.slug} className={`${i === 0 ? "col-span-12 lg:col-span-8" : i === 1 ? "col-span-10 col-start-3 lg:col-span-4 lg:col-start-9 lg:mt-40" : i === 2 ? "col-span-11 lg:col-span-7 lg:col-start-5" : "col-span-10 lg:col-span-4 lg:col-start-2"}`}>
            <Link to="/stories/$slug" params={{ slug: story.slug }} className="group block"><div className={`overflow-hidden ${story.shape === "portrait" ? "aspect-[4/5]" : "aspect-[3/2]"}`}><img src={story.image} alt={`${story.title}, ${story.location}`} loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.025]" /></div><div className="mt-5 flex justify-between border-t border-paper/25 pt-4"><div><h3 className="text-3xl">{story.title}</h3><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-paper/55">{story.location} · {story.category}</p></div><ArrowUpRight className="size-5" /></div></Link>
          </motion.article>)}
        </div>
      </div>
    </section>

    <section id="films" className="overflow-hidden bg-ink py-28 text-paper lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <p className="text-[10px] uppercase tracking-[.25em] text-paper/55">Stories in motion</p>
        <h2 className="mt-5 text-7xl md:text-9xl">Films</h2>
        <p className="mt-3 text-sm text-paper/60">Wedding films, told the way they were felt.</p>
      </div>
      <div className="group/marquee relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent lg:w-32" />
        <div className="animate-marquee flex w-max gap-6 px-6 group-hover/marquee:[animation-play-state:paused] lg:gap-8 lg:px-12">
          {[...films, ...films].map((film, i) => (
            <button key={`${film.id}-${i}`} type="button" onClick={() => setActiveFilm(film)} className="group w-[78vw] shrink-0 text-left sm:w-[420px] lg:w-[480px]">
              <div className="relative aspect-video overflow-hidden">
                <img src={film.thumbnail} alt={film.title} loading="lazy" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/40" />
                <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/70 transition duration-300 group-hover:scale-110 group-hover:bg-paper group-hover:text-ink">
                  <Play className="ml-1 size-5" />
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-paper/25 pt-4">
                <div><h3 className="text-2xl">{film.title}</h3><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-paper/55">{film.location}</p></div>
                <span className="text-xs text-paper/55">{film.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>

    {activeFilm && (
      <div role="dialog" aria-modal="true" aria-label={activeFilm.title} className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 sm:p-10" onClick={() => setActiveFilm(null)}>
        <button type="button" aria-label="Close film" onClick={() => setActiveFilm(null)} className="absolute right-5 top-5 text-paper transition hover:opacity-70 sm:right-10 sm:top-10"><X className="size-7" /></button>
        <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <div className="aspect-video w-full overflow-hidden bg-black">
            <iframe src={`https://www.youtube.com/embed/${getYouTubeId(activeFilm.youtubeUrl)}?autoplay=1&rel=0`} title={activeFilm.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="h-full w-full" />
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[.18em] text-paper/60">{activeFilm.title} · {activeFilm.location} · {activeFilm.duration}</p>
        </div>
      </div>
    )}

    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40"><div className="flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.22em] text-muted-foreground">What I photograph</p><h2 className="mt-4 text-6xl md:text-8xl">Ways of seeing</h2></div></div><div className="mt-16 border-t border-border">{services.map(([n,title,copy]) => <div key={title} className="grid gap-4 border-b border-border py-8 md:grid-cols-[80px_1fr_1fr]"><span className="text-xs text-muted-foreground">{n}</span><h3 className="text-4xl">{title}</h3><p className="max-w-lg text-sm leading-7 text-muted-foreground">{copy}</p></div>)}</div></section>

    <section id="about" className="grid bg-sand lg:grid-cols-2"><div className="min-h-[70vh]"><img src={images.photographerImage} alt="Portrait of the photographer behind theSafira" loading="lazy" className="h-full w-full object-cover grayscale"/></div><motion.div {...reveal} className="flex flex-col justify-center px-7 py-24 lg:px-20"><p className="text-[10px] uppercase tracking-[.22em]">Behind the lens</p><h2 className="mt-5 text-6xl md:text-8xl">Pawan Borkar</h2><p className="mt-8 max-w-lg font-display text-3xl leading-tight">Some photographers chase perfection. I chase the moment just before it.</p><p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground">The nervous smile. The unexpected laugh. The hand that reaches for another hand. The people who make an ordinary day unforgettable. My approach is quiet, observant and rooted in trust.</p><p className="mt-10 text-[10px] uppercase tracking-[.18em]">Pune based · Available worldwide</p></motion.div></section>

    <section className="bg-paper px-6 py-32 text-center lg:py-48">{["Wait for the light.","Wait for the laughter.","Wait for the glance.","Wait for the moment."].map((line,i)=><motion.p key={line} initial={{opacity:.15}} whileInView={{opacity:1}} viewport={{amount:.8}} transition={{duration:.6}} className="font-display text-5xl leading-[1.15] md:text-8xl">{line}</motion.p>)}<p className="mt-8 text-xs uppercase tracking-[.24em]">And then press the shutter.</p></section>

    <section id="journal" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40"><h2 className="text-7xl md:text-9xl">Field notes</h2><div className="mt-16 grid gap-12 md:grid-cols-2">{journal.map((post,i)=><Link to="/journal/$slug" params={{slug:post.slug}} key={post.slug} className={i===1 ? "md:mt-24" : ""}><img src={post.image} alt={post.title} loading="lazy" className="aspect-[4/3] w-full object-cover"/><p className="mt-5 text-[10px] uppercase tracking-[.18em] text-muted-foreground">{post.category} · {post.date} · 5 min</p><h3 className="mt-3 text-4xl md:text-5xl">{post.title}</h3><p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p></Link>)}</div></section>

    <section id="contact" className="bg-ink px-6 py-28 text-paper lg:px-12 lg:py-40"><div className="mx-auto grid max-w-[1400px] gap-20 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-[10px] uppercase tracking-[.22em] text-paper/55">Begin a conversation</p><h2 className="mt-5 text-6xl leading-[.95] md:text-8xl">Have a story worth remembering?</h2><p className="mt-8 max-w-md text-sm leading-7 text-paper/60">Tell me about it. Let's create something you'll want to keep forever.</p></div>{sent ? <div className="self-center border-t border-paper/30 py-14"><h3 className="text-5xl">Thank you.</h3><p className="mt-3 text-paper/60">Your story has arrived. I'll be in touch soon.</p></div> : <form onSubmit={submit} className="grid gap-x-6 gap-y-8 sm:grid-cols-2">{[["name","Your name","text",true],["email","Email address","email",true],["phone","Phone","tel",false],["event_type","Event type","text",false],["event_date","Event date","date",false],["location","Location","text",false],["budget","Budget range","text",false],["instagram","Instagram","text",false]].map(([name,label,type,required])=><label key={String(name)} className="text-[10px] uppercase tracking-[.16em] text-paper/55">{label}<input required={Boolean(required)} name={String(name)} type={String(type)} className="mt-2 h-12 w-full border-0 border-b border-paper/30 bg-transparent text-base text-paper outline-none focus:border-paper"/></label>)}<label className="sm:col-span-2 text-[10px] uppercase tracking-[.16em] text-paper/55">Tell me about your story<textarea required name="message" rows={4} className="mt-2 w-full resize-none border-0 border-b border-paper/30 bg-transparent text-base text-paper outline-none focus:border-paper"/></label><div className="sm:col-span-2"><Button disabled={sending} type="submit" variant="editorialOutline" size="editorial">{sending ? "Sending…" : "Start a conversation"}</Button></div></form>}</div></section>
    <footer className="bg-ink px-6 pb-8 text-paper lg:px-12"><div className="mx-auto flex max-w-[1400px] flex-col gap-8 border-t border-paper/20 pt-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-display text-4xl">theSafira</p><p className="mt-1 text-xs text-paper/55">Stories, photographs & memories.</p></div><div className="flex gap-6 text-[10px] uppercase tracking-[.16em]"><a href="#stories">Stories</a><a href="#about">About</a><a href="#contact">Contact</a><Link to="/admin">Admin</Link></div><p className="text-[10px] text-paper/45">© 2026 theSafira</p></div></footer>
  </main>;
}
