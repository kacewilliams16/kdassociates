import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const points = [
  "You pay nothing upfront — ever.",
  "KD & Associates is only paid when funds are successfully recovered.",
  "If no funds are recovered, no fee is charged.",
  "Our fee is a percentage of the recovered amount, agreed upon before the process begins.",
  "Full transparency — no hidden costs or surprise charges.",
];

const Pricing = () => (
  <Layout>
    <section className="gradient-navy section-padding">
      <div className="container-narrow mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-6"
        >
          No Upfront Fees.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gold-light/70 text-lg max-w-2xl mx-auto"
        >
          We believe in earning our fee — you only pay when we deliver results.
        </motion.p>
        <div className="mt-4 h-1 w-16 rounded-full bg-gold mx-auto" />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-2xl">
        <SectionHeading title="Contingency-Based Pricing" subtitle="Our interests are aligned with yours — we succeed only when you do." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-8 shadow-sm"
        >
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-2xl font-display font-bold text-gold-dark mb-2">$0</p>
            <p className="text-muted-foreground mb-6">to get started</p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Start Your Claim <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
