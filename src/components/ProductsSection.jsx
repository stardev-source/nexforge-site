import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useStore } from '../hooks/useStore';
export default function ProductsSection() {
    const [state] = useStore();
    const navigate = useNavigate();
    return (<section id="products" className="py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent"/>
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Products</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
              Industrial solutions
              <br />
              <span className="text-muted-foreground/50">built to last.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
            Every product we manufacture meets the highest international standards for quality, safety, and durability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.products.map(product => (<div key={product.id} onClick={() => navigate(`/products/${product.id}`)} className="group bg-white rounded-sm overflow-hidden cursor-pointer border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-black/8 transition-all duration-400 hover:-translate-y-1">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-400"/>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight size={14} className="text-accent"/>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
