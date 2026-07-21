import Reveal from "@/components/Reveal";

export default function SectionHeading({
  kicker,
  title,
  align = "center",
}: {
  kicker: string;
  title: string;
  align?: "center" | "start";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-start"}>
      <p className="section-kicker mb-3 text-xs font-semibold uppercase text-accent">{kicker}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
