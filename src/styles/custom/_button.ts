export const btn =
  "inline-block px-6 pb-2 pt-2.5 text-xs font-bold leading-normal transition duration-150 ease-in-out";

export const shadowDesign = (color: string) => {
  switch (color) {
    case "primary":
      return "shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]";
    case "secondary":
      return "shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)]";
    case "success":
      return "shadow-[0_4px_9px_-4px_#14a44d] hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]";
    case "info":
      return "shadow-[0_4px_9px_-4px_#54b4d3] hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]";
    case "warning":
      return "shadow-[0_4px_9px_-4px_#e4a11b] hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]";
    case "danger":
      return "shadow-[0_4px_9px_-4px_#dc4c64] hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]";
  }
};

export const hoverDesign = (color: string) => {
  switch (color) {
    case "secondary":
      return "hover:bg-neutral-100";
    default:
      return `hover:bg-${color}-600`;
  }
};
