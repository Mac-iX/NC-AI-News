"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const featuredStory = {
  title: "Duke University Launches $50M AI Research Initiative",
  excerpt:
    "New interdisciplinary program aims to position North Carolina as a leader in ethical AI development and deployment across healthcare, finance, and education sectors.",
  category: "Research",
  readTime: "4 min read",
  publishedAt: "2 hours ago",
  image: "/placeholder.svg?height=400&width=600",
  href: "/articles/duke-ai-initiative",
}

const topStories = [
  {
    title: "Charlotte Fintech Startup Raises $15M Series A",
    category: "Startups",
    publishedAt: "4 hours ago",
    href: "/articles/charlotte-fintech-funding",
  },
  {
    title: "NC State Partners with IBM on Quantum AI Lab",
    category: "Research",
    publishedAt: "6 hours ago",
    href: "/articles/ncstate-ibm-quantum",
  },
  {
    title: "Raleigh AI Job Market Grows 40% Year-over-Year",
    category: "Jobs",
    publishedAt: "8 hours ago",
    href: "/articles/raleigh-ai-jobs-growth",
  },
  {
    title: "New AI Ethics Bill Introduced in NC Legislature",
    category: "Policy",
    publishedAt: "12 hours ago",
    href: "/articles/nc-ai-ethics-bill",
  },
]

export default function HeroSection() {
  return (
    <section className="py-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
            Today in NC AI
          </Badge>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Link href={featuredStory.href} className="group block">
              <div className="relative overflow-hidden rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] relative">
                  <Image
                    src={featuredStory.image || "/placeholder.svg"}
                    alt={featuredStory.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {featuredStory.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                    {featuredStory.title}
                  </h1>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{featuredStory.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>{featuredStory.publishedAt}</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredStory.readTime}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Top Stories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-6 text-primary">Top Stories</h2>
              <div className="space-y-4">
                {topStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <Link href={story.href} className="group block">
                      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {story.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs">
                              {story.category}
                            </Badge>
                            <span>{story.publishedAt}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
