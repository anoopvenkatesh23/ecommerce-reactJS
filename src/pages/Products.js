const products = [
  {
    id: 1,
    name: "Apple",
    href: "#apple",
    price: "$48",
    imageSrc: "images/apple.jpg",
    imageAlt: "apple",
  },
  {
    id: 2,
    name: "Banana",
    href: "#banana",
    price: "$35",
    imageSrc: "images/banana.jpg",
    imageAlt: "banana",
  },
  {
    id: 3,
    name: "Papaya",
    href: "#papaya",
    price: "$89",
    imageSrc: "images/papaya.jpg",
    imageAlt: "papaya",
  },
  {
    id: 4,
    name: "Kiwi",
    href: "#kiwi",
    price: "$35",
    imageSrc: "images/kiwi.jpg",
    imageAlt: "kiwi",
  },
  {
    id: 5,
    name: "Strawberry",
    href: "#strawberry",
    price: "$25",
    imageSrc: "images/strawberry.jpg",
    imageAlt: "strawberry",
  },
  {
    id: 6,
    name: "Watermelon",
    href: "#watermelon",
    price: "$65",
    imageSrc: "images/watermelon.jpg",
    imageAlt: "watermelon",
  },
  {
    id: 7,
    name: "Orange",
    href: "#orange",
    price: "$15",
    imageSrc: "images/orange.jpg",
    imageAlt: "orange",
  },
  {
    id: 8,
    name: "Pomogranate",
    href: "#pomogranate",
    price: "$95",
    imageSrc: "images/pomogranate.jpg",
    imageAlt: "pomogranate",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
