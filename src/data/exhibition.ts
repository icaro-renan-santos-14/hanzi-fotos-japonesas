import manifestJson from './imageManifest.json';
import type { Photo } from './photos';

type ImageMeta = { width: number; height: number; widths: number[]; placeholder: string };
export const imageManifest = manifestJson as Record<string, ImageMeta>;

type CuratedPhoto = Omit<Photo, 'exif' | 'src'> & {
  imageKey: string;
  alt: string;
  credit: string;
  sourceUrl: string;
  year: string;
  coordinates?: string;
  camera?: string;
};

const curated: CuratedPhoto[] = [
  {
    id: 'tokyo-aerial', imageKey: 'tokyo-aerial', title: 'A cidade desperta',
    place: 'Tóquio, Japão', jp: '東京', tags: ['Tóquio', 'Aéreas', 'Noite', 'Arquitetura'],
    description: 'A cidade se estende até a linha do mar, acesa antes do amanhecer.',
    story: 'Um primeiro olhar sobre a escala de Tóquio: ruas e janelas formam uma constelação de luz.',
    alt: 'Vista aérea noturna de Tóquio com milhares de luzes e a baía ao fundo',
    credit: 'Calin Stan', sourceUrl: 'https://unsplash.com/photos/aerial-view-of-city-buildings-during-night-time-zjPg0GpgTkM', year: '2020', camera: 'Sony α9',
  },
  {
    id: 'tokyo-shibuya', imageKey: 'tokyo-shibuya', title: 'Linhas de Shibuya',
    place: 'Tóquio, Japão', jp: '渋谷', tags: ['Tóquio', 'Aéreas', 'Noite', 'Arquitetura'],
    description: 'A circulação noturna recorta a cidade em linhas de luz âmbar.',
    story: 'Vista alta sobre Shibuya. A densidade da cidade se revela em camadas, do asfalto às janelas distantes.',
    alt: 'Avenidas iluminadas atravessam a paisagem escura de Shibuya à noite',
    credit: 'Sarmat Batagov', sourceUrl: 'https://unsplash.com/photos/aerial-view-of-a-city-skyline-at-night-RDlhSZR4SR8', year: '2025', camera: 'Sony α7 III',
  },
  {
    id: 'tokyo-rain', imageKey: 'tokyo-rain', title: 'Depois da chuva',
    place: 'Shinjuku, Tóquio', jp: '雨', tags: ['Tóquio', 'Noite', 'Pessoas'],
    description: 'Um guarda-chuva transparente recolhe as luzes de uma rua molhada.',
    story: 'Na passagem de pedestres, uma figura solitária transforma o movimento da cidade em pausa.',
    alt: 'Pessoa sob guarda-chuva transparente em rua molhada e iluminada de Shinjuku',
    credit: 'Nicolas Caetano', sourceUrl: 'https://unsplash.com/photos/a-woman-holding-an-umbrella-on-a-city-street-at-night-xYO1iuGwkm4', year: '2022', camera: 'Sony α7 III',
  },
  {
    id: 'shinjuku-umbrellas', imageKey: 'shinjuku-umbrellas', title: 'A noite em trânsito',
    place: 'Shinjuku, Tóquio', jp: '新宿', tags: ['Tóquio', 'Noite', 'Pessoas'],
    description: 'Guarda-chuvas cruzam letreiros, lanternas e poças de luz.',
    story: 'A rua mantém seu ritmo sob a chuva. O brilho urbano se espalha pelo asfalto.',
    alt: 'Pedestres com guarda-chuvas atravessam rua iluminada de Shinjuku à noite',
    credit: 'Red Shuheart', sourceUrl: 'https://unsplash.com/photos/city-street-at-night-with-people-holding-umbrellas--zImRPTsU38', year: '2025', camera: 'Ricoh GR IIIx',
  },
  {
    id: 'kyoto-street', imageKey: 'kyoto-street', title: 'O azul de Quioto',
    place: 'Quioto, Japão', jp: '京都', tags: ['Quioto', 'Pessoas', 'Arquitetura', 'Noite'],
    description: 'Duas figuras caminham enquanto as lanternas tomam o lugar da última luz.',
    story: 'A hora azul aproxima o cotidiano e a tradição numa rua estreita de Quioto.',
    alt: 'Rua estreita de Quioto ao anoitecer com duas pessoas em quimono',
    credit: 'Munky Tang', sourceUrl: 'https://unsplash.com/photos/a-city-street-at-night-with-people-walking-on-the-sidewalk-RbNre1NeyDA', year: '2025', camera: 'Fujifilm X-T30',
  },
  {
    id: 'kyoto-temple', imageKey: 'kyoto-temple', title: 'A última luz do templo',
    place: 'Quioto, Japão', jp: '寺', tags: ['Quioto', 'Templos', 'Arquitetura', 'Noite'],
    description: 'O vermelho do templo permanece visível enquanto o céu escurece.',
    story: 'Escadas iluminadas conduzem o olhar à arquitetura histórica de Quioto.',
    alt: 'Templo japonês vermelho iluminado ao entardecer acima de escadaria',
    credit: 'Jason Leung', sourceUrl: 'https://unsplash.com/photos/a-japanese-temple-illuminated-at-dusk-with-a-dark-sky-4g_H3Co0LiE', year: '2026', camera: 'Canon EOS R5',
  },
  {
    id: 'kyoto-torii', imageKey: 'kyoto-torii', title: 'Entre portais',
    place: 'Fushimi Inari, Quioto', jp: '鳥居', tags: ['Quioto', 'Templos', 'Arquitetura', 'Pessoas'],
    description: 'Uma passagem vermelha conduz para dentro da floresta.',
    story: 'A repetição dos portais torii cria um intervalo de sombra e movimento.',
    alt: 'Pessoa caminha entre portais torii vermelhos em Fushimi Inari',
    credit: 'Stefan Szankowski', sourceUrl: 'https://unsplash.com/photos/torii-gates-in-kyoto-4CwBimuEu5U', year: '2026', camera: 'Nikon D800',
  },
  {
    id: 'tokyo-platform', imageKey: 'tokyo-platform', title: 'Plataforma vazia',
    place: 'Tóquio, Japão', jp: '静寂', tags: ['Tóquio', 'Arquitetura'],
    description: 'O movimento da cidade faz uma pausa sob a luz fria da estação.',
    story: 'Sem passageiros à vista, os sinais e as linhas da plataforma se tornam a própria composição.',
    alt: 'Plataforma vazia de metrô em Tóquio com luz fluorescente e piso geométrico',
    credit: 'charlesdeluvio', sourceUrl: 'https://unsplash.com/photos/empty-train-station-KHjIINQnNVU', year: '2017', camera: 'Canon EOS 6D',
  },
  {
    id: 'kyoto-station', imageKey: 'kyoto-station', title: 'A espera',
    place: 'Quioto, Japão', jp: '駅', tags: ['Quioto', 'Noite', 'Arquitetura'],
    description: 'Os trilhos desaparecem no escuro entre plataformas silenciosas.',
    story: 'A estação vazia transforma um lugar de passagem em espaço de contemplação.',
    alt: 'Trilhos de estação vazia em Quioto à noite, vistos entre duas plataformas',
    credit: 'Julien', sourceUrl: 'https://unsplash.com/photos/empty-train-station-platforms-and-tracks-at-night-nhZSniKclk0', year: '2026', camera: 'Canon EOS 6D',
  },
  {
    id: 'arashiyama-bamboo', imageKey: 'arashiyama-bamboo', title: 'Dentro da floresta',
    place: 'Arashiyama, Quioto', jp: '竹林', tags: ['Quioto', 'Natureza'],
    description: 'Um caminho atravessa a verticalidade escura do bambu.',
    story: 'No bosque de Arashiyama, a luz alcança o chão em pequenas aberturas.',
    alt: 'Caminho entre bambus altos e escuros em Arashiyama, Quioto',
    credit: 'Masaaki Komori', sourceUrl: 'https://unsplash.com/photos/pathway-in-between-forest-during-day--4pA83nGCR8', year: '2018', camera: 'Nikon D610',
  },
  {
    id: 'fuji-lake', imageKey: 'fuji-lake', title: 'A montanha permanece',
    place: 'Lago Motosu, Japão', jp: '富士山', tags: ['Natureza'],
    description: 'A primeira luz encontra o cume do Fuji além da água imóvel.',
    story: 'O horizonte se abre depois da cidade. O Monte Fuji surge como um ponto de repouso para a viagem.',
    alt: 'Monte Fuji sob luz dourada de amanhecer além do Lago Motosu',
    credit: 'Takashi Miyazaki', sourceUrl: 'https://unsplash.com/photos/mount-fuji-reflected-in-a-calm-lake-at-sunrise-5hU6jeKtFOc', year: '2025', camera: 'Nikon D810',
  },
  {
    id: 'shinjuku-wet', imageKey: 'shinjuku-wet', title: 'Sob a chuva de Shinjuku',
    place: 'Shinjuku, Tóquio', jp: '新宿', tags: ['Tóquio', 'Noite', 'Pessoas'],
    description: 'Passos e letreiros se dissolvem nos reflexos de uma rua molhada.',
    story: 'A chuva transforma Shinjuku em uma sequência de luzes, sombras e silhuetas.',
    alt: 'Pedestres caminham por rua molhada de Shinjuku entre letreiros luminosos',
    credit: 'Intrepid', sourceUrl: 'https://unsplash.com/photos/people-walk-down-a-wet-neon-lit-city-street-at-night-6GRL8viFTwo', year: '2025', camera: 'Contax G2 / Portra 400',
  },
  {
    id: 'gion-motion', imageKey: 'gion-motion', title: 'Passagem por Pontocho',
    place: 'Pontocho, Quioto', jp: '先斗町', tags: ['Quioto', 'Noite', 'Pessoas', 'Arquitetura'],
    description: 'Figuras em movimento atravessam uma viela de madeira e lanternas.',
    story: 'O tempo se alonga no movimento dos passantes enquanto a rua antiga permanece.',
    alt: 'Pessoas desfocadas caminham por viela tradicional iluminada em Quioto',
    credit: 'Stefan Szankowski', sourceUrl: 'https://unsplash.com/photos/people-walking-down-lantern-lit-gion-street-gUg3rDj81ck', year: '2026', camera: 'Nikon D800',
  },
  {
    id: 'kyoto-sakura-lantern', imageKey: 'kyoto-sakura-lantern', title: 'Luz entre cerejeiras',
    place: 'Maruyama, Quioto', jp: '桜', tags: ['Quioto', 'Noite', 'Natureza'],
    description: 'Uma lanterna ilumina pétalas de sakura na escuridão da primavera.',
    story: 'Entre os ramos em flor, um pequeno círculo de luz guarda a noite.',
    alt: 'Lanterna japonesa acesa entre flores de cerejeira à noite em Quioto',
    credit: 'Wenhao Ruan', sourceUrl: 'https://unsplash.com/photos/a-lantern-illuminates-cherry-blossoms-at-night-2OSQ92GzP0o', year: '2025', camera: 'Fujifilm X-T3',
  },
  {
    id: 'aomori-rail', imageKey: 'aomori-rail', title: 'Linha para o norte',
    place: 'Aomori, Japão', jp: '青森', tags: ['Natureza', 'Arquitetura'],
    description: 'Os trilhos fazem uma curva silenciosa entre árvores e pequenas casas.',
    story: 'Longe da capital, a ferrovia acompanha a escala tranquila do interior.',
    alt: 'Ferrovia rural curva entre árvores e casas em Aomori',
    credit: 'Andy Arbeit', sourceUrl: 'https://unsplash.com/photos/train-tracks-winding-through-grassy-countryside-with-trees-and-houses-Jy4VpKR7uoY', year: '2025', camera: 'Panasonic DC-G91',
  },
  {
    id: 'akita-snow', imageKey: 'akita-snow', title: 'Trilhos sob a neve',
    place: 'Akita, Japão', jp: '秋田', tags: ['Natureza', 'Arquitetura'],
    description: 'Uma linha branca atravessa a floresta de inverno.',
    story: 'A paisagem apaga quase tudo; os trilhos ainda apontam um caminho.',
    alt: 'Trilhos cobertos de neve atravessam uma floresta em Akita',
    credit: 'Sam Lee', sourceUrl: 'https://unsplash.com/photos/snow-covered-train-tracks-and-countryside-K9iVf2nKB_s', year: '2019', camera: 'Canon EOS 6D',
  },
  {
    id: 'winter-forest', imageKey: 'winter-forest', title: 'A floresta branca',
    place: 'Japão', jp: '雪', tags: ['Natureza', 'Pessoas'],
    description: 'Uma figura pequena desaparece entre árvores cobertas de neve.',
    story: 'O branco interrompe a cidade. Só resta o caminho de uma pessoa.',
    alt: 'Pessoa caminha por uma floresta japonesa durante uma nevasca',
    credit: 'Junel Mujar', sourceUrl: 'https://unsplash.com/photos/a-person-walking-through-a-snow-covered-forest-jErwrZpVTzg', year: '2024', camera: 'Panasonic DC-G9',
  },
  {
    id: 'fuji-pagoda', imageKey: 'fuji-pagoda', title: 'O horizonte sagrado',
    place: 'Fujikawaguchiko, Japão', jp: '富士山', tags: ['Natureza', 'Arquitetura'],
    description: 'Uma pagoda vermelha enquadra o Fuji sob a luz fria do amanhecer.',
    story: 'A arquitetura e a montanha dividem o mesmo horizonte.',
    alt: 'Pagoda vermelha com o Monte Fuji ao fundo ao amanhecer',
    credit: 'Jamison Cameron', sourceUrl: 'https://unsplash.com/photos/mount-fuji-rises-behind-a-japanese-pagoda-K5n8yPkFqYc', year: '2025', camera: 'Canon EOS R8',
  },
  {
    id: 'naoshima-concrete', imageKey: 'naoshima-concrete', title: 'Geometria do silêncio',
    place: 'Naoshima, Japão', jp: '直島', tags: ['Arquitetura'],
    description: 'Planos de concreto conduzem a luz por um espaço quase vazio.',
    story: 'Em Naoshima, a arquitetura abre lugar para a sombra e a contemplação.',
    alt: 'Interior de concreto minimalista em Naoshima com luz e sombra',
    credit: 'Alan Jiang', sourceUrl: 'https://unsplash.com/photos/a-modern-concrete-interior-features-walls-ZqSHsj8GOUk', year: '2025', camera: 'Fujifilm X-T5',
  },
  {
    id: 'tokyo-tower', imageKey: 'tokyo-tower', title: 'Entre paredes de concreto',
    place: 'Minato, Tóquio', jp: '東京タワー', tags: ['Tóquio', 'Arquitetura'],
    description: 'A Torre de Tóquio surge entre duas paredes escuras.',
    story: 'Um recorte estreito revela a cidade contemporânea.',
    alt: 'Torre de Tóquio vista entre paredes de concreto sob céu azul',
    credit: 'PJH', sourceUrl: 'https://unsplash.com/photos/tokyo-tower-viewed-through-concrete-walls-under-blue-sky-RzyyZgayBI8', year: '2026', camera: 'Sony α7 IV',
  },
  {
    id: 'itoshima-coast', imageKey: 'itoshima-coast', title: 'Depois da cidade',
    place: 'Itoshima, Fukuoka', jp: '糸島', tags: ['Natureza'],
    description: 'Um caminho acompanha a costa até se perder no horizonte.',
    story: 'O mar substitui os sinais da cidade por vento e espaço.',
    alt: 'Caminho costeiro junto ao mar em Itoshima, Fukuoka',
    credit: 'Leopold Maitre', sourceUrl: 'https://unsplash.com/photos/a-paved-path-next-to-the-ocean-with-a-view-of-the-ocean-sDfPnyEYygU', year: '2024', camera: 'Sony α7',
  },
  {
    id: 'sapporo-konbini', imageKey: 'sapporo-konbini', title: 'Luz de madrugada',
    place: 'Sapporo, Hokkaido', jp: '札幌', tags: ['Noite', 'Arquitetura'],
    description: 'Uma loja acesa resiste à escuridão e ao frio da cidade.',
    story: 'À noite, uma fachada cotidiana vira ponto de luz no inverno.',
    alt: 'Loja de conveniência iluminada durante a noite em Sapporo',
    credit: 'Cuvii', sourceUrl: 'https://unsplash.com/photos/convenience-store-at-night-with-cars-parked-outside-EDDQk2FgyWU', year: '2025', camera: 'Fujifilm X-T5',
  },
  {
    id: 'tokyo-familymart', imageKey: 'tokyo-familymart', title: 'A cidade ainda acordada',
    place: 'Ikebukuro, Tóquio', jp: '池袋', tags: ['Tóquio', 'Noite', 'Pessoas', 'Arquitetura'],
    description: 'Uma pessoa passa diante de uma loja iluminada em Ikebukuro.',
    story: 'Mesmo quando as ruas esvaziam, pequenas luzes permanecem.',
    alt: 'Pessoa passa diante de uma loja FamilyMart iluminada à noite em Tóquio',
    credit: 'ayumi kubo', sourceUrl: 'https://unsplash.com/photos/familymart-convenience-store-at-night-with-a-person-walking-VtWiBy8fSDM', year: '2025', camera: 'Sony α7C',
  },
  {
    id: 'hakone-torii', imageKey: 'hakone-torii', title: 'O portal sobre a água',
    place: 'Hakone, Japão', jp: '鳥居', tags: ['Natureza', 'Arquitetura'],
    description: 'Um torii vermelho repousa sobre as águas calmas do Lago Ashi.',
    story: 'Entre a margem e a montanha, o portal parece suspenso no tempo.',
    alt: 'Torii vermelho sobre as águas do Lago Ashi em Hakone',
    credit: 'Tianshu Liu', sourceUrl: 'https://unsplash.com/photos/red-torii-gate-in-hakone-lake-SBK40fdKbAg', year: '2017', camera: 'Sony α7R II',
  },
  {
    id: 'kyoto-garden', imageKey: 'kyoto-garden', title: 'O jardim de Tenjuan',
    place: 'Tenjuan, Quioto', jp: '庭園', tags: ['Quioto', 'Natureza', 'Arquitetura'],
    description: 'Um caminho de pedras desaparece entre árvores e paredes antigas.',
    story: 'O jardim convida a olhar devagar, uma pedra e uma sombra de cada vez.',
    alt: 'Caminho de pedras no jardim do templo Tenjuan em Quioto',
    credit: 'Laura Barry', sourceUrl: 'https://unsplash.com/photos/a-stone-path-leads-to-a-wooden-structure-in-the-middle-of-a-forest-knIWtT3Bm-Q', year: '2024', camera: 'Nikon Z7',
  },
];

