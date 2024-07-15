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

const generateImageUrls = (
  volumeNumber: number,
  chapterId: number,
  totalJpg: number,
  totalPng: number
) => {
  const volumeString = volumeNumber.toString().padStart(2, '0');
  const chapterString = chapterId.toString().padStart(3, '0');
  const baseJpgUrl = `https://storage.googleapis.com/gashbell/Gash%20Bell/VOLUMES/Gash%20Volume%20${volumeString}/%5BChrono%5D%20Gash%20-%20Volume%20${volumeString}%20-%20Capitulo%20${chapterString}/Capitulo%20${chapterString}%20(`;
  const basePngUrl = `https://storage.googleapis.com/gashbell/Gash%20Bell/VOLUMES/Gash%20Volume%20${volumeString}/%5BChrono%5D%20Gash%20-%20Volume%20${volumeString}%20-%20Capitulo%20${chapterString}/Capitulo%20${chapterString}%20(`;

  const jpgUrls = Array.from(
    { length: totalJpg },
    (_, i) => `${baseJpgUrl}${i + 1}).jpg`
  );
  const pngUrls = Array.from(
    { length: totalPng },
    (_, i) => `${basePngUrl}${i + 1}).png`
  );

  return [...jpgUrls, ...pngUrls];
};

const generateExtraImageUrls = (
  volumeNumber: number,
  extraId: number,
  totalJpg: number,
  totalPng: number
) => {
  const volumeString = volumeNumber.toString().padStart(2, '0');
  const extraString = extraId === 1 ? 'Capitulo%20Extra' : 'Capitulo%20Extra-2';
  const baseJpgUrl = `https://storage.googleapis.com/gashbell/Gash%20Bell/VOLUMES/Gash%20Volume%20${volumeString}/%5BChrono%5D%20Gash%20-%20Volume%20${volumeString}%20-%20Capitulo%20Extra/${extraString}%20(`;
  const basePngUrl = `https://storage.googleapis.com/gashbell/Gash%20Bell/VOLUMES/Gash%20Volume%20${volumeString}/%5BChrono%5D%20Gash%20-%20Volume%20${volumeString}%20-%20Capitulo%20Extra/${extraString}%20(`;

  const jpgUrls = Array.from(
    { length: totalJpg },
    (_, i) => `${baseJpgUrl}${i + 1}).jpg`
  );
  const pngUrls = Array.from(
    { length: totalPng },
    (_, i) => `${basePngUrl}${i + 1}).png`
  );

  return [...jpgUrls, ...pngUrls];
};

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
  {
    title: 'Konjiki no Gash Bell',
    slug: slugify('Konjiki no Gash Bell'),
    image:
      'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/00.jpg',
    latestChapter: 'Capítulo 323',
    releaseDate: '10/10/2024',
    author: 'Makoto Raiku',
    genre: ['Aventura', 'Fantasia', 'Comédia'],
    synopsis:
      'A história de Gash Bell, um demônio enviado para a Terra para competir pelo título de rei do mundo dos demônios.',
    rating: 4.7,
    completed: true,
    volumes: [
      {
        title: 'Volume 01',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-01.jpg',
        chapters: [
          {
            title: 'Capítulo 1 - Kiyomaro, o Herói',
            id: '1',
            slug: slugify('Capítulo 1 - Kiyomaro, o Herói'),
            imageUrls: generateImageUrls(1, 1, 5, 43),
          },
          {
            title: 'Capítulo 2 - O Livro Ilegível',
            id: '2',
            slug: slugify('Capítulo 2 - O Livro Ilegível'),
            imageUrls: generateImageUrls(1, 2, 2, 20),
          },
          {
            title: 'Capítulo 3 - Relâmpago do Coração',
            id: '3',
            slug: slugify('Capítulo 3 - Relâmpago do Coração'),
            imageUrls: generateImageUrls(1, 3, 2, 18),
          },
          {
            title: 'Capítulo 4 - Kiyomaro, Popular',
            id: '4',
            slug: slugify('Capítulo 4 - Kiyomaro, Popular'),
            imageUrls: generateImageUrls(1, 4, 2, 18),
          },
          {
            title: 'Capítulo 5 - Ferramenta ou Humano!?',
            id: '5',
            slug: slugify('Capítulo 5 - Ferramenta ou Humano!?'),
            imageUrls: generateImageUrls(1, 5, 1, 18),
          },
          {
            title: 'Capítulo 6 - O Triunfo de Kiyomaro',
            id: '6',
            slug: slugify('Capítulo 6 - O Triunfo de Kiyomaro'),
            imageUrls: generateImageUrls(1, 6, 1, 20),
          },
          {
            title: 'Capítulo 7 - Primeira Luta',
            id: '7',
            slug: slugify('Capítulo 7 - Primeira Luta'),
            imageUrls: generateImageUrls(1, 7, 1, 18),
          },
          {
            title: 'Capítulo 8 - Qualificações para um Rei',
            id: '8',
            slug: slugify('Capítulo 8 - Qualificações para um Rei'),
            imageUrls: generateImageUrls(1, 8, 3, 26),
          },
        ],
      },
      {
        title: 'Volume 02',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-02.jpg',
        chapters: [
          {
            title: 'Capítulo 9 - Minha Vez',
            id: '9',
            slug: slugify('Capítulo 9 - Minha Vez'),
            imageUrls: generateImageUrls(2, 9, 4, 22),
          },
          {
            title: 'Capítulo 10 - Uma Luta Com o Destino',
            id: '10',
            slug: slugify('Capítulo 10 - Uma Luta Com o Destino'),
            imageUrls: generateImageUrls(2, 10, 1, 18),
          },
          {
            title: 'Capítulo 11 - Kiyomaro, Hospitalizado',
            id: '11',
            slug: slugify('Capítulo 11 - Kiyomaro, Hospitalizado'),
            imageUrls: generateImageUrls(2, 11, 1, 18),
          },
          {
            title: 'Capítulo 12 - Onde Está o Livro!?',
            id: '12',
            slug: slugify('Capítulo 12 - Onde Está o Livro!?'),
            imageUrls: generateImageUrls(2, 12, 1, 18),
          },
          {
            title: 'Capítulo 13 - Alvos em Movimento',
            id: '13',
            slug: slugify('Capítulo 13 - Alvos em Movimento'),
            imageUrls: generateImageUrls(2, 13, 1, 18),
          },
          {
            title: 'Capítulo 14 - Coração Protetor',
            id: '14',
            slug: slugify('Capítulo 14 - Coração Protetor'),
            imageUrls: generateImageUrls(2, 14, 1, 18),
          },
          {
            title: 'Capítulo 15 - Limites Para o Poder',
            id: '15',
            slug: slugify('Capítulo 15 - Limites Para o Poder'),
            imageUrls: generateImageUrls(2, 15, 1, 18),
          },
          {
            title: 'Capítulo 16 - Verdadeira Família',
            id: '16',
            slug: slugify('Capítulo 16 - Verdadeira Família'),
            imageUrls: generateImageUrls(2, 16, 1, 18),
          },
          {
            title: 'Capítulo 17 - Lágrimas de um Demônio',
            id: '17',
            slug: slugify('Capítulo 17 - Lágrimas de um Demônio'),
            imageUrls: generateImageUrls(2, 17, 1, 20),
          },
          {
            title: 'Capítulo 18 - Um Rei Bondoso',
            id: '18',
            slug: slugify('Capítulo 18 - Um Rei Bondoso'),
            imageUrls: generateImageUrls(2, 18, 1, 19),
          },
        ],
      },
      {
        title: 'Volume 03',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-03.jpg',
        chapters: [
          {
            title: 'Capítulo 19 - A Terceira Magia',
            id: '19',
            slug: slugify('Capítulo 19 - A Terceira Magia'),
            imageUrls: generateImageUrls(3, 19, 3, 21),
          },
          {
            title: 'Capítulo 20 - Uma Última Esperança',
            id: '20',
            slug: slugify('Capítulo 20 - Uma Última Esperança'),
            imageUrls: generateImageUrls(3, 20, 1, 18),
          },
          {
            title: 'Capítulo 21 - Curry da Amizade',
            id: '21',
            slug: slugify('Capítulo 21 - Curry da Amizade'),
            imageUrls: generateImageUrls(3, 21, 1, 17),
          },
          {
            title: 'Capítulo 22 - Um Conflito Inútil',
            id: '22',
            slug: slugify('Capítulo 22 - Um Conflito Inútil'),
            imageUrls: generateImageUrls(3, 22, 1, 18),
          },
          {
            title: 'Capítulo 23 - O Desejo da Mamãe',
            id: '23',
            slug: slugify('Capítulo 23 - O Desejo da Mamãe'),
            imageUrls: generateImageUrls(3, 23, 1, 18),
          },
          {
            title: 'Capítulo 24 - Uma Forma Poderosa',
            id: '24',
            slug: slugify('Capítulo 24 - Uma Forma Poderosa'),
            imageUrls: generateImageUrls(3, 24, 1, 18),
          },
          {
            title: 'Capítulo 25 - Minha Vontade',
            id: '25',
            slug: slugify('Capítulo 25 - Minha Vontade'),
            imageUrls: generateImageUrls(3, 25, 1, 18),
          },
          {
            title: 'Capítulo 26 - Bondoso Kiyomaro',
            id: '26',
            slug: slugify('Capítulo 26 - Bondoso Kiyomaro'),
            imageUrls: generateImageUrls(3, 26, 1, 18),
          },
          {
            title: 'Capítulo 27 - O Herói Invencível',
            id: '27',
            slug: slugify('Capítulo 27 - O Herói Invencível'),
            imageUrls: generateImageUrls(3, 27, 1, 18),
          },
          {
            title: 'Capítulo 28 - Oponente Superável',
            id: '28',
            slug: slugify('Capítulo 28 - Oponente Superável'),
            imageUrls: generateImageUrls(3, 28, 1, 18),
          },
        ],
      },
      {
        title: 'Volume 04',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-04.jpg',
        chapters: [
          {
            title: 'Capítulo 29 - O Desafio da Estátua',
            id: '29',
            slug: slugify('Capítulo 29 - O Desafio da Estátua'),
            imageUrls: generateImageUrls(4, 29, 2, 21),
          },
          {
            title: 'Capítulo 30 - O Mistério do Corpo Invulnerável',
            id: '30',
            slug: slugify('Capítulo 30 - O Mistério do Corpo Invulnerável'),
            imageUrls: generateImageUrls(4, 30, 1, 18),
          },
          {
            title: 'Capítulo 31 - Uma Mensagem Final',
            id: '31',
            slug: slugify('Capítulo 31 - Uma Mensagem Final'),
            imageUrls: generateImageUrls(4, 31, 1, 18),
          },
          {
            title: 'Capítulo 32 - Os Segredos de Gash',
            id: '32',
            slug: slugify('Capítulo 32 - Os Segredos de Gash'),
            imageUrls: generateImageUrls(4, 32, 1, 18),
          },
          {
            title: 'Capítulo 33 - Sentimentos Maternos',
            id: '33',
            slug: slugify('Capítulo 33 - Sentimentos Maternos'),
            imageUrls: generateImageUrls(4, 33, 1, 18),
          },
          {
            title: 'Capítulo 34 - O Pior Tipo de Professor',
            id: '34',
            slug: slugify('Capítulo 34 - O Pior Tipo de Professor'),
            imageUrls: generateImageUrls(4, 34, 1, 18),
          },
          {
            title: 'Capítulo 35 - Um Mundo Só de Inimigos',
            id: '35',
            slug: slugify('Capítulo 35 - Um Mundo Só de Inimigos'),
            imageUrls: generateImageUrls(4, 35, 1, 21),
          },
          {
            title: 'Capítulo 36 - Guerreiro Solitário',
            id: '36',
            slug: slugify('Capítulo 36 - Guerreiro Solitário'),
            imageUrls: generateImageUrls(4, 36, 1, 18),
          },
          {
            title: 'Capítulo 37 - Um Acúmulo de Batalhas',
            id: '37',
            slug: slugify('Capítulo 37 - Um Acúmulo de Batalhas'),
            imageUrls: generateImageUrls(4, 37, 1, 18),
          },
          {
            title: 'Capítulo 38 - Um Parceiro Confiável',
            id: '38',
            slug: slugify('Capítulo 38 - Um Parceiro Confiável'),
            imageUrls: generateImageUrls(4, 38, 1, 18),
          },
        ],
      },
      {
        title: 'Volume 05',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-05.jpg',
        chapters: [
          {
            title: 'Capítulo 39 - As Férias de Verão de Kiyomaro',
            id: '39',
            slug: slugify('Capítulo 39 - As Férias de Verão de Kiyomaro'),
            imageUrls: generateImageUrls(5, 39, 2, 21),
          },
          {
            title: 'Capítulo 40 - O País dos Cavalheiros',
            id: '40',
            slug: slugify('Capítulo 40 - O País dos Cavalheiros'),
            imageUrls: generateImageUrls(5, 40, 1, 18),
          },
          {
            title: 'Capítulo 41 - O Castelo do Demônio',
            id: '41',
            slug: slugify('Capítulo 41 - O Castelo do Demônio'),
            imageUrls: generateImageUrls(5, 41, 1, 18),
          },
          {
            title: 'Capítulo 42 - A Bravura de um Herói',
            id: '42',
            slug: slugify('Capítulo 42 - A Bravura de um Herói'),
            imageUrls: generateImageUrls(5, 42, 1, 19),
          },
          {
            title: 'Capítulo 43 - O Maior Demônio',
            id: '43',
            slug: slugify('Capítulo 43 - O Maior Demônio'),
            imageUrls: generateImageUrls(5, 43, 1, 18),
          },
          {
            title: 'Capítulo 44 - Passos Cautelosos',
            id: '44',
            slug: slugify('Capítulo 44 - Passos Cautelosos'),
            imageUrls: generateImageUrls(5, 44, 1, 18),
          },
          {
            title: 'Capítulo 45 - O Pai de Kiyomaro',
            id: '45',
            slug: slugify('Capítulo 45 - O Pai de Kiyomaro'),
            imageUrls: generateImageUrls(5, 45, 1, 18),
          },
          {
            title: 'Capítulo 46 - O Manipulador',
            id: '46',
            slug: slugify('Capítulo 46 - O Manipulador'),
            imageUrls: generateImageUrls(5, 46, 1, 20),
          },
          {
            title: 'Capítulo 47 - A Floresta das Fadas',
            id: '47',
            slug: slugify('Capítulo 47 - A Floresta das Fadas'),
            imageUrls: generateImageUrls(5, 47, 1, 18),
          },
          {
            title: 'Capítulo 48 - Memórias Roubadas',
            id: '48',
            slug: slugify('Capítulo 48 - Memórias Roubadas'),
            imageUrls: generateImageUrls(5, 48, 1, 18),
          },
        ],
      },
      {
        title: 'Volume 06',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-06.jpg',
        chapters: [
          {
            title: 'Capítulo 49 - Estranha Dança',
            id: '49',
            slug: slugify('Capítulo 49 - Estranha Dança'),
            imageUrls: generateImageUrls(6, 49, 2, 21),
          },
          {
            title: 'Capítulo 50 - Uma Batalha Sem Magias',
            id: '50',
            slug: slugify('Capítulo 50 - Uma Batalha Sem Magias'),
            imageUrls: generateImageUrls(6, 50, 1, 18),
          },
          {
            title: 'Capítulo 51 - A Determinação de um Guerreiro',
            id: '51',
            slug: slugify('Capítulo 51 - A Determinação de um Guerreiro'),
            imageUrls: generateImageUrls(6, 51, 1, 21),
          },
          {
            title: 'Capítulo 52 - Um Encontro Chato',
            id: '52',
            slug: slugify('Capítulo 52 - Um Encontro Chato'),
            imageUrls: generateImageUrls(6, 52, 1, 18),
          },
          {
            title: 'Capítulo 53 - Um Negócio Importante',
            id: '53',
            slug: slugify('Capítulo 53 - Um Negócio Importante'),
            imageUrls: generateImageUrls(6, 53, 1, 18),
          },
          {
            title: 'Capítulo 54 - Um Amigo Acima de Todos',
            id: '54',
            slug: slugify('Capítulo 54 - Um Amigo Acima de Todos'),
            imageUrls: generateImageUrls(6, 54, 1, 18),
          },
          {
            title: 'Capítulo 55 - Túnel Escuro',
            id: '55',
            slug: slugify('Capítulo 55 - Túnel Escuro'),
            imageUrls: generateImageUrls(6, 55, 1, 18),
          },
          {
            title: 'Capítulo 56 - Meru Meru Me',
            id: '56',
            slug: slugify('Capítulo 56 - Meru Meru Me'),
            imageUrls: generateImageUrls(6, 56, 1, 18),
          },
          {
            title: 'Capítulo 57 - Até Aquela Vez',
            id: '57',
            slug: slugify('Capítulo 57 - Até Aquela Vez'),
            imageUrls: generateImageUrls(6, 57, 1, 18),
          },
        ],
      },
      {
        title: 'Volume 07',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-07.jpg',
        chapters: [
          {
            title: 'Capítulo 58 - A Estranheza de Suzume',
            id: '58',
            slug: slugify('Capítulo 58 - A Estranheza de Suzume'),
            imageUrls: generateImageUrls(7, 58, 2, 21),
          },
          {
            title: 'Capítulo 59 - Homem Livre',
            id: '59',
            slug: slugify('Capítulo 59 - Homem Livre'),
            imageUrls: generateImageUrls(7, 59, 1, 22),
          },
          {
            title: 'Capítulo 60 - Um Poder Incrível',
            id: '60',
            slug: slugify('Capítulo 60 - Um Poder Incrível'),
            imageUrls: generateImageUrls(7, 60, 1, 18),
          },
          {
            title: 'Capítulo 61 - A Força de Kiyomaro',
            id: '61',
            slug: slugify('Capítulo 61 - A Força de Kiyomaro'),
            imageUrls: generateImageUrls(7, 61, 1, 18),
          },
          {
            title: 'Capítulo 62 - A Magia Mais Forte',
            id: '62',
            slug: slugify('Capítulo 62 - A Magia Mais Forte'),
            imageUrls: generateImageUrls(7, 62, 1, 17),
          },
          {
            title: 'Capítulo 63 - Batalha no Parque',
            id: '63',
            slug: slugify('Capítulo 63 - Batalha no Parque'),
            imageUrls: generateImageUrls(7, 63, 1, 18),
          },
          {
            title: 'Capítulo 64 - A Escultura Inspiradora',
            id: '64',
            slug: slugify('Capítulo 64 - A Escultura Inspiradora'),
            imageUrls: generateImageUrls(7, 64, 1, 18),
          },
          {
            title: 'Capítulo 65 - O Poder de Danny',
            id: '65',
            slug: slugify('Capítulo 65 - O Poder de Danny'),
            imageUrls: generateImageUrls(7, 65, 1, 18),
          },
          {
            title: 'Capítulo 66 - Um Trabalho Bem Feito',
            id: '66',
            slug: slugify('Capítulo 66 - Um Trabalho Bem Feito'),
            imageUrls: generateImageUrls(7, 66, 1, 24),
          },
        ],
      },
      {
        title: 'Volume 08',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-08.jpg',
        chapters: [
          {
            title: 'Capítulo 67 - A Combinação Mais Forte',
            id: '67',
            slug: slugify('Capítulo 67 - A Combinação Mais Forte'),
            imageUrls: generateImageUrls(8, 67, 2, 21),
          },
          {
            title: 'Capítulo 68 - Choque Elétrico ao Céu',
            id: '68',
            slug: slugify('Capítulo 68 - Choque Elétrico ao Céu'),
            imageUrls: generateImageUrls(8, 68, 1, 17),
          },
          {
            title: 'Capítulo 69 - Mulheres Ferozes',
            id: '69',
            slug: slugify('Capítulo 69 - Mulheres Ferozes'),
            imageUrls: generateImageUrls(8, 69, 1, 18),
          },
          {
            title: 'Capítulo 70 - Uma Pessoa Importante',
            id: '70',
            slug: slugify('Capítulo 70 - Uma Pessoa Importante'),
            imageUrls: generateImageUrls(8, 70, 1, 18),
          },
          {
            title: 'Capítulo 71 - Comida Caseira de Amor',
            id: '71',
            slug: slugify('Capítulo 71 - Comida Caseira de Amor'),
            imageUrls: generateImageUrls(8, 71, 1, 25),
          },
          {
            title: 'Capítulo 72 - A Ilha Perigosa',
            id: '72',
            slug: slugify('Capítulo 72 - A Ilha Perigosa'),
            imageUrls: generateImageUrls(8, 72, 1, 18),
          },
          {
            title: 'Capítulo 73 - A Coragem para Lutar',
            id: '73',
            slug: slugify('Capítulo 73 - A Coragem para Lutar'),
            imageUrls: generateImageUrls(8, 73, 1, 17),
          },
          {
            title: 'Capítulo 74 - A Quinta Magia',
            id: '74',
            slug: slugify('Capítulo 74 - A Quinta Magia'),
            imageUrls: generateImageUrls(8, 74, 1, 18),
          },
          {
            title: 'Sessão Extra - Duas Princesas',
            id: '1',
            slug: slugify('Sessão Extra - Duas Princesas'),
            imageUrls: generateExtraImageUrls(8, 1, 1, 28),
          },
        ],
      },
      {
        title: 'Volume 09',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-09.jpg',
        chapters: [
          {
            title: 'Capítulo 75 - O Resfriado de Gash',
            id: '75',
            slug: slugify('Capítulo 75 - O Resfriado de Gash'),
            imageUrls: generateImageUrls(9, 75, 2, 21),
          },
          {
            title: 'Capítulo 76 - Uma Diferença de Poderes',
            id: '76',
            slug: slugify('Capítulo 76 - Uma Diferença de Poderes'),
            imageUrls: generateImageUrls(9, 76, 1, 16),
          },
          {
            title: 'Capítulo 77 - Um Coração Inabalável',
            id: '77',
            slug: slugify('Capítulo 77 - Um Coração Inabalável'),
            imageUrls: generateImageUrls(9, 77, 1, 18),
          },
          {
            title: 'Capítulo 78 - Um Dia de Alegria',
            id: '78',
            slug: slugify('Capítulo 78 - Um Dia de Alegria'),
            imageUrls: generateImageUrls(9, 78, 1, 18),
          },
          {
            title: 'Capítulo 79 - O Verdadeiro Herói',
            id: '79',
            slug: slugify('Capítulo 79 - O Verdadeiro Herói'),
            imageUrls: generateImageUrls(9, 79, 1, 18),
          },
          {
            title: 'Capítulo 80 - O Caçador Sem Forma',
            id: '80',
            slug: slugify('Capítulo 80 - O Caçador Sem Forma'),
            imageUrls: generateImageUrls(9, 80, 1, 18),
          },
          {
            title: 'Capítulo 81 - Caçador vs Caça',
            id: '81',
            slug: slugify('Capítulo 81 - Caçador vs Caça'),
            imageUrls: generateImageUrls(9, 81, 1, 20),
          },
          {
            title: 'Capítulo 82 - Sendo Caçado',
            id: '82',
            slug: slugify('Capítulo 82 - Sendo Caçado'),
            imageUrls: generateImageUrls(9, 82, 1, 18),
          },
          {
            title: 'Capítulo 83 - Ainda Assim, um Objeto Desconhecido',
            id: '83',
            slug: slugify('Capítulo 83 - Ainda Assim, um Objeto Desconhecido'),
            imageUrls: generateImageUrls(9, 83, 1, 18),
          },
          {
            title: 'Capítulo 84 - O Enigma dos Litógrafos',
            id: '84',
            slug: slugify('Capítulo 84 - O Enigma dos Litógrafos'),
            imageUrls: generateImageUrls(9, 84, 1, 19),
          },
        ],
      },
      {
        title: 'Volume 10',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-10.jpg',
        chapters: [
          {
            title: 'Capítulo 85 - Um Irmão de Verdade',
            id: '85',
            slug: slugify('Capítulo 85 - Um Irmão de Verdade'),
            imageUrls: generateImageUrls(10, 85, 2, 21),
          },
          {
            title: 'Capítulo 86 - A Batalha do Irmão',
            id: '86',
            slug: slugify('Capítulo 86 - A Batalha do Irmão'),
            imageUrls: generateImageUrls(10, 86, 1, 18),
          },
          {
            title: 'Capítulo 87 - A Última Esperança',
            id: '87',
            slug: slugify('Capítulo 87 - A Última Esperança'),
            imageUrls: generateImageUrls(10, 87, 1, 18),
          },
          {
            title: 'Capítulo 88 - A Razão da Invulnerabilidade',
            id: '88',
            slug: slugify('Capítulo 88 - A Razão da Invulnerabilidade'),
            imageUrls: generateImageUrls(10, 88, 1, 18),
          },
          {
            title: 'Capítulo 89 - Encarando de Frente',
            id: '89',
            slug: slugify('Capítulo 89 - Encarando de Frente'),
            imageUrls: generateImageUrls(10, 89, 4, 17),
          },
          {
            title: 'Capítulo 90 - Força Ingênua',
            id: '90',
            slug: slugify('Capítulo 90 - Força Ingênua'),
            imageUrls: generateImageUrls(10, 90, 1, 18),
          },
          {
            title: 'Capítulo 91 - Aquela Coisa Insuficiente',
            id: '91',
            slug: slugify('Capítulo 91 - Aquela Coisa Insuficiente'),
            imageUrls: generateImageUrls(10, 91, 1, 17),
          },
          {
            title: 'Capítulo 92 - Uma Estrada Difícil',
            id: '92',
            slug: slugify('Capítulo 92 - Uma Estrada Difícil'),
            imageUrls: generateImageUrls(10, 92, 1, 18),
          },
          {
            title: 'Capítulo 93 - Quem é o Guardião?',
            id: '93',
            slug: slugify('Capítulo 93 - Quem é o Guardião?'),
            imageUrls: generateImageUrls(10, 93, 1, 18),
          },
          {
            title: 'Capítulo 94 - Uma Responsabilidade Importante',
            id: '94',
            slug: slugify('Capítulo 94 - Uma Responsabilidade Importante'),
            imageUrls: generateImageUrls(10, 94, 1, 19),
          },
        ],
      },
      {
        title: 'Volume 11',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-11.jpg',
        chapters: [
          {
            title: 'Capítulo 95 - Os Doze Assassinos',
            id: '95',
            slug: slugify('Capítulo 95 - Os Doze Assassinos'),
            imageUrls: generateImageUrls(11, 95, 2, 21),
          },
          {
            title: 'Capítulo 96 - O Segredo do Livro',
            id: '96',
            slug: slugify('Capítulo 96 - O Segredo do Livro'),
            imageUrls: generateImageUrls(11, 96, 4, 18),
          },
          {
            title: 'Capítulo 97 - A Sexta Magia',
            id: '97',
            slug: slugify('Capítulo 97 - A Sexta Magia'),
            imageUrls: generateImageUrls(11, 97, 1, 18),
          },
          {
            title: 'Capítulo 98 - A Chance de Luta de 30 Segundos',
            id: '98',
            slug: slugify('Capítulo 98 - A Chance de Luta de 30 Segundos'),
            imageUrls: generateImageUrls(11, 98, 1, 18),
          },
          {
            title: 'Capítulo 99 - Personalidade de um Rei',
            id: '99',
            slug: slugify('Capítulo 99 - Personalidade de um Rei'),
            imageUrls: generateImageUrls(11, 99, 1, 18),
          },
          {
            title: 'Capítulo 100 - Sentimentos Sinceros',
            id: '100',
            slug: slugify('Capítulo 100 - Sentimentos Sinceros'),
            imageUrls: generateImageUrls(11, 100, 3, 19),
          },
          {
            title: 'Capítulo 101 - A Pior Compatibilidade',
            id: '101',
            slug: slugify('Capítulo 101 - A Pior Compatibilidade'),
            imageUrls: generateImageUrls(11, 101, 1, 18),
          },
          {
            title: 'Capítulo 102 - Forma Odiada',
            id: '102',
            slug: slugify('Capítulo 102 - Forma Odiada'),
            imageUrls: generateImageUrls(11, 102, 1, 17),
          },
          {
            title: 'Capítulo 103 - Um Poder Maligno',
            id: '103',
            slug: slugify('Capítulo 103 - Um Poder Maligno'),
            imageUrls: generateImageUrls(11, 103, 1, 22),
          },
        ],
      },
      {
        title: 'Volume 12',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-12.jpg',
        chapters: [
          {
            title: 'Capítulo 104 - Revanche',
            id: '104',
            slug: slugify('Capítulo 104 - Revanche'),
            imageUrls: generateImageUrls(12, 104, 2, 21),
          },
          {
            title: 'Capítulo 105 - Guerreiros Milenares',
            id: '105',
            slug: slugify('Capítulo 105 - Guerreiros Milenares'),
            imageUrls: generateImageUrls(12, 105, 1, 17),
          },
          {
            title: 'Capítulo 106 - Inimigos Insensíveis',
            id: '106',
            slug: slugify('Capítulo 106 - Inimigos Insensíveis'),
            imageUrls: generateImageUrls(12, 106, 1, 18),
          },
          {
            title: 'Capítulo 107 - Colha o que Você Plantou',
            id: '107',
            slug: slugify('Capítulo 107 - Colha o que Você Plantou'),
            imageUrls: generateImageUrls(12, 107, 1, 17),
          },
          {
            title: 'Capítulo 108 - Luz',
            id: '108',
            slug: slugify('Capítulo 108 - Luz'),
            imageUrls: generateImageUrls(12, 108, 1, 16),
          },
          {
            title: 'Capítulo 109 - A Verdadeira Forma de Lord',
            id: '109',
            slug: slugify('Capítulo 109 - A Verdadeira Forma de Lord'),
            imageUrls: generateImageUrls(12, 109, 1, 17),
          },
          {
            title: 'Capítulo 110 - A Carta',
            id: '110',
            slug: slugify('Capítulo 110 - A Carta'),
            imageUrls: generateImageUrls(12, 110, 1, 18),
          },
          {
            title: 'Capítulo 111 - Um Bebê Chorão',
            id: '111',
            slug: slugify('Capítulo 111 - Um Bebê Chorão'),
            imageUrls: generateImageUrls(12, 111, 1, 18),
          },
          {
            title: 'Capítulo 112 - O Poder de Kiyanchome',
            id: '112',
            slug: slugify('Capítulo 112 - O Poder de Kiyanchome'),
            imageUrls: generateImageUrls(12, 112, 1, 18),
          },
          {
            title: 'Capítulo 113 - Bateria de Força',
            id: '113',
            slug: slugify('Capítulo 113 - Bateria de Força'),
            imageUrls: generateImageUrls(12, 113, 1, 19),
          },
        ],
      },
      {
        title: 'Volume 13',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-13.jpg',
        chapters: [
          {
            title: 'Capítulo 114 - A Escolha de um Estilo de Luta',
            id: '114',
            slug: slugify('Capítulo 114 - A Escolha de um Estilo de Luta'),
            imageUrls: generateImageUrls(13, 114, 2, 21),
          },
          {
            title: 'Capítulo 115 - Definitiva X Definitiva',
            id: '115',
            slug: slugify('Capítulo 115 - Definitiva X Definitiva'),
            imageUrls: generateImageUrls(13, 115, 1, 16),
          },
          {
            title: 'Capítulo 116 - A Promessa',
            id: '116',
            slug: slugify('Capítulo 116 - A Promessa'),
            imageUrls: generateImageUrls(13, 116, 1, 17),
          },
          {
            title: 'Capítulo 117 - Raio "V"',
            id: '117',
            slug: slugify('Capítulo 117 - Raio "V"'),
            imageUrls: generateImageUrls(13, 117, 1, 17),
          },
          {
            title: 'Capítulo 118 - Esferas Brilhantes',
            id: '118',
            slug: slugify('Capítulo 118 - Esferas Brilhantes'),
            imageUrls: generateImageUrls(13, 118, 1, 18),
          },
          {
            title: 'Capítulo 119 - Combinação!',
            id: '119',
            slug: slugify('Capítulo 119 - Combinação!'),
            imageUrls: generateImageUrls(13, 119, 1, 16),
          },
          {
            title: 'Capítulo 120 - Parceiro',
            id: '120',
            slug: slugify('Capítulo 120 - Parceiro'),
            imageUrls: generateImageUrls(13, 120, 1, 18),
          },
          {
            title: 'Capítulo 121 - Uma Razão Sem Emoção',
            id: '121',
            slug: slugify('Capítulo 121 - Uma Razão Sem Emoção'),
            imageUrls: generateImageUrls(13, 121, 1, 18),
          },
          {
            title: 'Capítulo 122 - Olhos Poderosos',
            id: '122',
            slug: slugify('Capítulo 122 - Olhos Poderosos'),
            imageUrls: generateImageUrls(13, 122, 4, 20),
          },
          {
            title: 'Capítulo 123 - Mais Forte, Mais Profundo',
            id: '123',
            slug: slugify('Capítulo 123 - Mais Forte, Mais Profundo'),
            imageUrls: generateImageUrls(13, 123, 1, 20),
          },
        ],
      },
      {
        title: 'Volume 14',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-14.jpg',
        chapters: [
          {
            title: 'Capítulo 124 - Conversa de Corações',
            id: '124',
            slug: slugify('Capítulo 124 - Conversa de Corações'),
            imageUrls: generateImageUrls(14, 124, 2, 22),
          },
          {
            title: 'Capítulo 125 - Livro Confiado',
            id: '125',
            slug: slugify('Capítulo 125 - Livro Confiado'),
            imageUrls: generateImageUrls(14, 125, 1, 19),
          },
          {
            title: 'Capítulo 126 - Lutando Junto',
            id: '126',
            slug: slugify('Capítulo 126 - Lutando Junto'),
            imageUrls: generateImageUrls(14, 126, 1, 17),
          },
          {
            title: 'Capítulo 127 - O Demônio Mais Forte',
            id: '127',
            slug: slugify('Capítulo 127 - O Demônio Mais Forte'),
            imageUrls: generateImageUrls(14, 127, 1, 18),
          },
          {
            title: 'Capítulo 128 - O Único Caminho',
            id: '128',
            slug: slugify('Capítulo 128 - O Único Caminho'),
            imageUrls: generateImageUrls(14, 128, 1, 18),
          },
          {
            title: 'Capítulo 129 - Emergência',
            id: '129',
            slug: slugify('Capítulo 129 - Emergência'),
            imageUrls: generateImageUrls(14, 129, 1, 17),
          },
          {
            title: 'Capítulo 130 - Luta Perfeita',
            id: '130',
            slug: slugify('Capítulo 130 - Luta Perfeita'),
            imageUrls: generateImageUrls(14, 130, 1, 18),
          },
          {
            title: 'Capítulo 131 - A Busca pela Força',
            id: '131',
            slug: slugify('Capítulo 131 - A Busca pela Força'),
            imageUrls: generateImageUrls(14, 131, 1, 17),
          },
          {
            title: 'Capítulo 132 - O que Fica',
            id: '132',
            slug: slugify('Capítulo 132 - O que Fica'),
            imageUrls: generateImageUrls(14, 132, 1, 18),
          },
          {
            title: 'Capítulo 133 - Um Rei Protetor',
            id: '133',
            slug: slugify('Capítulo 133 - Um Rei Protetor'),
            imageUrls: generateImageUrls(14, 133, 1, 20),
          },
        ],
      },
      {
        title: 'Volume 15',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-15.jpg',
        chapters: [
          {
            title: 'Capítulo 134 - Vamos Cantar Juntos',
            id: '134',
            slug: slugify('Capítulo 134 - Vamos Cantar Juntos'),
            imageUrls: generateImageUrls(15, 134, 2, 22),
          },
          {
            title: 'Capítulo 135 - A Pessoa que Não Sabe Nada',
            id: '135',
            slug: slugify('Capítulo 135 - A Pessoa que Não Sabe Nada'),
            imageUrls: generateImageUrls(15, 135, 1, 18),
          },
          {
            title: 'Capítulo 136 - Meu Rei',
            id: '136',
            slug: slugify('Capítulo 136 - Meu Rei'),
            imageUrls: generateImageUrls(15, 136, 1, 18),
          },
          {
            title: 'Capítulo 137 - 12 Companheiros',
            id: '137',
            slug: slugify('Capítulo 137 - 12 Companheiros'),
            imageUrls: generateImageUrls(15, 137, 1, 19),
          },
          {
            title: 'Capítulo 138 - O Segredo da Força',
            id: '138',
            slug: slugify('Capítulo 138 - O Segredo da Força'),
            imageUrls: generateImageUrls(15, 138, 1, 18),
          },
          {
            title: 'Capítulo 139 - O Medo do Litógrafo',
            id: '139',
            slug: slugify('Capítulo 139 - O Medo do Litógrafo'),
            imageUrls: generateImageUrls(15, 139, 1, 18),
          },
          {
            title: 'Capítulo 140 - A Luz que Aponta para as Trevas',
            id: '140',
            slug: slugify('Capítulo 140 - A Luz que Aponta para as Trevas'),
            imageUrls: generateImageUrls(15, 140, 1, 17),
          },
          {
            title: 'Capítulo 141 - Mais um Rosto',
            id: '141',
            slug: slugify('Capítulo 141 - Mais um Rosto'),
            imageUrls: generateImageUrls(15, 141, 1, 18),
          },
          {
            title: 'Capítulo 142 - O Imperdoável',
            id: '142',
            slug: slugify('Capítulo 142 - O Imperdoável'),
            imageUrls: generateImageUrls(15, 142, 1, 16),
          },
          {
            title: 'Capítulo 143 - A Linha de Sherry',
            id: '143',
            slug: slugify('Capítulo 143 - A Linha de Sherry'),
            imageUrls: generateImageUrls(15, 143, 1, 17),
          },
        ],
      },
      {
        title: 'Volume 16',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-16.jpg',
        chapters: [
          {
            title: 'Capítulo 144 - Onde Devemos Lutar',
            id: '144',
            slug: slugify('Capítulo 144 - Onde Devemos Lutar'),
            imageUrls: generateImageUrls(16, 144, 2, 23),
          },
          {
            title: 'Capítulo 145 - Autocontrole',
            id: '145',
            slug: slugify('Capítulo 145 - Autocontrole'),
            imageUrls: generateImageUrls(16, 145, 1, 18),
          },
          {
            title: 'Capítulo 146 - A Maldição da Petrificação',
            id: '146',
            slug: slugify('Capítulo 146 - A Maldição da Petrificação'),
            imageUrls: generateImageUrls(16, 146, 1, 18),
          },
          {
            title: 'Capítulo 147 - O Guardião da Pedra da Lua',
            id: '147',
            slug: slugify('Capítulo 147 - O Guardião da Pedra da Lua'),
            imageUrls: generateImageUrls(16, 147, 1, 17),
          },
          {
            title: 'Capítulo 148 - O Terrível Grito de Guerra',
            id: '148',
            slug: slugify('Capítulo 148 - O Terrível Grito de Guerra'),
            imageUrls: generateImageUrls(16, 148, 1, 18),
          },
          {
            title: 'Capítulo 149 - A Dupla Mais Maligna',
            id: '149',
            slug: slugify('Capítulo 149 - A Dupla Mais Maligna'),
            imageUrls: generateImageUrls(16, 149, 1, 18),
          },
          {
            title: 'Capítulo 150 - Uma Fraca Luz',
            id: '150',
            slug: slugify('Capítulo 150 - Uma Fraca Luz'),
            imageUrls: generateImageUrls(16, 150, 1, 18),
          },
          {
            title: 'Capítulo 151 - A Luz Desconhecida',
            id: '151',
            slug: slugify('Capítulo 151 - A Luz Desconhecida'),
            imageUrls: generateImageUrls(16, 151, 1, 17),
          },
          {
            title: 'Capítulo 152 - A Última Ordem',
            id: '152',
            slug: slugify('Capítulo 152 - A Última Ordem'),
            imageUrls: generateImageUrls(16, 152, 1, 18),
          },
          {
            title: 'Capítulo 153 - Sem Deixar para Trás...',
            id: '153',
            slug: slugify('Capítulo 153 - Sem Deixar para Trás...'),
            imageUrls: generateImageUrls(16, 153, 1, 31),
          },
        ],
      },
      {
        title: 'Volume 17',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-17.jpg',
        chapters: [
          {
            title: 'Capítulo 154 - A Magia Proibida',
            id: '154',
            slug: slugify('Capítulo 154 - A Magia Proibida'),
            imageUrls: generateImageUrls(17, 154, 1, 23),
          },
          {
            title: 'Capítulo 155 - A Sétima Magia',
            id: '155',
            slug: slugify('Capítulo 155 - A Sétima Magia'),
            imageUrls: generateImageUrls(17, 155, 1, 17),
          },
          {
            title: 'Capítulo 156 - Agora, Gash',
            id: '156',
            slug: slugify('Capítulo 156 - Agora, Gash'),
            imageUrls: generateImageUrls(17, 156, 1, 17),
          },
          {
            title: 'Capítulo 157 - Ainda Não Acabou',
            id: '157',
            slug: slugify('Capítulo 157 - Ainda Não Acabou'),
            imageUrls: generateImageUrls(17, 157, 1, 17),
          },
          {
            title: 'Capítulo 158 - Verdadeira Forma',
            id: '158',
            slug: slugify('Capítulo 158 - Verdadeira Forma'),
            imageUrls: generateImageUrls(17, 158, 1, 18),
          },
          {
            title: 'Capítulo 159 - Sr. Sol e Sr. Lua',
            id: '159',
            slug: slugify('Capítulo 159 - Sr. Sol e Sr. Lua'),
            imageUrls: generateImageUrls(17, 159, 1, 17),
          },
          {
            title: 'Capítulo 160 - Por Esse Momento',
            id: '160',
            slug: slugify('Capítulo 160 - Por Esse Momento'),
            imageUrls: generateImageUrls(17, 160, 1, 17),
          },
          {
            title: 'Capítulo 161 - A Vingança Final',
            id: '161',
            slug: slugify('Capítulo 161 - A Vingança Final'),
            imageUrls: generateImageUrls(17, 161, 1, 18),
          },
          {
            title: 'Capítulo 162 - Torne-se o Rei, Definitivamente',
            id: '162',
            slug: slugify('Capítulo 162 - Torne-se o Rei, Definitivamente'),
            imageUrls: generateImageUrls(17, 162, 1, 17),
          },
          {
            title: 'Side Story - A Jornada de Luz do Professor Charada e Kid',
            id: 'extra-1',
            slug: slugify(
              'Side Story - A Jornada de Luz do Professor Charada e Kid'
            ),
            imageUrls: generateExtraImageUrls(17, 2, 1, 26),
          },
        ],
      },
      {
        title: 'Volume 18',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-18.jpg',
        chapters: [
          {
            title: 'Capítulo 163 - Estou de Volta',
            id: '163',
            slug: slugify('Capítulo 163 - Estou de Volta'),
            imageUrls: generateImageUrls(18, 163, 2, 23),
          },
          {
            title: 'Capítulo 164 - Um Olhar Desagradável',
            id: '164',
            slug: slugify('Capítulo 164 - Um Olhar Desagradável'),
            imageUrls: generateImageUrls(18, 164, 1, 18),
          },
          {
            title: 'Capítulo 165 - Transformação Q para Qualquer Situação!',
            id: '165',
            slug: slugify(
              'Capítulo 165 - Transformação Q para Qualquer Situação!'
            ),
            imageUrls: generateImageUrls(18, 165, 1, 18),
          },
          {
            title: 'Capítulo 166 - Dados Superiores',
            id: '166',
            slug: slugify('Capítulo 166 - Dados Superiores'),
            imageUrls: generateImageUrls(18, 166, 1, 18),
          },
          {
            title: 'Capítulo 167 - Uma Coisa Impossível',
            id: '167',
            slug: slugify('Capítulo 167 - Uma Coisa Impossível'),
            imageUrls: generateImageUrls(18, 167, 1, 16),
          },
          {
            title: 'Capítulo 168 - Procurem pelo Presente!',
            id: '168',
            slug: slugify('Capítulo 168 - Procurem pelo Presente!'),
            imageUrls: generateImageUrls(18, 168, 1, 18),
          },
          {
            title: 'Capítulo 169 - O Garoto que Conversa com o Vento',
            id: '169',
            slug: slugify('Capítulo 169 - O Garoto que Conversa com o Vento'),
            imageUrls: generateImageUrls(18, 169, 1, 18),
          },
          {
            title: 'Capítulo 170 - Ted e Jeed',
            id: '170',
            slug: slugify('Capítulo 170 - Ted e Jeed'),
            imageUrls: generateImageUrls(18, 170, 1, 18),
          },
          {
            title: 'Capítulo 171 - Meu Amigo',
            id: '171',
            slug: slugify('Capítulo 171 - Meu Amigo'),
            imageUrls: generateImageUrls(18, 171, 2, 20),
          },
          {
            title: 'Capítulo 172 - O Poder do Baou',
            id: '172',
            slug: slugify('Capítulo 172 - O Poder do Baou'),
            imageUrls: generateImageUrls(18, 172, 1, 23),
          },
        ],
      },
      {
        title: 'Volume 19',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-19.jpg',
        chapters: [
          {
            title: 'Capítulo 173 - Ele Não é Covarde',
            id: '173',
            slug: slugify('Capítulo 173 - Ele Não é Covarde'),
            imageUrls: generateImageUrls(19, 173, 2, 23),
          },
          {
            title: 'Capítulo 174 - A Salvo, Não Importa Como',
            id: '174',
            slug: slugify('Capítulo 174 - A Salvo, Não Importa Como'),
            imageUrls: generateImageUrls(19, 174, 1, 18),
          },
          {
            title: 'Capítulo 175 - Incendeie, Espírito de Luta',
            id: '175',
            slug: slugify('Capítulo 175 - Incendeie, Espírito de Luta'),
            imageUrls: generateImageUrls(19, 175, 1, 18),
          },
          {
            title: 'Capítulo 176 - Aquilo Não é uma Construção',
            id: '176',
            slug: slugify('Capítulo 176 - Aquilo Não é uma Construção'),
            imageUrls: generateImageUrls(19, 176, 1, 18),
          },
          {
            title: 'Capítulo 177 - Meus Colegas de Classe',
            id: '177',
            slug: slugify('Capítulo 177 - Meus Colegas de Classe'),
            imageUrls: generateImageUrls(19, 177, 1, 17),
          },
          {
            title: 'Capítulo 178 - A Carta para Gash',
            id: '178',
            slug: slugify('Capítulo 178 - A Carta para Gash'),
            imageUrls: generateImageUrls(19, 178, 1, 18),
          },
          {
            title: 'Capítulo 179 - Aquela Pessoa...',
            id: '179',
            slug: slugify('Capítulo 179 - Aquela Pessoa...'),
            imageUrls: generateImageUrls(19, 179, 1, 18),
          },
          {
            title: 'Capítulo 180 - Um Encontro ao Acaso no Mundo dos Demônios',
            id: '180',
            slug: slugify(
              'Capítulo 180 - Um Encontro ao Acaso no Mundo dos Demônios'
            ),
            imageUrls: generateImageUrls(19, 180, 1, 18),
          },
          {
            title: 'Capítulo 181 - Uma Imagem Terrível',
            id: '181',
            slug: slugify('Capítulo 181 - Uma Imagem Terrível'),
            imageUrls: generateImageUrls(19, 181, 1, 18),
          },
          {
            title: 'Capítulo 182 - Vai Ficar Tudo Bem Agora',
            id: '182',
            slug: slugify('Capítulo 182 - Vai Ficar Tudo Bem Agora'),
            imageUrls: generateImageUrls(19, 182, 1, 20),
          },
        ],
      },
      {
        title: 'Volume 20',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-20.jpg',
        chapters: [
          {
            title: 'Capítulo 183 - O Grito de Kyle',
            id: '183',
            slug: slugify('Capítulo 183 - O Grito de Kyle'),
            imageUrls: generateImageUrls(20, 183, 2, 22),
          },
          {
            title: 'Capítulo 184 - Oyoyo',
            id: '184',
            slug: slugify('Capítulo 184 - Oyoyo'),
            imageUrls: generateImageUrls(20, 184, 1, 18),
          },
          {
            title: 'Capítulo 185 - Despertar',
            id: '185',
            slug: slugify('Capítulo 185 - Despertar'),
            imageUrls: generateImageUrls(20, 185, 1, 18),
          },
          {
            title: 'Capítulo 186 - Uma Magia Assustadora',
            id: '186',
            slug: slugify('Capítulo 186 - Uma Magia Assustadora'),
            imageUrls: generateImageUrls(20, 186, 1, 17),
          },
          {
            title: 'Capítulo 187 - A Aura de Kiyomaro',
            id: '187',
            slug: slugify('Capítulo 187 - A Aura de Kiyomaro'),
            imageUrls: generateImageUrls(20, 187, 1, 18),
          },
          {
            title: 'Capítulo 188 - O Poder de Leo',
            id: '188',
            slug: slugify('Capítulo 188 - O Poder de Leo'),
            imageUrls: generateImageUrls(20, 188, 1, 20),
          },
          {
            title: 'Capítulo 189 - A Verdadeira Forma de Faudo',
            id: '189',
            slug: slugify('Capítulo 189 - A Verdadeira Forma de Faudo'),
            imageUrls: generateImageUrls(20, 189, 1, 16),
          },
          {
            title: 'Capítulo 190 - O Demônio Selado',
            id: '190',
            slug: slugify('Capítulo 190 - O Demônio Selado'),
            imageUrls: generateImageUrls(20, 190, 1, 17),
          },
          {
            title: 'Capítulo 191 - O Rival de Barry',
            id: '191',
            slug: slugify('Capítulo 191 - O Rival de Barry'),
            imageUrls: generateImageUrls(20, 191, 1, 18),
          },
          {
            title: 'Capítulo 192 - Um Sentimento Ruim',
            id: '192',
            slug: slugify('Capítulo 192 - Um Sentimento Ruim'),
            imageUrls: generateImageUrls(20, 192, 1, 19),
          },
        ],
      },
      {
        title: 'Volume 21',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-21.jpg',
        chapters: [
          {
            title: 'Capítulo 193 - A Decisão de KyanChome',
            id: '193',
            slug: slugify('Capítulo 193 - A Decisão de KyanChome'),
            imageUrls: generateImageUrls(21, 193, 2, 22),
          },
          {
            title: 'Capítulo 194 - Sentimentos Fortes',
            id: '194',
            slug: slugify('Capítulo 194 - Sentimentos Fortes'),
            imageUrls: generateImageUrls(21, 194, 1, 17),
          },
          {
            title: 'Capítulo 195 - A Última Magia',
            id: '195',
            slug: slugify('Capítulo 195 - A Última Magia'),
            imageUrls: generateImageUrls(21, 195, 1, 17),
          },
          {
            title: 'Capítulo 196 - Um Novo Encontro',
            id: '196',
            slug: slugify('Capítulo 196 - Um Novo Encontro'),
            imageUrls: generateImageUrls(21, 196, 1, 17),
          },
          {
            title: 'Capítulo 197 - Decisão',
            id: '197',
            slug: slugify('Capítulo 197 - Decisão'),
            imageUrls: generateImageUrls(21, 197, 1, 18),
          },
          {
            title: 'Capítulo 198 - O Jeito de um Rei',
            id: '198',
            slug: slugify('Capítulo 198 - O Jeito de um Rei'),
            imageUrls: generateImageUrls(21, 198, 1, 18),
          },
          {
            title: 'Capítulo 199 - O Primeiro Desafio',
            id: '199',
            slug: slugify('Capítulo 199 - O Primeiro Desafio'),
            imageUrls: generateImageUrls(21, 199, 1, 18),
          },
          {
            title: 'Capítulo 200 - Meru Meru Me...?',
            id: '200',
            slug: slugify('Capítulo 200 - Meru Meru Me...?'),
            imageUrls: generateImageUrls(21, 200, 1, 21),
          },
          {
            title: 'Capítulo 201 - Rota de Fuga',
            id: '201',
            slug: slugify('Capítulo 201 - Rota de Fuga'),
            imageUrls: generateImageUrls(21, 201, 1, 17),
          },
          {
            title: 'Capítulo 202 - Coração Verdadeiro',
            id: '202',
            slug: slugify('Capítulo 202 - Coração Verdadeiro'),
            imageUrls: generateImageUrls(21, 202, 1, 21),
          },
        ],
      },
      {
        title: 'Volume 22',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-22.jpg',
        chapters: [
          {
            title: 'Capítulo 203 - Algo que Devo Proteger',
            id: '203',
            slug: slugify('Capítulo 203 - Algo que Devo Proteger'),
            imageUrls: generateImageUrls(22, 203, 2, 23),
          },
          {
            title: 'Capítulo 204 - O Labirinto à Frente...',
            id: '204',
            slug: slugify('Capítulo 204 - O Labirinto à Frente...'),
            imageUrls: generateImageUrls(22, 204, 1, 17),
          },
          {
            title: 'Capítulo 205 - Mesmo que Seja Assustador...',
            id: '205',
            slug: slugify('Capítulo 205 - Mesmo que Seja Assustador...'),
            imageUrls: generateImageUrls(22, 205, 1, 18),
          },
          {
            title: 'Capítulo 206 - A Profecia de Earth',
            id: '206',
            slug: slugify('Capítulo 206 - A Profecia de Earth'),
            imageUrls: generateImageUrls(22, 206, 1, 18),
          },
          {
            title: 'Capítulo 207 - Ataque e Defesa',
            id: '207',
            slug: slugify('Capítulo 207 - Ataque e Defesa'),
            imageUrls: generateImageUrls(22, 207, 1, 17),
          },
          {
            title: 'Capítulo 208 - Um Raio de Esperança',
            id: '208',
            slug: slugify('Capítulo 208 - Um Raio de Esperança'),
            imageUrls: generateImageUrls(22, 208, 1, 18),
          },
          {
            title: 'Capítulo 209 - A Ressurreição de Faudo',
            id: '209',
            slug: slugify('Capítulo 209 - A Ressurreição de Faudo'),
            imageUrls: generateImageUrls(22, 209, 1, 17),
          },
          {
            title: 'Capítulo 210 - Para Sobreviver',
            id: '210',
            slug: slugify('Capítulo 210 - Para Sobreviver'),
            imageUrls: generateImageUrls(22, 210, 1, 17),
          },
          {
            title: 'Capítulo 211 - Uma Batalha de Sagacidade',
            id: '211',
            slug: slugify('Capítulo 211 - Uma Batalha de Sagacidade'),
            imageUrls: generateImageUrls(22, 211, 1, 17),
          },
          {
            title: 'Capítulo 212 - O Pior Cenário Possível',
            id: '212',
            slug: slugify('Capítulo 212 - O Pior Cenário Possível'),
            imageUrls: generateImageUrls(22, 212, 1, 19),
          },
        ],
      },
      {
        title: 'Volume 23',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-23.jpg',
        chapters: [
          {
            title: 'Capítulo 213 - Não Importa o que Aconteça',
            id: '213',
            slug: slugify('Capítulo 213 - Não Importa o que Aconteça'),
            imageUrls: generateImageUrls(23, 213, 2, 23),
          },
          {
            title: 'Capítulo 214 - Torne-se Rei',
            id: '214',
            slug: slugify('Capítulo 214 - Torne-se Rei'),
            imageUrls: generateImageUrls(23, 214, 1, 18),
          },
          {
            title: 'Capítulo 215 - Uma Voz que Não Saiu',
            id: '215',
            slug: slugify('Capítulo 215 - Uma Voz que Não Saiu'),
            imageUrls: generateImageUrls(23, 215, 1, 18),
          },
          {
            title: 'Capítulo 216 - Punho Cheio de Emoções',
            id: '216',
            slug: slugify('Capítulo 216 - Punho Cheio de Emoções'),
            imageUrls: generateImageUrls(23, 216, 1, 17),
          },
          {
            title: 'Capítulo 217 - Uma Diferença de Classe',
            id: '217',
            slug: slugify('Capítulo 217 - Uma Diferença de Classe'),
            imageUrls: generateImageUrls(23, 217, 1, 19),
          },
          {
            title: 'Capítulo 218 - A Tomada de Faudo',
            id: '218',
            slug: slugify('Capítulo 218 - A Tomada de Faudo'),
            imageUrls: generateImageUrls(23, 218, 2, 18),
          },
          {
            title: 'Capítulo 219 - Nossas Próprias Determinações',
            id: '219',
            slug: slugify('Capítulo 219 - Nossas Próprias Determinações'),
            imageUrls: generateImageUrls(23, 219, 1, 18),
          },
          {
            title: 'Capítulo 220 - Resistência Inútil',
            id: '220',
            slug: slugify('Capítulo 220 - Resistência Inútil'),
            imageUrls: generateImageUrls(23, 220, 1, 17),
          },
          {
            title: 'Capítulo 221 - Uma Imagem Clara',
            id: '221',
            slug: slugify('Capítulo 221 - Uma Imagem Clara'),
            imageUrls: generateImageUrls(23, 221, 1, 18),
          },
          {
            title: 'Capítulo 222 - A Determinação da Dupla',
            id: '222',
            slug: slugify('Capítulo 222 - A Determinação da Dupla'),
            imageUrls: generateImageUrls(23, 222, 1, 18),
          },
          {
            title: 'Capítulo 223 - O Último Rosto Sorridente',
            id: '223',
            slug: slugify('Capítulo 223 - O Último Rosto Sorridente'),
            imageUrls: generateImageUrls(23, 223, 1, 21),
          },
        ],
      },
      {
        title: 'Volume 24',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-24.jpg',
        chapters: [
          {
            title: 'Capítulo 224 - O Começo do Desespero',
            id: '224',
            slug: slugify('Capítulo 224 - O Começo do Desespero'),
            imageUrls: generateImageUrls(24, 224, 3, 21),
          },
          {
            title: 'Capítulo 225 - O Caminho até o Cérebro',
            id: '225',
            slug: slugify('Capítulo 225 - O Caminho até o Cérebro'),
            imageUrls: generateImageUrls(24, 225, 1, 18),
          },
          {
            title: 'Capítulo 226 - O Poder de Godufa',
            id: '226',
            slug: slugify('Capítulo 226 - O Poder de Godufa'),
            imageUrls: generateImageUrls(24, 226, 1, 19),
          },
          {
            title: 'Capítulo 227 - Nossos Respectivos Deveres',
            id: '227',
            slug: slugify('Capítulo 227 - Nossos Respectivos Deveres'),
            imageUrls: generateImageUrls(24, 227, 1, 19),
          },
          {
            title: 'Capítulo 228 - Um Grande Engano',
            id: '228',
            slug: slugify('Capítulo 228 - Um Grande Engano'),
            imageUrls: generateImageUrls(24, 228, 1, 18),
          },
          {
            title: 'Capítulo 229 - Continuem com o Plano',
            id: '229',
            slug: slugify('Capítulo 229 - Continuem com o Plano'),
            imageUrls: generateImageUrls(24, 229, 1, 18),
          },
          {
            title: 'Capítulo 230 - Um Motivo Importante',
            id: '230',
            slug: slugify('Capítulo 230 - Um Motivo Importante'),
            imageUrls: generateImageUrls(24, 230, 1, 18),
          },
          {
            title: 'Capítulo 231 - Inúmeras Portas de Ferro',
            id: '231',
            slug: slugify('Capítulo 231 - Inúmeras Portas de Ferro'),
            imageUrls: generateImageUrls(24, 231, 1, 17),
          },
          {
            title: 'Capítulo 232 - Terror Inabalável',
            id: '232',
            slug: slugify('Capítulo 232 - Terror Inabalável'),
            imageUrls: generateImageUrls(24, 232, 1, 17),
          },
          {
            title: 'Capítulo 233 - Um Grito de Socorro',
            id: '233',
            slug: slugify('Capítulo 233 - Um Grito de Socorro'),
            imageUrls: generateImageUrls(24, 233, 1, 19),
          },
        ],
      },
      {
        title: 'Volume 25',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-25.jpg',
        chapters: [
          {
            title: 'Capítulo 234 - Por Favor, Lembre-se',
            id: '234',
            slug: slugify('Capítulo 234 - Por Favor, Lembre-se'),
            imageUrls: generateImageUrls(25, 234, 2, 23),
          },
          {
            title: 'Capítulo 235 - Uma Jóia na Pilha de Lixo',
            id: '235',
            slug: slugify('Capítulo 235 - Uma Jóia na Pilha de Lixo'),
            imageUrls: generateImageUrls(25, 235, 1, 18),
          },
          {
            title: 'Capítulo 236 - Eu Sempre Estive te Observando...',
            id: '236',
            slug: slugify('Capítulo 236 - Eu Sempre Estive te Observando...'),
            imageUrls: generateImageUrls(25, 236, 1, 17),
          },
          {
            title: 'Capítulo 237 - Uma Esperança Chamada Aliados',
            id: '237',
            slug: slugify('Capítulo 237 - Uma Esperança Chamada Aliados'),
            imageUrls: generateImageUrls(25, 237, 1, 16),
          },
          {
            title: 'Capítulo 238 - Parece Grande',
            id: '238',
            slug: slugify('Capítulo 238 - Parece Grande'),
            imageUrls: generateImageUrls(25, 238, 1, 18),
          },
          {
            title: 'Capítulo 239 - Um Nível Diferente de Força',
            id: '239',
            slug: slugify('Capítulo 239 - Um Nível Diferente de Força'),
            imageUrls: generateImageUrls(25, 239, 1, 18),
          },
          {
            title: 'Capítulo 240 - Olhos de Leão',
            id: '240',
            slug: slugify('Capítulo 240 - Olhos de Leão'),
            imageUrls: generateImageUrls(25, 240, 1, 18),
          },
          {
            title: 'Capítulo 241 - O Que Você Está Fazendo!?',
            id: '241',
            slug: slugify('Capítulo 241 - O Que Você Está Fazendo!?'),
            imageUrls: generateImageUrls(25, 241, 1, 21),
          },
          {
            title: 'Capítulo 242 - Nosso Verdadeiro Poder',
            id: '242',
            slug: slugify('Capítulo 242 - Nosso Verdadeiro Poder'),
            imageUrls: generateImageUrls(25, 242, 1, 18),
          },
          {
            title: 'Capítulo 243 - Laço Prometido',
            id: '243',
            slug: slugify('Capítulo 243 - Laço Prometido'),
            imageUrls: generateImageUrls(25, 243, 1, 21),
          },
        ],
      },
      {
        title: 'Volume 26',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-26.jpg',
        chapters: [
          {
            title: 'Capítulo 244 - Uma Alegre Batalha',
            id: '244',
            slug: slugify('Capítulo 244 - Uma Alegre Batalha'),
            imageUrls: generateImageUrls(26, 244, 3, 22),
          },
          {
            title: 'Capítulo 245 - Os Dois Que Ficam em Meu Caminho',
            id: '245',
            slug: slugify('Capítulo 245 - Os Dois Que Ficam em Meu Caminho'),
            imageUrls: generateImageUrls(26, 245, 1, 17),
          },
          {
            title: 'Capítulo 246 - Darei o Melhor de Mim',
            id: '246',
            slug: slugify('Capítulo 246 - Darei o Melhor de Mim'),
            imageUrls: generateImageUrls(26, 246, 1, 18),
          },
          {
            title: 'Capítulo 247 - Absolutamente Não',
            id: '247',
            slug: slugify('Capítulo 247 - Absolutamente Não'),
            imageUrls: generateImageUrls(26, 247, 1, 18),
          },
          {
            title: 'Capítulo 248 - Decisão Inabalável',
            id: '248',
            slug: slugify('Capítulo 248 - Decisão Inabalável'),
            imageUrls: generateImageUrls(26, 248, 1, 17),
          },
          {
            title: 'Capítulo 249 - Pensamentos Ardentes',
            id: '249',
            slug: slugify('Capítulo 249 - Pensamentos Ardentes'),
            imageUrls: generateImageUrls(26, 249, 1, 17),
          },
          {
            title: 'Capítulo 250 - Sino da Esperança',
            id: '250',
            slug: slugify('Capítulo 250 - Sino da Esperança'),
            imageUrls: generateImageUrls(26, 250, 1, 17),
          },
          {
            title: 'Capítulo 251 - Até que o Kiyomaro Chegue',
            id: '251',
            slug: slugify('Capítulo 251 - Até que o Kiyomaro Chegue'),
            imageUrls: generateImageUrls(26, 251, 1, 18),
          },
          {
            title: 'Capítulo 252 - Última Chance',
            id: '252',
            slug: slugify('Capítulo 252 - Última Chance'),
            imageUrls: generateImageUrls(26, 252, 1, 18),
          },
          {
            title: 'Capítulo 253 - Aquela Voz...',
            id: '253',
            slug: slugify('Capítulo 253 - Aquela Voz...'),
            imageUrls: generateImageUrls(26, 253, 1, 17),
          },
        ],
      },
      {
        title: 'Volume 27',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-27.jpg',
        chapters: [
          {
            title: 'Capítulo 254 - Aquele em Quem Momon Acredita',
            id: '254',
            slug: slugify('Capítulo 254 - Aquele em Quem Momon Acredita'),
            imageUrls: generateImageUrls(27, 254, 3, 20),
          },
          {
            title: 'Capítulo 255 - Um Novo Poder',
            id: '255',
            slug: slugify('Capítulo 255 - Um Novo Poder'),
            imageUrls: generateImageUrls(27, 255, 1, 17),
          },
          {
            title: 'Capítulo 256 - Cavando Seu Próprio Túmulo...',
            id: '256',
            slug: slugify('Capítulo 256 - Cavando Seu Próprio Túmulo...'),
            imageUrls: generateImageUrls(27, 256, 1, 17),
          },
          {
            title: 'Capítulo 257 - Faudo se Aproxima',
            id: '257',
            slug: slugify('Capítulo 257 - Faudo se Aproxima'),
            imageUrls: generateImageUrls(27, 257, 1, 17),
          },
          {
            title: 'Capítulo 258 - Gash e Zeon',
            id: '258',
            slug: slugify('Capítulo 258 - Gash e Zeon'),
            imageUrls: generateImageUrls(27, 258, 1, 18),
          },
          {
            title: 'Capítulo 259 - O Motivo da Batalha',
            id: '259',
            slug: slugify('Capítulo 259 - O Motivo da Batalha'),
            imageUrls: generateImageUrls(27, 259, 1, 18),
          },
          {
            title: 'Capítulo 260 - O Poder de Dufaux',
            id: '260',
            slug: slugify('Capítulo 260 - O Poder de Dufaux'),
            imageUrls: generateImageUrls(27, 260, 1, 18),
          },
          {
            title: 'Capítulo 261 - Baou Zakeruga',
            id: '261',
            slug: slugify('Capítulo 261 - Baou Zakeruga'),
            imageUrls: generateImageUrls(27, 261, 1, 17),
          },
          {
            title: 'Capítulo 262 - Trevas Envolventes',
            id: '262',
            slug: slugify('Capítulo 262 - Trevas Envolventes'),
            imageUrls: generateImageUrls(27, 262, 1, 17),
          },
          {
            title: 'Capítulo 263 - Ataque Misterioso',
            id: '263',
            slug: slugify('Capítulo 263 - Ataque Misterioso'),
            imageUrls: generateImageUrls(27, 263, 1, 22),
          },
        ],
      },
      {
        title: 'Volume 28',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-28.jpg',
        chapters: [
          {
            title: 'Capítulo 264 - Atiradora',
            id: '264',
            slug: slugify('Capítulo 264 - Atiradora'),
            imageUrls: generateImageUrls(28, 264, 3, 21),
          },
          {
            title: 'Capítulo 265 - A Mira de Cherish',
            id: '265',
            slug: slugify('Capítulo 265 - A Mira de Cherish'),
            imageUrls: generateImageUrls(28, 265, 1, 16),
          },
          {
            title: 'Capítulo 266 - O Grito de Tio',
            id: '266',
            slug: slugify('Capítulo 266 - O Grito de Tio'),
            imageUrls: generateImageUrls(28, 266, 1, 16),
          },
          {
            title: 'Capítulo 267 - Esse Escudo é Forte!',
            id: '267',
            slug: slugify('Capítulo 267 - Esse Escudo é Forte!'),
            imageUrls: generateImageUrls(28, 267, 1, 17),
          },
          {
            title: 'Capítulo 268 - Ainda Não Seguiu em Frente',
            id: '268',
            slug: slugify('Capítulo 268 - Ainda Não Seguiu em Frente'),
            imageUrls: generateImageUrls(28, 268, 1, 17),
          },
          {
            title: 'Capítulo 269 - Você é o Único',
            id: '269',
            slug: slugify('Capítulo 269 - Você é o Único'),
            imageUrls: generateImageUrls(28, 269, 1, 18),
          },
          {
            title: 'Capítulo 270 - Me Escute',
            id: '270',
            slug: slugify('Capítulo 270 - Me Escute'),
            imageUrls: generateImageUrls(28, 270, 1, 17),
          },
          {
            title: 'Capítulo 271 - Um Triste Poder',
            id: '271',
            slug: slugify('Capítulo 271 - Um Triste Poder'),
            imageUrls: generateImageUrls(28, 271, 1, 18),
          },
          {
            title: 'Capítulo 272 - Essa é a Resposta',
            id: '272',
            slug: slugify('Capítulo 272 - Essa é a Resposta'),
            imageUrls: generateImageUrls(28, 272, 1, 17),
          },
          {
            title: 'Capítulo 273 - O Desejo de Zeon',
            id: '273',
            slug: slugify('Capítulo 273 - O Desejo de Zeon'),
            imageUrls: generateImageUrls(28, 273, 1, 20),
          },
        ],
      },
      {
        title: 'Volume 29',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-29.jpg',
        chapters: [
          {
            title: 'Capítulo 274 - A Fúria de Faudo',
            id: '274',
            slug: slugify('Capítulo 274 - A Fúria de Faudo'),
            imageUrls: generateImageUrls(29, 274, 3, 21),
          },
          {
            title: 'Capítulo 275 - Eu Conheço Essas Lágrimas',
            id: '275',
            slug: slugify('Capítulo 275 - Eu Conheço Essas Lágrimas'),
            imageUrls: generateImageUrls(29, 275, 1, 17),
          },
          {
            title: 'Capítulo 276 - Uma Nova Classe',
            id: '276',
            slug: slugify('Capítulo 276 - Uma Nova Classe'),
            imageUrls: generateImageUrls(29, 276, 1, 18),
          },
          {
            title: 'Capítulo 277 - Ahaha',
            id: '277',
            slug: slugify('Capítulo 277 - Ahaha'),
            imageUrls: generateImageUrls(29, 277, 1, 18),
          },
          {
            title: 'Capítulo 278 - A Carta de Zeon',
            id: '278',
            slug: slugify('Capítulo 278 - A Carta de Zeon'),
            imageUrls: generateImageUrls(29, 278, 1, 17),
          },
          {
            title: 'Capítulo 279 - Chegou a Hora',
            id: '279',
            slug: slugify('Capítulo 279 - Chegou a Hora'),
            imageUrls: generateImageUrls(29, 279, 1, 17),
          },
          {
            title: 'Capítulo 280 - O Privilégio do Rei',
            id: '280',
            slug: slugify('Capítulo 280 - O Privilégio do Rei'),
            imageUrls: generateImageUrls(29, 280, 1, 17),
          },
          {
            title: 'Capítulo 281 - Gorm e Mir',
            id: '281',
            slug: slugify('Capítulo 281 - Gorm e Mir'),
            imageUrls: generateImageUrls(29, 281, 1, 18),
          },
          {
            title: 'Capítulo 282 - A Alegria da Vida',
            id: '282',
            slug: slugify('Capítulo 282 - A Alegria da Vida'),
            imageUrls: generateImageUrls(29, 282, 1, 18),
          },
          {
            title: 'Capítulo 283 - Eu Passarei a Mensagem',
            id: '283',
            slug: slugify('Capítulo 283 - Eu Passarei a Mensagem'),
            imageUrls: generateImageUrls(29, 283, 1, 17),
          },
        ],
      },
      {
        title: 'Volume 30',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-30.jpg',
        chapters: [
          {
            title: 'Capítulo 284 - Clear Note',
            id: '284',
            slug: slugify('Capítulo 284 - Clear Note'),
            imageUrls: generateImageUrls(30, 284, 3, 21),
          },
          {
            title: 'Capítulo 285 - Desista',
            id: '285',
            slug: slugify('Capítulo 285 - Desista'),
            imageUrls: generateImageUrls(30, 285, 1, 16),
          },
          {
            title: 'Capítulo 286 - Olhos de um Demônio',
            id: '286',
            slug: slugify('Capítulo 286 - Olhos de um Demônio'),
            imageUrls: generateImageUrls(30, 286, 1, 17),
          },
          {
            title: 'Capítulo 287 - O Prodígio da Tribo do Dragão',
            id: '287',
            slug: slugify('Capítulo 287 - O Prodígio da Tribo do Dragão'),
            imageUrls: generateImageUrls(30, 287, 1, 17),
          },
          {
            title: 'Capítulo 288 - Ainda Mais Forte',
            id: '288',
            slug: slugify('Capítulo 288 - Ainda Mais Forte'),
            imageUrls: generateImageUrls(30, 288, 1, 16),
          },
          {
            title:
              'Capítulo 289 - A Esperança dos Demônios e do Mundo dos Demônios',
            id: '289',
            slug: slugify(
              'Capítulo 289 - A Esperança dos Demônios e do Mundo dos Demônios'
            ),
            imageUrls: generateImageUrls(30, 289, 1, 17),
          },
          {
            title: 'Capítulo 290 - Magia Mais Forte vs Magia Mais Forte',
            id: '290',
            slug: slugify(
              'Capítulo 290 - Magia Mais Forte vs Magia Mais Forte'
            ),
            imageUrls: generateImageUrls(30, 290, 1, 15),
          },
          {
            title: 'Capítulo 291 - Um Desejo Confiado',
            id: '291',
            slug: slugify('Capítulo 291 - Um Desejo Confiado'),
            imageUrls: generateImageUrls(30, 291, 1, 16),
          },
          {
            title: 'Capítulo 292 - Faltam Dez Meses',
            id: '292',
            slug: slugify('Capítulo 292 - Faltam Dez Meses'),
            imageUrls: generateImageUrls(30, 292, 1, 17),
          },
          {
            title: 'Capítulo 293 - Regime de Treinamento Especial',
            id: '293',
            slug: slugify('Capítulo 293 - Regime de Treinamento Especial'),
            imageUrls: generateImageUrls(30, 293, 1, 21),
          },
        ],
      },
      {
        title: 'Volume 31',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-31.jpg',
        chapters: [
          {
            title: 'Capítulo 294 - A Transformação do Kanchome',
            id: '294',
            slug: slugify('Capítulo 294 - A Transformação do Kanchome'),
            imageUrls: generateImageUrls(31, 294, 3, 22),
          },
          {
            title: 'Capítulo 295 - Uma Nova Estrela',
            id: '295',
            slug: slugify('Capítulo 295 - Uma Nova Estrela'),
            imageUrls: generateImageUrls(31, 295, 1, 18),
          },
          {
            title: 'Capítulo 296 - Meu Primeiro Amigo',
            id: '296',
            slug: slugify('Capítulo 296 - Meu Primeiro Amigo'),
            imageUrls: generateImageUrls(31, 296, 1, 18),
          },
          {
            title: 'Capítulo 297 - Por Que Você Está Indo Tão Longe?',
            id: '297',
            slug: slugify('Capítulo 297 - Por Que Você Está Indo Tão Longe?'),
            imageUrls: generateImageUrls(31, 297, 1, 17),
          },
          {
            title: 'Capítulo 298 - Força Não Comprovada',
            id: '298',
            slug: slugify('Capítulo 298 - Força Não Comprovada'),
            imageUrls: generateImageUrls(31, 298, 1, 18),
          },
          {
            title: 'Capítulo 299 - Mesmo Que Você Seja Forte',
            id: '299',
            slug: slugify('Capítulo 299 - Mesmo Que Você Seja Forte'),
            imageUrls: generateImageUrls(31, 299, 1, 17),
          },
          {
            title: 'Capítulo 300 - O Leão e o Hipopótamo',
            id: '300',
            slug: slugify('Capítulo 300 - O Leão e o Hipopótamo'),
            imageUrls: generateImageUrls(31, 300, 1, 17),
          },
          {
            title: 'Capítulo 301 - Céus, Essas Lágrimas...',
            id: '301',
            slug: slugify('Capítulo 301 - Céus, Essas Lágrimas...'),
            imageUrls: generateImageUrls(31, 301, 1, 17),
          },
          {
            title: 'Capítulo 302 - Levando a Esperança Deles',
            id: '302',
            slug: slugify('Capítulo 302 - Levando a Esperança Deles'),
            imageUrls: generateImageUrls(31, 302, 1, 18),
          },
          {
            title: 'Capítulo 303 - O Amigo de Gorm',
            id: '303',
            slug: slugify('Capítulo 303 - O Amigo de Gorm'),
            imageUrls: generateImageUrls(31, 303, 1, 22),
          },
        ],
      },
      {
        title: 'Volume 32',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-32.jpg',
        chapters: [
          {
            title: 'Capítulo 304 - A Partida',
            id: '304',
            slug: slugify('Capítulo 304 - A Partida'),
            imageUrls: generateImageUrls(32, 304, 3, 20),
          },
          {
            title: 'Capítulo 305 - Amigos Confiáveis',
            id: '305',
            slug: slugify('Capítulo 305 - Amigos Confiáveis'),
            imageUrls: generateImageUrls(32, 305, 1, 15),
          },
          {
            title: 'Capítulo 306 - Os Resultados do Nosso Treinamento',
            id: '306',
            slug: slugify('Capítulo 306 - Os Resultados do Nosso Treinamento'),
            imageUrls: generateImageUrls(32, 306, 1, 17),
          },
          {
            title: 'Capítulo 307 - Caminho de Amigos',
            id: '307',
            slug: slugify('Capítulo 307 - Caminho de Amigos'),
            imageUrls: generateImageUrls(32, 307, 1, 16),
          },
          {
            title: 'Capítulo 308 - Eu Protegerei Todo Mundo',
            id: '308',
            slug: slugify('Capítulo 308 - Eu Protegerei Todo Mundo'),
            imageUrls: generateImageUrls(32, 308, 1, 17),
          },
          {
            title: 'Capítulo 309 - Te Vejo... Amanhã',
            id: '309',
            slug: slugify('Capítulo 309 - Te Vejo... Amanhã'),
            imageUrls: generateImageUrls(32, 309, 1, 16),
          },
          {
            title: 'Capítulo 310 - O Aliado Mais Forte',
            id: '310',
            slug: slugify('Capítulo 310 - O Aliado Mais Forte'),
            imageUrls: generateImageUrls(32, 310, 1, 17),
          },
          {
            title: 'Capítulo 311 - Amigos de Uma Vida Toda',
            id: '311',
            slug: slugify('Capítulo 311 - Amigos de Uma Vida Toda'),
            imageUrls: generateImageUrls(32, 311, 1, 18),
          },
          {
            title: 'Capítulo 312 - O Plano do Brago',
            id: '312',
            slug: slugify('Capítulo 312 - O Plano do Brago'),
            imageUrls: generateImageUrls(32, 312, 1, 17),
          },
          {
            title: 'Capítulo 313 - Pensamentos Unidos',
            id: '313',
            slug: slugify('Capítulo 313 - Pensamentos Unidos'),
            imageUrls: generateImageUrls(32, 313, 1, 20),
          },
        ],
      },
      {
        title: 'Volume 33',
        image:
          'https://storage.googleapis.com/gashbell/Gash%20Bell/CAPAS%20DE%20VOLUMES/KNGB-Vol-33.jpg',
        chapters: [
          {
            title: 'Capítulo 314 - Reino de Poder',
            id: '314',
            slug: slugify('Capítulo 314 - Reino de Poder'),
            imageUrls: generateImageUrls(33, 314, 3, 19),
          },
          {
            title: 'Capítulo 315 - A Resposta...',
            id: '315',
            slug: slugify('Capítulo 315 - A Resposta...'),
            imageUrls: generateImageUrls(33, 315, 1, 15),
          },
          {
            title: 'Capítulo 316 - Aquele Brilho...',
            id: '316',
            slug: slugify('Capítulo 316 - Aquele Brilho...'),
            imageUrls: generateImageUrls(33, 316, 1, 20),
          },
          {
            title: 'Capítulo 317 - Amigos do Gash...',
            id: '317',
            slug: slugify('Capítulo 317 - Amigos do Gash...'),
            imageUrls: generateImageUrls(33, 317, 1, 16),
          },
          {
            title: 'Capítulo 318 - Ainda Mais Amigos',
            id: '318',
            slug: slugify('Capítulo 318 - Ainda Mais Amigos'),
            imageUrls: generateImageUrls(33, 318, 1, 20),
          },
          {
            title: 'Capítulo 319 - O Poder do Livro Dourado',
            id: '319',
            slug: slugify('Capítulo 319 - O Poder do Livro Dourado'),
            imageUrls: generateImageUrls(33, 319, 1, 16),
          },
          {
            title: 'Capítulo 320 - Graduação',
            id: '320',
            slug: slugify('Capítulo 320 - Graduação'),
            imageUrls: generateImageUrls(33, 320, 1, 20),
          },
          {
            title: 'Capítulo 321 - A Batalha Final',
            id: '321',
            slug: slugify('Capítulo 321 - A Batalha Final'),
            imageUrls: generateImageUrls(33, 321, 1, 18),
          },
          {
            title: 'Capítulo 322 - Chegou a Hora',
            id: '322',
            slug: slugify('Capítulo 322 - Chegou a Hora'),
            imageUrls: generateImageUrls(33, 322, 1, 18),
          },
          {
            title: 'Capítulo 323 - Epílogo: Uma Carta do Gash',
            id: '323',
            slug: slugify('Capítulo 323 - Epílogo: Uma Carta do Gash'),
            imageUrls: generateImageUrls(33, 323, 1, 24),
          },
        ],
      },
    ],
  },
];

export default comics;
