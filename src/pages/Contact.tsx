
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+92 336 0863545",
      description: "Available Monday-Friday, 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@samlifesavers.org",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "D999- Al Basit Arcade, Fifth Road, Rawalpindi",
      description: "Visit us during office hours"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Get In 
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions, want to get involved, 
            or need support, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-gray-800 mb-2">{info.value}</p>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours & Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-800">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Quick Actions</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-rose-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Need immediate assistance or reporting an emergency situation?
                      </p>
                      <p className="font-medium text-rose-600">Call: +92 336 0863545</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Volunteer Opportunities</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Ready to join our mission and make a difference?
                      </p>
                      <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                        Apply to Volunteer
                      </Button>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Make a Donation</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Support our programs with a financial contribution.
                      </p>
                      <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white">
                        Donate Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our programs and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">How can I volunteer with SAM Life Savers?</h4>
                <p className="text-gray-600">
                  Fill out our volunteer application form and attend our orientation session. 
                  We'll match you with opportunities that fit your skills and availability.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">What types of donations do you accept?</h4>
                <p className="text-gray-600">
                  We accept monetary donations through bank transfers, EasyPaisa, and JazzCash. 
                  We also accept clothing, educational materials, and food items.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">How can I visit the HSF Family Home?</h4>
                <p className="text-gray-600">
                  Visits must be scheduled in advance for security and privacy reasons. 
                  Contact us to arrange a tour and learn about our programs firsthand.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Can I sponsor a specific girl's education?</h4>
                <p className="text-gray-600">
                  Yes! We offer sponsorship programs where you can directly support a girl's 
                  education, healthcare, and living expenses. Contact us for more details.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">How do you ensure transparency in fund usage?</h4>
                <p className="text-gray-600">
                  We provide regular financial reports, project updates, and maintain 
                  open communication with all donors about how their contributions are used.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Do you work with other organizations?</h4>
                <p className="text-gray-600">
                  Yes, we partner with hospitals, schools, government agencies, and other 
                  NGOs to maximize our impact and avoid duplication of services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">We're Here to Help</h2>
          <p className="text-xl mb-8 opacity-90">
            Your questions matter to us. Don't hesitate to reach out - we're committed to providing 
            the support and information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
              Call Us Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
              Send an Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
