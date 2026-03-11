import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, FileText, Shield, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Search,
    title: "Public Record Auditing",
    desc: "We research public records and government databases to locate unclaimed funds tied to individuals. Our detailed auditing process identifies legitimate claims that may have gone unnoticed.",
  },
  {
    icon: FileText,
    title: "Claim Recovery Assistance",
    desc: "We manage and file all necessary documentation required to recover your funds. From forms to government submissions, we handle the complexity so you don't have to.",
  },
  {
    icon: Shield,
    title: "Mobile Notary Verification",
    desc: "Using mobile notary services, we legally verify signatures and documentation required by government agencies. This ensures full compliance and legitimacy throughout the recovery process.",
  },
  {
    icon: Briefcase,
    title: "Full Claim Management",
    desc: "From the initial discovery to final recovery, we handle the entire process. You stay informed while we manage every detail of your claim.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const Services = () => (
  <Layout>
    <section className="gradient-navy section-padding">
      <div className="container-narrow mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gold-light/70 text-lg max-w-2xl mx-auto"
        >
          Comprehensive unclaimed funds recovery — from audit to payout.
        </motion.p>
        <div className="mt-4 h-1 w-16 rounded-full bg-gold mx-auto" />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-gold-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Start Your Claim <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
