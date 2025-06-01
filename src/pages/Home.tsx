
import { Heart, Users, Droplets, ArrowRight, CheckCircle, Shield, BookOpen, Wrench, Brain, Home as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const initiatives = [
    {
      icon: HomeIcon,
      title: "Orphanage Home",
      description: "Providing safe, loving homes for orphan girls with comprehensive care and family environment.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Droplets,
      title: "Water for All",
      description: "Ensuring clean, safe drinking water access for underprivileged communities.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Blood Donations",
      description: "Organizing life-saving blood donation drives to support emergency medical needs.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Iftar Drives",
      description: "Distributing nutritious meals and Iftar packages during Ramadan to those in need.",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Girls Supported" },
    { number: "1000+", label: "Families Helped" },
    { number: "50+", label: "Blood Drives" },
    { number: "5000+", label: "Meals Distributed" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding in everything we do."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency and honesty guide our actions and decisions."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building stronger communities through collective action and support."
    }
  ];

  const coreServices = [
    { icon: Shield, title: "Safety & Care", description: "24/7 secure environment with loving caregivers" },
    { icon: Heart, title: "Emotional Healing", description: "Professional counseling and emotional support" },
    { icon: BookOpen, title: "Strong Academics", description: "Quality education with personalized learning" },
    { icon: Wrench, title: "Skill Development", description: "Vocational training for future independence" },
    { icon: Brain, title: "Mental Health", description: "Comprehensive mental wellness programs" },
    { icon: HomeIcon, title: "Real Family", description: "Creating genuine familial bonds and belonging" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building 
                  <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> Futures </span>
                  Together
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  SAM Life Savers is dedicated to uplifting orphan girls and supporting underprivileged 
                  communities through compassionate care, education, and sustainable development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/hope-in-action">
                  <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                    Discover Our Impact
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
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop"
                alt="Children being cared for"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Key Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through focused programs, we address critical needs in our communities while 
              building sustainable solutions for long-term impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${initiative.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <initiative.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HSF Family Home Project Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                alt="Family home environment"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">HSF Family Home Project</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our flagship program providing comprehensive care for orphan girls through 
                  a holistic approach that addresses every aspect of their development and well-being.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {coreServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-rose-100 rounded-lg">
                        <service.icon className="h-5 w-5 text-rose-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/hope-in-action">
                <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  Learn More About Hope In Action
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our mission and shape every interaction with the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <p className="text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
            "To create a world where every orphan girl has the opportunity to thrive, 
            where communities are empowered to support one another, and where hope transforms lives through sustainable action."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                Support Our Vision
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Every contribution, no matter how small, creates ripples of positive change in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                Donate Today
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

export default Home;
