import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectImage } from "../lib/images";

interface ProjectShowcaseProps {
  name: string;
  slug: string;
  imageKeys: string[];
}

export default function ProjectShowcase({ name, slug, imageKeys }: ProjectShowcaseProps) {
  const resolved = imageKeys.map(projectImage);
  const multi = resolved.length > 1;
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Swipe support: mobile has no :hover, so the arrow buttons alone aren't
  // enough - a drag gesture on the photo itself is what people actually try.
  // didSwipe suppresses the tap-to-open-project click that follows a drag.
  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + resolved.length) % resolved.length);

  const onArrowClick = (e: React.MouseEvent | React.KeyboardEvent, dir: 1 | -1) => {
    e.preventDefault();
    e.stopPropagation();
    go(dir);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!multi) return;
    touchStartX.current = e.touches[0].clientX;
    didSwipe.current = false;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    if (Math.abs(e.touches[0].clientX - touchStartX.current) > 10) {
      didSwipe.current = true;
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 35) {
      go(dx < 0 ? 1 : -1);
    }
  };

  const openProject = () => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    navigate(`/projekty/${slug}`);
  };

  return (
    // A plain div (not <Link>) navigating via onClick avoids nesting an <a>
    // around the arrow buttons - mobile Safari's tap hit-testing on nested
    // interactive elements inside an <a> is unreliable and was swallowing
    // the arrow taps.
    <div
      className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      role="link"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/projekty/${slug}`)}
    >
      <div
        className="relative aspect-square overflow-hidden bg-black"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
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
            <button
              type="button"
              aria-label="Předchozí fotka"
              onClick={(e) => onArrowClick(e, -1)}
              className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-start pl-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100 transition-opacity outline-none"
            >
              <span className="w-8 h-8 rounded-full bg-black/40 text-[#CD1D14] flex items-center justify-center text-lg leading-none">
                ‹
              </span>
            </button>
            <button
              type="button"
              aria-label="Další fotka"
              onClick={(e) => onArrowClick(e, 1)}
              className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-end pr-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100 transition-opacity outline-none"
            >
              <span className="w-8 h-8 rounded-full bg-black/40 text-[#CD1D14] flex items-center justify-center text-lg leading-none">
                ›
              </span>
            </button>
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
