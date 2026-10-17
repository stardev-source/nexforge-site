import { Clock, Target, Eye, BookOpen, Wrench } from 'lucide-react';
import { useStore } from '../hooks/useStore';
export default function AboutSection() {
    const [state] = useStore();
    const { company } = state;
    const items = [
        {
            icon: <BookOpen size={20}/>,
            label: 'Our History',
            text: company.history,
        },
        {
            icon: <Wrench size={20}/>,
            label: 'What We Do',
            text: 'We engineer, fabricate, and deliver precision industrial components and systems — from individual machined parts to complete production line installations.',
        },
        {
            icon: <Target size={20}/>,
            label: 'Mission',
            text: company.mission,
        },
        {
            icon: <Eye size={20}/>,
            label: 'Vision',
            text: company.vision,
        },
    ];
    return (<section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent"/>
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">About Company</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
              Precision &amp; excellence
              <br />
              <span className="text-muted-foreground/50">since 2000.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {company.description}
            </p>
            <div className="flex items-center gap-8 mt-8">
              <div>
                <p className="text-4xl font-black text-foreground">{company.experience}<span className="text-accent">+</span></p>
                <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
              </div>
              <div className="w-px h-12 bg-border"/>
              <div>
                <p className="text-4xl font-black text-foreground">500<span className="text-accent">+</span></p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-border"/>
              <div>
                <p className="text-4xl font-black text-foreground">40<span className="text-accent">+</span></p>
                <p className="text-sm text-muted-foreground mt-1">Countries Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (<div key={i} className="bg-muted rounded-sm p-6 hover:shadow-md hover:shadow-black/5 transition-all duration-300 group">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-sm flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm tracking-wide uppercase mb-3">
                {item.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.text}
              </p>
            </div>))}
        </div>

        {/* Experience badge */}
        <div className="mt-12 flex items-center gap-4 p-6 bg-primary rounded-sm">
          <Clock size={24} className="text-accent shrink-0"/>
          <div>
            <p className="text-white font-bold text-sm">
              {company.experience} Years of Industry Excellence
            </p>
            <p className="text-white/50 text-xs mt-0.5">
              Trusted by leading companies across Central Asia, Europe, and the Middle East.
            </p>
          </div>
        </div>
      </div>
    </section>);
}
