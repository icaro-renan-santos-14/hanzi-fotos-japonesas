import type { Photo } from '@/data/photos';
import type { Locale } from './copy';

type PhotoText = [title: string, place: string, description: string];

const en: Record<string, PhotoText> = {
  'tokyo-aerial': ['City Before Dawn', 'Tokyo, Japan', 'An aerial night view of Tokyo, its streets and windows extending toward the bay.'],
  'tokyo-shibuya': ['Lines of Shibuya', 'Tokyo, Japan', 'Illuminated roads cut through the dark cityscape of Shibuya.'],
  'tokyo-rain': ['After the Rain', 'Shinjuku, Tokyo', 'A figure under a clear umbrella crosses a rain-soaked street.'],
  'shinjuku-umbrellas': ['The Night in Motion', 'Shinjuku, Tokyo', 'Umbrellas move through the reflected lights of Shinjuku.'],
  'kyoto-street': ['Kyoto in Blue', 'Kyoto, Japan', 'Two figures walk a narrow Kyoto street at dusk.'],
  'kyoto-temple': ['The Temple’s Last Light', 'Kyoto, Japan', 'A red temple glows as the evening sky darkens.'],
  'kyoto-torii': ['Between Gates', 'Fushimi Inari, Kyoto', 'A person walks between the red torii gates of Fushimi Inari.'],
  'tokyo-platform': ['Empty Platform', 'Tokyo, Japan', 'A Tokyo station platform pauses under fluorescent light.'],
  'kyoto-station': ['The Wait', 'Kyoto, Japan', 'Empty tracks disappear into the night between two platforms.'],
  'arashiyama-bamboo': ['Inside the Forest', 'Arashiyama, Kyoto', 'A path runs beneath tall bamboo in Arashiyama.'],
  'fuji-lake': ['The Mountain Remains', 'Lake Motosu, Japan', 'Mount Fuji catches the first light beyond still water.'],
  'shinjuku-wet': ['Rain in Shinjuku', 'Shinjuku, Tokyo', 'Pedestrians and neon signs dissolve into reflections on a wet street.'],
  'gion-motion': ['Passing Through Pontocho', 'Pontocho, Kyoto', 'Blurred figures pass through an old lane of wooden facades and lanterns.'],
  'kyoto-sakura-lantern': ['Light Among Blossoms', 'Maruyama, Kyoto', 'A lantern lights cherry blossoms in the spring night.'],
  'aomori-rail': ['Line to the North', 'Aomori, Japan', 'Rural tracks curve quietly between trees and small houses.'],
  'akita-snow': ['Tracks in Snow', 'Akita, Japan', 'A white railway line cuts through the winter forest.'],
  'winter-forest': ['The White Forest', 'Japan', 'A lone figure disappears among snow-covered trees.'],
  'fuji-pagoda': ['Sacred Horizon', 'Fujikawaguchiko, Japan', 'A red pagoda frames Mount Fuji in the cool dawn light.'],
  'naoshima-concrete': ['Geometry of Silence', 'Naoshima, Japan', 'Concrete planes guide light through a nearly empty interior.'],
  'tokyo-tower': ['Between Concrete Walls', 'Minato, Tokyo', 'Tokyo Tower appears between two dark concrete walls.'],
  'itoshima-coast': ['After the City', 'Itoshima, Fukuoka', 'A path follows the coast until it fades into the horizon.'],
  'sapporo-konbini': ['Light After Midnight', 'Sapporo, Hokkaido', 'An illuminated convenience store glows against the winter dark.'],
  'tokyo-familymart': ['The City Still Awake', 'Ikebukuro, Tokyo', 'A passerby moves past a lit storefront in Ikebukuro.'],
  'hakone-torii': ['Gate on the Water', 'Hakone, Japan', 'A red torii stands in the calm water of Lake Ashi.'],
  'kyoto-garden': ['The Garden at Tenjuan', 'Tenjuan, Kyoto', 'A stone path leads between trees and old walls.'],
  'kyoto-aerial-palace': ['The Imperial Palace from Above', 'Kyoto Imperial Palace', 'An aerial view of the Imperial Palace and its gardens.'],
  'kyoto-aerial-vista': ['Kyoto and the Eastern Hills', 'Kyoto Basin', 'The old capital spreads toward the hills of Higashiyama.'],
  'kyoto-aerial-castle': ['Nijo Castle and the City', 'Nijo Castle, Kyoto', 'Stone walls and moats surround Nijo Castle.'],
  'tokyo-shinjuku-night': ['Shinjuku Constellation', 'Shinjuku, Tokyo', 'Blue towers rise above the countless lights of Shinjuku.'],
  'tokyo-tower-night': ['Tokyo by Tower Light', 'Minato, Tokyo', 'Tokyo Tower glows amber over the city at night.'],
  kyoto: ['A Moment in Kyoto', 'Kyoto, Japan', 'An umbrella, a flash of color and a quiet old street.'],
  fuji: ['The Shape of Silence', 'Mount Fuji, Japan', 'Cherry branches reach over water beneath Mount Fuji.'],
  osaka: ['Under the Lanterns', 'Shinsekai, Osaka', 'Signs and lanterns fill the streets of Shinsekai.'],
  autumn: ['A Season in Red', 'Japan', 'A red bridge disappears beneath the colors of autumn.'],
  tokyo: ['Tokyo at Day’s Edge', 'Tokyo, Japan', 'The tower begins to glow above the city at dusk.'],
  onsen: ['Where Winter Breathes', 'Japan', 'Steam rises among snow-covered branches.'],
  dotonbori: ['Life Along the Canal', 'Dōtonbori, Osaka', 'A boat moves between illuminated signs along the canal.'],
  bridge: ['Light Between Leaves', 'Japan', 'Low sunlight reaches a red bridge and the river below.'],
  kobe: ['The Harbor Turns Blue', 'Kobe, Japan', 'Harbor lights reflect across the water at dusk.'],
  spring: ['A World of Rising Steam', 'Japan', 'White steam rises beside a red torii and dark greenery.'],
  snow: ['Above the White Forest', 'Japan', 'A red cable car crosses a snow-covered forest.'],
  sakura: ['Along Spring Waters', 'Japan', 'Cherry blossoms frame still water in spring.'],
};

