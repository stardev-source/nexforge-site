import { useState } from 'react';
import { X, Award } from 'lucide-react';
import { useStore } from '../hooks/useStore';
export default function CertificatesSection() {
    const [state] = useStore();
    const [selected, setSelected] = useState(null);
    const cert = state.certificates.find(c => c.id === selected);
    return (<section id="certificates" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent"/>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Certificates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
            Internationally
            <br />
            <span className="text-muted-foreground/50">certified.</span>
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {state.certificates.map(cert => (<div key={cert.id} onClick={() => setSelected(cert.id)} className="group cursor-pointer bg-muted rounded-sm overflow-hidden border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-black/8 transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-secondary relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                  <Award size={28} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300"/>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2">{cert.title}</p>
              </div>
            </div>))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && cert && (<div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setSelected(null)}>
          <div className="relative bg-white rounded-sm overflow-hidden max-w-lg w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all">
              <X size={16}/>
            </button>
            <img src={cert.image} alt={cert.title} className="w-full"/>
            <div className="p-5">
              <p className="font-bold text-foreground">{cert.title}</p>
            </div>
          </div>
        </div>)}
    </section>);
}
