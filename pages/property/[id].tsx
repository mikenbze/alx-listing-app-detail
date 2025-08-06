import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { useEffect, useState } from "react";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      const selected = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
      setProperty(selected || null);
    }
  }, [id]);

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive grid layout: Property info & Booking section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Property details and reviews (2/3 width) */}
        <div className="md:col-span-2">
          <PropertyDetail property={property} />
          <ReviewSection reviews={property.reviews || []} />
        </div>

        {/* Right: Booking section */}
        <div className="md:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}
