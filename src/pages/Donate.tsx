
import { Heart, CreditCard, Smartphone, Building, ArrowRight, CheckCircle, Users, BookOpen, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Donate = () => {
  const donationMethods = [
    {
      icon: Building,
      title: "Bank Transfer",
      description: "Direct bank transfer for larger donations",
      details: [
        "Account Title: SAM Life Savers",
        "Account Number: XXXX-XXXX-XXXX",
        "Bank: Allied Bank Limited",
        "Branch: Fifth Road, Rawalpindi"
      ],
      action: "Get Bank Details"
    },
    {
      icon: Smartphone,
      title: "EasyPaisa",
      description: "Quick and convenient mobile payments",
      details: [
        "Account Number: 0336-0863545",
        "Account Title: SAM Life Savers",
        "Available 24/7",
        "Instant confirmation"
      ],
      action: "Send via EasyPaisa"
    },
    {
      icon: CreditCard,
      title: "JazzCash",
      description: "Secure mobile wallet transactions",
      details: [
        "Account Number: 0336-0863545",
        "Account Title: SAM Life Savers",
        "Fast processing",
        "Receipt provided"
      ],
      action: "Send via JazzCash"
    }
  ];

  const impactLevels = [
    {
      amount: "PKR 5,000",
      title: "Basic Support",
      description: "Provides one month of nutritious meals for a girl in our care",
      impact: ["Daily nutritious meals", "Health supplements", "Dietary monitoring"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      amount: "PKR 15,000",
      title: "Educational Support",
      description: "Covers educational expenses including books, uniforms, and supplies",
      impact: ["School fees & supplies", "Tutoring support", "Educational activities"],
      color: "from-green-500 to-emerald-500"
    },
    {
      amount: "PKR 25,000",
      title: "Comprehensive Care",
      description: "Provides complete monthly care including education, health, and living expenses",
      impact: ["Full monthly care", "Medical checkups", "Skill development"],
      color: "from-rose-500 to-orange-500"
    },
    {
      amount: "PKR 50,000",
      title: "Transformational Impact",
      description: "Sponsors a girl's complete care for two months or supports multiple programs",
      impact: ["Two months full care", "Special programs", "Emergency support"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const projectNeeds = [
    {
      icon: Heart,
      title: "HSF Family Home",
      description: "Support our girls' daily needs, education, and emotional care",
      urgency: "High Priority",
      goal: "PKR 500,000 monthly"
    },
    {
      icon: Droplets,
      title: "Water for All",
      description: "Install clean water systems in underserved communities",
      urgency: "Critical Need",
      goal: "PKR 200,000 per system"
    },
    {
      icon: Users,
      title: "Emergency Relief",
      description: "Rapid response fund for crisis situations and urgent needs",
      urgency: "Ongoing",
      goal: "PKR 100,000 quarterly"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Make a 
                  <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> Difference</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your generous contribution directly transforms lives, provides hope, and builds stronger communities. 
                  Every donation, no matter the size, creates lasting impact.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
                  Learn About Impact
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop"
                alt="Children benefiting from donations"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Easy Ways to Donate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient method for you. All donations are secure and 100% go towards our programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <div className="space-y-2 mb-6 text-sm text-gray-700">
                    {method.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-medium rounded-full transition-all duration-300">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact at Every Level</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your contribution makes a real difference in the lives of those we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactLevels.map((level, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-2`}>
                      {level.amount}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{level.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{level.description}</p>
                  <div className="space-y-2">
                    {level.impact.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                    Donate {level.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Project Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Project Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are our most urgent funding priorities where your donation can have immediate impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectNeeds.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                        {project.urgency}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Funding Goal</span>
                      <span className="text-sm font-bold text-rose-600">{project.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-rose-500 to-orange-500 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-1 block">65% funded</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-medium rounded-full transition-all duration-300">
                    Support This Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Transparency</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe in full transparency about how your donations are used. Every rupee is accounted for 
                and directed towards maximum impact for those we serve.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">95%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Direct Program Support</h4>
                    <p className="text-gray-600">95% of donations go directly to programs and services for our beneficiaries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Administrative Costs</h4>
                    <p className="text-gray-600">Only 5% covers essential administrative and operational expenses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Regular Reports</h4>
                    <p className="text-gray-600">Monthly financial reports and impact updates sent to all donors.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop"
                alt="Transparent reporting"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Impact Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of supporters who are already making a difference. Your contribution, 
            no matter the size, helps transform lives and build hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
              Learn More About Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
