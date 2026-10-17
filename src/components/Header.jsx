import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link2, AtSign, Send, Share2, Video, Menu, X, ChevronDown } from 'lucide-react';
import { useStore } from '../hooks/useStore';
const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
];
const LANG_OPTIONS = ['EN', 'RU', 'UZ'];
const SOCIAL_ICONS = {
    facebook: <Link2 size={16}/>,
    instagram: <AtSign size={16}/>,
    telegram: <Send size={16}/>,
    linkedin: <Share2 size={16}/>,
    youtube: <Video size={16}/>,
};
export default function Header() {
    const [state] = useStore();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [lang, setLang] = useState('EN');
    const [langOpen, setLangOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const handleNav = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el)
            el.scrollIntoView({ behavior: 'smooth' });
    };
    return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter">NX</span>
            </div>
            <span className={`font-black text-lg tracking-widest uppercase transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
              NexForge
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (<button key={link.href} onClick={() => handleNav(link.href)} className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${scrolled ? 'text-foreground' : 'text-white/90 hover:text-white'}`}>
                {link.label}
              </button>))}
          </nav>

          {/* Right: social + lang + cta */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {state.socialLinks.map(s => (<a key={s.id} href={s.url} target="_blank" rel="noreferrer" className={`transition-colors hover:text-accent ${scrolled ? 'text-muted-foreground' : 'text-white/70 hover:text-white'}`}>
                  {SOCIAL_ICONS[s.platform]}
                </a>))}
            </div>

            {/* Divider */}
            <div className={`w-px h-5 ${scrolled ? 'bg-border' : 'bg-white/30'}`}/>

            {/* Language switcher */}
            <div className="relative">
              <button onClick={() => setLangOpen(o => !o)} className={`flex items-center gap-1 text-sm font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>
                {lang}
                <ChevronDown size={12}/>
              </button>
              {langOpen && (<div className="absolute top-8 right-0 bg-white border border-border rounded-lg shadow-lg overflow-hidden min-w-[72px]">
                  {LANG_OPTIONS.map(l => (<button key={l} onClick={() => { setLang(l); setLangOpen(false); }} className={`block w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${lang === l ? 'text-accent font-semibold' : 'text-foreground'}`}>
                      {l}
                    </button>))}
                </div>)}
            </div>

            {/* Contact CTA */}
            <button onClick={() => handleNav('#contact')} className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-accent/90 transition-all">
              Contact Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(o => !o)} className={`lg:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}>
            {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (<div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (<button key={link.href} onClick={() => handleNav(link.href)} className="text-sm font-medium text-left py-3 text-foreground hover:text-accent transition-colors border-b border-border/50">
                {link.label}
              </button>))}
            <div className="pt-3 flex items-center gap-3">
              {LANG_OPTIONS.map(l => (<button key={l} onClick={() => setLang(l)} className={`text-sm font-semibold ${lang === l ? 'text-accent' : 'text-muted-foreground'}`}>
                  {l}
                </button>))}
            </div>
            <button onClick={() => handleNav('#contact')} className="mt-3 bg-accent text-white text-sm font-semibold py-3 rounded-sm">
              Contact Us
            </button>
          </div>
        </div>)}
    </header>);
}
