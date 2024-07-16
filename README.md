# Challenge Front-End Jr Woovi

Este é o repositório da minha versão do teste/desafio para a vaga de front-end jr. da Woovi.

## Tecnologias Utilizadas

- Vite React + TypeScript
- Material UI (MUI)
- react-router-dom
- react-hook-form

## Descrição do Desafio

O desafio consiste na replicação de um design fornecido, conforme as seguintes especificações:

- Implementação em React.
- Abordagem Mobile First para garantir responsividade em todos os dispositivos.
- Utilização de uma biblioteca de UI, preferencialmente Material-UI devido à integração com Woovi.
- Consideração de todos os casos de borda para uma experiência de usuário consistente.

## Navegação do Projeto

- **Página Inicial (/**): Página que exibe as opções de pagamento em Pix à vista ou parcelamento de Pix + Cartão para o cliente.
- **Página de QR Code (/qr-code*)**: Página que exibe o QR Code para pagamento da entrada do valor.
- **Página de Formulário do Cartão (/cartao*)**: Página que exibe o formulário para o cliente preencher os dados do cartão para pagar as demais parcelas do valor.

> \*As rotas das páginas de QR Code e de Cartão terminam com o índice da opção de cartão escolhida, sendo que a primeira opção de parcela não possui um índice e as demais vão de 2 até 6.

## Executando o Projeto

### Pré-requisitos

- Node.js

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio

2. Navegue até o diretório do projeto e instale as dependencias com o comando:
    ```bash
    npm install

3. Execute o projeto com o comando:
    ```bash
    npm run dev

4. A aplicação estará disponível em http://localhost:5173 no ambiente de desenvolvimento.