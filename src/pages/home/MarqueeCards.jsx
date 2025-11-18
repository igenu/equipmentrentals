import { useEffect, useRef, useState } from "react";

const cards = [
  {
    percent: "98%",
    desc: "procedure compliance after adopting AI design checklists",
    name: "Conner Doyle",
    title: "VP, Division Operations",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    percent: "73%",
    desc: "faster task completion with AI-assisted UX flows",
    name: "Maya Patel",
    title: "Head of Product Design",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    percent: "64%",
    desc: "reduction in time-to-first-action after UX copy rewrites",
    name: "Ece Yılmaz",
    title: "UX Research Lead",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
];

export default function MarqueeCards() {
  const trackRef = useRef(null);
  const marqueeRef = useRef(null);
  const observerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const track = trackRef.current;

    // Duplicate content for infinite scroll
    track.innerHTML += track.innerHTML;

    const SPEED = 50; // px/sec

    const setDuration = () => {
      const totalWidth = track.scrollWidth / 2;
      const duration = totalWidth / SPEED;
      track.style.setProperty("--duration", `${duration}s`);
    };

    setDuration();
    window.addEventListener("resize", setDuration);

    // AUTO PAUSE WHEN NOT VISIBLE
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          track.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
        });
      },
      { threshold: 0.2 }
    );

    observerRef.current.observe(marqueeRef.current);

    return () => {
      window.removeEventListener("resize", setDuration);
      observerRef.current.disconnect();
    };
  }, []);

  // DRAG EVENTS
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = trackRef.current.offsetLeft;
    trackRef.current.style.animationPlayState = "paused";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.pageX - startX.current;
    trackRef.current.style.transform = `translateX(${dx}px)`;
  };

  const endDrag = () => {
    isDragging.current = false;
    trackRef.current.style.transform = "";
    trackRef.current.style.animationPlayState = "running";
  };

  // TOUCH EVENTS
  const handleTouchStart = (e) => handleMouseDown({ pageX: e.touches[0].pageX });
  const handleTouchMove = (e) => handleMouseMove({ pageX: e.touches[0].pageX });
  const handleTouchEnd = () => endDrag();

  return (
    <div
      ref={marqueeRef}
      className="min-h-screen grid place-items-center p-8
         bg-[radial-gradient(circle_at_20%_30%,#FFD2B5_0%,#FFF6F0_50%,#E8EAF6_100%)]"
    >
      <div className="w-full max-w-[1600px] overflow-hidden p-2 relative">

        {/* TRACK */}
        <div
          ref={trackRef}
          className={`flex gap-6 w-max animate-marquee ${reverse ? "animate-[marquee_var(--duration)_linear_reverse_infinite]" : ""}`}
          onMouseEnter={() => (trackRef.current.style.animationPlayState = "paused")}
          onMouseLeave={() => (trackRef.current.style.animationPlayState = "running")}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={endDrag}
          onMouseLeaveCapture={endDrag}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseOver={() => setReverse(true)}     // Reverse direction on hover
          onMouseOut={() => setReverse(false)}     // Restore direction
        >
          {cards.map((c, i) => (
            <Card key={i} data={c} index={i} setActiveIndex={setActiveIndex} />
          ))}
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center mt-6 gap-2">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition
                ${activeIndex === i ? "bg-blue-600 scale-125" : "bg-blue-300"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ data, index, setActiveIndex }) {
  return (
    <article
      onMouseEnter={() => setActiveIndex(index)}
      className="
        flex flex-col justify-between items-start 
        gap-16 animate-fadeIn
        w-[clamp(260px,28vw,390px)]
        p-8 rounded-2xl border border-white/80 
        bg-white/40 backdrop-blur-md shadow-lg
      "
    >
      {/* Logo */}
      <div className="text-black">
        <svg viewBox="0 0 64 64" width="44" height="44" fill="currentColor">
          <path d="M56 16c-9 8-20 10-32 6-6-2-11-1-16 3 3-10 10-16 20-18 8-2 16 1 22 9zM8 36c7-6 16-8 26-5 7 2 13 1 18-3-3 9-10 15-19 17-9 2-17-1-25-9z" />
        </svg>
      </div>

      {/* Stats */}
      <div>
        <div className="font-extrabold leading-none text-[clamp(40px,7vw,64px)]">
          {data.percent}
        </div>
        <p className="text-black/75 text-[clamp(14px,2.4vw,18px)] leading-[1.35] mt-2">
          {data.desc}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="font-semibold text-[16px]">{data.name}</div>
          <div className="text-[13px] text-black/60 mt-1">{data.title}</div>
        </div>

        {/* Avatar */}
        <div className="
          w-[52px] h-[52px] p-[3px] rounded-full grid place-items-center
          bg-[conic-gradient(#63f_0_25%,#0fd_25%_50%,#ff0_50%_75%,#f0f_75%_100%)]
          shadow-lg
        ">
          <img src={data.avatar} className="rounded-full w-full h-full" />
        </div>
      </div>
    </article>
  );
}
