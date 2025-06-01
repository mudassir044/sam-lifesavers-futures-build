
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'orphanage', name: 'Orphanage Home' },
    { id: 'water', name: 'Water for All' },
    { id: 'blood', name: 'Blood Drives' },
    { id: 'iftar', name: 'Iftar Drives' },
    { id: 'community', name: 'Community Work' }
  ];

  const projects = [
    {
      id: 1,
      title: "HSF Family Home Opening",
      category: "orphanage",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      description: "The grand opening of our flagship family home for orphan girls, providing a safe and nurturing environment.",
      date: "2024"
    },
    {
      id: 2,
      title: "Community Blood Drive",
      category: "blood",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      description: "Our largest blood donation campaign, collecting over 200 units to support local hospitals.",
      date: "2024"
    },
    {
      id: 3,
      title: "Clean Water Initiative",
      category: "water",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=600&h=400&fit=crop",
      description: "Installing water filtration systems in underserved communities to provide clean drinking water.",
      date: "2024"
    },
    {
      id: 4,
      title: "Ramadan Iftar Distribution",
      category: "iftar",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
      description: "Distributing 1000+ Iftar packages to families in need during the holy month of Ramadan.",
      date: "2024"
    },
    {
      id: 5,
      title: "Educational Support Program",
      category: "orphanage",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      description: "Providing educational resources and tutoring support to girls in our care.",
      date: "2024"
    },
    {
      id: 6,
      title: "Winter Relief Campaign",
      category: "community",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=600&h=400&fit=crop",
      description: "Distributing warm clothing and blankets to homeless individuals during winter months.",
      date: "2023"
    },
    {
      id: 7,
      title: "Emergency Blood Appeal",
      category: "blood",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
      description: "Rapid response blood drive during a medical emergency, saving multiple lives.",
      date: "2023"
    },
    {
      id: 8,
      title: "Skills Development Workshop",
      category: "orphanage",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      description: "Vocational training workshops helping girls develop marketable skills for future independence.",
      date: "2023"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Our 
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent"> Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore our journey of compassion through visual stories of transformation, 
            community impact, and the lives we've touched together.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white transform scale-105'
                    : 'border-rose-300 text-rose-600 hover:bg-rose-50'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-rose-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {project.date}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collective Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents lives touched, hope restored, and communities strengthened. 
              Together, we're building a brighter future for all.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">
                5000+
              </div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-gray-600 font-medium">Volunteers Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Next Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Every project starts with someone who cares. Join us in creating more stories of hope and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105">
              Support Our Work
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
