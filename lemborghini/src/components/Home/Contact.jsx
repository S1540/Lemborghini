import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ArticlesCard from "../Cards/ArticlesCard";

const Contact = ({ contactRef }) => {
  const articleData = [
    {
      image:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/news/2025/12_01_turin/cover.jpg",
      title: "Turin Motor Show 1965: the chassis that ignited the Miura legend",
      date: "23 February 2026",
      tags: ["Articles", "Motorsport"],
    },
    {
      image:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2025/11_27_gender_equality/cover.jpg",
      title: "Gender equality: Lamborghini reconfirms its certification",
      date: "25 February 2026",
      tags: ["Articles", "Company"],
    },
    {
      image:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2025/11_26_few_offs/cover.jpg",
      title: "Lamborghini few-offs: when a rarity turns into a passion",
      date: "04 March 2026",
      tags: ["Articles", "Heritage"],
    },
    {
      image:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2025/11_19_hot_wheels/hot_wheels1.jpg",
      title: "Hot Wheels Driving Design with Mitja Borkert",
      date: "17 March 2026",
      tags: ["Articles", "Design"],
    },
  ];

  return (
    <>
      <section
        ref={contactRef}
        className="py-16 md:py-24 bg-black relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            {/* Top Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
              <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">
                Latest Updates
              </span>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
                  <span className="block text-gray-400 text-2xl md:text-3xl font-light mb-2">
                    Arrival 2026
                  </span>
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                    Featured
                  </span>{" "}
                  <span className="text-white">Articles</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </div>

              {/* View All Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center justify-center gap-3 max-w-64 w-full mt-5 py-3 px-2 bg-linear-to-r from-orange-500 to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-lg border-2 border-orange-500/50 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 cursor-pointer"
              >
                View All Articles
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Articles Horizontal Scroll */}
          <div className="relative">
            {/* Scroll Container */}
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              {articleData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
                >
                  <ArticlesCard
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    tags={item.tags}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View All Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:hidden flex items-center justify-center gap-3 w-full mt-5 py-3 px-6 bg-linear-to-r from-orange-500 to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-lg border-2 border-orange-500/50 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 "
          >
            View All Articles
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Scroll Indicator (Mobile) */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
            {articleData.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-700" />
            ))}
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
