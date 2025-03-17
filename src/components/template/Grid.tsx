import mergeClasses from "@/Utils/mergeClasses";

export interface GridProps {
  children: React.ReactNode;
  className?: string;
  col?: boolean;
  numCol?: number;
  numRow?: number;
}

export const Grid = ({
  children,
  className,
  col,
  numCol,
  numRow = 1,
}: GridProps) => {
  return (
    <div
      className={mergeClasses(
        "grid",
        `grid-cols-${numCol}`,
        `grid-rows-${numRow}`
      )}
    >
      {children}
    </div>
  );
};
