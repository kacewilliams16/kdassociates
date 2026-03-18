import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Search, FileCheck, Users, CheckCircle, ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const stats = [
  { value: "100%", label: "Contingency Based" },
  { value: "$0", label: "Upfront Cost" },
  { value: "24/7", label: "Claim Monitoring" },
];

const highlights = [
  { icon: Search, title: "Public Record Auditing", desc: "We search government databases to locate unclaimed funds tied to you." },
  { icon: FileCheck, title: "Claim Recovery", desc: "We manage all documentation and filings to recover your funds." },
  { icon: Shield, title: "Notary Verification", desc: "Mobile notary services authenticate all required documents." },
  { icon: Users, title: "Full Claim Management", desc: "From discovery to recovery — we handle every step." },
  { icon: Briefcase, title: "Upfront Legal Costs Covered", desc: "We pay all upfront legal costs and fees on your behalf — including court filing costs and lawyer fees." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy-dark/60" />
      <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gold font-semibold uppercase tracking-widest text-sm mb-4"
        >
          Professional Unclaimed Funds Recovery
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-light leading-tight mb-6"
        >
          Recover What's <br className="hidden sm:block" />
          <span className="gradient-gold-text">Rightfully Yours.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-gold-light/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          KD Williams & Associates helps individuals recover unclaimed funds held by government agencies through professional public record audits and verified documentation. unclaimed funds held by government agencies through professional public record audits and verified documentation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Check If You Have Unclaimed Funds</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/contact">Start Your Claim <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card border-b border-border">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-display font-bold text-gold-dark">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <SectionHeading
          title="How We Help You"
          subtitle="We handle everything — from locating your unclaimed funds to filing and recovering them on your behalf."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fade}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust / CTA */}
    <section className="gradient-navy section-padding">
      <div className="container-narrow mx-auto text-center">
        <SectionHeading
          title="No Upfront Fees. Ever."
          subtitle="We work on a contingency basis — you only pay when we successfully recover your funds. If we don't recover anything, you owe nothing."
          light
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          {["No hidden costs", "Fully compliant process", "Mobile notary verified"].map((t) => (
            <span key={t} className="flex items-center gap-2 text-gold-light/80 text-sm">
              <CheckCircle className="w-4 h-4 text-gold" /> {t}
            </span>
          ))}
        </div>
        <Button variant="gold" size="lg" asChild>
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
