"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Popup from "@/components/popup";
import { isLeadValid } from "@/utils/LeadVerification";

const stats = [
  {
    value: "30+",
    label: "Lifestyle amenities",
  },
  {
    value: "90",
    label: "Exclusive residences",
  },
  {
    value: "3.22",
    label: "Acres of community",
  },
  {
    value: "55",
    label: "Apartments",
  },
];

const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function AboutHarmony() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBrochureClick = () => {
  if (isLeadValid()) {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Harmony-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  setIsPopupOpen(true);
};
  return (
    <section className="w-full bg-[#e1dfd9]" id="about">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-10.5
          sm:px-10
          sm:py-12.5
          lg:px-12.5
          lg:py-10.75
        "
      >
        {/* ================= TITLE ================= */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: easeInOut,
          }}
        >
          <motion.p
            className="
              m-0
              text-[11px]
              font-semibold
              leading-3.5
              text-[#03757d]
              sm:text-[12px]
            "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
          >
            About Infinium Harmony Coimbatore
          </motion.p>

          {/* Small divider */}
          <motion.div
            className="
              mt-1.75
              h-px
              bg-[#03757d]
            "
            initial={{ width: 0 }}
            whileInView={{ width: 42 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: easeInOut,
            }}
          />

          {/* ================= DESCRIPTION ================= */}
          <motion.div
            className="
              mt-2.5
              max-w-225
              text-[15px]
              font-normal
              leading-[1.65]
              text-[#221100]
              sm:text-[16px]
              sm:leading-[1.75]
              lg:text-[16px]
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: easeInOut,
            }}
          >
            {/* <p className="m-0">
              Discover an elevated lifestyle at Infinium Harmony, a thoughtfully
              planned residential apartments development in Coimbatore.
            </p> */}

            <p className="m-0 mt-0.75">
               Discover an elevated lifestyle at Infinium Harmony, a thoughtfully
              planned residential apartments development in Coimbatore.
              Designed for those who value privacy, comfort and independent
              living, the project offers beautifully planned apartments that
              bring together spacious interiors, contemporary architecture and a
              peaceful residential environment.
            </p>
          </motion.div>

          {/* ================= BOOKING MESSAGE ================= */}
          <motion.p
            className="
              mt-8
              max-w-155
              text-center
              text-[15px]
              font-bold
              leading-[1.55]
              text-[#221100]
              sm:text-[16px]
              lg:mt-7.75
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: easeInOut,
            }}
          >
            Bookings are now open! Explore a home where comfort,
            <br className="hidden sm:block" />
            convenience and harmonious living come together.
          </motion.p>

          {/* ================= CTA ================= */}
          <motion.button
            type="button"
            onClick={handleBrochureClick}
            className="
              mt-5.25
              flex
              h-9.5
              items-center
              justify-center
              rounded-[7px]
              bg-[#03757d]
              px-3.25
              text-[10px]
              font-semibold
              leading-none
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-[#03757d]
              focus:ring-offset-2
              focus:ring-offset-[#e1dfd9]
              sm:h-9.5
              sm:px-3.25
            "
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: easeInOut,
            }}
            whileHover={{
              scale: 1.04,
              backgroundColor: "#02656c",
            }}
            whileTap={{ scale: 0.97 }}
          >
            DOWNLOAD BROCHURE
          </motion.button>
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          className="
            mx-auto
            mt-7.75
            grid
            w-full
            max-w-195
            grid-cols-2
            gap-y-6
            sm:grid-cols-4
            sm:gap-y-0
            lg:mt-7.5
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: easeInOut,
                  },
                },
              }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="
                  text-[29px]
                  font-bold
                  leading-8
                  tracking-[-0.5px]
                  text-[#03757d]
                  sm:text-[30px]
                  sm:leading-8.25
                "
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut,
                }}
              >
                {stat.value}
              </motion.div>

              <div
                className="
                  mt-0.75
                  whitespace-nowrap
                  text-[14px]
                  font-normal
                  leading-4.5
                  text-[#221100]
                  sm:text-[15px]
                  sm:leading-4.75
                "
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= POPUP ================= */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Download Brochure"
        download={true}
      />
    </section>
  );
}