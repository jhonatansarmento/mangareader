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
}

export interface Comic {
  title: string;
  slug: string;
  image: string;
  latestChapter: string;
  releaseDate: string;
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
    volumes: [
      {
        title: 'Volume 01',
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
    latestChapter: 'Capítulo 14',
    releaseDate: '28/08/2024',
    volumes: [
      {
        title: 'O Nome do Jogo',
        chapters: [
          {
            title: 'Capítulo 1',
            id: '1',
            slug: slugify('Capítulo 1'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 2',
            id: '2',
            slug: slugify('Capítulo 2'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 3',
            id: '3',
            slug: slugify('Capítulo 3'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 4',
            id: '4',
            slug: slugify('Capítulo 4'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 5',
            id: '5',
            slug: slugify('Capítulo 5'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 6',
            id: '6',
            slug: slugify('Capítulo 6'),
            imageUrls: [],
          },
        ],
      },
      {
        title: 'Pegue Alguns',
        chapters: [
          {
            title: 'Capítulo 7',
            id: '7',
            slug: slugify('Capítulo 7'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 8',
            id: '8',
            slug: slugify('Capítulo 8'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 9',
            id: '9',
            slug: slugify('Capítulo 9'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 10',
            id: '10',
            slug: slugify('Capítulo 10'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 11',
            id: '11',
            slug: slugify('Capítulo 11'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 12',
            id: '12',
            slug: slugify('Capítulo 12'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 13',
            id: '13',
            slug: slugify('Capítulo 13'),
            imageUrls: [],
          },
          {
            title: 'Capítulo 14',
            id: '14',
            slug: slugify('Capítulo 14'),
            imageUrls: [],
          },
        ],
      },
    ],
  },
];

export default comics;
