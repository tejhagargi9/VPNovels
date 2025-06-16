import { useState, useEffect } from 'react';

export default function BooksPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const books = [
    {
      id: 1,
      title: "The Silent Echo",
      price: "$12.99",
      category: "novel",
      description: "A haunting tale of redemption and discovery that follows Emma's journey through forgotten memories.",
      rating: 4.8,
      reviews: 324,
      isNew: true,
      isBestseller: true,
      coverColor: "from-slate-800 via-slate-700 to-slate-900"
    },
    {
      id: 2,
      title: "Whispers in the Wind",
      price: "$10.99",
      category: "novel",
      description: "An epic romance set against the backdrop of a small coastal town where secrets run as deep as the ocean.",
      rating: 4.6,
      reviews: 187,
      isNew: false,
      isBestseller: false,
      coverColor: "from-blue-800 via-indigo-700 to-purple-900"
    },
    {
      id: 3,
      title: "Midnight Confessions",
      price: "$8.99",
      category: "stories",
      description: "A collection of gripping short stories that explore the depths of human nature and moral complexity.",
      rating: 4.7,
      reviews: 256,
      isNew: false,
      isBestseller: true,
      coverColor: "from-gray-800 via-gray-700 to-black"
    },
    {
      id: 4,
      title: "Dreams Unbound",
      price: "$11.99",
      category: "novel",
      description: "A psychological thriller that blurs the line between reality and imagination in the most unexpected ways.",
      rating: 4.9,
      reviews: 402,
      isNew: false,
      isBestseller: true,
      coverColor: "from-emerald-800 via-teal-700 to-cyan-900"
    },
    {
      id: 5,
      title: "Tales from Tomorrow",
      price: "$9.99",
      category: "stories",
      description: "Futuristic short stories that challenge our understanding of technology, humanity, and progress.",
      rating: 4.5,
      reviews: 143,
      isNew: true,
      isBestseller: false,
      coverColor: "from-orange-800 via-red-700 to-pink-900"
    },
    {
      id: 6,
      title: "The Last Chapter",
      price: "$13.99",
      category: "novel",
      description: "A powerful story about second chances and the courage to rewrite your own ending.",
      rating: 4.8,
      reviews: 298,
      isNew: false,
      isBestseller: false,
      coverColor: "from-violet-800 via-purple-700 to-indigo-900"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Books', count: books.length },
    { id: 'novel', name: 'Novels', count: books.filter(book => book.category === 'novel').length },
    { id: 'stories', name: 'Others', count: books.filter(book => book.category === 'stories').length }
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 pb-12 pt-[7rem]">
        
        {/* Header Section */}
        <div className={`text-center mb-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-6xl font-bold text-gray-900 mb-3">My Books</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a collection of stories that delve into the human experience, 
            from gripping novels to thought-provoking short stories.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book, index) => (
            <div
              key={book.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              
              {/* Book Cover Section */}
              <div className="relative p-6 pb-0">
                <div className="relative mx-auto w-48 h-64 group-hover:scale-105 transition-transform duration-500">
                  
                  {/* Book Cover */}
                  <div className={`w-full h-full bg-gradient-to-br ${book.coverColor} rounded-lg shadow-xl relative overflow-hidden`}>
                    
                    {/* Book spine */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/30 to-white/10"></div>
                    
                    {/* Book title on cover */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                      <div className="text-white text-lg font-bold mb-2 leading-tight">
                        {book.title.toUpperCase()}
                      </div>
                      <div className="text-gray-300 text-sm font-light tracking-wider">
                        Vikas Patwari
                      </div>
                    </div>

                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                  </div>

                  {/* Badges */}
                  <div className="absolute -top-2 -right-2 flex flex-col space-y-2">
                    {book.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        NEW
                      </span>
                    )}
                    {book.isBestseller && (
                      <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        #1
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Book Info Section */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {book.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {book.rating} ({book.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Price and Buy Section */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {book.price}
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <p className="text-gray-600 mb-6">
            Looking for something specific? Explore more of my literary works.
          </p>
          <button className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Collections
          </button>
        </div>
      </div>
    </div>
  );
}