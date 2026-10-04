# Hanzi — Stories Through Light

Exposição fotográfica digital sobre o Japão, feita com React 19, Vite 8 e TypeScript. A experiência combina capítulos editoriais, galeria filtrável, séries fotográficas e lightbox com zoom, navegação por teclado, swipe, modo Zen e painel de informações. A interface e as descrições das fotografias estão disponíveis em português, inglês e japonês; o idioma escolhido fica salvo no navegador.

## Executar

Requer Node.js 22.13 ou superior.

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite. Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Fotografias

As 25 fotografias da exposição (11 anteriores e 14 adicionadas) são armazenadas em `assets/sources/`. `npm run images` usa Sharp para gerar versões locais AVIF e WebP de 480, 768, 1280, 1920, 2560 e 3840 px quando a fonte permite, além de JPEG para fallback e pequenos placeholders de carregamento. O script escreve os arquivos em `public/photos/optimized/` e os metadados em `src/data/imageManifest.json`.

O navegador escolhe a variante adequada via `picture`, `srcset` e `sizes`; imagens abaixo da primeira tela são carregadas conforme entram em uso. As fontes originais foram baixadas em até 3840 px de largura, sem ampliação artificial. Algumas fotografias em retrato ultrapassam 4400 px de altura.

Os créditos e links de licença estão em [PHOTO_CREDITS.md](PHOTO_CREDITS.md). Os 17 arquivos fotográficos anteriores permanecem em `public/photos/` e podem ser vistos pelo filtro **Arquivo original**. Sua procedência não estava documentada no projeto recebido; confirme os direitos desses arquivos antes de publicar esse acervo.

## Organização

- `src/page.tsx`: narrativa e montagem dos capítulos.
- `src/components/`: hero, menu, loader, fotografia responsiva e lightbox.
- `src/data/exhibition.ts`: seleção e metadados verificados das novas fotos.
- `src/data/photos.ts`: dados do acervo original.
- `src/i18n/`: textos da interface e traduções das fotografias.
- `src/hooks/useExhibitionMotion.ts`: preferência de movimento, reveals e efeitos sutis de scroll.
- `src/exhibition.css`: direção visual da exposição.
- `scripts/build-images.mjs`: pipeline local de imagens.

O site não reproduz áudio. A tipografia usa Instrument Sans e Instrument Serif servidas localmente em `public/fonts/`, com as licenças OFL no mesmo diretório; caracteres japoneses usam fontes do sistema. O endereço canônico acompanha o domínio onde o projeto for hospedado.

## Verificação

`npm run build` executa a checagem TypeScript e o build Vite. Os relatórios Lighthouse em `reports/` são da versão anterior à inclusão das 14 fotos e dos três idiomas; os resultados podem variar conforme dispositivo e hospedagem.
