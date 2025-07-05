import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Globe,
  Book,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import shetextedmeafterdeath from "../assets/images/shetextedmeafterdeath.jpg";
import hundredquotes from "../assets/images/100quotes.jpg";
import game from "../assets/images/game.jpg"; // Add your image path here
import unitlIRY from "../assets/images/unitlIRY.jpg"; // Add your image path here

export default function BooksPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlatforms, setSelectedPlatforms] = useState({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const platforms = [
    {
      id: "amazon-india",
      name: "Amazon India",
      icon: ShoppingCart,
      color: "bg-orange-500 hover:bg-orange-600",
      textColor: "text-orange-600",
      description: "Fast delivery in India",
      baseUrl: "https://www.amazon.in/s?k=",
    },
    {
      id: "amazon-global",
      name: "Amazon Global",
      icon: Globe,
      color: "bg-blue-500 hover:bg-blue-600",
      textColor: "text-blue-600",
      description: "Worldwide shipping",
      baseUrl: "https://www.amazon.com/s?k=",
    },
    {
      id: "pothi",
      name: "Pothi",
      icon: Book,
      color: "bg-green-500 hover:bg-green-600",
      textColor: "text-green-600",
      description: "Print on demand",
      baseUrl: "https://pothi.com/search?q=",
    },
    {
      id: "ebook",
      name: "eBook",
      icon: Smartphone,
      color: "bg-purple-500 hover:bg-purple-600",
      textColor: "text-purple-600",
      description: "Instant download",
      baseUrl: "https://www.google.com/search?q=",
    },
  ];

  const books = [
    {
      id: 1,
      title: "Until I Remember You",
      author: "Vikas Patwari",
      price: {
        "amazon-india": "₹169",
        "amazon-global": "$2.99",
        pothi: "₹169",
        ebook: "₹169",
      },
      urls: {
        "amazon-india": "https://amzn.in/d/dMk7Atp",
        "amazon-global": "https://a.co/d/1N2adTh",
        pothi: "https://store.pothi.com/book/ebook-vikas-patwari-until-i-remember-you/",
        ebook: "https://store.pothi.com/book/ebook-vikas-patwari-until-i-remember-you/",
      },
      category: "novels",
      description:
        "A poignant tale of lost love, fading memories, and the choice between forgetting and holding on",
      rating: "4.2",
      reviews: 256,
      isNew: true,
      isBestseller: false,
      coverImage: unitlIRY, // Add your image path here
      coverColor: "from-gray-800 via-gray-700 to-black", // Fallback gradient
      availability: ["amazon-india", "amazon-global", "pothi", "ebook"],
    },
    {
      id: 2,
      title: "She Texted Me After Death",
      author: "Vikas Patwari",
      price: {
        "amazon-india": "₹149",
        "amazon-global": "$5.99",
        pothi: "₹249",
        ebook: "₹149",
      },
      urls: {
        "amazon-india": "https://amzn.in/d/g0yxupb",
        "amazon-global": "https://a.co/d/dnSaa8C",
        pothi:
          "https://store.pothi.com/book/vikas-patwari-she-texted-me-after-death/",
        ebook:
          "https://store.pothi.com/book/ebook-vikas-patwari-she-texted-me-after-death/",
      },
      category: "novels",
      description:
        "A very interesting story filled with suspense, thriller, love, and horror. Every page reveals a new twist that will keep you hooked till the end.",
      rating: 4.8,
      isNew: false,
      isBestseller: true,
      coverImage: shetextedmeafterdeath,
      coverColor: "from-slate-800 via-slate-700 to-slate-900", // Fallback gradient
      availability: ["amazon-india", "amazon-global", "pothi", "ebook"],
    },
    {
      id: 3,
      title: "100 Quotes to change your mindset",
      author: "Vikas Patwari",
      price: {
        "amazon-india": "₹128",
        "amazon-global": "$1.49",
        pothi: "Not available",
        ebook: "Not available",
      },
      urls: {
        "amazon-india": "https://amzn.in/d/8buLZ7v",
        "amazon-global": "https://a.co/d/adWJV8X",
        pothi: "#",
        ebook: "#",
      },
      category: "others",
      description:
        "A collection of raw emotions, silent screams, and unspoken truths — all wrapped in words",
      rating: 4.6,
      reviews: 187,
      isNew: false,
      isBestseller: false,
      coverImage: hundredquotes, // Add your image path here
      coverColor: "from-blue-800 via-indigo-700 to-purple-900", // Fallback gradient
      availability: ["amazon-india", "amazon-global", "pothi", "ebook"],
    },
    {
      id: 4,
      title: "The Game That Has No Rules",
      author: "Vikas Patwari",
      price: {
        "amazon-india": "₹169",
        "amazon-global": "Not available",
        pothi: "₹249",
        ebook: "₹169",
      },
      urls: {
        "amazon-india": "https://amzn.in/d/9ZsKoEa",
        "amazon-global": "#",
        pothi: "https://store.pothi.com/book/vikas-patwari-game-has-no-rules/",
        ebook: "https://store.pothi.com/book/ebook-vikas-patwari-game-has-no-rules/",
      },
      category: "novels",
      description:
        "Trapped in a game where secrets kill and exits lie — every choice is deadly. In this twisted survival, trust is your biggest enemy.",
      rating: "4.2",
      reviews: 256,
      isNew: true,
      isBestseller: true,
      coverImage: game, // Add your image path here
      coverColor: "from-gray-800 via-gray-700 to-black", // Fallback gradient
      availability: ["amazon-india", "amazon-global", "pothi", "ebook"],
    },
  ];

  const categories = [
    { id: "all", name: "All Books", count: books.length },
    {
      id: "novels",
      name: "Novels",
      count: books.filter((book) => book.category === "novels").length,
    },
    {
      id: "others",
      name: "Others",
      count: books.filter((book) => book.category === "others").length,
    },
  ];

  const filteredBooks =
    selectedCategory === "all"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const handlePlatformSelect = (bookId, platformId) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [bookId]: platformId,
    }));
  };

  const getSelectedPlatform = (bookId) => {
    return (
      selectedPlatforms[bookId] ||
      books.find((b) => b.id === bookId)?.availability[0]
    );
  };

  const handleBuyNow = (book) => {
    const selectedPlatform = getSelectedPlatform(book.id);
    const platform = platforms.find((p) => p.id === selectedPlatform);

    // Get the specific URL for this book and platform
    const bookUrl = book.urls[selectedPlatform];

    if (bookUrl) {
      // Open in new tab
      window.open(bookUrl, "_blank", "noopener,noreferrer");
    } else {
      // Fallback to search if specific URL not available
      const searchQuery = encodeURIComponent(`${book.title} ${book.author}`);
      const fallbackUrl = platform.baseUrl + searchQuery;
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 pb-12 pt-[7rem]">
        {/* Header Section */}
        <div
          className={`text-center mb-8 transform transition-all duration-1000 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-3">My Books</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a collection of stories that delve into the human
            experience. Choose your preferred platform for purchase.
          </p>
        </div>

        {/* Platform Info */}
        <div
          className={`mb-12 transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Available Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div key={platform.id} className="text-center">
                    <div
                      className={`${platform.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">
                      {platform.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {platform.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`flex justify-center mb-12 transform transition-all duration-1000 delay-400 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gray-900 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
          {filteredBooks.map((book, index) => {
            const selectedPlatform = getSelectedPlatform(book.id);
            const currentPlatform = platforms.find(
              (p) => p.id === selectedPlatform
            );

            return (
              <div
                key={book.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform flex flex-col h-full ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                {/* Book Cover Section */}
                <div className="relative p-6 pb-0 flex-shrink-0">
                  <div className="relative mx-auto w-48 h-70 group-hover:scale-105 transition-transform duration-500">
                    {/* Book Cover Container */}
                    <div className="w-full h-full rounded-lg shadow-xl relative overflow-hidden bg-gray-200">
                      {/* Book Cover Image */}
                      <img
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          e.target.style.display = "none";
                          e.target.nextElementSibling.style.display = "block";
                        }}
                      />

                      {/* Fallback Gradient Cover (hidden by default) */}
                      <div
                        className={`w-full h-full bg-gradient-to-br ${book.coverColor} rounded-lg shadow-xl overflow-hidden absolute inset-0`}
                        style={{ display: "none" }}
                      >
                        {/* Book spine */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/30 to-white/10"></div>

                        {/* Book title on cover */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                          <div className="text-white text-lg font-bold mb-2 leading-tight">
                            {book.title.toUpperCase()}
                          </div>
                          <div className="text-gray-300 text-sm font-light tracking-wider">
                            {book.author}
                          </div>
                        </div>

                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                      </div>
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

                {/* Book Info Section - This will grow to fill remaining space */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-1 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {book.title}
                    </h3>
                    {/* Fixed height description container */}
                    <div className="h-12 mb-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {truncateText(book.description, 80)}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4 mt-4">
                      <div className="flex text-yellow-400">
                        {"★".repeat(5)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {book.rating}
                      </span>
                    </div>
                  </div>

                  {/* Platform Selection */}
                  <div className="mb-4 flex-shrink-0">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Choose Platform:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {book.availability.map((platformId) => {
                        const platform = platforms.find(
                          (p) => p.id === platformId
                        );
                        const Icon = platform.icon;
                        const isSelected = selectedPlatform === platformId;
                        const hasDirectUrl = book.urls[platformId];

                        return (
                          <button
                            key={platformId}
                            onClick={() =>
                              handlePlatformSelect(book.id, platformId)
                            }
                            className={`flex items-center space-x-2 p-2 rounded-lg border-2 transition-all duration-200 relative ${
                              isSelected
                                ? `border-${
                                    platform.textColor.split("-")[1]
                                  }-500 bg-${
                                    platform.textColor.split("-")[1]
                                  }-50`
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 ${
                                isSelected
                                  ? platform.textColor
                                  : "text-gray-400"
                              }`}
                            />
                            <span
                              className={`text-xs font-medium ${
                                isSelected
                                  ? platform.textColor
                                  : "text-gray-600"
                              }`}
                            >
                              {platform.name}
                            </span>
                            {hasDirectUrl && (
                              <ExternalLink
                                className={`w-3 h-3 ${
                                  isSelected
                                    ? platform.textColor
                                    : "text-gray-400"
                                }`}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price and Buy Section */}
                  <div className="flex items-center justify-between flex-shrink-0">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {book.price[selectedPlatform]}
                      </div>
                      <div className="text-xs text-gray-500">
                        via {currentPlatform?.name}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBuyNow(book)}
                      className={`${currentPlatform?.color} text-white px-6 py-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2`}
                    >
                      <currentPlatform.icon className="w-4 h-4" />
                      <span>Buy Now</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      <footer className="relative z-10 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2025 VPBooks. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}
