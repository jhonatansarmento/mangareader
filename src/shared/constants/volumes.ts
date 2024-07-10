import { slugify } from '@/lib/helpers/string.helper';

export interface Chapter {
  title: string;
  id: string;
  slug: string;
  imageUrls: string[];
}

export interface Volume {
  title: string;
  chapters: Chapter[];
  image?: string;
}

export interface Comic {
  title: string;
  slug: string;
  image: string;
  latestChapter: string;
  releaseDate: string;
  author: string;
  genre: string[];
  synopsis: string;
  rating: number;
  completed: boolean;
  volumes: Volume[];
}

const comics: Comic[] = [
  {
    title: 'One Piece',
    slug: slugify('One Piece'),
    image:
      'https://leitordemanga.com/wp-content/uploads/2017/10/Ler-manga-One-Piece-Online-193x278-1.png',
    latestChapter: 'Capítulo 3',
    releaseDate: '08/08/2024',
    author: 'Eiichiro Oda',
    genre: ['Aventura', 'Fantasia'],
    synopsis:
      'A história de Monkey D. Luffy, um jovem pirata em busca do tesouro One Piece.',
    rating: 4.8,
    completed: false,
    volumes: [
      {
        title: 'Volume 01',
        image:
          'https://storage.googleapis.com/onepiecemanga/CAPAS%20DE%20VOLUMES/Volume_1.webp',
        chapters: [
          {
            title: 'Capítulo 1 - Romance Dawn',
            id: '1',
            slug: slugify('Capítulo 1 - Romance Dawn'),
            imageUrls: [
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0006.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0007.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0008.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0009.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0010.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0011.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0012.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0013.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0014.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0015.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0016.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0017.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0018.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0019.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0020.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0021.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0022.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0023.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0024.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0025.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0026.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0027.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0028.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0029.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0030.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0031.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0032.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0033.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0034.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0035.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0036.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0037.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0038.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0039.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0040.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0041.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0042.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0043.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0044.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0045.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0046.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0047.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0048.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0049.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0051.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0052.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0053.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0054.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0055.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0056.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0057.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0058.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0059.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0060.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0061.jpg',
            ],
          },
          {
            title: 'Capítulo 2 - O Garoto Luffy do Chapéu de Palha',
            id: '2',
            slug: slugify('Capítulo 2 - O Garoto Luffy do Chapéu de Palha'),
            imageUrls: [
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0062.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0063.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0064.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0065.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0066.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0067.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0068.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0069.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0070.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0071.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0072.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0073.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0074.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0075.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0076.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0077.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0078.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0079.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0080.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0081.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0082.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%202%20-%20O%20Garoto%20Luffy%20do%20Chap%C3%A9u%20de%20Palha/One%20Piece%20Vol.01_page-0083.jpg',
            ],
          },
          {
            title: 'Capítulo 3 - Zoro, o Caçador de Piratas',
            id: '3',
            slug: slugify('Capítulo 3 - Zoro, o Caçador de Piratas'),
            imageUrls: [
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0085.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0086.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0087.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0088.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0089.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0090.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0091.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0092.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0093.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0094.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0095.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0096.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0097.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0098.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0099.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0100.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0101.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0102.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0103.jpg',
              'https://storage.googleapis.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%203%20-%20Zoro%2C%20o%20Ca%C3%A7ador%20de%20Piratas/One%20Piece%20Vol.01_page-0104.jpg',
            ],
          },
        ],
      },
      {
        title: 'Volume 02',
        image:
          'https://storage.googleapis.com/onepiecemanga/CAPAS%20DE%20VOLUMES/Volume_2.webp',
        chapters: [
          {
            title: 'Capítulo 9 - Femme Fatale',
            id: '9',
            slug: slugify('Capítulo 9 - Femme Fatale'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 10 - Incidente na Taverna',
            id: '10',
            slug: slugify('Capítulo 10 - Incidente na Taverna'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 11 - O Vôo',
            id: '11',
            slug: slugify('Capítulo 11 - O Vôo'),
            imageUrls: [],
          },
        ],
      },
    ],
  },
  {
    title: 'The Boys',
    slug: slugify('The Boys'),
    image: 'https://m.media-amazon.com/images/I/61cgYV1gTLL._SL1155_.jpg',
    latestChapter: 'Capítulo 72',
    releaseDate: '28/08/2024',
    author: 'Garth Ennis',
    genre: ['Ação', 'Drama'],
    synopsis: 'Um grupo de vigilantes luta contra super-heróis corruptos.',
    rating: 4.5,
    completed: true,
    volumes: [
      {
        title: 'O Nome do Jogo',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume1.jpg',
        chapters: [
          // Capítulos de 1 a 6
          ...Array.from({ length: 6 }, (_, i) => ({
            title: `Capítulo ${i + 1}`,
            id: `${i + 1}`,
            slug: slugify(`Capítulo ${i + 1}`),
            imageUrls: Array.from(
              { length: 23 },
              (_, j) =>
                `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                  i + 1
                ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                  i + 1
                ).padStart(2, '0')}-page-${String(j + 1).padStart(5, '0')}.jpg`
            ),
          })),
        ],
      },
      {
        title: 'Pegue Alguns',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume2.jpg',
        chapters: [
          // Capítulos de 7 a 14
          ...Array.from({ length: 8 }, (_, i) => ({
            title: `Capítulo ${i + 7}`,
            id: `${i + 7}`,
            slug: slugify(`Capítulo ${i + 7}`),
            imageUrls: Array.from(
              { length: 25 },
              (_, j) =>
                `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                  i + 7
                ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                  i + 7
                ).padStart(2, '0')}-page-${String(j + 1).padStart(5, '0')}.jpg`
            ),
          })),
        ],
      },
      {
        title: 'Bom para a Alma',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume3.jpg',
        chapters: [
          ...Array.from({ length: 8 }, (_, i) => ({
            title: `Capítulo ${i + 15}`,
            id: `${i + 15}`,
            slug: slugify(`Capítulo ${i + 15}`),
            imageUrls: Array.from(
              { length: i + 15 === 22 ? 27 : 25 },
              (_, j) =>
                `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                  i + 15
                ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                  i + 15
                ).padStart(2, '0')}-page-${String(j + 1).padStart(5, '0')}.jpg`
            ),
          })),
        ],
      },

      {
        title: 'Hora de Partir',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume4.jpg',
        chapters: [
          // Capítulos de 23 a 30
          ...Array.from({ length: 8 }, (_, i) => {
            const chapterNumber = i + 23;
            let pageCount;

            switch (chapterNumber) {
              case 23:
              case 24:
              case 27:
                pageCount = 25;
                break;
              case 25:
                pageCount = 27;
                break;
              case 26:
              case 28:
              case 29:
                pageCount = 26;
                break;
              case 30:
                pageCount = 31;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber}`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber}`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'Herogasm',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume5.jpg',
        chapters: [
          // Capítulos de Herogasm 1 a 6
          ...Array.from({ length: 6 }, (_, i) => {
            const chapterNumber = i + 1;
            let pageCount;

            switch (chapterNumber) {
              case 1:
                pageCount = 22;
                break;
              case 2:
              case 3:
              case 5:
              case 6:
                pageCount = 24;
                break;
              case 4:
                pageCount = 25;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber} - Herogasm`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber} - Herogasm`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Herogasm/The%20Boys%20-%20Herogasm%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}/The%20Boys%20-%20Herogasm%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}_page-${String(j + 1).padStart(
                    4,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'A Sociedade de Auto-Preservação',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume6.jpg',
        chapters: [
          // Capítulos de 31 a 38
          ...Array.from({ length: 8 }, (_, i) => {
            const chapterNumber = i + 31;
            let pageCount;

            switch (chapterNumber) {
              case 31:
                pageCount = 26;
                break;
              case 32:
              case 33:
              case 35:
              case 36:
              case 37:
              case 38:
                pageCount = 24;
                break;
              case 34:
                pageCount = 25;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber}`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber}`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'Os Inocentes',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume7.jpg',
        chapters: [
          // Capítulos de 39 a 47
          ...Array.from({ length: 9 }, (_, i) => {
            const chapterNumber = i + 39;
            let pageCount;

            switch (chapterNumber) {
              case 39:
              case 43:
              case 46:
                pageCount = 24;
                break;
              case 40:
                pageCount = 27;
                break;
              case 41:
              case 42:
              case 44:
              case 45:
                pageCount = 25;
                break;
              case 47:
                pageCount = 23;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber}`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber}`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'O Rapaz Escocês',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume8.jpg',
        chapters: [
          // Capítulos de Highland Laddie 1 a 6
          ...Array.from({ length: 6 }, (_, i) => {
            const chapterNumber = i + 1;
            let pageCount;

            switch (chapterNumber) {
              case 1:
              case 2:
                pageCount = 26;
                break;
              case 3:
                pageCount = 27;
                break;
              case 4:
              case 5:
                pageCount = 24;
                break;
              case 6:
                pageCount = 25;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber} - O Rapaz Escocês`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber} - O Rapaz Escocês`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Rapazinho%20das%20Montanhas/The%20Boys%20-%20Rapazinho%20das%20Montanhas%20-%20${String(
                    chapterNumber
                  ).padStart(
                    2,
                    '0'
                  )}/The%20Boys%20-%20Rapazinho%20das%20Montanhas%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'Montanha-Russa',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume9.jpg',
        chapters: [
          // Capítulos de 48 a 59
          ...Array.from({ length: 12 }, (_, i) => {
            const chapterNumber = i + 48;
            let pageCount;

            switch (chapterNumber) {
              case 48:
              case 49:
              case 51:
              case 55:
              case 56:
              case 57:
              case 58:
              case 59:
                pageCount = 24;
                break;
              case 50:
                pageCount = 27;
                break;
              case 52:
                pageCount = 23;
                break;
              case 53:
                pageCount = 22;
                break;
              case 54:
                pageCount = 23;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber}`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber}`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'Pau pra Toda Obra',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume10.jpg',
        chapters: [
          // Capítulos de Butcher, Baker, Candlestickmaker 1 a 6
          ...Array.from({ length: 6 }, (_, i) => {
            const chapterNumber = i + 1;
            let pageCount;

            switch (chapterNumber) {
              case 1:
                pageCount = 25;
                break;
              case 2:
              case 3:
              case 4:
              case 5:
                pageCount = 24;
                break;
              case 6:
                pageCount = 31;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber} - Pau pra Toda Obra`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber} - Pau pra Toda Obra`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/A%C3%A7ougueiro%2C%20%20Padeiro%2C%20Fabricante%20de%20Casti%C3%A7ais/The%20Boys%20-%20A%C3%A7ougueiro%2C%20%20Padeiro%2C%20Fabricante%20de%20Casti%C3%A7ais%20-%20${String(
                    chapterNumber
                  ).padStart(
                    2,
                    '0'
                  )}/The%20Boys%20-%20A%C3%A7ougueiro%2C%20%20Padeiro%2C%20Fabricante%20de%20Casti%C3%A7ais%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'No Topo da Colina com as Espadas de Mil Homens',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume11.jpg',
        chapters: [
          // Capítulos de 60 a 65
          ...Array.from({ length: 6 }, (_, i) => {
            const chapterNumber = i + 60;
            let pageCount;

            switch (chapterNumber) {
              case 60:
              case 62:
              case 63:
                pageCount = 25;
                break;
              case 61:
                pageCount = 24;
                break;
              case 64:
                pageCount = 23;
                break;
              case 65:
                pageCount = 34;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber}`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber}`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'Metendo o Pé na Porta',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume12.jpg',
        chapters: [
          // Capítulos de 66 a 72
          ...Array.from({ length: 7 }, (_, i) => {
            const chapterNumber = i + 66;
            let pageCount;

            switch (chapterNumber) {
              case 66:
              case 68:
              case 69:
              case 70:
              case 71:
                pageCount = 25;
                break;
              case 67:
                pageCount = 24;
                break;
              case 72:
                pageCount = 37;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber}`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber}`),
              imageUrls: Array.from(
                { length: pageCount },
                (_, j) =>
                  `https://storage.googleapis.com/theboyshq/Principal/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}/The%20Boys-Os%20Rapazes%20-%20${String(
                    chapterNumber
                  ).padStart(2, '0')}-page-${String(j + 1).padStart(
                    5,
                    '0'
                  )}.jpg`
              ),
            };
          }),
        ],
      },
      {
        title: 'Querida Becky',
        image:
          'https://storage.googleapis.com/theboyshq/CAPAS%20VOLUMES/volume13.jpg',
        chapters: [
          // Capítulos de Dear Becky 1 a 8
          ...Array.from({ length: 8 }, (_, i) => {
            const chapterNumber = i + 1;
            let pageCount;

            switch (chapterNumber) {
              case 1:
                pageCount = 26;
                break;
              case 2:
              case 7:
                pageCount = 0;
                break;
              case 3:
              case 4:
              case 5:
              case 6:
              case 8:
                pageCount = 25;
                break;
              default:
                pageCount = 25;
            }

            return {
              title: `Capítulo ${chapterNumber} - Querida Becky`,
              id: `${chapterNumber}`,
              slug: slugify(`Capítulo ${chapterNumber} - Querida Becky`),
              imageUrls:
                pageCount > 0
                  ? Array.from(
                      { length: pageCount },
                      (_, j) =>
                        `https://storage.googleapis.com/theboyshq/Querida%20Becky/The%20Boys%20-%20Querida%20Becky%20-%20${String(
                          chapterNumber
                        ).padStart(
                          2,
                          '0'
                        )}/The%20Boys%20-%20Querida%20Becky%20-%20${String(
                          chapterNumber
                        ).padStart(2, '0')}-page-${String(j + 1).padStart(
                          5,
                          '0'
                        )}.jpg`
                    )
                  : [],
            };
          }),
        ],
      },
    ],
  },
];

export default comics;