const ja: Record<string, PhotoText> = {
  'tokyo-aerial': ['夜明け前の街', '東京、日本', '東京の夜景を空から見下ろす。光る道と窓が湾まで続く。'],
  'tokyo-shibuya': ['渋谷の光の線', '東京、日本', '光る道路が夜の渋谷を切り取る。'],
  'tokyo-rain': ['雨のあと', '東京・新宿', '透明な傘を差した人が、雨に濡れた道を渡る。'],
  'shinjuku-umbrellas': ['動き続ける夜', '東京・新宿', '傘の群れが新宿の反射する光の中を行き交う。'],
  'kyoto-street': ['青い京都', '京都、日本', '夕暮れの京都の細い道を二人が歩く。'],
  'kyoto-temple': ['寺に残る最後の光', '京都、日本', '夕空が暗くなる中、赤い寺が浮かび上がる。'],
  'kyoto-torii': ['鳥居のあいだ', '京都・伏見稲荷', '伏見稲荷の朱色の鳥居の間を人が歩く。'],
  'tokyo-platform': ['誰もいないホーム', '東京、日本', '蛍光灯の下で東京の駅のホームが静まる。'],
  'kyoto-station': ['待つ時間', '京都、日本', '夜の無人のホームの間に線路が消えていく。'],
  'arashiyama-bamboo': ['竹林の奥へ', '京都・嵐山', '嵐山の高い竹の下を小道が続く。'],
  'fuji-lake': ['山はそこにある', '本栖湖、日本', '静かな湖の向こうで富士山が朝の光を受ける。'],
  'shinjuku-wet': ['雨の新宿', '東京・新宿', '濡れた道の反射に、通行人とネオンが溶け込む。'],
  'gion-motion': ['先斗町を行く', '京都・先斗町', '木造の店と提灯の間を人影が通り過ぎる。'],
  'kyoto-sakura-lantern': ['桜の間の灯り', '京都・円山', '春の夜、提灯が桜を照らす。'],
  'aomori-rail': ['北へ続く線路', '青森、日本', '田舎の線路が木々と小さな家の間を曲がる。'],
  'akita-snow': ['雪の線路', '秋田、日本', '白い線路が冬の森を横切る。'],
  'winter-forest': ['白い森', '日本', '雪に覆われた木々の間へ一人の姿が消える。'],
  'fuji-pagoda': ['聖なる地平線', '山梨・富士河口湖', '朝の冷たい光の中、赤い塔の向こうに富士山が見える。'],
  'naoshima-concrete': ['静寂の幾何学', '香川・直島', 'コンクリートの面が、ほとんど何もない空間に光を導く。'],
  'tokyo-tower': ['コンクリートのあいだ', '東京・港区', '暗いコンクリートの壁の間に東京タワーが現れる。'],
  'itoshima-coast': ['街のあとで', '福岡・糸島', '海沿いの道が地平線まで続く。'],
  'sapporo-konbini': ['真夜中の灯り', '北海道・札幌', '冬の暗闇にコンビニの明かりが浮かぶ。'],
  'tokyo-familymart': ['まだ眠らない街', '東京・池袋', '池袋の明るい店先を一人が通り過ぎる。'],
  'hakone-torii': ['水上の鳥居', '神奈川・箱根', '芦ノ湖の穏やかな水に朱色の鳥居が立つ。'],
  'kyoto-garden': ['天授庵の庭', '京都・天授庵', '石の小道が木々と古い壁の間を進む。'],
  'kyoto-aerial-palace': ['空から見る京都御所', '京都御所', '京都御所と庭園を空から眺める。'],
  'kyoto-aerial-vista': ['京都と東山', '京都盆地', '古都が東山の麓まで広がる。'],
  'kyoto-aerial-castle': ['二条城と街', '京都・二条城', '二条城を石垣と堀が囲む。'],
  'tokyo-shinjuku-night': ['新宿の星座', '東京・新宿', '青い塔が新宿の無数の光の上に立つ。'],
  'tokyo-tower-night': ['塔の光の東京', '東京・港区', '夜の街に東京タワーが琥珀色に輝く。'],
  kyoto: ['京都の一瞬', '京都、日本', '傘と色彩、静かな古い通り。'],
  fuji: ['静寂のかたち', '富士山、日本', '桜の枝が水面へ伸び、向こうに富士山が立つ。'],
  osaka: ['提灯の下で', '大阪・新世界', '新世界の道を看板と提灯が埋める。'],
  autumn: ['朱色の季節', '日本', '赤い橋が秋の色の中に消える。'],
  tokyo: ['日暮れの東京', '東京、日本', '夕暮れの街の上で塔が光り始める。'],
  onsen: ['冬の吐息', '日本', '雪の枝の間に湯気が立ち上る。'],
  dotonbori: ['運河沿いの暮らし', '大阪・道頓堀', '船が光る看板の間を進む。'],
  bridge: ['葉のあいだの光', '日本', '低い陽光が赤い橋と川に届く。'],
  kobe: ['青くなる港', '神戸、日本', '夕暮れの港の光が水面に映る。'],
  spring: ['立ちのぼる湯気', '日本', '赤い鳥居と深い緑のそばに白い湯気が立つ。'],
  snow: ['白い森の上', '日本', '赤いロープウェイが雪の森を渡る。'],
  sakura: ['春の水辺', '日本', '桜が春の静かな水を縁取る。'],
};

