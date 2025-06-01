
import { Heart, Shield, BookOpen, Wrench, Brain, Home as HomeIcon, Users, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const HopeInAction = () => {
  const careModel = [
    {
      icon: Shield,
      title: "Safety & Care",
      description: "24/7 secure environment with trained caregivers ensuring physical safety, proper nutrition, healthcare, and a nurturing atmosphere where girls feel protected and valued.",
      features: ["Round-the-clock security", "Qualified caregivers", "Regular health checkups", "Nutritious meals"]
    },
    {
      icon: Heart,
      title: "Emotional Healing",
      description: "Professional counseling and emotional support to help girls overcome trauma, build self-esteem, and develop healthy relationships through therapy and peer support.",
      features: ["Individual counseling", "Group therapy sessions", "Trauma-informed care", "Peer support groups"]
    },
    {
      icon: BookOpen,
      title: "Strong Academics",
      description: "Quality education with personalized learning plans, tutoring support, and access to resources that prepare girls for higher education and successful careers.",
      features: ["Personalized learning", "Qualified teachers", "Educational resources", "Career guidance"]
    },
    {
      icon: Wrench,
      title: "Skill Development",
      description: "Vocational training and life skills workshops that prepare girls for independent living and economic empowerment through practical, marketable skills.",
      features: ["Vocational training", "Life skills workshops", "Computer literacy", "Financial literacy"]
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Comprehensive mental wellness programs including mindfulness training, stress management, and access to mental health professionals for ongoing support.",
      features: ["Mental health screening", "Therapy sessions", "Mindfulness training", "Stress management"]
    },
    {
      icon: HomeIcon,
      title: "A Real Sense of Family",
      description: "Creating genuine familial bonds through shared activities, celebrations, mentorship programs, and fostering sister-like relationships among residents.",
      features: ["Family-style living", "Shared celebrations", "Mentorship programs", "Sister bonds"]
    }
  ];

  const impactStats = [
    { number: "95%", label: "Complete Education Success Rate" },
    { number: "88%", label: "Successful Career Placement" },
    { number: "100%", label: "Safe & Secure Environment" },
    { number: "150+", label: "Girls Currently Supported" }
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
                  Hope In 
                  <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> Action</span>
                </h1>
                <h2 className="text-2xl font-semibold text-gray-700">HSF Family Home Project</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empowering orphan girls through comprehensive care that addresses every aspect of their 
                  development - from safety and education to emotional healing and family bonds.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate">
                  <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                    Support a Girl's Future
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/volunteer-form">
                  <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
                    Become a Volunteer
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                alt="HSF Family Home environment"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Real results from our holistic care approach</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
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

      {/* Holistic Care Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Holistic Care Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every girl in our care receives comprehensive support across six critical areas that 
              ensure her physical, emotional, educational, and social development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careModel.map((model, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <model.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{model.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{model.description}</p>
                  <div className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop"
                alt="Success story"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Lives</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  "The HSF Family Home gave me more than shelter - it gave me hope, education, and most importantly, 
                  a family. Today, I'm pursuing my degree in medicine and helping other girls believe in their dreams."
                </p>
                <p className="text-lg font-semibold text-gray-800">- Fatima, HSF Graduate & Medical Student</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What Makes Us Different</h3>
                <p className="text-gray-600">
                  Unlike traditional orphanages, our family home model creates genuine bonds of sisterhood 
                  and provides individualized care that adapts to each girl's unique needs and dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to transform lives and build a brighter future for orphan girls in our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Your financial support directly funds education, healthcare, and daily care for our girls.
                </p>
                <Link to="/donate">
                  <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                    Donate Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Share your skills, time, and passion to mentor and support our girls' growth and development.
                </p>
                <Link to="/volunteer-form">
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                    Join Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Spread the Word</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Help us reach more supporters by sharing our mission with your family, friends, and community.
                </p>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  Share Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn more about how you can make a meaningful difference in a young girl's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-rose-400" />
              <span className="text-lg">+92 336 0863545</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-rose-400" />
              <span className="text-lg">info@samlifesavers.org</span>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HopeInAction;
