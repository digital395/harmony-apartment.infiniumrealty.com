"use client";

import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import { isLeadValid } from "@/utils/LeadVerification";
import Popup from "@/components/popup";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const mediaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HarmonyFilmSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Lead popup state
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);

  const brochureUrl = "/brochure.pdf";

  const downloadBrochure = () => {
    const link = document.createElement("a");

    link.href = brochureUrl;
    link.download = "my-project-brochure.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadBrochure = () => {
    // Already verified within 24 hours
    if (isLeadValid()) {
      downloadBrochure();
      return;
    }

    // Not verified → open lead popup
    setIsLeadPopupOpen(true);
  };

  const handleLeadSuccess = () => {
    setIsLeadPopupOpen(false);

    // Your popup should already call saveLeadVerification()
    // after the /api/lead request succeeds.
    downloadBrochure();
  };

  return (
    <section className="w-full overflow-hidden bg-[#e1dfd9]">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          variants={fadeUpVariants}
          className="
            flex
            w-full
            flex-col
            items-center
            px-5
            pb-4.5
            pt-9
            text-center
            sm:px-7.5
            sm:pb-5.5
            sm:pt-10
            lg:pb-5.5
            lg:pt-9.25
          "
        >
          <motion.div
            variants={fadeUpVariants}
            className="w-fit"
          >
            <p
              className="
                m-0
                text-[10px]
                font-bold
                leading-3.5
                text-[#007c85]
                sm:text-[11px]
                sm:leading-3.75
              "
            >
              See Harmony before you visit
            </p>

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 205,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                mx-auto
                mt-1.75
                h-px
                bg-[#007c85]
              "
            />
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="
              m-0
              mt-3
              max-w-225
              text-[16px]
              font-bold
              leading-5.75
              text-[#251500]
              sm:mt-3.5
              sm:text-[17px]
              sm:leading-6
              lg:text-[17px]
            "
          >
            A short film of the community, the homes and the open spaces.
          </motion.h2>
        </motion.div>

        {/* =========================================================
            CENTERED VIDEO / HERO
        ========================================================== */}

{/* =========================================================
    CENTERED YOUTUBE VIDEO
========================================================= */}

<div className="w-full px-3 sm:px-4">
  <div className="mx-auto w-full max-w-350">
    <motion.div
      variants={mediaVariants}
      className="
        relative
        aspect-video
        w-full
        overflow-hidden
        rounded-xl
        bg-[#f3f3f3]
        shadow-sm
        sm:rounded-[18px]
        lg:aspect-16/6.5
        lg:rounded-[20px]
      "
    >
      <iframe
  src="https://www.youtube.com/embed/hOExZWGLkLU?autoplay=1&mute=1&rel=0&playsinline=1"
  title="Harmony Film"
  className="
    absolute
    inset-0
    h-full
    w-full
    border-0
  "
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
/>
    </motion.div>
  </div>
</div>

        {/* =========================================================
            CTA
        ========================================================== */}

        <motion.div
          variants={buttonVariants}
          className="
            flex
            w-full
            items-center
            justify-center
            px-5
            py-5.25
            sm:py-6.25
            lg:py-5.25
          "
        >
          <motion.button
            type="button"
            onClick={handleDownloadBrochure}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              flex
              h-9.25
              items-center
              justify-center
              rounded-[7px]
              bg-[#007c85]
              px-3.25
              text-[10px]
              font-semibold
              leading-none
              text-white
              transition-colors
              duration-200
              hover:bg-[#006d74]
              focus:outline-none
              focus:ring-2
              focus:ring-[#007c85]
              focus:ring-offset-2
              focus:ring-offset-[#e1dfd9]
            "
          >
            DOWNLOAD BROCHURE
          </motion.button>
        </motion.div>
      </motion.div>

      {/* =========================================================
          LEAD POPUP
      ========================================================== */}

      <Popup
  isOpen={isLeadPopupOpen}
  onClose={() => setIsLeadPopupOpen(false)}
  title="Download Brochure"
  download={true}
/>
    </section>
  );
}
