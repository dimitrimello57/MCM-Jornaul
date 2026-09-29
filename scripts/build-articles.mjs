// Generates the static article pages under /artigos from articles-data.mjs.
// Run with: node scripts/build-articles.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { articles } from './articles-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'artigos');
mkdirSync(outDir, { recursive: true });

const SITE_URL = 'https://dimitrimello57.github.io/MCM-Jornaul';

function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
function escapeJson(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function relatedCard(a) {
    return `
                <a href="${a.slug}.html" class="group block">
                    <div class="rounded-2xl overflow-hidden mb-2 aspect-[4/3]">
                        <img src="${a.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${escapeHtml(a.title)}" loading="lazy">
                    </div>
                    <span class="text-[10px] font-bold text-gold uppercase tracking-wider">${a.category}</span>
                    <h3 class="text-sm font-bold text-charcoal group-hover:text-gold transition-colors leading-snug">${a.title}</h3>
                </a>`;
}

function renderPage(a) {
    const bodyHtml = a.body.map(block => `                ${block}`).join('\n');
    const related = a.related.map(slug => relatedCard(articles.find(x => x.slug === slug))).join('\n');

    return `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a.title} | MCM Journal</title>
    <meta name="description" content="${escapeHtml(a.description)}">
    <link rel="canonical" href="${SITE_URL}/artigos/${a.slug}.html">

    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(a.title)}">
    <meta property="og:description" content="${escapeHtml(a.description)}">
    <meta property="og:image" content="${a.image}">
    <meta property="og:url" content="${SITE_URL}/artigos/${a.slug}.html">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(a.title)}">
    <meta name="twitter:description" content="${escapeHtml(a.description)}">
    <meta name="twitter:image" content="${a.image}">

    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <script src="../assets/tailwind-config.js"></script>
    <link rel="stylesheet" href="../assets/site.css">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${escapeJson(a.title)}",
      "description": "${escapeJson(a.description)}",
      "image": "${a.image}",
      "author": { "@type": "Person", "name": "${a.author}" },
      "publisher": { "@type": "Organization", "name": "MCM Capital Assessoria" },
      "datePublished": "${a.dateIso}"
    }
    </script>
</head>
<body class="bg-white text-charcoal flex flex-col min-h-screen">

    <header class="bg-white border-b border-charcoal-100">
        <div class="bg-sand-50 py-2 border-b border-sand-200/60">
            <div class="max-w-3xl mx-auto px-6 flex items-center text-xs">
                <span class="w-2 h-2 rounded-full bg-gold animate-pulse mr-3"></span>
                <span class="font-extrabold uppercase tracking-widest text-[10px] text-charcoal">MCM Intelligence</span>
            </div>
        </div>
        <div class="max-w-3xl mx-auto px-6 py-6 text-center">
            <a href="../index.html" class="inline-block group">
                <div class="flex items-center justify-center space-x-2 mb-1">
                    <span class="h-[1px] w-6 bg-gold"></span>
                    <span class="text-[10px] font-extrabold tracking-[0.35em] text-gold uppercase">BY MCM CAPITAL ASSESSORIA</span>
                    <span class="h-[1px] w-6 bg-gold"></span>
                </div>
                <h2 class="font-serif text-2xl md:text-3xl font-bold tracking-tight text-charcoal">MCM JOURNAL</h2>
            </a>
        </div>
        <nav class="border-t border-charcoal-100">
            <div class="max-w-3xl mx-auto px-6 flex items-center justify-center gap-6 overflow-x-auto no-scrollbar text-[11px] font-bold uppercase tracking-wider text-charcoal-muted py-3">
                <a href="../index.html#imoveis-shortstay" class="hover:text-gold whitespace-nowrap">Imóveis</a>
                <a href="../index.html#consorcio-wealth" class="hover:text-gold whitespace-nowrap">Consórcio</a>
                <a href="../index.html#protecao-saude" class="hover:text-gold whitespace-nowrap">Seguro &amp; Saúde</a>
                <a href="../index.html#lifestyle" class="hover:text-gold whitespace-nowrap">Lifestyle</a>
                <a href="../index.html#cases" class="hover:text-gold whitespace-nowrap">Cases</a>
            </div>
        </nav>
    </header>

    <main class="flex-1 w-full max-w-3xl mx-auto px-6 py-10">
        <nav class="text-[11px] text-charcoal-subtle mb-6" aria-label="Breadcrumb">
            <a href="../index.html" class="hover:text-gold">MCM Journal</a> <span class="mx-1">/</span> <span>${a.category}</span>
        </nav>

        <article>
            <span class="text-gold text-xs font-extrabold uppercase tracking-widest block mb-3">${a.category}</span>
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-charcoal mb-4">${a.title}</h1>

            <div class="flex flex-wrap items-center gap-3 text-xs text-charcoal-subtle pb-6 mb-6 border-b border-sand-200">
                <img src="${a.authorImg}" class="w-8 h-8 rounded-full object-cover border border-gold" alt="${a.author}" loading="lazy">
                <span><span class="font-bold text-charcoal">Por ${a.author}</span> · ${a.authorRole}</span>
                <span class="sm:ml-auto">${a.dateDisplay} · ${a.readTime} de leitura</span>
            </div>

            <img src="${a.image}" alt="${escapeHtml(a.title)}" class="w-full h-64 md:h-96 object-cover rounded-3xl mb-8">

            <div class="prose-mcm text-charcoal text-[15px] md:text-base leading-relaxed font-normal">
${bodyHtml}
            </div>

            <p class="mt-10 pt-6 border-t border-sand-200 text-xs text-charcoal-subtle leading-relaxed">
                Este artigo foi produzido pela redação do MCM Journal com apoio técnico da equipe da MCM Capital Assessoria. Os números apresentados são estimativas ilustrativas e não constituem recomendação de investimento. Para avaliar o seu caso, <a href="../index.html?assessoria=${encodeURIComponent(a.interest)}" class="text-gold hover:underline font-medium">fale com um assessor da MCM Capital</a>.
            </p>
        </article>

        <section class="mt-14 pt-8 border-t border-sand-200">
            <h2 class="text-lg font-bold text-charcoal mb-4">Leia também</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">${related}
            </div>
        </section>
    </main>

    <footer class="bg-sand-50 border-t border-sand-200 mt-10">
        <div class="max-w-3xl mx-auto px-6 py-10 text-center space-y-3">
            <h2 class="font-serif text-xl font-bold text-charcoal">MCM JOURNAL</h2>
            <p class="text-charcoal-muted text-xs font-normal leading-relaxed max-w-md mx-auto">
                Um veículo editorial da MCM Capital Assessoria com inteligência sobre imóveis de alto padrão, alavancagem patrimonial, proteção familiar e lifestyle.
            </p>
            <p class="text-[10px] text-charcoal-subtle pt-2">© 2026 MCM Capital Assessoria. Conteúdo editorial com fins informativos, sem caráter de recomendação de investimento.</p>
        </div>
    </footer>
</body>
</html>
`;
}

for (const article of articles) {
    const html = renderPage(article);
    writeFileSync(path.join(outDir, `${article.slug}.html`), html, 'utf8');
    console.log('wrote', article.slug + '.html');
}

const urls = [
    { loc: `${SITE_URL}/index.html`, lastmod: new Date().toISOString().slice(0, 10) },
    ...articles.map(a => ({ loc: `${SITE_URL}/artigos/${a.slug}.html`, lastmod: a.dateIso }))
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `    <url>\n        <loc>${u.loc}</loc>\n        <lastmod>${u.lastmod}</lastmod>\n    </url>`).join('\n')}
</urlset>
`;
writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');
console.log('wrote sitemap.xml');
