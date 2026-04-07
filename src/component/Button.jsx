import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest";

  const variants = {
    hero: "bg-white text-black hover:bg-blue-500 hover:text-white rounded-full",
    dark: "bg-[#01353E] text-white hover:opacity-90 rounded-full",
    outline: "border border-white text-white hover:bg-white hover:text-black rounded-full",
    ghost: "text-gray-700 hover:bg-gray-100 rounded-lg",
  };

  const sizes = {
    sm: "px-6 py-2 text-[10px]",
    md: "px-10 py-3.5 text-[11px]",
    lg: "px-12 py-4 text-sm",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}