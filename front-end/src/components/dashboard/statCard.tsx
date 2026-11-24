
interface StatCardProps {
  title: string;
  value: number;
  description: string;
  
  variant: "blue" | "green" | "orange";
}

function StatCard({
  title,
  value,
  description,
  variant,
}: StatCardProps) {
  return (
    <div className="statCard">
      <div className="statCardHeader">
        <span>{title}</span>
        <div className={`statIcon ${variant}`}>
    
        </div>
      </div>

      <strong className="statValue">{value}</strong>
      <p>{description}</p>
    </div>
  );
}

export default StatCard;
