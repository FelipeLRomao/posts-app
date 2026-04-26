# 📝 Posts App - Grupo Moas
## "Transformando ideias em código, um post de cada vez."

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)

## 🖥️ Demonstração

<div align="center">
  <img src="https://via.placeholder.com/800x400/2f3d3c/b8c4ba?text=Posts+App+-+Grupo+Moas" alt="Demonstração da aplicação" width="800"/>
</div>

## 📋 Sobre o Projeto

Aplicação web desenvolvida como parte do processo seletivo para **Desenvolvedor Frontend Júnior** do **Grupo Moas**. O projeto demonstra habilidades em:

- 🎯 Consumo de APIs REST
- 🎨 Componentização com React
- 📱 Desenvolvimento responsivo
- 🚀 Next.js e TypeScript
- 💅 Estilização com Tailwind CSS

### Funcionalidades

| Funcionalidade | Status | Descrição |
|---------------|--------|-----------|
| Listagem de posts | ✅ | Exibe todos os posts da API |
| Busca em tempo real | ✅ | Filtra posts por título |
| Página de detalhes | ✅ | Visualização completa do post |
| Rotas dinâmicas | ✅ | URLs amigáveis (/posts/1, /posts/2) |
| Loading states | ✅ | Feedback visual durante carregamento |
| Tratamento de erros | ✅ | Mensagens amigáveis e retry |
| Layout responsivo | ✅ | Adaptado para mobile, tablet e desktop |
| Identidade visual | ✅ | Cores e logo do Grupo Moas |

## 🎨 Identidade Visual

### Cores Institucionais
| Cor | Código | Utilização |
|-----|--------|------------|
| Verde Escuro | `#2f3d3c` | Títulos, botões, bordas, links |
| Verde Claro | `#b8c4ba` | Backgrounds, gradientes |
| Cinza | `#4a5a58` | Textos secundários |

### Logo
O logo oficial do Grupo Moas (`logo-moas.svg`) é utilizado:
- Na página principal ao lado do título
- Como favicon do site
- No rodapé da aplicação

## 🚀 Tecnologias Utilizadas

### Core
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária

### APIs e Serviços
| Serviço | Utilização |
|---------|-----------|
| JSONPlaceholder | Dados dos posts |
| Lorem Picsum | Imagens placeholder |

### Desenvolvimento
- ESLint - Linting
- PostCSS - Processamento CSS
- Autoprefixer - Prefixos automáticos

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

## 🚨 Passo a Passo
``` bash
# 1. Clone o repositório
git clone https://github.com/FelipeLRomao/posts-app.git

# 2. Entre na pasta
cd posts-app-grupo-moas

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Execute o projeto
npm run dev
# ou
yarn dev

# 5. Acesse no navegador
http://localhost:3000

```
## 💡 Decisões de Implementação

### 1. Escolha do Framework: Next.js ao invés de React Puro
Decisão: Optei por Next.js em vez de React com React Router.

Justificativa:
- Roteamento nativo - Sem necessidade de bibliotecas adicionais (React Router)
- Performance otimizada - Server Components e otimizações automáticas
- Experiência de desenvolvimento - App Router moderno e intuitivo
- Melhor para SEO - Renderização híbrida (embora não seja o foco do teste)

### 2. Gerenciamento de Estado
Decisão: Utilizei apenas React Hooks nativos (useState, useEffect, useCallback).

Justificativa:
- Seguir rigorosamente o requisito do teste
- Demonstrar conhecimento dos fundamentos do React
- Evitar complexidade desnecessária para um projeto deste porte
- A aplicação não requer estado global complexo

### 3. Estilização com Tailwind CSS
Decisão: Tailwind CSS para estilização.

Justificativa:
- Desenvolvimento rápido - Classes utilitárias agilizam a criação
- Responsividade facilitada - Breakpoints integrados (sm:, md:, lg:)
- Bundle otimizado - Purge automático de CSS não utilizado
- Consistência - Sistema de design padronizado
- Manutenção - Estilos localizados nos componentes

### 4. Sistema de Imagens com Lorem Picsum
Decisão: Serviço externo de imagens placeholder.

Justificativa:
- Sem dependências locais - Não precisa armazenar imagens no projeto
- Imagens únicas por post - URL baseada no ID do post (consistência)
- Performance - CDN global para carregamento rápido
- Gratuito - Sem custos ou limites de uso
- Qualidade profissional - Fotografias reais de alta qualidade

Implementação:
// Gera URL única baseada no ID do post
const imageUrl = `https://picsum.photos/id/${(postId % 100) + 1}/400/200`

### 5. Estrutura de Componentes
Decisão: Componentes modulares e reutilizáveis.

Componentes criados:
- PostCard - Exibição individual do post na listagem
- PostImage - Gerenciamento de imagens (com fallback)
- SearchBar - Filtro de posts em tempo real
- LoadingSpinner - Feedback visual de carregamento
- ErrorMessage - Tratamento de erros com retry
- LogoMoas.tsx - component para inserção do logo em .svg do Grupo Moas

Benefícios:
- Reutilização - Componentes podem ser usados em múltiplos lugares
- Manutenção - Alterações centralizadas
- Testabilidade - Componentes isolados mais fáceis de testar
- Legibilidade - Código mais organizado e compreensível

### 6. Tratamento de Erros e Loading States
Decisão: Implementação robusta de feedback ao usuário.

Estados tratados:
- Loading - Spinner animado enquanto busca dados
- Erro de rede - Mensagem amigável e botão para tentar novamente
- Post não encontrado - Redirecionamento e mensagem adequada
- Erro na imagem - Fallback visual caso não carregue

Benefícios:
- Melhor experiência do usuário
- Transparência sobre o que está acontecendo
- Resiliência a falhas de API

<div align="center"> Feito com 💚 para o Grupo Moas </div> ```
