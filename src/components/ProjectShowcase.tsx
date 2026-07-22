import { useState } from "react";
import { projectImage } from "../lib/images";

interface ProjectShowcaseProps {
  name: string;
  imageKeys: string[];
}

export default function ProjectShowcase({ name, imageKeys }: ProjectShowcaseProps) {
  const resolved = imageKeys.map(projectImage);
  const multi = resolved.length > 1;
  const [index, setIndex] = useState(0);

  const go = (e: React.MouseEvent | React.KeyboardEvent, dir: 1 | -1) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + dir + resolved.length) % resolved.length);
  };

  return (
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-black">
        {resolved.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={name}
            loading="lazy"
            className={
              "absolute inset-0 w-full h-full object-cover" +
              (multi
                ? " transition-opacity duration-500" + (i === index ? " opacity-100" : " opacity-0")
                : i % 2 === 0
                  ? " animate-kenburns-a"
                  : " animate-kenburns-b")
            }
          />
        ))}

        {multi && (
          <>
            <div
              role="button"
              tabIndex={0}
              aria-label="Předchozí fotka"
              onClick={(e) => go(e, -1)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(e, -1)}
              className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-start pl-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity cursor-pointer outline-none"
            >
              <span className="w-8 h-8 rounded-full bg-black/40 text-[#CD1D14] flex items-center justify-center text-lg leading-none">
                ‹
              </span>
            </div>
            <div
              role="button"
              tabIndex={0}
              aria-label="Další fotka"
              onClick={(e) => go(e, 1)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(e, 1)}
              className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-end pr-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity cursor-pointer outline-none"
            >
              <span className="w-8 h-8 rounded-full bg-black/40 text-[#CD1D14] flex items-center justify-center text-lg leading-none">
                ›
              </span>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
              {resolved.map((_, i) => (
                <span
                  key={i}
                  className={"w-1.5 h-1.5 rounded-full transition-colors " + (i === index ? "bg-white" : "bg-white/40")}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="bg-white p-4">
        <h3 className="text-[#3a3a3a] font-semibold text-sm sm:text-base">{name}</h3>
      </div>
    </div>
  );
}
