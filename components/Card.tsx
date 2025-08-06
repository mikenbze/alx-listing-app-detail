import { PropertyProps } from "@/interfaces";

const Card: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{property.name}</h3>
        <p className="text-gray-600">${property.price}/night</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default Card;
