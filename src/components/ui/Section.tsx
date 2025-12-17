import clsx from "clsx";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function Section({ id, className, children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-20 md:py-32 px-6 md:px-12 relative overflow-hidden",
        dark ? "bg-sumi-950" : "bg-sumi-900",
        className
      )}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
