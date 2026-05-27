export type ProductCardProps = {
  name: string;
  status: string;
  category: string;
  description: string;
  href?: string;
  variant?: "default" | "featured";
};

function getActionLabel(status: string, href?: string) {
  if (href) {
    return "Ver demo";
  }

  if (status === "En desarrollo") {
    return "Ver avance";
  }

  return "Próximamente";
}

export function ProductCard({
  name,
  status,
  category,
  description,
  href,
  variant = "default",
}: ProductCardProps) {
  const actionLabel = getActionLabel(status, href);

  return (
    <article
      className={`flex h-full flex-col rounded-xl border p-5 transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/40 ${
        variant === "featured"
          ? "border-[#009A9A]/25 bg-[#009A9A]/10 dark:border-[#22C7C7]/25 dark:bg-[#22C7C7]/10"
          : "border-[#0D1B3D]/10 bg-[#F8FAFC] dark:border-white/10 dark:bg-[#071225]"
      }`}
    >
      <div className="mb-5 grid gap-3">
        <span className="w-fit rounded-full border border-[#009A9A]/20 bg-white px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#007A7A] dark:border-[#22C7C7]/25 dark:bg-[#0A162E] dark:text-[#5EEAD4]">
          {status}
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#475467] dark:text-[#CBD5E1]">
          {category}
        </span>
        <h3 className="text-lg font-black leading-tight text-[#0D1B3D] dark:text-[#F8FAFC]">
          {name}
        </h3>
      </div>
      <p className="flex-1 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
        {description}
      </p>
      {href ? (
        <a
          href={href}
          className="mt-6 inline-flex min-h-10 w-fit items-center justify-center rounded-md bg-[#0D1B3D] px-4 text-sm font-semibold !text-white transition hover:bg-[#009A9A] hover:!text-white"
        >
          {actionLabel}
        </a>
      ) : (
        <span className="mt-6 inline-flex min-h-10 w-fit items-center justify-center rounded-md border border-[#0D1B3D]/10 bg-white px-4 text-sm font-semibold text-[#475467] dark:border-white/10 dark:bg-[#0A162E] dark:text-[#CBD5E1]">
          {actionLabel}
        </span>
      )}
    </article>
  );
}
