import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
}

const Logo = ({ className, title, subtitle }: Props) => {
  return (
    <div className="text-2xl group">
      <Link href={"/"}>
        <h2
          className={cn(
            "font-semibold tracking-wide hover:text-hoverColor hoverEffect",
            className
          )}
        >
          {title}{" "}
          <span className="text-lightSky group-hover:text-white hoverEffect">
            {subtitle}
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
