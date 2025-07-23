const SummaryCard = ({ title, value, color }) => {
  return (
    
    <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
    <div className="flex flex-col space-y-1.5 p-6 pb-3">
      <h3 className="text-lg font-semibold tracking-tight text-gray-600">{title}</h3>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
    </div>
  );
};

export default SummaryCard;
