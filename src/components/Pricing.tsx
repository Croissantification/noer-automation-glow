
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      period: "7 days",
      description: "Perfect for exploring Noer's capabilities",
      features: [
        "Basic automation workflows",
        "Up to 100 tasks/month",
        "Email support",
        "Core AI features",
        "Dashboard analytics"
      ],
      cta: "Start Free Trial",
      popular: true,
      highlight: "No credit card required"
    },
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Ideal for small teams and growing businesses",
      features: [
        "Advanced automation workflows",
        "Up to 1,000 tasks/month",
        "Priority support",
        "Custom integrations",
        "Real-time monitoring",
        "API access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Bulk",
      price: "$99",
      period: "/month",
      description: "Designed for established businesses with high volume",
      features: [
        "Enterprise automation workflows",
        "Up to 10,000 tasks/month",
        "24/7 dedicated support",
        "Custom AI models",
        "Advanced analytics",
        "Multi-team collaboration",
        "SLA guarantee"
      ],
      cta: "Scale Up",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Unlimited automation workflows",
        "Unlimited tasks",
        "White-glove onboarding",
        "Custom AI development",
        "Dedicated account manager",
        "On-premise deployment",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Simple</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your automation needs. Start with our free trial 
            and scale as your business grows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 rounded-2xl hover-glow relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                {plan.highlight && (
                  <div className="mt-2">
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                      {plan.highlight}
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-card hover:bg-card/80 border border-border'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional pricing info */}
        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-4">
            All plans include core AI automation features and standard integrations
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ Enterprise Security</span>
            <span>✓ GDPR Compliant</span>
            <span>✓ 30-day Money Back</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
