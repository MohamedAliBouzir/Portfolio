export const btn =
  "inline-block px-3 pb-3 pt-2.5 text-xs font-bold leading-normal transition-all duration-500 ease-in-out hover:scale-110 active:scale-95";

export const shadowDesign = (color: string) => {
  switch (color) {
    case "primal":
      return "shadow-[0_4px_9px_-4px_#CB9DF0]";
    case "secondary":
      return "shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)]";
    case "success":
      return "shadow-[0_4px_9px_-4px_#14a44d]";
    case "info":
      return "shadow-[0_4px_9px_-4px_#54b4d3]";
    case "warning":
      return "shadow-[0_4px_9px_-4px_#e4a11b]";
    case "danger":
      return "shadow-[0_4px_9px_-4px_#dc4c64]";
  }
};

export const hovershadowDesign = (color: string) => {
  switch (color) {
    case "primal":
      return "hover:shadow-[0_8px_9px_-4px_rgba(128,0,128,0.3),0_4px_18px_0_rgba(128,0,128,0.2)]";
    case "secondary":
      return "hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)]";
    case "success":
      return "hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]";
    case "info":
      return "hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]";
    case "warning":
      return "hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]";
    case "danger":
      return "hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]";
  }
};


//missing focus and active design
export const btnColorDesign = (
  color: string,
  isLight: boolean,
  isActive: boolean
): string => {
  switch (color) {
    case "primal":
      return isLight
        ? isActive
          ? `bg-transparent border-2 border-purple-500 text-purple-500 hover:border-purple-700 hover:text-purple-700 active:border-primal active:text-primal`
          : `bg-transparent border-2 border-primal text-primal hover:border-purple-700 hover:text-purple-700 active:border-purple-500 active:text-purple-500`
        : isActive
          ? `bg-purple-500 hover:bg-purple-700 active:bg-${color}`
          : `bg-${color} hover:bg-purple-700 active:bg-purple-500`;
    case "secondary":
      return isLight
        ? isActive
          ? `border-primary-accent-300 text-primary-accent-300 hover:border-primary-accent-100 hover:text-primary-accent-100 bg-transparent border-2 active:border-${color} active:text-${color}`
          : `bg-transparent border-2 border-${color} text-${color} hover:border-primary-accent-100 hover:text-primary-accent-100 active:border-primary-accent-300 active:text-primary-accent-300`
        : isActive
          ? `active:bg-${color} hover:bg-primary-accent-100 bg-primary-accent-300`
          : `bg-${color} hover:bg-primary-accent-100 active:bg-primary-accent-300`;
    default:
      return isLight
        ? isActive
          ? `bg-transparent border-2 active:border-${color} active:text-${color} hover:border-${color}-700 hover:text-${color}-700 border-${color}-500 text-${color}-500`
          : `bg-transparent border-2 border-${color} text-${color} hover:border-${color}-700 hover:text-${color}-700 active:border-${color}-500 active:text-${color}-500`
        : isActive
          ? `active:bg-${color} hover: bg-${color}-700 bg-${color}-500`
          : `bg-${color} hover: bg-${color}-700 active:bg-${color}-500`;
  }
};
