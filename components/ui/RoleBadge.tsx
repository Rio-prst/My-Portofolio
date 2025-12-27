type RoleBadgeProps = {
  label: string;
};

export const RoleBadge = ({ label }: RoleBadgeProps) => (
  <span
    className="
      text-[8px] px-2 py-1 rounded-full
      bg-cyan-500/10 text-cyan-400
      border border-cyan-500/30
      font-semibold uppercase tracking-wide
    "
  >
    {label}
  </span>
);
