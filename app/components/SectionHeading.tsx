type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

/** Shared eyebrow + heading block. The eyebrow uses the mono "data" voice. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow data-label">{eyebrow}</span>
      <h2
        className={`font-display mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-white/70" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
