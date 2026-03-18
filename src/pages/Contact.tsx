import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Your inquiry has been submitted. We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="gradient-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-gold-light/70 text-lg max-w-2xl mx-auto"
          >
            Ready to find out if you have unclaimed funds? Get in touch today.
          </motion.p>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold mx-auto" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Submit a Claim Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <Input required placeholder="John Doe" className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input required type="email" placeholder="john@example.com" className="bg-card" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="bg-card" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <Textarea required rows={5} placeholder="Tell us about your situation or how we can help..." className="bg-card resize-none" />
                </div>

                <Button variant="gold" size="lg" type="submit" disabled={loading} className="w-full sm:w-auto">
                  {loading ? "Submitting..." : "Submit Claim Inquiry"}
                </Button>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                  <Lock className="w-3.5 h-3.5" />
                  Your information is secure and will never be shared with third parties.
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:4693331145" className="text-muted-foreground hover:text-gold-dark transition-colors">(469) 333-1145</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:kdwilliams.associates@gmail.com" className="text-muted-foreground hover:text-gold-dark transition-colors">kdwilliams.associates@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-muted-foreground">Mon–Sat: 10am – 8pm</p>
                    <p className="text-muted-foreground">Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-8 bg-muted/50 rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-gold-dark" />
                  <p className="font-display font-semibold text-foreground">Your Trust Matters</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  KD Williams & Associates operates with full legal compliance. All documentation is notarized and verified. We are committed to transparency in every step of the recovery process. All documentation is notarized and verified. We are committed to transparency in every step of the recovery process.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
