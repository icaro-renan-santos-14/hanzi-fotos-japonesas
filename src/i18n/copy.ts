export type Locale = 'pt' | 'en' | 'ja';

export const copy = {
  pt: {
    language: 'Idioma', skip: 'Pular para a galeria', home: 'Hanzi, voltar ao início',
    nav: { index: 'ÍNDICE', about: 'SOBRE', menu: 'MENU', main: 'Navegação principal', close: 'FECHAR', stories: 'HISTÓRIAS', contact: 'CONTATO', title: 'Navegação Hanzi', description: 'Escolha uma seção da exposição', section: 'Índice da exposição', menuKicker: 'DIÁRIO VISUAL / JAPÃO', menuLead: 'ESCOLHA UM CAMINHO', menuClosing: 'HISTÓRIAS ATRAVÉS DA LUZ', menuDetails: { index: '25 fotografias', stories: 'Três narrativas', about: 'O projeto', contact: 'Fim da viagem' } },
    hero: { aria: 'Abertura da exposição', journal: '01 / DIÁRIO VISUAL', city: 'TÓQUIO, JAPÃO — 2026', tagline: 'Histórias através da luz', scroll: 'ROLE PARA EXPLORAR', topics: 'JAPÃO / FOTOGRAFIA / DIÁRIO VISUAL', controls: 'Fotografias de abertura', previous: 'Fotografia anterior', next: 'Próxima fotografia', view: 'VER FOTO' },
    arrival: { chapter: '01 / CHEGADA', eyebrow: 'UMA VIAGEM FOTOGRÁFICA PELO JAPÃO', first: 'Entre o que', accent: 'se move', last: 'e o que permanece.', intro: 'Uma viagem em luz e sombra. Das ruas que não dormem aos lugares onde o tempo parece parar.', peopleLabel: '人々 / PESSOAS DO JAPÃO', peopleLine: 'Quem passa também faz parte da história.', peopleNote: 'Um guarda-chuva em Shinjuku, dois passos em Quioto. O cotidiano também merece ser lembrado.', rhythm: 'LUZ / SOMBRA / MEMÓRIA', slowly: 'ROLE DEVAGAR' },
    tokyo: { chapter: '02 / A CIDADE', name: 'TÓQUIO', line: 'Uma cidade feita de milhões de luzes passageiras.', still: 'A CIDADE NUNCA PARA.', aside: 'Entre multidões e fachadas iluminadas, um instante pode durar para sempre.', peopleLabel: 'VIDA COTIDIANA / 日常', peopleLine: 'Depois da multidão, cada pessoa encontra seu próprio caminho de volta.' },
    night: { chapter: '03 / DEPOIS DE ESCURECER', name: 'NOITE', place: 'SHINJUKU, TÓQUIO', line: 'A LUZ PERMANECE DEPOIS DA CHUVA.' },
    frames: { chapter: '04 / EM TRÂNSITO', instruction: 'ROLAGEM VERTICAL / QUADROS HORIZONTAIS', first: 'Quadros em', accent: 'movimento.', line: 'A CIDADE ENTRE DOIS DESTINOS', peopleLabel: '帰り道 / O CAMINHO DE VOLTA', peopleLine: 'Da plataforma à rua, vidas se cruzam por um instante.', previous: 'Quadro anterior', next: 'Próximo quadro', frame: 'QUADRO' },
    tradition: { chapter: '05 / TRADIÇÃO', eyebrow: 'O LADO MAIS CALMO DO TEMPO', first: 'Onde a luz', accent: 'desacelera.', line: 'Um portal após o outro. A cidade fica para trás.' },
    silence: { chapter: '06 / SILÊNCIO', eyebrow: 'UMA PAUSA ENTRE HISTÓRIAS', line: 'O silêncio também faz parte da história.' },
    nature: { chapter: '07 / NATUREZA', line: 'Além do ruído, a montanha permanece.', view: 'VER FOTOGRAFIA' },
    gallery: { chapter: '08 / O ÍNDICE', subtitle: 'FOTOGRAFIA CURADA', eyebrow: 'O ARQUIVO VISUAL', first: 'Momentos,', accent: 'reunidos.', count: 'FOTOS EM EXIBIÇÃO', filter: 'Filtrar fotografias', in: 'fotografias em', end: 'CADA QUADRO GUARDA UMA LUZ DIFERENTE.', archive: 'Arquivo original', categories: { Todas: 'Todas', 'Tóquio': 'Tóquio', Quioto: 'Quioto', Noite: 'Noite', Natureza: 'Natureza', Arquitetura: 'Arquitetura', Pessoas: 'Pessoas' } },
    stories: { chapter: '09 / HISTÓRIAS', subtitle: 'TRÊS FORMAS DE VER', first: 'Histórias', accent: 'através da luz.', intro: 'Um lugar, alguns quadros, uma história para atravessar.', frames: 'FOTOS', archive: 'Explorar séries do acervo original', items: [
      { title: 'A cidade acesa', eyebrow: 'Tóquio / movimento' },
      { title: 'O tempo entre portais', eyebrow: 'Quioto / tradição' },
      { title: 'Depois do ruído', eyebrow: 'Silêncio / natureza' },
    ] },
    about: { chapter: '10 / SOBRE', subtitle: 'A LUZ É UMA FORMA DE LEMBRAR', eyebrow: 'UM DIÁRIO VISUAL', first: 'Uma forma de', accent: 'olhar.', p1: 'Hanzi é uma exposição digital sobre o Japão vista através da fotografia. Cidade e floresta, noite e amanhecer, movimento e silêncio convivem numa mesma viagem.', p2: 'As imagens são de fotógrafos independentes e compõem uma narrativa editorial. Cada fotografia pode ser explorada em tela cheia.' },
    footer: { memory: 'A fotografia se torna memória.', movement: 'MOVIMENTO', on: 'LIGADO', off: 'DESLIGADO', back: 'VOLTAR AO INÍCIO ↑' },
    loader: { loading: 'Carregando Hanzi', skip: 'Pular introdução' },
    photo: { view: 'VER', open: 'Abrir fotografia' },
    lightbox: { previous: 'Fotografia anterior (Seta esquerda)', next: 'Próxima fotografia (Seta direita)', close: 'Fechar fotografia', details: 'Alternar ficha da fotografia e história', zen: 'Ativar modo contemplação', fullscreen: 'Tela cheia', exitFullscreen: 'Sair da tela cheia', exitZen: 'Sair do modo contemplação', zoomOut: 'Reduzir zoom (-)', zoomIn: 'Ampliar zoom (+)', zoomReset: 'Resetar zoom (0)', panel: 'Fechar painel de metadados', metadata: 'Fotografia & história', sheet: 'Ficha da fotografia', archive: 'ARQUIVO', camera: 'Câmera', lens: 'Lente', aperture: 'Abertura', shutter: 'Obturador', iso: 'Sensibilidade ISO', focal: 'Distância focal', credit: 'Fotografia', published: 'Publicada em', context: 'História & contexto', categories: 'Categorias', more: 'Outras fotos da série', navigate: 'Navegar', zenLabel: 'Modo contemplação', closeLabel: 'Fechar', visualArchive: 'Arquivo visual Hanzi' },
    metaDescription: 'Uma viagem fotográfica cinematográfica pelo Japão, entre cidade, silêncio, luz e memória.',
  },
  en: {
    language: 'Language', skip: 'Skip to gallery', home: 'Hanzi, back to top',
    nav: { index: 'INDEX', about: 'ABOUT', menu: 'MENU', main: 'Main navigation', close: 'CLOSE', stories: 'STORIES', contact: 'CONTACT', title: 'Hanzi navigation', description: 'Choose a section of the exhibition', section: 'Exhibition index', menuKicker: 'VISUAL JOURNAL / JAPAN', menuLead: 'CHOOSE A PATH', menuClosing: 'STORIES THROUGH LIGHT', menuDetails: { index: '25 photographs', stories: 'Three narratives', about: 'The project', contact: 'End of the journey' } },
    hero: { aria: 'Exhibition opening', journal: '01 / VISUAL JOURNAL', city: 'TOKYO, JAPAN — 2026', tagline: 'Stories Through Light', scroll: 'SCROLL TO EXPLORE', topics: 'JAPAN / PHOTOGRAPHY / VISUAL JOURNAL', controls: 'Opening photographs', previous: 'Previous photograph', next: 'Next photograph', view: 'VIEW FRAME' },
    arrival: { chapter: '01 / ARRIVAL', eyebrow: 'A PHOTOGRAPHIC JOURNEY THROUGH JAPAN', first: 'Between what', accent: 'moves', last: 'and what remains.', intro: 'A journey in light and shadow. From streets that never sleep to places where time seems to pause.', peopleLabel: '人々 / PEOPLE OF JAPAN', peopleLine: 'Those passing by are part of the story.', peopleNote: 'An umbrella in Shinjuku, two figures in Kyoto. Everyday life deserves to be remembered.', rhythm: 'LIGHT / SHADOW / MEMORY', slowly: 'SCROLL SLOWLY' },
    tokyo: { chapter: '02 / THE CITY', name: 'TOKYO', line: 'A city made of a million passing lights.', still: 'THE CITY NEVER STANDS STILL.', aside: 'Among crowds and illuminated facades, a moment can last forever.', peopleLabel: 'EVERYDAY LIFE / 日常', peopleLine: 'After the crowd, each person finds their own way home.' },
    night: { chapter: '03 / AFTER DARK', name: 'NIGHT', place: 'SHINJUKU, TOKYO', line: 'THE LIGHT LINGERS AFTER THE RAIN.' },
    frames: { chapter: '04 / IN TRANSIT', instruction: 'VERTICAL SCROLL / HORIZONTAL FRAMES', first: 'Passing', accent: 'frames.', line: 'THE CITY BETWEEN DESTINATIONS', peopleLabel: '帰り道 / THE WAY HOME', peopleLine: 'From platform to street, lives cross for a moment.', previous: 'Previous frame', next: 'Next frame', frame: 'FRAME' },
    tradition: { chapter: '05 / TRADITION', eyebrow: 'THE QUIETER SIDE OF TIME', first: 'Where the light', accent: 'slows down.', line: 'One gate after another. The city falls behind.' },
    silence: { chapter: '06 / SILENCE', eyebrow: 'A BREATH BETWEEN STORIES', line: 'Silence is also part of the story.' },
    nature: { chapter: '07 / NATURE', line: 'Beyond the noise, the mountain remains.', view: 'VIEW PHOTOGRAPH' },
    gallery: { chapter: '08 / THE INDEX', subtitle: 'CURATED PHOTOGRAPHY', eyebrow: 'THE VISUAL ARCHIVE', first: 'Moments,', accent: 'collected.', count: 'FRAMES IN VIEW', filter: 'Filter photographs', in: 'photographs in', end: 'EVERY FRAME HOLDS A DIFFERENT LIGHT.', archive: 'Original archive', categories: { Todas: 'All', 'Tóquio': 'Tokyo', Quioto: 'Kyoto', Noite: 'Night', Natureza: 'Nature', Arquitetura: 'Architecture', Pessoas: 'People' } },
    stories: { chapter: '09 / STORIES', subtitle: 'THREE WAYS TO SEE', first: 'Stories', accent: 'through light.', intro: 'One place, a few frames, a story to step into.', frames: 'FRAMES', archive: 'Explore stories from the original archive', items: [
      { title: 'The city alight', eyebrow: 'Tokyo / movement' },
      { title: 'The time between gates', eyebrow: 'Kyoto / tradition' },
      { title: 'After the noise', eyebrow: 'Silence / nature' },
    ] },
    about: { chapter: '10 / ABOUT', subtitle: 'LIGHT IS A WAY OF REMEMBERING', eyebrow: 'A VISUAL JOURNAL', first: 'A way of', accent: 'seeing.', p1: 'Hanzi is a digital photographic exhibition about Japan. City and forest, night and dawn, movement and silence share the same journey.', p2: 'The images come from independent photographers and form an editorial narrative. Every photograph can be explored in full screen.' },
    footer: { memory: 'Photography becomes memory.', movement: 'MOVEMENT', on: 'ON', off: 'OFF', back: 'BACK TO TOP ↑' },
    loader: { loading: 'Loading Hanzi', skip: 'Skip introduction' },
    photo: { view: 'VIEW', open: 'Open photograph' },
    lightbox: { previous: 'Previous photograph (Left arrow)', next: 'Next photograph (Right arrow)', close: 'Close photograph', details: 'Toggle photograph details and story', zen: 'Enter contemplation mode', fullscreen: 'Full screen', exitFullscreen: 'Exit full screen', exitZen: 'Exit contemplation mode', zoomOut: 'Zoom out (-)', zoomIn: 'Zoom in (+)', zoomReset: 'Reset zoom (0)', panel: 'Close details panel', metadata: 'Photograph & story', sheet: 'Photograph details', archive: 'ARCHIVE', camera: 'Camera', lens: 'Lens', aperture: 'Aperture', shutter: 'Shutter', iso: 'ISO', focal: 'Focal length', credit: 'Photograph', published: 'Published in', context: 'Story & context', categories: 'Categories', more: 'More photographs in this series', navigate: 'Navigate', zenLabel: 'Contemplation mode', closeLabel: 'Close', visualArchive: 'Hanzi visual archive' },
    metaDescription: 'A cinematic photographic journey through Japan, exploring light, silence, cities and memory.',
  },
  ja: {
    language: '言語', skip: 'ギャラリーへ移動', home: 'Hanzi、ページの先頭へ',
    nav: { index: '目次', about: '概要', menu: 'メニュー', main: 'メインナビゲーション', close: '閉じる', stories: '物語', contact: '連絡先', title: 'Hanzi ナビゲーション', description: '展示のセクションを選択', section: '展示の目次', menuKicker: 'ビジュアルジャーナル / 日本', menuLead: '行き先を選ぶ', menuClosing: '光が紡ぐ物語', menuDetails: { index: '25枚の写真', stories: '三つの物語', about: 'この展示について', contact: '旅の終わり' } },
    hero: { aria: '展示の始まり', journal: '01 / ビジュアルジャーナル', city: '東京、日本 — 2026', tagline: '光が紡ぐ物語', scroll: 'スクロールして巡る', topics: '日本 / 写真 / ビジュアルジャーナル', controls: '冒頭の写真', previous: '前の写真', next: '次の写真', view: '写真を見る' },
    arrival: { chapter: '01 / 到着', eyebrow: '写真で巡る日本', first: '動くものと', accent: 'とどまるもの', last: 'のあいだに。', intro: '光と影の旅。眠らない街から、時が止まったような場所へ。', peopleLabel: '人々 / 日本の人々', peopleLine: '通りゆく人も、物語の一部。', peopleNote: '新宿の傘、京都を歩く二人。日々の営みもまた、記憶に残る。', rhythm: '光 / 影 / 記憶', slowly: 'ゆっくりスクロール' },
    tokyo: { chapter: '02 / 都市', name: '東京', line: '幾百万もの光が行き交う街。', still: '街は止まらない。', aside: '群衆と光る建物のあいだで、一瞬が永遠になる。', peopleLabel: '日常 / 暮らし', peopleLine: '人波が過ぎたあと、それぞれの帰り道が始まる。' },
    night: { chapter: '03 / 夜更け', name: '夜', place: '東京・新宿', line: '雨のあとにも光は残る。' },
    frames: { chapter: '04 / 移動', instruction: '縦スクロール / 横に並ぶ風景', first: '通り過ぎる', accent: '風景。', line: '目的地と目的地のあいだ', peopleLabel: '帰り道 / 日々の道', peopleLine: 'ホームから街へ。人々の道が、一瞬だけ交わる。', previous: '前の写真', next: '次の写真', frame: '場面' },
    tradition: { chapter: '05 / 伝統', eyebrow: '時が静かに流れる場所', first: '光が', accent: 'ゆるやかになる場所。', line: '鳥居を一つ、また一つ。街は遠ざかる。' },
    silence: { chapter: '06 / 静寂', eyebrow: '物語のあいだの一息', line: '静けさも、物語の一部。' },
    nature: { chapter: '07 / 自然', line: '喧騒の向こうに、山は佇む。', view: '写真を見る' },
    gallery: { chapter: '08 / 目次', subtitle: '選び抜いた写真', eyebrow: 'ビジュアルアーカイブ', first: '集められた', accent: '瞬間。', count: '展示中の写真', filter: '写真を絞り込む', in: 'の写真：', end: '一枚ごとに異なる光がある。', archive: '元のアーカイブ', categories: { Todas: 'すべて', 'Tóquio': '東京', Quioto: '京都', Noite: '夜', Natureza: '自然', Arquitetura: '建築', Pessoas: '人々' } },
    stories: { chapter: '09 / 物語', subtitle: '三つの見方', first: '光が紡ぐ', accent: '物語。', intro: '一つの場所、いくつかの場面。その中を歩くように。', frames: '枚', archive: '元のアーカイブの物語を見る', items: [
      { title: '灯る街', eyebrow: '東京 / 動き' },
      { title: '鳥居のあいだの時間', eyebrow: '京都 / 伝統' },
      { title: '喧騒のあとで', eyebrow: '静寂 / 自然' },
    ] },
    about: { chapter: '10 / 概要', subtitle: '光は記憶のかたち', eyebrow: 'ビジュアルジャーナル', first: '見ることの', accent: 'かたち。', p1: 'Hanzi は写真を通して日本を巡るデジタル写真展です。都市と森、夜と夜明け、動きと静けさが一つの旅の中で出会います。', p2: '独立した写真家たちの作品を編集し、一つの物語にしました。すべての写真を全画面で鑑賞できます。' },
    footer: { memory: '写真は記憶になる。', movement: '動き', on: 'オン', off: 'オフ', back: 'ページの先頭へ ↑' },
    loader: { loading: 'Hanzi を読み込み中', skip: 'イントロをスキップ' },
    photo: { view: '見る', open: '写真を開く' },
    lightbox: { previous: '前の写真（左矢印）', next: '次の写真（右矢印）', close: '写真を閉じる', details: '写真情報と物語を表示', zen: '鑑賞モードにする', fullscreen: '全画面表示', exitFullscreen: '全画面を終了', exitZen: '鑑賞モードを終了', zoomOut: '縮小（-）', zoomIn: '拡大（+）', zoomReset: '倍率を戻す（0）', panel: '情報パネルを閉じる', metadata: '写真と物語', sheet: '写真情報', archive: 'アーカイブ', camera: 'カメラ', lens: 'レンズ', aperture: '絞り', shutter: 'シャッター速度', iso: 'ISO感度', focal: '焦点距離', credit: '撮影', published: '公開年', context: '物語と背景', categories: 'カテゴリー', more: 'このシリーズのほかの写真', navigate: '移動', zenLabel: '鑑賞モード', closeLabel: '閉じる', visualArchive: 'Hanzi 写真アーカイブ' },
    metaDescription: '光、静けさ、都市、記憶をたどる、日本のシネマティックな写真の旅。',
  },
} as const;

export const languageOptions: { value: Locale; label: string; name: string }[] = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
  { value: 'ja', label: '日本語', name: '日本語' },
];

export function languageFromStorage(): Locale {
  try {
    const value = localStorage.getItem('hanzi-language');
    return value === 'en' || value === 'ja' ? value : 'pt';
  } catch { return 'pt'; }
}
