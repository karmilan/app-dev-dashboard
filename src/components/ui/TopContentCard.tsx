type CardProps = {
  title: string;
  icon?: React.ReactNode;
  value?: string | number;
  description?: string;
  footer?: React.ReactNode;
};

const TopContentCard: React.FC<CardProps> = ({
  title,
  icon,
  value,
  description,
  footer,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm p-4 transition hover:shadow-md">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium text-gray-600 dark:text-slate-400">
          {title}
        </h2>
        {icon && <div className="text-blue-500 dark:text-blue-400">{icon}</div>}
      </div>

      {/* Value or Content */}
      {value && (
        <div className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-1">
          {value}
        </div>
      )}

      {/* Optional Description */}
      {description && (
        <p className="text-sm text-gray-500 dark:text-slate-400">
          {description}
        </p>
      )}

      {/* Optional Footer */}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default TopContentCard;
