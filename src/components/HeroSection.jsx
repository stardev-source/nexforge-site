import { useStore } from '../hooks/useStore';
export default function HeroSection() {
    const [state] = useStore();
    const { company } = state;
    const handleContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={company.heroImage} alt="Manufacturing facility" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"/>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
        }}/>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent"/>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              Industrial Manufacturing
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
            {company.name}
            <br />
            <span className="text-white/40">{company.tagline}</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
            {company.description}
          </p>

          {/* Stats + CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button onClick={handleContact} className="bg-accent text-white font-semibold px-8 py-4 rounded-sm hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/30 text-sm tracking-wide">
              Contact Us
            </button>

            <div className="w-px h-10 bg-white/20 hidden sm:block"/>

            <div className="flex items-baseline gap-2">
              <span className="text-white font-black text-5xl">{company.experience}</span>
              <div>
                <p className="text-white/90 font-semibold text-sm">Years</p>
                <p className="text-white/50 text-xs">of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/20 animate-pulse"/>
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>);
}
