export const btn =
  "inline-block px-6 pb-2 pt-2.5 text-xs font-bold leading-normal transition duration-150 ease-in-out";

export const shadowDesign = (color: string) => {
  switch (color) {
    case "primary":
      return "shadow-[0_4px_9px_-4px_#3b71ca]";
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
    case "primary":
      return "hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]";
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

export const hoverDesign = (color: string, isLight:boolean) => {
  switch (color) {
    case "secondary":
      if (isLight){
        return `border-${color} border-2 text-${color} hover:border-primary-accent-100 hover:text-primary-accent-100 active:border-primary-accent-200 active:text-primary-accent-200`
      }else {
        return "bg-secondary hover:bg-primary-accent-100 active:bg-primary-accent-200 text-black";
      }
    default:
      if (isLight){
        return `border-${color} border-2 text-${color} hover:border-${color}-600 hover:text-${color}-600 active:border-${color}-700 active:text-${color}-700`
      }else {
        return `bg-${color} hover:bg-${color}-600 active:bg-${color}-700 text-white`;
      }
  }
};

export const focusDesign = (color: string) => {
  switch (color) {
    case "primary":
      return "active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]";
    case "secondary":
      return "active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] ";
    case "success":
      return "active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]";
    case "info":
      return "active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]";
    case "warning":
      return "active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]";
    case "danger":
      return "active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]";
  }
};
