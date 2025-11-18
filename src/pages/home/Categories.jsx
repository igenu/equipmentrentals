import { useState } from "react";
import machine from "../../assets/machine.png";
import videoThumb from "../../assets/video-thumb.jpg"; 
const data = [
  {
    title: "Forklifts",
    bg: videoThumb,
    thumb: machine,
    desc: "10-13 ft. Scissor Lift, Electric, Narrow."
  },
  {
    title: "Loaders",
    bg: videoThumb,
    thumb: machine,
    desc: "10-13 ft. Scissor Lift, Electric, Narrow."
  },
  {
    title: "Work Platforms",
    bg: videoThumb,
    thumb: machine,
    desc: "10-13 ft. Scissor Lift, Electric, Narrow."
  },
  {
    title: "Mixers",
    bg: videoThumb,
    thumb: machine,
    desc: "10-13 ft. Scissor Lift, Electric, Narrow."
  },
  {
    title: "Mini Excavators",
    bg: videoThumb,
    thumb: machine,
    desc: "10-13 ft. Scissor Lift, Electric, Narrow."
  },
  {
    title: "One Person Lift",
    bg: videoThumb,
    thumb: machine,
    desc: "10-13 ft. Scissor Lift, Electric, Narrow."
  }
];

export default function ProjectSlider() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i > 0 ? i - 1 : i));
  const next = () => setActive((i) => (i < data.length - 1 ? i + 1 : i));

  return (
    <section className="w-full bg-gray-700">
      <div className=" max-w-[1200px] mx-auto px-5 pt-16 pb-8 ">
      {/* HEADER */}
      <div className="flex justify-between items-end gap-6 mb-10 ">
        <h2 className="text-xl md:text-2xl text-white">All Categories</h2>

        <div className="flex gap-2">
          <button
            disabled={active === 0}
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/20 disabled:opacity-30 flex items-center justify-center hover:bg-orange-500 transition"
          >
            ‹
          </button>

          <button
            disabled={active === data.length - 1}
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/20 disabled:opacity-30 flex items-center justify-center hover:bg-orange-500 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex gap-6">
          {data.map((item, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`
                  relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500
                  h-[26rem] bg-white
                  ${
                    isActive
                      ? "basis-[38rem] -translate-y-1 shadow-2xl"
                      : "basis-[6rem]"
                  }
                `}
              >
                {/* Background */}
                <img
                  src={item.bg}
                  className={`
                    absolute inset-0 w-full h-full object-cover transition-all duration-500
                    ${isActive ? "brightness-90 scale-105" : "brightness-75"}
                  `}
                />

                {/* CONTENT */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center gap-3 p-4 bg-gradient-to-b from-transparent to-black/80
                    transition-all duration-500
                    ${
                      isActive
                        ? "flex-row"
                        : "flex-col justify-center items-center"
                    }
                  `}
                >
                  {/* TITLE */}
                  <h3
                    className={`
                      font-bold text-white transition-all 
                      ${
                        isActive
                          ? "text-3xl rotate-0 hidden"
                          : "text-xl writing-mode-vertical-rl rotate-270 whitespace-nowrap"
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  {/* EXTRA CONTENT (only when active) */}
                  {isActive && (
                    <div className="flex flex-col gap-3 items-start">
                      <img
                        src={item.thumb}
                        className="w-full h-64 bg-white rounded-md object-cover shadow-lg"
                      />
                      <p className="text-gray-300 max-w-sm text-[0.95rem]">
                        {item.desc}
                      </p>

                      <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold text-sm hover:bg-orange-600 transition">
                        View More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
