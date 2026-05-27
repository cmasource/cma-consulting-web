type PortfolioCardProps = {
  title: string;
  type?: string;
  status?: string;
  description: string;
  tags: string[];
  action?: string;
  href?: string;
};

export function PortfolioCard({
  title,
  type,
  status,
  description,
  tags,
  action,
  href,
}: PortfolioCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/40 hover:bg-white hover:shadow-xl hover:shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40 dark:hover:bg-[#0A162E] dark:hover:shadow-black/30">
      <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-[#009A9A]/15" />
      <div className="relative">
        <div className="mb-5 flex flex-wrap gap-2">
          {status ? (
            <span className="rounded-full border border-[#009A9A]/20 bg-white px-3 py-1 text-xs font-bold text-[#005F5F] dark:border-[#22C7C7]/25 dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
              {status}
            </span>
          ) : null}
          {type ? (
            <span className="rounded-full border border-[#0D1B3D]/10 bg-white px-3 py-1 text-xs font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]">
              {type}
            </span>
          ) : null}
        </div>
        <h3 className="text-2xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">{title}</h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
          {description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#0D1B3D]/10 bg-white px-3 py-1 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
          >
            {tag}
          </span>
        ))}
      </div>
      {action && href ? (
        <a
          href={href}
          className="mt-6 inline-flex min-h-10 w-fit items-center justify-center rounded-md bg-[#0D1B3D] px-4 text-sm font-semibold text-white transition hover:bg-[#009A9A]"
        >
          {action}
        </a>
      ) : null}
    </article>
  );
}