const tags: Record<string, { en: string; ja: string }> = {
  'Tóquio': { en: 'Tokyo', ja: '東京' }, Quioto: { en: 'Kyoto', ja: '京都' }, Osaka: { en: 'Osaka', ja: '大阪' },
  Noite: { en: 'Night', ja: '夜' }, Natureza: { en: 'Nature', ja: '自然' }, Arquitetura: { en: 'Architecture', ja: '建築' },
  Pessoas: { en: 'People', ja: '人々' }, 'Aéreas': { en: 'Aerial', ja: '空撮' }, Templos: { en: 'Temples', ja: '寺院' },
};

export function localizePhoto(photo: Photo, locale: Locale): Photo {
  if (locale === 'pt') return photo;
  const translated = (locale === 'en' ? en : ja)[photo.id];
  if (!translated) return photo;
  const [title, place, description] = translated;
  return { ...photo, title, place, description, story: description, alt: description, exif: { ...photo.exif, locationExact: place } };
}

export function localizeTag(tag: string, locale: Locale): string {
  return locale === 'pt' ? tag : tags[tag]?.[locale] || tag;
}

const archiveSeries: Record<Locale, [string, string][]> = {
  pt: [],
  en: [
    ['Kyoto from Above', 'The old capital from the sky'], ['Neon Hours', 'When the cities come alive'],
    ['Kyoto in Color', 'Tradition in daily life'], ['Japan’s Mountains', 'A different sense of scale'],
    ['Steam & Silence', 'Between winter and warmth'], ['Lantern Streets', 'Following evening light'],
    ['A Season in Bloom', 'The colors we carry'],
  ],
  ja: [
    ['空から見る京都', '空の光の下にある古都'], ['ネオンの時間', '街が目を覚ますとき'],
    ['色彩の京都', '日常にある伝統'], ['日本の山々', '異なるスケールを感じる'],
    ['湯気と静寂', '冬とぬくもりのあいだ'], ['提灯の道', '夕暮れの光を追って'],
    ['花の季節', '心に残る色'],
  ],
};

export function localizeArchiveSeries(index: number, locale: Locale, fallback: { title: string; eyebrow: string }) {
  const translated = archiveSeries[locale][index];
  return translated ? { title: translated[0], eyebrow: translated[1] } : fallback;
}
