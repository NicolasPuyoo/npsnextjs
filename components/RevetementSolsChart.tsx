"use client";

import { motion } from "framer-motion";

interface ChartDataItem {
  product: string;
  dB: number;
  floorType: string;
}

const chartData: ChartDataItem[] = [
  { product: "standard 2 mm", dB: 19, floorType: "13 mm parquetry" },
  { product: "standard 2 mm", dB: 20, floorType: "8 mm laminate" },
  { product: "standard 2 mm", dB: 29, floorType: "carpet" },
  { product: "standard 2 mm", dB: 18, floorType: "9 mm tiles" },
  { product: "black uni 2 mm", dB: 19, floorType: "10 mm parquetry" },
  { product: "black uni 2 mm", dB: 17, floorType: "8 mm laminate" },
  { product: "black uni 2 mm", dB: 25, floorType: "carpet" },
  { product: "black uni 3 mm", dB: 20, floorType: "3 mm vinyl" },
];

const RevetementSolsChart = () => {
  const maxdB = 30;

  return (
    <section className="py-16 bg-foreground/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Performances acoustiques ΔLw
        </h2>
        
        <div className="bg-foreground rounded-2xl p-8 border border-gray-600">
          <div className="space-y-4">
            {chartData.map((item, index) => (
              <motion.div
                key={`${item.product}-${item.floorType}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                {/* Product name */}
                <div className="w-28 md:w-32 text-right shrink-0">
                  <span className="text-white font-medium text-xs md:text-sm">
                    {item.product}
                  </span>
                </div>
                
                {/* Bar */}
                <div className="flex-1 relative flex items-center gap-4">
                  <motion.div
                    className="h-8 bg-primary rounded-sm flex items-center justify-center shrink-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.dB / maxdB) * 100}%` }}
                    transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                    viewport={{ once: true }}
                    style={{ minWidth: "60px" }}
                  >
                    <span className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">
                      jusqu'à {item.dB} dB
                    </span>
                  </motion.div>
                  <span className="text-gray-300 text-xs md:text-sm whitespace-nowrap">
                    {item.floorType}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* X-axis */}
          <div className="mt-6 ml-[7rem] md:ml-[8.5rem] border-t border-gray-500 pt-2">
            <div className="flex justify-between text-gray-400 text-xs md:text-sm">
              <span>0</span>
              <span>5 dB</span>
              <span>10 dB</span>
              <span>15 dB</span>
              <span>20 dB</span>
              <span>25 dB</span>
              <span>30 dB</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-4 ml-[7rem] md:ml-[8.5rem] flex items-center justify-end">
            <span className="text-gray-400 text-sm italic">ΔL<sub>w</sub></span>
            <svg className="w-6 h-4 ml-2" viewBox="0 0 24 16">
              <line x1="0" y1="8" x2="20" y2="8" stroke="#9ca3af" strokeWidth="1.5" />
              <polygon points="20,4 24,8 20,12" fill="#9ca3af" />
            </svg>
          </div>
        </div>
        
        {/* Disclaimer */}
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          Les valeurs de réduction sonore présentées sont nos valeurs maximales testées et dépendent 
          du matériau, du type de sol exact, des conditions de la pièce et du processus d'installation.
        </p>
      </div>
    </section>
  );
};

export default RevetementSolsChart;
