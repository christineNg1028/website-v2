import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const HoverTextLink: FC<{ children: ReactNode; to: string }> = ({
  children,
  to,
}) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit underline underline-offset-8 decoration-dotted decoration-transparent hover:decoration-current transition duration-200 ease-in-out"
    >
      {children}
    </a>
  );
};

export const HoverImageLink: FC<{
  children: ReactNode;
  to: string;
}> = ({ children, to }) => {
  const { darkMode } = useTheme();

  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-block w-fit"
    >
      <div className="inline-block">
        {children}
        <div className="h-2" />
        <div
          className={`
              h-0.5 
              border-t-2 
              border-dotted 
              transition-opacity duration-200 ease-in-out 
              opacity-0 
              group-hover:opacity-100 
              ${darkMode ? "border-white" : "border-black"}
            `}
        />
      </div>
    </a>
  );
};
