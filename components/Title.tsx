import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: Props) => {
  return (
    <h2 className={cn("text-xl text-lightSky font-bold mb-4", className)}>
      {children}
    </h2>
  );
};

export default Title;
