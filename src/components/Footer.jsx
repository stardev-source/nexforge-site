import { Link2, AtSign, Send, Share2, Video } from 'lucide-react';
import { useStore } from '../hooks/useStore';
const NAV = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
];
const SOCIAL_ICONS = {
    facebook: <Link2 size={18}/>,
    instagram: <AtSign size={18}/>,
    telegram: <Send size={18}/>,
    linkedin: <Share2 size={18}/>,
    youtube: <Video size={18}/>,
};
export default function Footer() {
    const [state] = useStore();
    const { company, contact, socialLinks } = state;
    const handleNav = (href) => {
        const el = document.querySelector(href);
        if (el)
            el.scrollIntoView({ behavior: 'smooth' });
    };
    return (<footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tighter">NX</span>
              </div>
              <span className="font-black text-lg tracking-widest uppercase">{company.name}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              {company.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(s => (<a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
                  {SOCIAL_ICONS[s.platform]}
                </a>))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV.map(link => (<li key={link.href}>
                  <button onClick={() => handleNav(link.href)} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </button>
                </li>))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">Contact</p>
            <ul className="space-y-3">
              <li className="text-sm text-white/60">{contact.phone}</li>
              <li className="text-sm text-white/60">{contact.email}</li>
              <li className="text-sm text-white/60 leading-relaxed">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Precision Engineering · Industrial Solutions
          </p>
        </div>
      </div>
    </footer>);
}
