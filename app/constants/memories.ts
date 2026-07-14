
export interface Memory {
  id: string;
  src: string;
  caption: string;
  rotation: number;
  x: number;
  y: number;
  scale: number;
}


export const MEMORIES: Record<string, Memory> = {
  "The Silly One": {
    id: "The Silly One",
    src: "/photos/first-memory.jpg",
    caption: "The Silly One ❤️",
    rotation: -8,
    x: 610,
    y: 180,
    scale: 0.95,
  },

  "17 April": {
    id: "17 April",
    src: "/photos/17-april.jpg",
    caption: "17 April ❤️",
    rotation: 6,
    x: 590,
    y: 170,
    scale: 0.92,
  },

  "Brain Rot Queen": {
    id: "Brain Rot Queen",
    src: "/photos/brainrot.jpg",
    caption: "Certified Brain Rot 🤍",
    rotation: -5,
    x: 610,
    y: 160,
    scale: 0.92,
  },

  "Cutie": {
    id: "Cutie",
    src: "/photos/drawing.jpg",
    caption: "Still have this 🥹",
    rotation: 8,
    x: 560,
    y: 380,
    scale: 0.88,
  },

  "My fav": {
    id: "My fav",
    src: "/photos/mumma.jpg",
    caption: "My fav",
    rotation: -6,
    x: 600,
    y: 230,
    scale: 0.9,
  },

  "Us": {
    id: "Us",
    src: "/photos/us.jpg",
    caption: "Us.",
    rotation: 5,
    x: 610,
    y: 200,
    scale: 0.95,
  },

  "Favorite Picture": {
    id: "Favorite Picture",
    src: "/photos/favorite.jpg",
    caption: "Always my favorite ❤️",
    rotation: -4,
    x: 600,
    y: 180,
    scale: 0.95,
  },
};