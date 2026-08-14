import BrandLogo from "@/components/BrandLogo";
import { cn } from "@/lib/utils";

const TechTag = ({ label, className }: { label: string; className?: string }) => (
  <span className={cn("tech-tag inline-flex items-center gap-1.5", className)}>
    <BrandLogo label={label} />
    {label}
  </span>
);

export default TechTag;
