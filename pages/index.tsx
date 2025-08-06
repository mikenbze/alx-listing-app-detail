import backgroundImage from "@/assets/hero.jpg";
import Pill from "@/components/Pill";
import Card from "@/components/Card";
import { PROPERTYLISTINGSAMPLE, FILTERS } from "@/constants";


export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="h-[70vh] flex flex-col justify-center items-center text-white text-center bg-cover bg-center px-6"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg sm:text-xl">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="flex gap-4 justify-center flex-wrap mt-8 px-4">
        {FILTERS.map((filter, index) => (
          <Pill key={index} title={filter} />
        ))}
      </section>

      {/* Listings Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <Card key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
