
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Heart, Send, Users } from 'lucide-react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    occupation: '',
    education: '',
    experience: '',
    skills: '',
    availability: '',
    interests: '',
    cnic: '',
    emergencyContact: '',
    emergencyPhone: '',
    backgroundCheck: false,
    termsAccepted: false,
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      toast({
        title: "Please accept the terms",
        description: "You must accept the terms of use to submit your application.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Application submitted successfully!",
      description: "Thank you for your interest in volunteering. We'll contact you soon for the next steps.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      address: '',
      occupation: '',
      education: '',
      experience: '',
      skills: '',
      availability: '',
      interests: '',
      cnic: '',
      emergencyContact: '',
      emergencyPhone: '',
      backgroundCheck: false,
      termsAccepted: false,
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (checked: boolean, name: string) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Volunteer 
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> Application</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Join our mission to transform lives and build stronger communities. 
            Complete this application to start your journey as a SAM Life Savers volunteer.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Heart className="h-6 w-6 text-rose-500 mr-2" />
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange(value, 'age')}>
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                          <SelectValue placeholder="Select your age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-25">18-25 years</SelectItem>
                          <SelectItem value="26-35">26-35 years</SelectItem>
                          <SelectItem value="36-45">36-45 years</SelectItem>
                          <SelectItem value="46-55">46-55 years</SelectItem>
                          <SelectItem value="55+">55+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="Enter your complete address"
                      />
                    </div>
                    <div>
                      <label htmlFor="cnic" className="block text-sm font-medium text-gray-700 mb-2">
                        CNIC Number *
                      </label>
                      <Input
                        id="cnic"
                        name="cnic"
                        type="text"
                        required
                        value={formData.cnic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="XXXXX-XXXXXXX-X"
                      />
                    </div>
                  </div>
                </div>

                {/* Background Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Background Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Occupation
                      </label>
                      <Input
                        id="occupation"
                        name="occupation"
                        type="text"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="Your current job or profession"
                      />
                    </div>
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                        Education Level
                      </label>
                      <Select onValueChange={(value) => handleSelectChange(value, 'education')}>
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Volunteer Experience
                      </label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                        placeholder="Describe any previous volunteer work or community service experience"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                        Skills & Talents
                      </label>
                      <Textarea
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                        placeholder="List your skills, talents, or areas of expertise that could benefit our mission"
                      />
                    </div>
                  </div>
                </div>

                {/* Volunteer Preferences */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Preferences</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                        Availability
                      </label>
                      <Select onValueChange={(value) => handleSelectChange(value, 'availability')}>
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekdays">Weekdays</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="evenings">Evenings</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                          <SelectItem value="specific">Specific times (mention in message)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Interest
                      </label>
                      <Textarea
                        id="interests"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                        placeholder="Which volunteer opportunities interest you most? (Education, Healthcare, Event Organization, etc.)"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="text"
                        required
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="Full name of emergency contact"
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Phone *
                      </label>
                      <Input
                        id="emergencyPhone"
                        name="emergencyPhone"
                        type="tel"
                        required
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                    placeholder="Is there anything else you'd like us to know about your interest in volunteering?"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="backgroundCheck"
                      checked={formData.backgroundCheck}
                      onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, 'backgroundCheck')}
                    />
                    <label htmlFor="backgroundCheck" className="text-sm text-gray-700 leading-relaxed">
                      I understand that a background check will be required before beginning volunteer work, 
                      and I consent to this process.
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="termsAccepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, 'termsAccepted')}
                    />
                    <label htmlFor="termsAccepted" className="text-sm text-gray-700 leading-relaxed">
                      I agree to the terms of use and volunteer guidelines. I understand that volunteering 
                      is a commitment and I will fulfill my responsibilities with dedication and integrity. *
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Application
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    We'll review your application and contact you within 5-7 business days.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default VolunteerForm;
