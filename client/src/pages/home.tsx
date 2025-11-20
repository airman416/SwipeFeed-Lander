import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Bookmark, 
  Share2,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// Assets (using the aliases defined in vite.config.ts)
import appIcon from "@assets/AppIcon~ios-marketing_1763670492850.png";
import heroMockup from "@assets/swipefeed.webp";
import appStoreBadge from "@assets/image_1763670560726.png";

// Copy Text Content
const COPY = {
  headline: "The only app you need to stay updated.",
  subheadline: "SwipeFeed: Your News Companion That Actually Gets It",
  intro: "Curated news highlights that respect your time. We're not replacing journalism—we're making it digestible.",
  features: [
    {
      title: "Your Daily Digest",
      description: "Think of it as your morning briefing that doesn't require a journalism degree to understand. We curate and condense the day's essential stories.",
      icon: Clock
    },
    {
      title: "Time-Saving Format",
      description: "Finally, a news companion that understands you learned to consume media vertically. Each story gets a clean, focused summary.",
      icon: Zap
    },
    {
      title: "Source Transparency",
      description: "Every story shows exactly where it came from. We only work with legit outlets because you've been burned by fake news enough times.",
      icon: ShieldCheck
    }
  ]
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={appIcon} alt="SwipeFeed Logo" className="w-10 h-10 rounded-xl shadow-sm" />
          <span className="text-xl font-bold tracking-tight">SwipeFeed</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Features</a>
          <a href="https://apps.apple.com/us/app/swipefeed-short-breaking-news/id6739143466">
            <Button className="rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Get the App
            </Button>
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          <a href="#features" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="https://apps.apple.com/us/app/swipefeed-short-breaking-news/id6739143466">
            <Button className="w-full rounded-full mt-2">Get the App</Button>
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium mb-6 bg-gray-100 text-gray-800 hover:bg-gray-200">
                New: Pro Features Available
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900 mb-6">
                {COPY.headline}
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {COPY.intro}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="https://apps.apple.com/us/app/swipefeed-short-breaking-news/id6739143466" className="inline-block transition-transform hover:scale-105 active:scale-95">
                <img src={appStoreBadge} alt="Download on the App Store" className="h-14" />
              </a>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <span>Loved by 10k+ readers</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 mx-auto max-w-[300px] lg:max-w-none">
              <img 
                src={heroMockup} 
                alt="SwipeFeed App Interface" 
                className="w-full drop-shadow-2xl rotate-[-5deg] lg:rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-red-100/50 to-blue-50/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon: Icon, index }: { title: string, description: string, icon: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Why We're Not Like Other News Apps</h2>
          <p className="text-lg text-gray-500">
            {COPY.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COPY.features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-24 rounded-[2.5rem] bg-black text-white p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Built-in Boundaries</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Limited daily content because we're not trying to steal your entire day. Get informed, save what's important, then go touch some grass. Revolutionary concept, we know.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full font-semibold">
                Try It Now
              </Button>
            </div>
            <div className="relative h-64 lg:h-auto flex justify-center lg:justify-end">
               {/* Abstract visual for "Time Saved" */}
               <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-sm border border-gray-800/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 font-medium">Time Saved</span>
                    <span className="text-primary font-bold">This Week</span>
                  </div>
                  <div className="text-5xl font-bold mb-2">10.5 hrs</div>
                  <div className="text-sm text-gray-500">Compared to average scrolling time</div>
                  
                  <div className="mt-6 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary rounded-full" />
                  </div>
               </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-900 to-transparent -z-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to reclaim your time?
          </h2>
          <p className="text-xl text-gray-500 mb-10">
            Download SwipeFeed - your time-saving news companion that bridges the gap between staying informed and actually having time for everything else.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="https://apps.apple.com/us/app/swipefeed-short-breaking-news/id6739143466" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <img src={appStoreBadge} alt="Download on the App Store" className="h-16" />
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Unlimited swipes available for free. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={appIcon} alt="Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-xl">SwipeFeed</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              The news companion that actually gets it. Stay informed without the doomscrolling.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">Features</a></li>
              <li><a href="#" className="hover:text-black">Pricing</a></li>
              <li><a href="#" className="hover:text-black">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/privacy" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-black">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} SwipeFeed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
