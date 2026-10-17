import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useStore } from '../hooks/useStore';
export default function LocationSection() {
    const [state] = useStore();
    const { contact } = state;
    const info = [
        { icon: <MapPin size={18}/>, label: 'Address', value: contact.address },
        { icon: <Phone size={18}/>, label: 'Phone', value: contact.phone },
        { icon: <Mail size={18}/>, label: 'Email', value: contact.email },
        { icon: <Clock size={18}/>, label: 'Working Hours', value: contact.workingHours },
    ];
    return (<section id="contact" className="py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent"/>
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Location</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
            Find us
            <br />
            <span className="text-muted-foreground/50">in Tashkent.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-sm overflow-hidden border border-border bg-muted min-h-[400px]">
            <iframe src={contact.mapsUrl} width="100%" height="100%" style={{ minHeight: 400, border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Company Location"/>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {info.map((item, i) => (<div key={i} className="bg-white rounded-sm p-5 border border-border flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground text-sm font-medium leading-relaxed">{item.value}</p>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
}
