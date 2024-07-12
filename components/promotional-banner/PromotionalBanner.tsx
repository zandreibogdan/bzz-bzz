import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProductDetails {
  image: StaticImageData;
  name: string;
  price: number;
  description: string;
}

interface PromotionalBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
  product?: ProductDetails;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  product,
}) => {
  return (
    <div
      className="relative bg-cover bg-center h-auto py-16 flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-4 max-w-xl">
        <h2 className="text-3xl font-bold text-primary mb-2">{title}</h2>
        <p className="text-lg text-background mb-4">{description}</p>
        {buttonText && buttonLink && !product && (
          <Link href={buttonLink}>
            <div className="inline-block bg-primary text-secondary px-6 py-2 rounded hover:bg-accent transition">
              {buttonText}
            </div>
          </Link>
        )}
        {product && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-6 max-w-sm mx-auto">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button className="mt-4 bg-primary text-secondary px-4 py-2 rounded hover:bg-accent transition w-full">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromotionalBanner;
