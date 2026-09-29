// Content data for the MCM Journal article pages.
// Edit here, then run `node scripts/build-articles.mjs` to regenerate /artigos/*.html.

const HENRIQUE = {
    author: 'Henrique MCM',
    authorRole: 'Head de Estruturação Imobiliária',
    authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
    interest: 'Assessoria Imobiliária MCM'
};
const MARINA = {
    author: 'Marina Andrade',
    authorRole: 'Head de Crédito e Alavancagem',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop',
    interest: 'Estruturação de Consórcio MCM'
};
const RAFAEL = {
    author: 'Rafael Studart',
    authorRole: 'Head de Proteção Patrimonial',
    authorImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop',
    interest: 'Seguro de Vida & Sucessão'
};
const CAMILA = {
    author: 'Camila Duarte',
    authorRole: 'Editora de Lifestyle',
    authorImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=120&auto=format&fit=crop',
    interest: 'Diagnóstico Geral MCM'
};

export const articles = [
    {
        slug: 'short-stay-alto-padrao-family-offices',
        category: 'Imóveis de Luxo &amp; Short Stay',
        title: 'Short Stay High-Yield: Como o Airbnb de Altíssimo Padrão Virou a Tese Preferida de Family Offices em SP e Alphaville',
        description: 'Operações de short stay de alto padrão em São Paulo e Alphaville vêm rendendo entre 12% e 16% ao ano. Entenda por que family offices têm alocado capital nessa tese imobiliária.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
        ...HENRIQUE,
        dateIso: '2026-08-04',
        dateDisplay: '4 de agosto de 2026',
        readTime: '6 min',
        related: ['consorcio-estruturado-imoveis-alto-valor', 'casas-alphaville-tambore-locacao-executiva', 'studios-luxo-itaim-bibi-jardins'],
        body: [
            '<p>Nos últimos três anos, a gestão de imóveis de alto padrão para locação de curta temporada deixou de ser um nicho de operadores independentes e passou a compor a carteira de family offices e investidores institucionais em São Paulo.</p>',
            '<p>A tese é simples: enquanto um aluguel tradicional em bairros como Itaim Bibi e Jardins rende entre 4% e 6% ao ano sobre o valor do imóvel, operações de short stay bem estruturadas — com precificação dinâmica, automação e gestão profissional — atingem entre 12% e 16% ao ano.</p>',
            '<h2>Por que a rentabilidade praticamente dobra</h2>',
            '<p>A diferença de retorno não vem de mágica, vem de operação. Um aluguel tradicional trava o preço por 12 ou 30 meses; uma operação de short stay reprecifica diariamente conforme demanda, eventos na cidade e sazonalidade — capturando picos que o contrato tradicional simplesmente ignora. Some a isso taxas de ocupação bem geridas acima de 75% e o giro passa a superar, e muito, o aluguel fixo.</p>',
            '<p>Há também um efeito menos óbvio: imóveis com automação residencial, fechadura digital e enxoval de padrão hoteleiro reduzem o desgaste por rotatividade e encurtam o tempo entre uma reserva e outra, o que eleva a taxa de ocupação efetiva ao longo do ano.</p>',
            '<p>A MCM Capital atua ponta a ponta nessa operação: da seleção do ativo com potencial de valorização e alta demanda de temporada, passando pela decoração autoral e automação residencial, até a gestão de reservas, precificação e repasse mensal ao proprietário.</p>',
            '<h2>Os riscos que a tese não esconde</h2>',
            '<p>Nem todo condomínio permite locação por curta temporada, e a regulação municipal sobre esse tipo de uso vem mudando em várias cidades — o primeiro filtro de qualquer aquisição precisa ser jurídico, não financeiro. Existe também dependência de gestão: sem operação profissional, ocupação e nota do hóspede caem rápido, e a rentabilidade projetada não se sustenta sozinha.</p>',
            '<p>Para investidores que buscam diversificar patrimônio com um ativo real, protegido de inflação e com fluxo de caixa mensal, o short stay de alto padrão tem se mostrado uma das teses mais consistentes do mercado imobiliário nacional — desde que a operação, e não só o imóvel, seja escolhida com critério.</p>'
        ]
    },
    {
        slug: 'consorcio-estruturado-imoveis-alto-valor',
        category: 'Consórcio Estruturado',
        title: 'Como Adquirir Imóveis de R$ 5 Milhões Pagando Metade da Taxa dos Financiamentos Tradicionais',
        description: 'Consórcios estruturados para pessoa jurídica e alta renda têm reduzido o custo de aquisição de imóveis de alto valor para a faixa de 1,8% a 2,2% ao ano. Entenda como funciona.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop',
        ...MARINA,
        dateIso: '2026-07-22',
        dateDisplay: '22 de julho de 2026',
        readTime: '5 min',
        related: ['short-stay-alto-padrao-family-offices', 'casas-alphaville-tambore-locacao-executiva', 'villas-luxo-trancoso-buzios'],
        body: [
            '<p>Financiamentos imobiliários tradicionais no Brasil ainda carregam taxas efetivas que, somadas a seguros e tarifas, podem ultrapassar 12% ao ano. Para ativos de alto valor, essa diferença representa milhões de reais ao longo do contrato.</p>',
            '<p>O consórcio estruturado para pessoa jurídica e alta renda, quando bem desenhado, reduz esse custo para a faixa de 1,8% a 2,2% ao ano — sem incidência de juros compostos, apenas taxa de administração diluída ao longo do prazo do grupo.</p>',
            '<h2>Onde está a economia, de fato</h2>',
            '<p>A diferença central é estrutural: financiamento bancário cobra juros sobre o saldo devedor todo mês; consórcio cobra uma taxa de administração fixa, previamente conhecida, diluída nas parcelas. Não há CET oculto, não há revisão de índice a cada aniversário de contrato — o que existe é reajuste pelo INCC, previsível e contratual.</p>',
            '<p>O ponto de atenção é o tempo até a contemplação, que depende de sorteio ou lance e não é garantido para uma data específica. É aqui que entra a estruturação: uma estratégia de lance embutido bem calculada pode antecipar a contemplação em anos, reduzindo o tempo de exposição ao aguardo.</p>',
            '<p>A MCM Capital monta grupos de consórcio sob medida, com estratégias de lance embutido e uso combinado de cartas contempladas, permitindo contemplação em prazos muito menores que a média de mercado.</p>',
            '<h2>Para quem essa estratégia faz sentido</h2>',
            '<p>Consórcio estruturado não substitui financiamento em todos os cenários — funciona melhor para quem tem previsibilidade de caixa para sustentar a parcela até a contemplação e não depende da posse imediata do imóvel. Para empresas e investidores com esse horizonte, a equação de custo total costuma ser, de longe, mais favorável do que a alternativa bancária.</p>'
        ]
    },
    {
        slug: 'protecao-sucessoria-offshore-seguro-vida',
        category: 'Seguro de Vida &amp; Sucessão',
        title: 'Proteção Sucessória Offshore: Como Garantir Liquidez Imediata para Herdeiros sem Inventário',
        description: 'Apólices de seguro de vida internacionais entregam indenização a herdeiros fora do inventário, em cerca de 30 dias. Entenda como isso protege patrimônio familiar de liquidações forçadas.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop',
        ...RAFAEL,
        dateIso: '2026-06-15',
        dateDisplay: '15 de junho de 2026',
        readTime: '5 min',
        related: ['seguro-vida-high-net-worth-itcmd', 'saude-executiva-c-level-corporativa', 'planos-saude-premium-c-level'],
        body: [
            '<p>Um dos maiores riscos patrimoniais de famílias empresárias é o congelamento de bens durante o processo de inventário — que no Brasil pode levar anos e consumir entre 4% e 8% do patrimônio em ITCMD, custas e honorários.</p>',
            '<p>Apólices de seguro de vida internacionais, estruturadas em dólar, entregam a indenização diretamente aos beneficiários indicados, fora do inventário, em prazo médio de 30 dias — garantindo liquidez imediata para custear impostos, manter operações e evitar a venda forçada de ativos.</p>',
            '<h2>O problema que a liquidez resolve</h2>',
            '<p>Sem uma reserva de liquidez definida, herdeiros frequentemente precisam vender imóveis, participações societárias ou ativos ilíquidos a preço de saldo justamente no pior momento para negociar — sob pressão de prazo e de custos correndo. A apólice muda essa equação: o valor cai na conta do beneficiário indicado, sem passar pelo inventário e sem disputa entre herdeiros sobre qual bem será vendido primeiro.</p>',
            '<p>Estruturada em dólar, a apólice também funciona como proteção cambial adicional, já que o valor segurado não sofre a variação patrimonial que ativos em reais enfrentam em cenários de estresse macroeconômico.</p>',
            '<p>A MCM Capital estrutura essas apólices em parceria com seguradoras internacionais de primeira linha, alinhadas ao planejamento sucessório de cada família — dimensionando o valor segurado a partir do passivo tributário estimado do patrimônio, não de uma tabela genérica.</p>',
            '<h2>O que considerar antes de contratar</h2>',
            '<p>O dimensionamento correto exige olhar para o patrimônio como um todo: imóveis, participações societárias, ativos financeiros e o ITCMD estimado em cada estado de domicílio dos herdeiros. Uma apólice mal dimensionada resolve parte do problema e deixa o restante exposto — por isso essa é uma decisão que vale a pena estruturar com apoio técnico, não contratar isoladamente.</p>'
        ]
    },
    {
        slug: 'planos-saude-premium-c-level',
        category: 'Executive Health',
        title: 'Planos de Saúde Premium para Sócios e C-Level com Cobertura Internacional Albert Einstein e Sírio',
        description: 'Planos executivos com estipulação corporativa dão acesso a hospitais como Albert Einstein e Sírio-Libanês e funcionam como ferramenta de retenção de talentos-chave.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop',
        ...RAFAEL,
        dateIso: '2026-05-28',
        dateDisplay: '28 de maio de 2026',
        readTime: '4 min',
        related: ['saude-executiva-c-level-corporativa', 'protecao-sucessoria-offshore-seguro-vida', 'seguro-vida-high-net-worth-itcmd'],
        body: [
            '<p>Reter talentos de alto nível e proteger sócios fundadores passa cada vez mais por uma gestão de saúde diferenciada. Planos executivos com estipulação corporativa oferecem acesso a hospitais como Albert Einstein e Sírio-Libanês, reembolso ampliado e cobertura internacional.</p>',
            '<h2>Por que a estipulação corporativa muda o jogo</h2>',
            '<p>Um plano contratado individualmente segue tabelas de reajuste por faixa etária que, a partir dos 50 anos, podem pesar significativamente na mensalidade. Planos com estipulação corporativa diluem esse risco em um grupo maior e negociam condições de reembolso e rede credenciada muito acima do que o mercado individual oferece — inclusive cobertura para atendimento fora do país em casos de urgência durante viagens.</p>',
            '<p>Para sócios fundadores, isso também é planejamento de continuidade: um problema de saúde não tratado com agilidade tem custo direto na operação da empresa, e a diferença entre a rede coberta por um plano padrão e uma rede de ponta pode ser o tempo até o diagnóstico correto.</p>',
            '<p>A MCM Capital estrutura essas apólices corporativas com condições comerciais exclusivas, adequadas ao porte e perfil de cada empresa, funcionando também como ferramenta estratégica de retenção de talentos-chave — um benefício que pesa tanto quanto remuneração na decisão de um executivo sênior de ficar ou sair.</p>',
            '<p>O desenho ideal considera o número de vidas, a faixa etária do grupo e o apetite de coparticipação, equilibrando custo mensal com a amplitude de rede desejada.</p>'
        ]
    },
    {
        slug: 'casas-alphaville-tambore-locacao-executiva',
        category: 'Alphaville &amp; Tamboré',
        title: 'Casas de Condomínio Fechado Preparadas para Locação Executiva e Eventos Corporativos',
        description: 'Casas em condomínios fechados de Alphaville e Tamboré atingem retorno estimado de 15,2% ao ano com locação executiva. Veja como a operação é estruturada ponta a ponta.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop',
        ...HENRIQUE,
        dateIso: '2026-08-19',
        dateDisplay: '19 de agosto de 2026',
        readTime: '4 min',
        related: ['short-stay-alto-padrao-family-offices', 'studios-luxo-itaim-bibi-jardins', 'villas-luxo-trancoso-buzios'],
        body: [
            '<p>Casas em condomínios fechados de Alphaville e Tamboré têm alta demanda de executivos de multinacionais em processos de relocation, além de eventos corporativos que buscam privacidade e infraestrutura.</p>',
            '<h2>O perfil de demanda que sustenta o retorno</h2>',
            '<p>Diferente do turismo de lazer, a demanda executiva nessa região é menos sazonal: empresas de tecnologia, farmacêuticas e multinacionais com sede na região trazem profissionais para estadias de semanas ou meses, com orçamento corporativo e menor sensibilidade a preço do que o hóspede de lazer.</p>',
            '<p>Isso reduz a volatilidade de ocupação ao longo do ano e permite contratos de estadia média mais longos, o que simplifica a operação e reduz o custo de limpeza e reposição entre hóspedes.</p>',
            '<p>Com retorno estimado de 15,2% ao ano, a MCM Capital identifica, estrutura e gerencia esses ativos ponta a ponta — da aquisição à operação de locação executiva, incluindo a adequação do imóvel para receber eventos corporativos de pequeno porte, um diferencial que amplia a taxa diária média.</p>',
            '<p>A seleção do ativo é o que mais impacta o resultado: proximidade de polos corporativos, segurança 24h e infraestrutura de trabalho remoto (internet de alta velocidade, espaço para home office) pesam mais nessa tese do que metragem ou padrão de acabamento isoladamente.</p>'
        ]
    },
    {
        slug: 'studios-luxo-itaim-bibi-jardins',
        category: 'Itaim Bibi &amp; Jardins',
        title: 'Studios e Compactos de Luxo: A Receita Certa para Ocupação Máxima em São Paulo',
        description: 'Studios bem localizados em Itaim Bibi e Jardins, com design autoral e automação, atingem até 82% de ocupação. Entenda a operação por trás desse número.',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop',
        ...HENRIQUE,
        dateIso: '2026-04-10',
        dateDisplay: '10 de abril de 2026',
        readTime: '4 min',
        related: ['short-stay-alto-padrao-family-offices', 'casas-alphaville-tambore-locacao-executiva', 'consorcio-estruturado-imoveis-alto-valor'],
        body: [
            '<p>Studios bem localizados em Itaim Bibi e Jardins, com design autoral e automação residencial, atingem taxas de ocupação de até 82% — muito acima da média de mercado para imóveis de locação por temporada em São Paulo.</p>',
            '<h2>O que explica a taxa de ocupação</h2>',
            '<p>Studios compactos e bem localizados têm um público maior de potenciais hóspedes do que apartamentos grandes: profissionais em viagem a trabalho, casais e hóspedes solo que priorizam localização sobre metragem. Isso significa mais reservas possíveis por período disponível, o que sustenta uma ocupação mais alta e mais constante ao longo do ano.</p>',
            '<p>O design autoral também cumpre uma função comercial, não só estética: fotos diferenciadas elevam a taxa de conversão do anúncio, e ambientes fotogênicos justificam uma diária acima da média da região — o retorno sobre o investimento em decoração costuma se pagar em poucos meses de operação.</p>',
            '<p>A gestão 100% remota realizada pela equipe MCM inclui precificação dinâmica, atendimento a hóspedes e relatórios mensais transparentes de repasse ao proprietário, permitindo que o investidor acompanhe o desempenho do ativo sem se envolver na operação do dia a dia.</p>',
            '<p>Para quem está entrando nessa tese pela primeira vez, studios de até R$ 1,5 milhão em bairros centrais costumam ser o ponto de entrada mais líquido — tanto para operar quanto para revender, caso a estratégia mude no futuro.</p>'
        ]
    },
    {
        slug: 'villas-luxo-trancoso-buzios',
        category: 'Destinos Internacionais &amp; Praia',
        title: 'Villas de Alto Luxo no Litoral: A Tendência dos "Ultra-Rich Vacation Rentals"',
        description: 'Com diárias entre R$ 8 mil e R$ 25 mil, villas de alto padrão em Trancoso e Búzios deixaram de ser ativos de lazer para se tornar máquinas geradoras de dividendos.',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop',
        ...HENRIQUE,
        dateIso: '2026-03-02',
        dateDisplay: '2 de março de 2026',
        readTime: '5 min',
        related: ['casas-alphaville-tambore-locacao-executiva', 'short-stay-alto-padrao-family-offices', 'cotas-compartilhadas-iates-jatos'],
        body: [
            '<p>Com diárias entre R$ 8.000 e R$ 25.000, villas de alto padrão em destinos como Trancoso e Búzios deixaram de ser apenas ativos de lazer para se tornarem máquinas geradoras de dividendos.</p>',
            '<h2>Uso pessoal e rentabilidade não são excludentes</h2>',
            '<p>O receio mais comum de quem tem uma casa de veraneio é perder a disponibilidade do imóvel para a própria família nas datas que importam — Réveillon, Carnaval, férias de julho. Uma operação bem planejada reserva esses períodos com antecedência para o proprietário e maximiza a locação no restante do calendário, quando a demanda de temporada ainda é alta o suficiente para sustentar diárias elevadas.</p>',
            '<p>O público desse tipo de villa também é diferente: hóspedes de alto padrão que buscam privacidade total, staff dedicado e experiência curada, e que aceitam pagar um prêmio significativo sobre a diária de um hotel de luxo na mesma região em troca disso.</p>',
            '<p>A MCM Capital estrutura a operação de temporada preservando o uso pessoal da família nos períodos desejados, maximizando a rentabilidade no restante do calendário — com curadoria de staff, enxoval e experiência do hóspede no padrão que a diária exige.</p>',
            '<p>Esse tipo de ativo tende a se valorizar de forma mais consistente que imóveis urbanos equivalentes, já que a oferta de terrenos à beira-mar em destinos consolidados é, por natureza, limitada.</p>'
        ]
    },
    {
        slug: 'seguro-vida-high-net-worth-itcmd',
        category: 'Planejamento Sucessório &amp; Seguro de Vida',
        title: 'Seguro de Vida High-Net-Worth: A Ferramenta Ideal para Garantir Liquidez e Cobrir ITCMD sem Vender Patrimônio',
        description: 'A morte imprevista de um fundador pode congelar bens da empresa e da família. Veja como apólices de vida internacionais evitam a liquidação forçada de patrimônio.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop',
        ...RAFAEL,
        dateIso: '2026-02-11',
        dateDisplay: '11 de fevereiro de 2026',
        readTime: '4 min',
        related: ['protecao-sucessoria-offshore-seguro-vida', 'saude-executiva-c-level-corporativa', 'planos-saude-premium-c-level'],
        body: [
            '<p>A morte imprevista de um fundador pode congelar bens da empresa e da família, exigindo liquidação de imóveis a preço de saldo para cobrir impostos e custas de inventário.</p>',
            '<h2>O passivo tributário que pega famílias de surpresa</h2>',
            '<p>O ITCMD varia por estado e pode chegar a 8% do valor total do patrimônio transmitido — um valor que precisa ser pago, em muitos estados, antes mesmo da partilha dos bens se concluir. Sem uma reserva líquida disponível, a saída mais comum é vender rapidamente um ativo, quase sempre abaixo do valor justo, apenas para gerar caixa dentro do prazo legal.</p>',
            '<p>Apólices de vida internacionais estruturadas pela MCM Capital blindam o patrimônio e entregam liquidez imediata aos herdeiros, fora do processo de inventário — o valor segurado é dimensionado justamente para cobrir esse passivo tributário estimado, sem depender da venda de nenhum ativo da família.</p>',
            '<p>Além do ITCMD, a apólice também pode ser desenhada para cobrir despesas de transição da empresa: manutenção de folha de pagamento, honorários de administração temporária e capital de giro nos primeiros meses após a perda de um sócio-chave.</p>',
            '<p>O dimensionamento correto é revisado periodicamente, já que o valor do patrimônio e a legislação estadual de ITCMD mudam ao longo do tempo — uma apólice contratada há dez anos raramente ainda reflete o patrimônio atual da família.</p>'
        ]
    },
    {
        slug: 'saude-executiva-c-level-corporativa',
        category: 'Saúde Executiva &amp; Corporativa',
        title: 'Gestão de Seguro Saúde para Grupos C-Level: Reembolso Ilimitado e Hospitais de Ponta',
        description: 'Consultoria personalizada para diretores e grandes empresários dá acesso a Einstein, Sírio-Libanês e Mayo Clinic sob condições exclusivas de estipulação corporativa.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop',
        ...RAFAEL,
        dateIso: '2026-01-20',
        dateDisplay: '20 de janeiro de 2026',
        readTime: '3 min',
        related: ['planos-saude-premium-c-level', 'protecao-sucessoria-offshore-seguro-vida', 'seguro-vida-high-net-worth-itcmd'],
        body: [
            '<p>Consultoria personalizada para diretores, herdeiros e grandes empresários, com acesso aos melhores corpos clínicos do Brasil e do exterior — Einstein, Sírio-Libanês e Mayo Clinic — sob condições exclusivas de estipulação corporativa MCM.</p>',
            '<h2>O que muda em relação a um plano de mercado</h2>',
            '<p>Grupos C-Level costumam ter necessidades específicas: check-ups executivos completos, telemedicina internacional para viagens frequentes e reembolso sem teto para procedimentos de alta complexidade. Planos de mercado, mesmo os mais caros, raramente cobrem esse conjunto completo dentro de uma única apólice.</p>',
            '<p>A estipulação corporativa negociada pela MCM Capital reúne esses itens em uma estrutura única, com atendimento personalizado para agendamento e acompanhamento — retirando do executivo a fricção de negociar autorizações e reembolsos em momentos de saúde já delicados.</p>',
            '<p>Esse tipo de estrutura também costuma incluir cobertura internacional para emergências durante viagens, um detalhe frequentemente negligenciado por executivos que viajam com regularidade e assumem, erroneamente, que o plano nacional os protege fora do país.</p>',
            '<p>A avaliação do desenho ideal considera o perfil etário do grupo, a frequência de viagens internacionais e o apetite por coparticipação, sempre equilibrando amplitude de cobertura com o custo mensal da apólice.</p>'
        ]
    },
    {
        slug: 'tenis-luxo-grand-slams-networking',
        category: 'Esporte de Elite &amp; Networking',
        title: 'Tênis de Luxo e os Grandes Torneios: Por Que as Quadras Viraram o Novo Hub dos Negócios Bilionários',
        description: 'De Roland Garros aos clubes fechados de São Paulo, o tênis se consolidou como o esporte preferido de grandes tomadores de decisão. Entenda o fenômeno.',
        image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1400&auto=format&fit=crop',
        ...CAMILA,
        dateIso: '2026-05-30',
        dateDisplay: '30 de maio de 2026',
        readTime: '4 min',
        related: ['alta-relojoaria-suica-ativo-vestivel', 'cotas-compartilhadas-iates-jatos', 'villas-luxo-trancoso-buzios'],
        body: [
            '<p>De Roland Garros aos clubes fechados de São Paulo e Nova York, o tênis se consolidou como o esporte preferido de grandes tomadores de decisão — unindo disciplina, networking e exclusividade.</p>',
            '<h2>Por que o tênis, especificamente</h2>',
            '<p>Diferente de esportes coletivos assistidos em grandes arenas, o tênis oferece um ambiente de proximidade: camarotes menores, intervalos mais longos entre partidas e uma cultura de sociabilidade que remonta aos clubes de campo do século passado. Isso cria naturalmente espaço para conversas de negócios que outros esportes, mais ruidosos e menos íntimos, não comportam da mesma forma.</p>',
            '<p>Há também o fator prática: o tênis é um dos poucos esportes de alto desempenho jogáveis por décadas, o que o torna um ponto de encontro recorrente entre sócios, investidores e executivos — muita gente fecha parcerias na quadra antes de fechar na sala de reunião.</p>',
            '<p>A MCM conecta clientes a experiências esportivas exclusivas, incluindo camarotes VIP nos principais Grand Slams do circuito mundial, com curadoria de hospitalidade e acesso a áreas reservadas para convidados e parceiros de negócio.</p>',
            '<p>Para quem já é cliente de assessoria patrimonial, esse tipo de experiência costuma funcionar como extensão natural do relacionamento — menos sobre o jogo em si, mais sobre o círculo que se forma ao redor dele.</p>'
        ]
    },
    {
        slug: 'alta-relojoaria-suica-ativo-vestivel',
        category: 'Alta Horlogerie',
        title: 'Alta Relojoaria Suíça: Ativos Vestíveis que Superaram a Inflação em 10 Anos',
        description: 'Peças de alta relojoaria suíça de edição limitada têm mostrado valorização consistente na última década. Entenda por que colecionadores tratam relógios como reserva de valor.',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop',
        ...CAMILA,
        dateIso: '2026-04-24',
        dateDisplay: '24 de abril de 2026',
        readTime: '3 min',
        related: ['tenis-luxo-grand-slams-networking', 'cotas-compartilhadas-iates-jatos', 'villas-luxo-trancoso-buzios'],
        body: [
            '<p>Peças de alta relojoaria suíça de edição limitada têm demonstrado valorização consistente na última década, funcionando como reserva de valor tangível e diversificação fora do sistema financeiro tradicional.</p>',
            '<h2>O que sustenta essa valorização</h2>',
            '<p>Diferente de outros bens de luxo, relógios de manufaturas consolidadas operam com produção deliberadamente limitada — algumas referências têm fila de espera de anos mesmo pelo preço de tabela. Essa escassez controlada, somada à durabilidade física da peça, cria condições raras de valorização em um bem de consumo.</p>',
            '<p>É importante separar duas categorias: peças de entrada de manufaturas de prestígio, que tendem a acompanhar a inflação, e referências específicas de edição limitada ou descontinuadas, que historicamente concentram os ganhos mais expressivos — a diferença entre as duas categorias é enorme e exige conhecimento de mercado, não apenas gosto pessoal.</p>',
            '<p>Como qualquer ativo colecionável, a liquidez não é imediata: vender uma peça pelo valor justo exige acesso ao mercado secundário certo, seja em leilão especializado ou através de revendedores autorizados de confiança — parte relevante do "retorno" de um colecionador experiente vem justamente de comprar e vender pelos canais certos.</p>'
        ]
    },
    {
        slug: 'cotas-compartilhadas-iates-jatos',
        category: 'Aviação &amp; Náutica',
        title: 'Estruturação de Cotas de Propriedade Compartilhada para Iates e Jatos Executivos',
        description: 'A propriedade compartilhada dá acesso a iates e jatos executivos por uma fração do custo total, sem os custos operacionais de manutenção exclusiva. Entenda como funciona.',
        image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1400&auto=format&fit=crop',
        ...CAMILA,
        dateIso: '2026-06-28',
        dateDisplay: '28 de junho de 2026',
        readTime: '4 min',
        related: ['villas-luxo-trancoso-buzios', 'tenis-luxo-grand-slams-networking', 'alta-relojoaria-suica-ativo-vestivel'],
        body: [
            '<p>A propriedade compartilhada de iates e jatos executivos permite acesso a ativos de altíssimo padrão com uma fração do custo total e sem os custos operacionais de manutenção exclusiva.</p>',
            '<h2>A conta que a propriedade integral esconde</h2>',
            '<p>Manter um jato ou iate com uso exclusivo envolve muito mais do que o valor de aquisição: tripulação, hangar ou marina, manutenção preventiva e desvalorização por ociosidade são custos fixos que incidem mesmo quando o ativo não está em uso. Para a maioria dos proprietários, o tempo de uso real ao longo do ano não justifica esse custo fixo integral.</p>',
            '<p>A propriedade compartilhada resolve exatamente essa desproporção: o proprietário paga proporcionalmente ao uso e divide os custos fixos com os demais cotistas, mantendo acesso ao mesmo padrão de ativo sem carregar sozinho o peso da ociosidade.</p>',
            '<p>A MCM Capital estrutura essas cotas com contratos claros de uso, manutenção e revenda, otimizando a eficiência de uso de cada ativo — o que inclui calendário de reserva justo entre cotistas e regras definidas para a saída de um sócio da cota.</p>',
            '<p>O ponto mais importante da estruturação, e o que costuma ser negligenciado em acordos informais, é a cláusula de saída: definir com clareza como e por quanto um cotista pode vender sua fração evita disputas que, na prática, são o maior risco desse tipo de investimento.</p>'
        ]
    }
];