export const exhibitionPhotos: Photo[] = curated.map(({ year, camera, coordinates, ...photo }) => ({
  ...photo,
  src: `/photos/optimized/${photo.imageKey}.jpg`,
  exif: {
    camera: camera || 'Não informado', lens: 'Não informado', aperture: '—', shutter: '—',
    iso: '—', focalLength: '—', locationExact: photo.place, coordinates: coordinates || '—', year,
  },
}));

export const exhibitionCategories = ['Todas', 'Tóquio', 'Quioto', 'Noite', 'Natureza', 'Arquitetura', 'Pessoas'] as const;

export const exhibitionStories = [
  { title: 'A cidade acesa', eyebrow: 'Tóquio / movimento', ids: ['tokyo-aerial', 'tokyo-shibuya', 'tokyo-rain', 'shinjuku-umbrellas', 'shinjuku-wet', 'tokyo-tower', 'tokyo-familymart', 'sapporo-konbini'] },
  { title: 'O tempo entre portais', eyebrow: 'Quioto / tradição', ids: ['kyoto-street', 'kyoto-temple', 'kyoto-torii', 'gion-motion', 'kyoto-sakura-lantern', 'kyoto-garden', 'hakone-torii', 'naoshima-concrete'] },
  { title: 'Depois do ruído', eyebrow: 'Silêncio / natureza', ids: ['tokyo-platform', 'kyoto-station', 'arashiyama-bamboo', 'fuji-lake', 'aomori-rail', 'akita-snow', 'winter-forest', 'fuji-pagoda', 'itoshima-coast'] },
];

export function photoSources(photo: Photo) {
  const key = photo.imageKey;
  if (!key) return { src: photo.src || '', width: undefined, height: undefined, placeholder: undefined, avif: undefined, webp: undefined };
  const meta = imageManifest[key];
  const entries = (format: 'avif' | 'webp') => meta.widths.map((width) => `/photos/optimized/${key}-${width}.${format} ${width}w`).join(', ');
  return { src: `/photos/optimized/${key}.jpg`, width: meta.width, height: meta.height, placeholder: meta.placeholder, avif: entries('avif'), webp: entries('webp') };
}
