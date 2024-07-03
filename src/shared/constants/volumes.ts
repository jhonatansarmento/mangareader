export interface Chapter {
  title: string;
  id: string;
  imageUrls: string[];
}

export interface Volume {
  title: string;
  chapters: Chapter[];
}

const volumes: Volume[] = [
  {
    title: 'Volume 01',
    chapters: [
      {
        title: 'Capítulo 1 - Romance Dawn',
        id: '1',
        imageUrls: [
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0006.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0007.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0008.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0009.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0010.jpg',
          // Adicione mais URLs conforme necessário até a última imagem do capítulo
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0061.jpg',
        ],
      },
      {
        title: 'Capítulo 2 - O Garoto Luffy do Chapéu de Palha',
        id: '2',
        imageUrls: [
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0006.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0007.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0008.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0009.jpg',
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0010.jpg',
          // Adicione mais URLs conforme necessário até a última imagem do capítulo
          'https://storage.cloud.google.com/onepiecemanga/Volume%2001/Cap%C3%ADtulo%201%20-%20Romance%20Dawn/One%20Piece%20Vol.01_page-0061.jpg',
        ],
      },
      {
        title: 'Capítulo 3 - Zoro, o Caçador de Piratas',
        id: '3',
        imageUrls: [],
      },
      // Adicione mais capítulos conforme necessário
    ],
  },
  {
    title: 'Volume 02',
    chapters: [
      { title: 'Capítulo 9 - Femme Fatale', id: '9', imageUrls: [] },
      { title: 'Capítulo 10 - Incidente na Taverna', id: '10', imageUrls: [] },
      { title: 'Capítulo 11 - O Vôo', id: '11', imageUrls: [] },
      // Adicione mais capítulos conforme necessário
    ],
  },
  // Adicione mais volumes conforme necessário
];

export default volumes;
