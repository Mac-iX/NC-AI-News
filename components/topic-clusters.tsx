import Link from "next/link";
import { Cpu, Landmark, Rocket, School, Briefcase, DollarSign } from "lucide-react";

const clusters = [
  { name: "AI Innovation & Startups", icon: Rocket, href: "/clusters/ai-innovation", description: "The latest on NC-based AI companies, product launches, and success stories.", color: "from-blue-500 to-cyan-500" },
  { name: "Research Triangle Ecosystem", icon: Landmark, href: "/clusters/research-triangle", description: "News from Duke, UNC, and NC State, and the tech that defines the Triangle.", color: "from-purple-500 to-pink-500" },
  { name: "Coastal Tech", icon: Cpu, href: "/clusters/coastal-tech", description: "The rise of Wilmington and the coastal tech scene, from FinTech to marine bio-tech.", color: "from-carolina-blue to-blue-400" },
  { name: "Workforce & Education", icon: School, href: "/clusters/workforce-education", description: "How North Carolina is training the next generation of tech talent.", color: "from-green-500 to-emerald-500" },
  { name: "Policy & Regulation", icon: Briefcase, href: "/clusters/policy-regulation", description: "The legislative landscape shaping the future of AI in the Tar Heel State.", color: "from-orange-500 to-red-500" },
  { name: "Funding & Investment", icon: DollarSign, href: "/clusters/funding-investment", description: "Tracking the venture capital, grants, and investments fueling NC's growth.", color: "from-yellow-500 to-orange-500" },
];

export default function TopicClusters() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-carolina-blue/10 border border-carolina-blue/30 rounded-full">
            <span className="text-carolina-blue font-semibold text-sm tracking-wide">EXPLORE BY TOPIC</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Dive deep into the subjects that matter most</h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400">Navigate North Carolina's tech ecosystem through curated topic clusters.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster) => (
            <Link 
              href={cluster.href} 
              key={cluster.name} 
              prefetch={false} 
              className="group relative block p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-transparent transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cluster.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon with Gradient Background */}
              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cluster.color} mb-6`}>
                  <cluster.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-carolina-blue transition-colors duration-200">{cluster.name}</h3>
                <p className="text-gray-400 leading-relaxed">{cluster.description}</p>
                
                {/* Arrow Icon */}
                <div className="mt-6 flex items-center text-carolina-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
