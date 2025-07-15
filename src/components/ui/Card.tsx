const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm p-4 transition hover:shadow-md">
        {children}
      </div>
    </>
  );
};

export default Card;
