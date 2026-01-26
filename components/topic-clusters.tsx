import Link from "next/link";
import { Cpu, Landmark, Rocket, School, Briefcase, DollarSign } from "lucide-react";

const clusters = [
  { name: "AI Innovation & Startups", icon: Rocket, href: "/clusters/ai-innovation", description: "The latest on NC-based AI companies, product launches, and success stories." },
  { name: "Research Triangle Ecosystem", icon: Landmark, href: "/clusters/research-triangle", description: "News from Duke, UNC, and NC State, and the tech that defines the Triangle." },
  { name: "Coastal Tech", icon: Cpu, href: "/clusters/coastal-tech", description: "The rise of Wilmington and the coastal tech scene, from FinTech to marine bio-tech." },
  { name: "Workforce & Education", icon: School, href: "/clusters/workforce-education", description: "How North Carolina is training the next generation of tech talent." },
  { name: "Policy & Regulation", icon: Briefcase, href: "/clusters/policy-regulation", description: "The legislative landscape shaping the future of AI in the Tar Heel State." },
  { name: "Funding & Investment", icon: DollarSign, href: "/clusters/funding-investment", description: "Tracking the venture capital, grants, and investments fueling NC's growth." },
];

export default function TopicClusters() {
  return (
    <section className="bg-slate-900 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore by Topic</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">Dive deep into the subjects that matter most to North Carolina's tech ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clusters.map((cluster) => (
            <Link href={cluster.href} key={cluster.name} prefetch={false} className="block p-6 bg-dark-navy rounded-lg border border-slate-700 hover:border-carolina-blue hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4">
                <cluster.icon className="h-8 w-8 text-carolina-blue" />
                <h3 className="text-xl font-semibold">{cluster.name}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-400">{cluster.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
