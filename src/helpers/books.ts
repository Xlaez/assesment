import { StaticImageData } from "next/image";
import { Book as Book0, Book1, Book2, Book3 } from "@/app/assets";

export interface IBook {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  author: string;
  price: string;
  body: string;
  date: string;
  ratings: number;
}

export const books: IBook[] = [
  {
    id: 1,
    image: Book0,
    title: "Really good, actually",
    category: "romance",
    author: "John Doe",
    price: "30.50",
    date: "26th September 2024",
    ratings: 4,
    body: `Olivia, a pampered heiress, yearns to escape her privileged life and find true purpose. She impulsively decides to sell her mansion, move to a quaint seaside town, and open a cozy bookshop.
In this idyllic setting, Olivia's tranquil existence is disrupted by a series of mysterious thefts. As the local detective, Ethan, investigates these crimes, their paths cross unexpectedly. Ethan, a passionate baker with a sharp wit, finds himself drawn to Olivia's genuine kindness and unwavering spirit.
As their friendship deepens, they embark on a joint investigation, unraveling the mysteries of the town and discovering hidden secrets along the way. Their shared passion for books and their growing connection lead to a blossoming romance.
Through their adventures, Olivia learns the true meaning of happiness and fulfillment, finding love, friendship, and a sense of belonging in her unexpected journey.
    `,
  },
  {
    id: 2,
    image: Book1,
    title: "James and the giant peach",
    category: "children",
    author: "John Doe",
    price: "30.50",
    date: "20th September 2024",
    ratings: 5,
    body: `Olivia, a pampered heiress, yearns to escape her privileged life and find true purpose. She impulsively decides to sell her mansion, move to a quaint seaside town, and open a cozy bookshop.
In this idyllic setting, Olivia's tranquil existence is disrupted by a series of mysterious thefts. As the local detective, Ethan, investigates these crimes, their paths cross unexpectedly. Ethan, a passionate baker with a sharp wit, finds himself drawn to Olivia's genuine kindness and unwavering spirit.
As their friendship deepens, they embark on a joint investigation, unraveling the mysteries of the town and discovering hidden secrets along the way. Their shared passion for books and their growing connection lead to a blossoming romance.
Through their adventures, Olivia learns the true meaning of happiness and fulfillment, finding love, friendship, and a sense of belonging in her unexpected journey.
    `,
  },
  {
    id: 3,
    image: Book2,
    title: "A coastline is an immeasurable thing",
    category: "african literature",
    author: "John Doe",
    price: "30.50",
    date: "3rd September 2024",
    ratings: 3,
    body: `Olivia, a pampered heiress, yearns to escape her privileged life and find true purpose. She impulsively decides to sell her mansion, move to a quaint seaside town, and open a cozy bookshop.
In this idyllic setting, Olivia's tranquil existence is disrupted by a series of mysterious thefts. As the local detective, Ethan, investigates these crimes, their paths cross unexpectedly. Ethan, a passionate baker with a sharp wit, finds himself drawn to Olivia's genuine kindness and unwavering spirit.
As their friendship deepens, they embark on a joint investigation, unraveling the mysteries of the town and discovering hidden secrets along the way. Their shared passion for books and their growing connection lead to a blossoming romance.
Through their adventures, Olivia learns the true meaning of happiness and fulfillment, finding love, friendship, and a sense of belonging in her unexpected journey.
    `,
  },
  {
    id: 4,
    image: Book3,
    title: "The training of the shrew",
    category: "thriller",
    author: "John Doe",
    price: "30.50",
    date: "5th November 2024",
    ratings: 3,
    body: `Olivia, a pampered heiress, yearns to escape her privileged life and find true purpose. She impulsively decides to sell her mansion, move to a quaint seaside town, and open a cozy bookshop.
In this idyllic setting, Olivia's tranquil existence is disrupted by a series of mysterious thefts. As the local detective, Ethan, investigates these crimes, their paths cross unexpectedly. Ethan, a passionate baker with a sharp wit, finds himself drawn to Olivia's genuine kindness and unwavering spirit.
As their friendship deepens, they embark on a joint investigation, unraveling the mysteries of the town and discovering hidden secrets along the way. Their shared passion for books and their growing connection lead to a blossoming romance.
Through their adventures, Olivia learns the true meaning of happiness and fulfillment, finding love, friendship, and a sense of belonging in her unexpected journey.
    `,
  },
  {
    id: 5,
    image: Book1,
    title: "James and the giant peach",
    category: "children",
    author: "John Doe",
    price: "30.50",
    date: "26th September 2024",
    ratings: 4,
    body: `Olivia, a pampered heiress, yearns to escape her privileged life and find true purpose. She impulsively decides to sell her mansion, move to a quaint seaside town, and open a cozy bookshop.
In this idyllic setting, Olivia's tranquil existence is disrupted by a series of mysterious thefts. As the local detective, Ethan, investigates these crimes, their paths cross unexpectedly. Ethan, a passionate baker with a sharp wit, finds himself drawn to Olivia's genuine kindness and unwavering spirit.
As their friendship deepens, they embark on a joint investigation, unraveling the mysteries of the town and discovering hidden secrets along the way. Their shared passion for books and their growing connection lead to a blossoming romance.
Through their adventures, Olivia learns the true meaning of happiness and fulfillment, finding love, friendship, and a sense of belonging in her unexpected journey.
    `,
  },
  {
    id: 6,
    image: Book0,
    title: "Really good, actually",
    category: "romance",
    author: "John Doe",
    price: "30.50",
    date: "26th September 2024",
    ratings: 4,
    body: `Olivia, a pampered heiress, yearns to escape her privileged life and find true purpose. She impulsively decides to sell her mansion, move to a quaint seaside town, and open a cozy bookshop.
In this idyllic setting, Olivia's tranquil existence is disrupted by a series of mysterious thefts. As the local detective, Ethan, investigates these crimes, their paths cross unexpectedly. Ethan, a passionate baker with a sharp wit, finds himself drawn to Olivia's genuine kindness and unwavering spirit.
As their friendship deepens, they embark on a joint investigation, unraveling the mysteries of the town and discovering hidden secrets along the way. Their shared passion for books and their growing connection lead to a blossoming romance.
Through their adventures, Olivia learns the true meaning of happiness and fulfillment, finding love, friendship, and a sense of belonging in her unexpected journey.
    `,
  },
];
