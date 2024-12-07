// Add the gradient circle styles here
export const gradientCircle = {
  container: "absolute top-0 left-0 z-[-1] h-full w-full fixed overflow-hidden",
  circle: "absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[10%] translate-y-[10%] rounded-full opacity-50 blur-[80px]",
  dark: "bg-[rgba(80,127,165,0.35)]",
  light: "bg-[rgba(153,89,226,0.73)]",
};

export const flexCenter = "flex justify-center items-center h-full";

export const darkThemeClasses = {
  container: "min-h-screen transition-colors duration-700 ease-in-out bg-gray-900 text-white relative",
};

export const lightThemeClasses = {
  container: "min-h-screen transition-colors duration-700 ease-in-out bg-white text-black relative",
};
