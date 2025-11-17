import { useState } from "react";
import machine from "../../assets/machine.png";


export const categories = [
  {
    name: "Scissor Lift",
    image: "/src/assets/machine.png",
  },
  {
    name: "Rough Terrain Scissor Lift",
    image: "/src/assets/machine.png",
  },
  {
    name: "Manlift",
    image: "/src/assets/machine.png",
  },
  {
    name: "Forklift",
    image: "/src/assets/machine.png",
  },
  {
    name: "Excavator",
    image: "/src/assets/machine.png",
  },
  {
    name: "Earthmoving Equipment",
    image: "/src/assets/machine.png",
  },
  {
    name: "Compaction Equipment",
    image: "/src/assets/machine.png",
  },
  {
    name: "Boom Lift",
    image: "/src/assets/machine.png",
  },
];

export default function Categories() {
  const [active, setActive] = useState("Boom Lift"); // Default selected item

  return (
    <div className="w-full py-4">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-lg font-extrabold tracking-wide">
          CATEGORIES
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto px-4">
        {categories.map((cat) => {
          const isActive = active === cat.name;

          return (
            <div
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`cursor-pointer rounded flex flex-col items-center 
              transition-all duration-300 p-6 bg-white shadow-sm hover:shadow-md
              ${
                isActive
                  ? ""
                  : ""
              }`}
            >
              <img src={cat.image} alt={cat.name} className="h-32 object-contain mb-4" />

              <p
                className={`text-center font-medium mt-auto ${
                  isActive ? "text-yellow-600 font-semibold" : "text-gray-700"
                }`}
              >
                {cat.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
