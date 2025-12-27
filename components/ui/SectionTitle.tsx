type SectionTitleProps = {
  title: string;
  className?: string;
};

export const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-12 w-[85%] mx-auto text-center ${className}`}>
      <h2 className="relative inline-block text-3xl font-bold text-white mb-3 group">
        {title}

        {/* Animated underline */}
        <span
          className="
            absolute left-1/2 -bottom-2 h-1
            w-10 md:w-16 lg:w-20
            bg-cyan-500 rounded-full
            -translate-x-1/2
            transition-all duration-500 ease-out
            group-hover:w-24
          "
        />
      </h2>
    </div>
  );
};
