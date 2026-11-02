# Painel Operacional — HUB LSP 100 | Equipe & Gestão (demonstração)

**▶ Abrir a demonstração:** https://edniltonbernardo63.github.io/Painel-operacional/

Demonstração do painel operacional criado por **Ednilton Bernardo** para a gestão de um hub de última milha:
Expedição, Parcel (desvios, Lost, avarias, planejamento, Full), Inventário (Looping, Alto valor agregado e pacotes voando no On Hold) e Equipe em um só lugar, com relatório
em PDF.

> **Todos os números, nomes, códigos de pacote e unidades desta demonstração são fictícios.**
> A versão de produção roda em Google Apps Script e lê as planilhas da operação; aqui as respostas do
> servidor vêm prontas dentro da página, então ela abre direto no navegador, sem login no Google.

## O que dá para ver

| Área | Conteúdo |
|---|---|
| **Visão Geral** | acuracidade, 13 indicadores do dia com variação vs. dia anterior, tendência, alertas e **Resumo por período** com gráficos (média do período e mês a mês) |
| **Equipe** | quadro de efetivo: ativos, escalas, turnos e líderes |
| **Parcel** | Visão do Parcel (% do Parcel em destaque), Desvio de expedição (colaboradores por turno), Possíveis Lost (6–15 dias), Lost (> 15 dias), Avarias, Planejamento e Full |
| **Expedição** | dashboard, Auto ADD, Não Coube, Volumosos, Recuperação, ranking do dia e posição da unidade entre os hubs |
| **Inventário** | Pacotes em Looping e Alto valor agregado (BR, status e justificativas), Pacotes voando (On Hold): quantos voaram no dia e quantos voltaram ao HUB, filtros por dia de voo, dia de entrada e turno, cruzado com o Desvio de expedição |
| **Relatório** | relatório do dia ou por período, com gráficos e escolha das abas (inclui lista de motoristas e Inventário), para imprimir/salvar em PDF |

Login da demonstração: os campos já vêm preenchidos — é só clicar em **Entrar** (qualquer e-mail e senha funcionam).

## Capturas

![Visão Geral](capturas/visao-geral.png)
![Parcel](capturas/parcel.png)
![Desvio de expedição](capturas/desvio.png)
![Expedição](capturas/expedicao.png)
![Inventário · Pacotes voando](capturas/inventario-voando.png)
![Inventário · Looping](capturas/inventario-looping.png)

## Como funciona

- `index.html` é a página inteira (HTML, CSS e JavaScript, gráficos com Chart.js).
- Na produção, a página chama o servidor Apps Script (`google.script.run`). Na demonstração, um pequeno
  módulo no início do arquivo responde no lugar do servidor com os dados fictícios — o resto do código é o
  mesmo do painel real.
- Os dados fictícios foram gerados rodando o próprio código do servidor sobre planilhas sintéticas, então os
  cálculos (médias, % sobre o processado, Lost, ranking, etc.) seguem exatamente as regras do painel.

## Central de Painéis (app para o celular)

**▶ Abrir:** https://edniltonbernardo63.github.io/Painel-operacional/central/

A pasta `central/` é a Central de Painéis do HUB LSP-142 em versão instalável no celular, com ícone próprio
(**Central 142**), abrindo em tela cheia e funcionando mesmo sem sinal para mostrar a lista de painéis.

- **Os links dos painéis não ficam neste repositório** (ele é público). Eles ficam guardados só no aparelho.
- O líder cadastra os painéis uma vez (menu **⋯ › Cadastrar painéis**) e envia o **link da equipe**
  (menu **⋯ › Copiar link da equipe**) pelo WhatsApp. Quem abre esse link já recebe todos os painéis.
- Para instalar: no iPhone, Safari › **Compartilhar** › **Adicionar à Tela de Início**; no Android, Chrome ›
  menu **⋮** › **Instalar app**. A própria página mostra o passo a passo.
- Mudou algum painel? Edite no seu aparelho e envie o link da equipe de novo.

| Arquivo | Para que serve |
|---|---|
| `central/index.html` | a Central inteira (HTML, CSS e JavaScript) |
| `central/manifest.webmanifest` | nome, cores e ícones do app |
| `central/sw.js` | guarda a página para abrir rápido e sem sinal (os painéis sempre vêm ao vivo) |
| `central/*.png`, `central/hero.jpg` | ícones e foto do galpão |

**Problemas comuns**

- *O ícone saiu genérico no iPhone:* adicione à Tela de Início pelo **Safari**, não por outro navegador.
- *Abri pelo ícone e apareceu "Primeiro acesso":* o ícone foi criado antes de carregar o link da equipe.
  Apague o ícone, abra o link da equipe no Safari e adicione de novo.
- *Um painel não abre:* o link do Apps Script mudou (nova implantação). Atualize em **⋯ › Editar painéis**
  e envie o link da equipe de novo.

---
Criado por **Ednilton Bernardo**.
