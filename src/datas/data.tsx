export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    size: number
    star: number
    color: string;
    description: string;
};
export const products: Product[]   = [
    {
    id: 1,
    image: "https://example.com/black-tshirt.jpg",
    name: "Чорна футболка",
    price: 25,
    size: 42,
    star: 4.5,
    color: "Чорний",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 2,
    image: "https://example.com/white-shirt.jpg",
    name: "Біла сорочка",
    price: 45,
    size: 40,
    star: 4.8,
    color: "Білий",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 3,
    image: "https://example.com/blue-jeans.jpg",
    name: "Сині джинси",
    price: 60,
    size: 42,
    star: 4.7,
    color: "Синій",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 4,
    image: "https://example.com/hoodie.jpg",
    name: "Худі з капюшоном",
    price: 55,
    size: 44,
    star: 4.9,
    color: "Сірий",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 5,
    image: "https://example.com/jacket.jpg",
    name: "Шкіряна куртка",
    price: 120,
    size: 42,
    star: 4.6,
    color: "Коричневий",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 6,
    image: "https://example.com/dress.jpg",
    name: "Літня сукня",
    price: 70,
    size: 38,
    star: 4.8,
    color: "Рожевий",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 7,
    image: "https://example.com/sweater.jpg",
    name: "В'язаний светр",
    price: 50,
    size: 40,
    star: 4.4,
    color: "Бежевий",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 8,
    image: "https://example.com/shorts.jpg",
    name: "Джинсові шорти",
    price: 35,
    size: 42,
    star: 4.5,
    color: "Блакитний",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 9,
    image: "https://example.com/trousers.jpg",
    name: "Класичні штани",
    price: 65,
    size: 44,
    star: 4.7,
    color: "Чорний",
    description: "Classic denim jacket for everyday wear.",
  },
  {
    id: 10,
    image: "https://example.com/sneakers.jpg",
    name: "Класичні кросівки",
    price: 80,
    size: 42,
    star: 4.9,
    color: "Білий",
    description: "Classic denim jacket for everyday wear.",
  },
]