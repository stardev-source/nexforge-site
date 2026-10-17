import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MessageCircle, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../hooks/useStore';
export default function ProductDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [state] = useStore();
    const [imgIdx, setImgIdx] = useState(0);
    const product = state.products.find(p => p.id === id);
    const { contact } = state;
    if (!product) {
        return (<div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Product not found.</p>
          <button onClick={() => navigate('/')} className="text-accent underline text-sm">Go home</button>
        </div>
      </div>);
    }
    const prev = () => setImgIdx(i => (i - 1 + product.images.length) % product.images.length);
    const next = () => setImgIdx(i => (i + 1) % product.images.length);
    return (<div className="min-h-screen bg-background">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16}/>
            Back to Products
          </button>
          <div className="w-px h-5 bg-border"/>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-black text-xs">NX</span>
            </div>
            <span className="font-black text-sm tracking-widest uppercase text-foreground">NexForge</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main image */}
            <div className="relative rounded-sm overflow-hidden bg-muted aspect-[16/10]">
              <img src={product.images[imgIdx]} alt={product.name} className="w-full h-full object-cover transition-all duration-500"/>
              {product.images.length > 1 && (<>
                  <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                    <ChevronLeft size={18}/>
                  </button>
                  <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                    <ChevronRight size={18}/>
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {product.images.map((_, i) => (<button key={i} onClick={() => setImgIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? 'bg-white scale-125' : 'bg-white/50'}`}/>))}
                  </div>
                </>)}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (<div className="grid grid-cols-6 gap-3">
                {product.images.map((img, i) => (<button key={i} onClick={() => setImgIdx(i)} className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${i === imgIdx ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover"/>
                  </button>))}
              </div>)}

            {/* Description */}
            <div className="bg-muted rounded-sm p-6 mt-6">
              <h2 className="font-bold text-foreground text-sm uppercase tracking-widest mb-4">Product Description</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{product.fullDescription}</p>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-accent"/>
                <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Product</span>
              </div>
              <h1 className="text-3xl font-black text-foreground leading-tight tracking-tight">
                {product.name}
              </h1>
              <p className="text-muted-foreground mt-3 leading-relaxed">{product.shortDescription}</p>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Contact for Inquiry</p>

              {/* Phone */}
              <a href={`tel:${contact.phone}`} className="flex items-center gap-4 p-4 bg-muted rounded-sm hover:bg-secondary transition-all group">
                <div className="w-10 h-10 bg-primary text-white rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={16}/>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Call us</p>
                  <p className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-4 bg-muted rounded-sm hover:bg-secondary transition-all group">
                <div className="w-10 h-10 bg-muted-foreground/20 text-muted-foreground rounded-sm flex items-center justify-center shrink-0">
                  <Mail size={16}/>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email us</p>
                  <p className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                    {contact.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#25D366] text-white font-semibold text-sm rounded-sm hover:bg-[#20c05c] transition-all">
                <MessageCircle size={18}/>
                Message on WhatsApp
              </a>

              {/* Telegram */}
              <a href={`https://t.me/${contact.telegram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#229ED9] text-white font-semibold text-sm rounded-sm hover:bg-[#1e8fc0] transition-all">
                <Send size={18}/>
                Write on Telegram
              </a>
            </div>

            {/* Company note */}
            <div className="border border-border rounded-sm p-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                This product is available for direct inquiry only. No online ordering or cart — contact our sales team for pricing, lead times, and technical specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
