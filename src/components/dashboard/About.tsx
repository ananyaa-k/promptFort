import React from 'react';
import { 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  Users, 
  Bot, 
  CheckCircle, 
  Zap, 
  Lock, 
  TrendingUp,
  ArrowRight,
  Star,
  Globe,
  Database
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface AboutProps {
  onNavigate: (tab: string) => void;
}

const features = [
  {
    id: 'policies',
    icon: Shield,
    title: 'Policy Management',
    description: 'Create, manage, and enforce comprehensive governance policies for AI systems with version control and approval workflows.',
    benefits: ['Automated compliance checking', 'Policy versioning', 'Approval workflows', 'Risk assessment'],
    color: 'emerald'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Gain deep insights into AI usage patterns, costs, and performance with real-time dashboards and comprehensive reporting.',
    benefits: ['Real-time monitoring', 'Cost optimization', 'Usage analytics', 'Performance metrics'],
    color: 'blue'
  },
  {
    id: 'alerts',
    icon: AlertTriangle,
    title: 'Intelligent Alerts',
    description: 'Proactive monitoring and alerting system that identifies potential issues before they impact your operations.',
    benefits: ['Real-time alerts', 'Incident management', 'Automated responses', 'Escalation workflows'],
    color: 'amber'
  },
  {
    id: 'users',
    icon: Users,
    title: 'Access Control',
    description: 'Sophisticated user management with role-based access control and detailed audit trails for complete security.',
    benefits: ['Role-based access', 'Audit trails', 'Single sign-on', 'Permission management'],
    color: 'purple'
  }
];

const stats = [
  { label: 'Enterprise Clients', value: '500+', icon: Globe },
  { label: 'AI Models Governed', value: '10K+', icon: Bot },
  { label: 'Compliance Rate', value: '99.9%', icon: CheckCircle },
  { label: 'Data Points Processed', value: '1B+', icon: Database }
];

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 floating-card">
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl mx-auto mb-6 glow-logo">
          <Bot className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          PromptFort
        </h1>
        <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
          Guardrails for Generative AI — Secure, Compliant, Accountable!
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
          The most comprehensive AI governance solution for enterprises. Ensure compliance, optimize performance, 
          and maintain security across all your AI initiatives with intelligent automation and real-time insights.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button size="lg" className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Get Started</span>
          </Button>
          <Button variant="secondary" size="lg" className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>View Demo</span>
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl mx-auto mb-3 glow-primary">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Mission Statement */}
      <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-emerald-200 dark:border-emerald-800">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
            <Lock className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Our Mission
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We believe that AI governance shouldn't be an afterthought. PromptFort empowers organizations 
              to deploy AI responsibly while maintaining the agility needed to innovate. From startups to 
              Fortune 500 companies, we provide the guardrails and insights needed to govern AI at scale.
            </p>
          </div>
        </div>
      </Card>

      {/* Features Section */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Powerful Features for Complete AI Governance
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our comprehensive suite of tools designed to help you govern AI systems 
            with confidence and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            const colorClasses = {
              emerald: 'from-emerald-500 to-emerald-600',
              blue: 'from-blue-500 to-blue-600',
              amber: 'from-amber-500 to-amber-600',
              purple: 'from-purple-500 to-purple-600'
            };

            return (
              <Card key={feature.id} className="hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl glow-primary`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => onNavigate(feature.id)}
                  className="w-full flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all"
                >
                  <span>Explore {feature.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Leading Organizations Choose PromptFort
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-primary">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Enterprise Ready
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              Built for scale with enterprise-grade security, compliance, and reliability standards.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-primary">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Lightning Fast
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              Real-time monitoring and instant alerts ensure you're always ahead of potential issues.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-primary">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Continuous Innovation
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              Regular updates and new features keep you at the forefront of AI governance.
            </p>
          </div>
        </div>
      </Card>

      {/* CTA Section */}
      <Card className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 glow-primary">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Transform Your AI Governance?
        </h3>
        <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
          Join thousands of organizations already using PromptFort to govern their AI systems 
          with confidence and precision.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button variant="secondary" size="lg" onClick={() => onNavigate('dashboard')}>
            View Dashboard
          </Button>
          <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
      </Card>
    </div>
  );
};