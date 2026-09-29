# MCM Journal

Site/blog editorial da MCM Capital Assessoria: inteligência sobre imóveis de alto padrão, short stay, consórcio estruturado, seguro de vida, saúde executiva e lifestyle.

## Stack

- HTML estático (`index.html`) com [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Font Awesome](https://fontawesome.com/) para ícones
- Google Fonts: Cormorant Garamond + Plus Jakarta Sans
- Sem build step — é só abrir `index.html` no navegador ou publicar via GitHub Pages

## Estrutura

- `index.html` — landing page única com todas as seções (hero, simulador interativo, imóveis, consórcio, proteção/saúde, lifestyle, cases de sucesso, newsletter)
- Artigos abrem em modal (dados no objeto `articles` dentro do `<script>` de `index.html`)
- Formulário de assessoria (`#advisoryModal`) captura lead na própria página — ainda sem backend, apenas confirmação visual

## Desenvolvimento local

Basta abrir `index.html` diretamente no navegador, ou servir a pasta com qualquer servidor estático:

```bash
python -m http.server 8000
```

## Publicação (GitHub Pages)

O repositório está configurado para publicar a partir da branch `main` (raiz).
