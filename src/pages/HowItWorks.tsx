import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Bell, FileSignature, Send, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const steps = [
  { icon: Search, num: "01", title: "Record Audit", desc: "KD Williams & Associates searches public records and government databases to identify unclaimed funds that may belong to you." }, public records and government databases to identify unclaimed funds that may belong to you." },
  { icon: Bell, num: "02", title: "Claim Verification", desc: "If unclaimed funds are found, you are notified and the claim is verified for legitimacy." },
  { icon: FileSignature, num: "03", title: "Documentation", desc: "Mobile Notary Services are used to verify and authenticate all required documents and signatures." },
  { icon: Send, num: "04", title: "Claim Submission", desc: "KD Williams & Associates files and manages the claim with the proper government agencies on your behalf." }, and manages the claim with the proper government agencies on your behalf." },
  { icon: DollarSign, num: "05", title: "Recovery", desc: "Once funds are successfully recovered, you receive your payment. If nothing is recovered, you owe nothing." },
];

const fade = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const HowItWorks = () => (
  <Layout>
    <section className="gradient-navy section-padding">
      <div className="container-narrow mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-6"
        >
          How It Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gold-light/70 text-lg max-w-2xl mx-auto"
        >
          A simple, transparent five-step process from discovery to recovery.
        </motion.p>
        <div className="mt-4 h-1 w-16 rounded-full bg-gold mx-auto" />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <div className="pt-1">
                  <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-1">Step {s.num}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Start Your Claim <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
