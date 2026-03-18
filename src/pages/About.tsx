import { motion } from "framer-motion";
import { Shield, Eye, FileCheck, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Shield, title: "Integrity", desc: "Every claim is handled with strict legal compliance and ethical standards." },
  { icon: Eye, title: "Transparency", desc: "We keep you informed at every step — no surprises, no hidden fees." },
  { icon: FileCheck, title: "Compliance", desc: "All documentation is verified through Mobile Notary Services." },
  { icon: Users, title: "Client-First", desc: "Your recovery is our only priority. We succeed when you do." },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-navy section-padding">
      <div className="container-narrow mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-6"
        >
          About KD Williams & Associates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gold-light/70 text-lg max-w-2xl mx-auto"
        >
          Recovering what belongs to you — with integrity, compliance, and transparency.
        </motion.p>
        <div className="mt-4 h-1 w-16 rounded-full bg-gold mx-auto" />
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-3xl">
        <SectionHeading title="Who We Are" />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            KD & Associates is a professional firm that audits public records and government databases to identify unclaimed funds owed to private individuals. These funds may be held by government agencies, financial institutions, or other organizations after being forgotten, misdirected, or left unclaimed.
          </p>
          <p>
            We conduct detailed research and auditing of public records to locate legitimate claims and then work directly with individuals to recover the money legally owed to them. To ensure legitimacy and compliance, KD & Associates utilizes Mobile Notary Services to properly verify, identify, and authenticate all required documentation during the claims process.
          </p>
          <p>
            Our team specializes in recovering funds on behalf of clients — managing the paperwork, verification, and submission process. <strong className="text-foreground">Clients pay nothing upfront.</strong> We operate on a contingency basis, meaning we are only paid if and when the claim is successfully recovered.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <SectionHeading title="Our Core Values" subtitle="The principles that guide every engagement." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="bg-card rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
