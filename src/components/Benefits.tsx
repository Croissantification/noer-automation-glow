
import { Quote } from "lucide-react";

const Benefits = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions",
      content: "Noer transformed our workflow efficiency by 300%. What used to take our team hours now happens automatically in minutes.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "DataPrime Inc",
      content: "The ROI was immediate. Noer paid for itself within the first month through time savings and error reduction.",
      avatar: "MR"
    },
    {
      name: "Emily Park",
      role: "Product Manager",
      company: "InnovateAI",
      content: "Implementing Noer was seamless. Their team guided us every step of the way, and the results exceeded expectations.",
      avatar: "EP"
    }
  ];

  const stats = [
    { value: "500+", label: "Companies Trust Noer" },
    { value: "10M+", label: "Tasks Automated Monthly" },
    { value: "99.9%", label: "Uptime Reliability" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="benefits" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="mb-20 fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of companies that have revolutionized their operations with Noer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Benefits */}
        <div className="mb-20 fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Real Results, Real <span className="gradient-text">Impact</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Increased Efficiency",
                description: "Automate repetitive tasks and free up your team to focus on strategic initiatives that drive growth.",
                benefit: "Save 15+ hours per week per employee"
              },
              {
                title: "Cost Reduction",
                description: "Reduce operational costs through intelligent automation and optimized resource allocation.",
                benefit: "Average 45% reduction in process costs"
              },
              {
                title: "Error Elimination",
                description: "AI-powered precision eliminates human error and ensures consistent, reliable outcomes.",
                benefit: "99.7% accuracy in automated processes"
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-8 rounded-xl hover-glow">
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                <div className="text-sm text-primary font-semibold">{item.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            What Our <span className="gradient-text">Customers</span> Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-glow">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-primary">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
