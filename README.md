# Guideline IA

Aqui está um guideline básico para desenvolver um jogo estilo Agar.io usando JavaScript e TypeScript. Vou focar em fornecer uma estrutura para organizar o projeto, com algumas dicas de boas práticas.

1. Planejamento

Antes de iniciar o código, planeje os seguintes aspectos:

Movimentação básica: Jogador se move com o mouse.
Crescimento: Jogador cresce conforme "come" células menores.
Multiplayer: Decida se será apenas local (contra IA) ou multiplayer online.
Colisão: Implementar verificação de colisão entre as células.
Renderização: Atualizar o canvas com as posições e tamanhos das células.

2. Ferramentas e Bibliotecas

Canvas API: Para renderização gráfica 2D.
Socket.IO (ou WebSocket): Para multiplayer em tempo real (se for online).
TypeScript: Para tipagem estática e organização de código.
Parcel / Vite / Webpack: Para build e desenvolvimento.

3. Estrutura do Projeto

/agario-clone
/src
/components # entidades do jogo
Player.ts
Cell.ts
/systems # lógicas do jogo
CollisionSystem.ts
GameLoop.ts
InputSystem.ts
index.ts # arquivo principal
/public # arquivos estáticos (HTML, CSS)
tsconfig.json # configuração TypeScript
package.json # dependências

### o que falta

-   quanto maior, menor a velocidade
-   janela inicial pra nome de usuário e cor
-   multiplayer (express.js & sockets.io)
