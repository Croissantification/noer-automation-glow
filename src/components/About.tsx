
import { Bot, Zap, Target, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that adapt to your workflow patterns"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Automate complex processes in seconds, not hours"
    },
    {
      icon: Target,
      title: "Precision Accuracy",
      description: "99.9% accuracy rate in task execution and decision making"
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Continuous automation that works while you sleep"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Revolutionizing</span> Workflows
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Noer transforms the way you work with cutting-edge AI automation solutions. 
            We eliminate repetitive tasks, streamline complex processes, and unlock 
            unprecedented productivity for modern businesses.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-20 fade-in">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6 text-center">What We Do</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Noer, we specialize in AI-powered automation solutions that transform 
                  how businesses operate. Our intelligent systems learn from your processes 
                  and continuously optimize to deliver maximum efficiency.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Workflow automation and optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Intelligent decision-making systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Custom AI integration solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Real-time process monitoring
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4">
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-sm mb-2">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">Noer</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Save 70% Time",
                description: "Automate repetitive tasks and focus on what matters most to your business",
                metric: "70%"
              },
              {
                title: "Reduce Costs",
                description: "Lower operational expenses while increasing output quality and consistency",
                metric: "45%"
              },
              {
                title: "Boost Productivity",
                description: "Empower your team with AI-assisted workflows that scale with your growth",
                metric: "3x"
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-glow text-center">
                <div className="text-4xl font-bold gradient-text mb-3">{benefit.metric}</div>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
