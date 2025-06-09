
import { Mail, Phone, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@noer.ai",
      href: "mailto:hello@noer.ai"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get <span className="gradient-text">Started</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your workflow? Let's discuss how Noer can revolutionize 
            your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl fade-in">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input placeholder="Your Company" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your automation needs..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="fade-in">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team is here to help you discover how Noer can transform your business. 
                Reach out through any of the channels below, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index}
                    href={method.href}
                    className="flex items-center p-4 glass-card rounded-xl hover-glow transition-all"
                  >
                    <method.icon className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <div className="font-medium">{method.label}</div>
                      <div className="text-muted-foreground">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="glass-card p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold mb-3">Ready to get started?</h4>
              <p className="text-muted-foreground mb-4">
                Begin your automation journey with our free 7-day trial.
              </p>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Start Free Trial
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center fade-in">
          <p className="text-muted-foreground">
            © 2024 Noer. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
