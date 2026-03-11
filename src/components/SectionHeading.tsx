interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: Props) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className={`text-3xl sm:text-4xl font-display font-bold mb-4 ${light ? "text-gold-light" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-gold-light/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1 w-16 rounded-full bg-gold ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
