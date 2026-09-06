import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hairline bg-ink px-6 py-16 text-paper md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">Amber &amp; Ash</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
            Candid wedding and travel photography, based in Pune. Working
            across India and worldwide.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase text-paper/50">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li><Link href="/stories" className="hover:text-paper">Stories</Link></li>
            <li><Link href="/journal" className="hover:text-paper">Journal</Link></li>
            <li><Link href="/#films" className="hover:text-paper">Films</Link></li>
            <li><Link href="/#about" className="hover:text-paper">About</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase text-paper/50">Say hello</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href="mailto:hello@amberandash.studio" className="hover:text-paper">
                hello@amberandash.studio
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="hover:text-paper"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-paper"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row">
        <p>© {new Date().getFullYear()} Amber &amp; Ash Studio. All rights reserved.</p>
        <p>Pune, Maharashtra, India</p>
      </div>
    </footer>
  );
}
