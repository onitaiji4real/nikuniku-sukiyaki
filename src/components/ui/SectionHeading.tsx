import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, center, light }: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col mb-16",
        center ? "items-center text-center" : "items-start"
      )}
    >
      <h2
        className={clsx(
          "text-4xl md:text-5xl font-serif font-bold tracking-widest leading-tight",
          light ? "text-sumi-900" : "text-gold-500"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-sm md:text-base tracking-[0.2em] font-light uppercase opacity-80",
            light ? "text-sumi-700" : "text-sumi-200"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className={clsx("w-24 h-[1px] mt-6", light ? "bg-sumi-900" : "bg-gold-500")} />
    </div>
  );
}
