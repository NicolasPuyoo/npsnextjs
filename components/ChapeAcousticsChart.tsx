"use client";

import { motion } from "framer-motion";

interface ChapeProduct {
  name: string;
  dB: number;
}

const chapeProducts: ChapeProduct[] = [
  { name: "wave 3D 17/8", dB: 39 },
  { name: "3D 17/8", dB: 32 },
  { name: "wave 3D 8/4", dB: 30 },
  { name: "estra 3D", dB: 26 },
  { name: "estra", dB: 21 },
];

const ChapeAcousticsChart = () => {
  const maxdB = 40;

  return (
    <section className="py-16 bg-[#4a4a4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Performances acoustiques ΔLw
        </h2>
        
        <div className="bg-[#3a3a3a] rounded-2xl p-8 border border-gray-600">
          <div className="space-y-6">
            {chapeProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                {/* Product name */}
                <div className="w-32 text-right">
                  <span className="text-white font-medium text-sm md:text-base">
                    {product.name}
                  </span>
                </div>
                
                {/* Bar */}
                <div className="flex-1 relative">
                  <motion.div
                    className="h-10 bg-[#9b6b8a] rounded-sm flex items-center justify-center"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(product.dB / maxdB) * 100}%` }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                      jusqu'à {product.dB} dB
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* X-axis */}
          <div className="mt-6 ml-[8.5rem] border-t border-gray-500 pt-2">
            <div className="flex justify-between text-gray-400 text-xs md:text-sm">
              <span>0</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
              <span>25</span>
              <span>30</span>
              <span>35</span>
              <span>40</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-4 ml-[8.5rem] flex items-center justify-end">
            <span className="text-gray-400 text-sm italic">ΔL<sub>w</sub></span>
            <svg className="w-6 h-4 ml-2" viewBox="0 0 24 16">
              <line x1="0" y1="8" x2="20" y2="8" stroke="#9ca3af" strokeWidth="1.5" />
              <polygon points="20,4 24,8 20,12" fill="#9ca3af" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapeAcousticsChart;
