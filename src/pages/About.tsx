
import { Heart, Users, Droplets, Target, Eye, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const projects = [
    {
      icon: HomeIcon,
      title: "Orphanage Home",
      description: "Our flagship HSF Family Home Project provides comprehensive care for orphan girls in a loving, family-like environment that focuses on safety, education, emotional healing, and life skills development.",
      impact: "150+ girls supported"
    },
    {
      icon: Droplets,
      title: "Water for All",
      description: "Clean water access initiative that installs filtration systems and provides sustainable water solutions to underserved communities, ensuring safe drinking water for families in need.",
      impact: "5,000+ people served"
    },
    {
      icon: Heart,
      title: "Blood Drives",
      description: "Life-saving blood donation campaigns organized regularly in partnership with local hospitals to support emergency medical needs and maintain critical blood supply reserves.",
      impact: "2,000+ units collected"
    },
    {
      icon: Users,
      title: "Iftar Drives",
      description: "Ramadan food distribution program providing nutritious Iftar meals and food packages to underprivileged families during the holy month, ensuring no one goes hungry while fasting.",
      impact: "10,000+ meals served"
    },
    {
      icon: Users,
      title: "Rashan Distribution",
      description: "Monthly food package distribution providing essential groceries and household items to vulnerable families, ensuring food security and basic needs are met consistently.",
      impact: "500+ families monthly"
    },
    {
      icon: Heart,
      title: "Crisis Help",
      description: "Emergency assistance program providing immediate support during natural disasters, medical emergencies, and urgent community needs through rapid response and aid distribution.",
      impact: "24/7 support available"
    }
  ];

  const impactMetrics = [
    { number: "5,000+", label: "Lives Directly Impacted" },
    { number: "50+", label: "Community Projects" },
    { number: "200+", label: "Active Volunteers" },
    { number: "10+", label: "Partner Organizations" }
  ];

  const values = [
    {
      title: "Compassion",
      description: "We approach every interaction with empathy, understanding, and genuine care for those we serve."
    },
    {
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices guide all our decisions and operations."
    },
    {
      title: "Community",
      description: "We believe in the power of collective action and building stronger, more supportive communities."
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and services to maximize impact."
    },
    {
      title: "Sustainability",
      description: "Our solutions focus on long-term impact and empowering communities for lasting change."
    },
    {
      title: "Respect",
      description: "We honor the dignity and worth of every individual, regardless of their circumstances."
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
                  About 
                  <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> SAM Life Savers</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Dedicated to transforming lives and strengthening communities through compassionate action, 
                  sustainable programs, and unwavering commitment to those who need it most.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/hope-in-action">
                  <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                    See Our Impact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/volunteer">
                  <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
                    Join Our Mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=600&h=400&fit=crop"
                alt="SAM Life Savers team"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To uplift orphan girls and support underprivileged communities through comprehensive care, 
                  education, and sustainable development programs that restore hope, build resilience, 
                  and create lasting positive change in lives and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A world where every orphan girl has the opportunity to thrive in a loving environment, 
                  where communities are empowered to support one another, and where hope transforms 
                  lives through sustainable action and collective compassion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600">Measurable results from years of dedicated service</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project addresses critical community needs while building sustainable solutions for long-term impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                      {project.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every action we take in service of our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Dedicated Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals committed to making a difference, working together to build a better tomorrow for all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop"
                alt="Team working together"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Working Together for Change</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our team consists of dedicated professionals, passionate volunteers, and community leaders 
                  who share a common vision of creating positive change. Together, we bring diverse skills, 
                  experiences, and perspectives to our mission.
                </p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Join Our Team</h4>
                <p className="text-gray-600 mb-4">
                  We're always looking for compassionate individuals who want to make a difference. 
                  Whether through volunteering, partnerships, or full-time positions, there's a place for you.
                </p>
                <Link to="/volunteer">
                  <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-6 py-2 rounded-full">
                    Learn About Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in our mission to transform lives and build stronger communities through compassionate action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                Support Our Work
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
