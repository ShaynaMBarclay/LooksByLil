
import { motion } from "framer-motion";
import "./styles/Portfolio.css";



const portfolioImages = [
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747941026/IMG_8403_sfp6wf.jpg",
 

"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938366/_looksby_lil_9_y3vacg.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938367/_looksby_lil_7_ljhqzl.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938360/_looksby_lil_28_k58ncp.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938368/_looksby_lil_3_ixfsl1.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938364/_looksby_lil_13_sdw5wf.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938361/_looksby_lil_25_opcysn.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938363/_looksby_lil_19_wsrb88.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938360/_looksby_lil_27_tqedsc.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938361/_looksby_lil_23_nmsftj.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938361/_looksby_lil_24_xomwqw.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938369/_looksby_lil_1_yk83rp.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938362/_looksby_lil_20_liobte.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938364/_looksby_lil_16_qzwpzb.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938362/_looksby_lil_22_coxvz1.png",
 "https://res.cloudinary.com/dizfde4uy/image/upload/v1747938369/_looksby_lil_1_bfxuxl.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938362/_looksby_lil_21_qxpqna.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938363/_looksby_lil_17_vxkly8.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938363/_looksby_lil_18_ms8kvj.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938369/_looksby_lil_vcsvkj.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938364/_looksby_lil_15_xkzcnq.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938364/_looksby_lil_14_yspevd.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938365/_looksby_lil_12_mzvesy.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938365/_looksby_lil_11_du1ioq.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938365/_looksby_lil_10_lo3slz.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938366/_looksby_lil_8_tht37d.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938367/_looksby_lil_6_ozecco.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938367/_looksby_lil_4_pfjoaa.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938368/_looksby_lil_5_fjkah2.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938368/_looksby_lil_2_qycfgb.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1747938369/_looksby_lil_pb2q9h.png",


  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747932474/cards_l7omn7.jpg",
];


const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const Portfolio = () => {
  return (
    <div className="portfolio">
      <motion.div
        className="portfolio-grid"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {portfolioImages.map((src, i) => (
          <motion.div key={i} variants={imageVariants}>
            <img
              src={src}
              alt={`Portfolio image ${i + 1}`}
              className="portfolio-image"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;