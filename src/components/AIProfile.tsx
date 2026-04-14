import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 overflow-hidden text-white">
      
      {/* 🌌 Animated Space Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient"></div>

      {/* ✨ Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#915EFF30,transparent)]"></div>

      {/* ⭐ Stars */}
      <div className="stars"></div>

      {/* 💎 Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex justify-center px-6"
      >
        <motion.div
          whileHover={{ rotateX: 10, rotateY: -10, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="max-w-3xl w-full p-10 rounded-3xl 
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-[0_0_80px_rgba(145,94,255,0.4)] text-center"
        >
          {/* 👤 Profile */}
          <img
            src="real ai iamge.jpeg"
            alt="Sanjana"
            className="w-28 h-28 mx-auto rounded-full border-4 border-[#915EFF] shadow-lg"
          />

          {/* 🧠 Name */}
          <h2 className="text-3xl font-bold mt-6">
            Hi, I'm <span className="text-[#915EFF]">Sanjana</span>
          </h2>

          {/* 💼 Role */}
          <p className="text-gray-300 mt-2">
            AI Engineer • FastAPI Developer • Backend Developer
          </p>

          {/* 📍 */}
          <p className="text-gray-400 text-sm mt-1">📍 #AKTU</p>

          {/* 📖 About */}
          <p className="mt-6 text-gray-300 leading-relaxed">
            I build intelligent AI systems using FastAPI and modern backend technologies.
            I focus on multi-agent architectures, APIs, and real-world scalable solutions.
          </p>

          {/* 🔗 Buttons */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">

            {/* GitHub */}
            <a
              href="https://github.com/Sanjana0024"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-xl 
              bg-[#915EFF] hover:scale-105 transition"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-4 h-4" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sanjana-jaiswal-1898a8335/"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-xl 
              border border-white hover:bg-white hover:text-black transition"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-4 h-4" />
              LinkedIn
            </a>

            {/* Resume */}
            <a
              href="sanjana_s_resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-xl 
              bg-gradient-to-r from-[#915EFF] to-[#00C9FF] hover:scale-105 transition"
            >
              ⬇ Resume
            </a>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;