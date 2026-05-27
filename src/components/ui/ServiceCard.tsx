import {
  BarChart3,
  Bot,
  Code2,
  GitBranch,
  ShoppingCart,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  items: string[];
  icon?: keyof typeof iconMap;
  className?: string;
};

const iconMap = {
  process: GitBranch,
  data: BarChart3,
  commerce: ShoppingCart,
  software: Code2,
  strategy: Target,
  automation: Bot,
};

export function ServiceCard({
  title,
  items,
  icon = "process",
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <article
      className={cn(
        "surface-card rounded-xl p-6 transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/40",
        className,
      )}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#009A9A]/10 text-[#009A9A]">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-[#0D1B3D] dark:text-[#F8FAFC]">
        {title}
      </h3>
      <ul className="mt-5 grid gap-2.5 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1] sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#009A9A]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
