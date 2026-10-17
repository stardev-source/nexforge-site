export const initialState = {
    company: {
        name: 'NEXFORGE',
        tagline: 'Engineering the Future',
        description: 'A world-class manufacturing company delivering precision-engineered industrial solutions across Central Asia and beyond.',
        history: 'Founded in 2000, NexForge has grown from a regional supplier into a globally recognized manufacturer. Over two decades, we have invested in cutting-edge technology and world-class talent to serve industries ranging from energy and infrastructure to aerospace and defense.',
        mission: 'To deliver uncompromising quality in every component we manufacture, empowering industries to build a more efficient and resilient world.',
        vision: 'To be the most trusted industrial manufacturing partner in the region, setting the global standard for precision, reliability, and innovation.',
        experience: 24,
        heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&h=900&fit=crop&auto=format',
    },
    contact: {
        phone: '+998 71 200 00 00',
        whatsapp: '+998712000000',
        telegram: '@nexforge_uz',
        email: 'info@nexforge.uz',
        address: '12 Amir Temur Avenue, Tashkent, Uzbekistan 100000',
        mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.045!2d69.2797!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTYnNDYuOSJF!5e0!3m2!1sen!2s!4v1234567890',
        workingHours: 'Mon – Fri: 08:00 – 18:00 | Sat: 09:00 – 14:00',
    },
    products: [
        {
            id: '1',
            name: 'Industrial Valve Assembly',
            shortDescription: 'High-pressure valve systems engineered for extreme operating conditions.',
            fullDescription: 'Our industrial valve assemblies are precision-manufactured to withstand pressures up to 10,000 PSI. Designed for oil & gas, water treatment, and chemical processing industries. Each unit undergoes rigorous quality testing including hydrostatic pressure tests, leak detection, and corrosion resistance evaluation.',
            images: [
                'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&auto=format',
            ],
        },
        {
            id: '2',
            name: 'Precision CNC Components',
            shortDescription: 'Computer-controlled machined parts with tolerances to ±0.001mm.',
            fullDescription: 'Our CNC machining division produces complex components for aerospace, automotive, and medical industries. With 5-axis machining capability, we achieve geometries impossible with conventional tooling. Materials include titanium, Inconel, stainless steel, and advanced polymers.',
            images: [
                'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop&auto=format',
            ],
        },
        {
            id: '3',
            name: 'Structural Steel Fabrication',
            shortDescription: 'Custom structural frameworks for construction and infrastructure projects.',
            fullDescription: 'NexForge fabricates structural steel elements including beams, columns, trusses, and connection plates. Our facility handles projects from small custom brackets to large-scale bridge components. All fabrication meets EN 1090 and ISO 9001 standards.',
            images: [
                'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format',
            ],
        },
        {
            id: '4',
            name: 'Heat Exchanger Systems',
            shortDescription: 'Efficient thermal management solutions for industrial processes.',
            fullDescription: 'Our heat exchangers are designed for maximum thermal efficiency in petrochemical, power generation, and HVAC applications. Available in shell-and-tube, plate, and air-cooled configurations. Custom designs available to match specific process requirements and footprint constraints.',
            images: [
                'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format',
            ],
        },
        {
            id: '5',
            name: 'Hydraulic Press Systems',
            shortDescription: 'High-tonnage hydraulic presses for forming, stamping, and forging.',
            fullDescription: 'From 50-ton workshop presses to 5,000-ton industrial forging lines, NexForge designs and builds hydraulic press systems tailored to your production requirements. Integrated PLC controls, safety interlocks, and IoT monitoring ensure safe and efficient operation.',
            images: [
                'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format',
            ],
        },
        {
            id: '6',
            name: 'Conveyor & Material Handling',
            shortDescription: 'Automated conveyor systems for mining, logistics, and production lines.',
            fullDescription: 'Our material handling solutions range from simple belt conveyors to complex automated sorting systems. We design, fabricate, and commission complete lines including conveyors, elevators, feeders, and robotic integration. Designed for 24/7 operation in harsh environments.',
            images: [
                'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop&auto=format',
            ],
        },
    ],
    certificates: [
        { id: '1', title: 'ISO 9001:2015 Quality Management', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop&auto=format' },
        { id: '2', title: 'ISO 14001 Environmental Management', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=800&fit=crop&auto=format' },
        { id: '3', title: 'OHSAS 18001 Safety Management', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop&auto=format' },
        { id: '4', title: 'CE Mark – Machinery Directive', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=800&fit=crop&auto=format' },
        { id: '5', title: 'API 6A – Wellhead Equipment', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop&auto=format' },
        { id: '6', title: 'EN 1090 Steel Fabrication', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=800&fit=crop&auto=format' },
    ],
    socialLinks: [
        { id: '1', platform: 'facebook', url: 'https://facebook.com/nexforge' },
        { id: '2', platform: 'instagram', url: 'https://instagram.com/nexforge' },
        { id: '3', platform: 'telegram', url: 'https://t.me/nexforge_uz' },
        { id: '4', platform: 'linkedin', url: 'https://linkedin.com/company/nexforge' },
        { id: '5', platform: 'youtube', url: 'https://youtube.com/@nexforge' },
    ],
};
// Simple in-memory reactive store
let state = JSON.parse(JSON.stringify(initialState));
const listeners = [];
export function getState() {
    return state;
}
export function setState(updater) {
    state = updater(state);
    listeners.forEach(fn => fn());
}
export function subscribe(fn) {
    listeners.push(fn);
    return () => {
        const idx = listeners.indexOf(fn);
        if (idx > -1)
            listeners.splice(idx, 1);
    };
}
