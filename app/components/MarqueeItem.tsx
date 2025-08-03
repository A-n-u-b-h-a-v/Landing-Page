"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex overflow-hidden w-full MyGradient">
      {/* Duplicate divs to make seamless looping */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-20"
        >
          {images.map((src, index) => (
            <div key={`${i}-${index}`} className="h-40 w-56 relative">
              <Image
                src={src}
                alt={`marquee-${index}`}
                fill
                className="object-contain "
              />
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MarqueeItem;
