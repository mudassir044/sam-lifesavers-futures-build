
import { Heart, Users, BookOpen, Wrench, ArrowRight, Clock, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Volunteer = () => {
  const volunteerBenefits = [
    {
      icon: Heart,
      title: "Make a Real Difference",
      description: "Directly impact the lives of orphan girls and underprivileged communities through meaningful work."
    },
    {
      icon: Users,
      title: "Join a Caring Community",
      description: "Connect with like-minded individuals who share your passion for social change and community service."
    },
    {
      icon: BookOpen,
      title: "Develop New Skills",
      description: "Gain valuable experience in nonprofit work, education, community outreach, and leadership."
    },
    {
      icon: Award,
      title: "Personal Growth",
      description: "Build confidence, empathy, and a sense of purpose while contributing to something greater than yourself."
    }
  ];

  const volunteerRoles = [
    {
      title: "Education Support",
      description: "Help with tutoring, homework assistance, and educational activities for our girls.",
      time: "2-4 hours/week",
      location: "HSF Family Home",
      skills: "Teaching experience preferred but not required"
    },
    {
      title: "Mentorship Program",
      description: "Provide guidance, support, and friendship to help girls build confidence and life skills.",
      time: "3-5 hours/week",
      location: "Flexible",
      skills: "Good communication and listening skills"
    },
    {
      title: "Skills Workshop Leader",
      description: "Teach vocational skills like computer literacy, crafts, cooking, or other practical abilities.",
      time: "2-3 hours/week",
      location: "HSF Family Home",
      skills: "Expertise in specific skill area"
    },
    {
      title: "Event Coordination",
      description: "Help organize fundraising events, community outreach programs, and awareness campaigns.",
      time: "Flexible",
      location: "Various",
      skills: "Organization and planning abilities"
    },
    {
      title: "Healthcare Support",
      description: "Assist with health checkups, medical appointments, and basic health education.",
      time: "4-6 hours/week",
      location: "HSF Family Home",
      skills: "Medical background preferred"
    },
    {
      title: "Administrative Support",
      description: "Help with office tasks, data entry, social media management, and communications.",
      time: "2-4 hours/week",
      location: "Office/Remote",
      skills: "Computer skills and attention to detail"
    }
  ];

  const requirements = [
    "Must be 18 years or older",
    "Commitment to our values of compassion, integrity, and community",
    "Reliable and punctual attendance",
    "Background check required (we'll help with this process)",
    "Respectful attitude towards all community members",
    "Willingness to learn and follow our guidelines"
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
                  Volunteer With 
                  <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> Us</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join our dedicated team of volunteers and become part of a movement that's 
                  transforming lives and building stronger communities through compassionate action.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/volunteer-form">
                  <Button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                    Apply to Volunteer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=600&h=400&fit=crop"
                alt="Volunteers working together"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Volunteer With SAM Life Savers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with us isn't just about giving back—it's about growing, learning, 
              and being part of a community that believes in the power of collective action.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer diverse volunteer roles to match your skills, interests, and availability. 
              Find the perfect way to contribute to our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-rose-500" />
                      <span className="text-gray-600">Time: {role.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-rose-500" />
                      <span className="text-gray-600">Location: {role.location}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Award className="h-4 w-4 text-rose-500 mt-0.5" />
                      <span className="text-gray-600">Skills: {role.skills}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Volunteer Requirements</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We welcome volunteers from all backgrounds who share our commitment to 
                making a positive difference in the lives of others.
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop"
                alt="Volunteer team meeting"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Joining our volunteer team is simple and straightforward. Follow these steps to begin your journey with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">Fill out our volunteer application form with your interests and availability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview & Orientation</h3>
              <p className="text-gray-600">Meet with our team and attend a comprehensive orientation session.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Placement</h3>
              <p className="text-gray-600">Receive role-specific training and get matched with the perfect volunteer position.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Making Impact</h3>
              <p className="text-gray-600">Begin your volunteer journey and start making a real difference in lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Change Lives?</h2>
          <p className="text-xl mb-8 opacity-90">
            Your time, skills, and compassion can make an incredible difference. Join our volunteer family today.
          </p>
          <Link to="/volunteer-form">
            <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
              Apply to Volunteer Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
