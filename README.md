
# **Minesweeper 98**

## **Descrição**

Minesweeper 98 é uma recriação do clássico jogo **Campo Minado** com design inspirado no visual do **Windows 98**. O objetivo do jogo é revelar todas as células seguras de um tabuleiro sem clicar em uma mina. O projeto foi desenvolvido como um exercício para explorar conceitos de manipulação do DOM, lógica de jogos, estilização com CSS e design **Pixel Perfect**.

---

## **Objetivo do Projeto**

- Recriar fielmente o clássico **Minesweeper** com uma interface retrô inspirada no Windows 98.
- Implementar a lógica do jogo de forma eficiente, incluindo:
  - Detecção de minas.
  - Contagem de proximidade.
  - Lógica de vitória e derrota.
- Alcançar uma interface visual **Pixel Perfect**, reproduzindo com exatidão as proporções, cores, bordas e estilos do design original do Windows 98.
- Proporcionar um código modular, legível e de fácil manutenção.
- Aprimorar habilidades em:
  - Manipulação de elementos HTML com JavaScript.
  - Design CSS sem frameworks.
  - Testes automatizados para lógica do jogo.

---

## **Funcionalidades Implementadas**

- Geração de minas e cálculo de proximidade.
- Exibição de números de proximidade nas células.
- Detecção de vitória/derrota:
  - Mostra todas as minas ao perder.
  - Indica vitória ao revelar todas as células seguras.
- Testes automatizados para a lógica do jogo.

---

## **Funcionalidades Planejadas**

### **Interatividade**

- **Seleção de nível:** Escolha entre iniciante, intermediário, avançado ou personalizado.
- **Popup para personalizar o nível:** Permita ao jogador definir o tamanho do tabuleiro e a quantidade de minas.
- **Botão restart (rosto):** Botão para reiniciar o jogo, exibindo diferentes expressões baseadas no estado atual:
  - Rosto feliz durante o jogo.
  - Rosto assustado enquanto o botão está sendo pressionado.
  - Rosto triste ao perder.
- **Opções de flag e interrogação:** Clique com o botão direito para alternar entre marcar bandeiras, interrogações e desmarcar.
  
### **Feedback e Contadores**

- **Temporizador:** Mostra o tempo decorrido desde o início do jogo.
- **Contador de bandeiras:** Exibe o número de bandeiras restantes que o jogador pode usar.

### **Ranking e Personalização**

- **Ranking:** Salve e exiba os melhores tempos para cada nível.
- **Opções de ajuda:** Menu com informações sobre o autor e detalhes do projeto.

### **Som (opcional):**

- **Efeitos sonoros:** Sons ao clicar em células, marcar bandeiras ou acertar uma mina.

---

## **Tecnologias Utilizadas**

- **HTML5:** Estrutura do jogo e layout principal.
- **CSS3:** Estilização com foco no design retrô e implementação de Pixel Perfect.
- **JavaScript (ES6):** Lógica do jogo, manipulação do DOM e interatividade.
- **Jest:** Testes unitários para validar a lógica do jogo.

---

## **Pixel Perfect no Projeto**

O conceito de **Pixel Perfect** é aplicado para garantir que a interface visual seja idêntica ao design do Windows 98:

- Utilizamos referências visuais do jogo original para reproduzir fielmente as bordas, cores e espaçamentos.
- Ajustamos manualmente o CSS para que cada detalhe corresponda ao estilo retrô, incluindo o comportamento de botões, bordas e sombras.
- Ferramentas de comparação de design são usadas para verificar a precisão da interface.

---

## **Como Executar o Projeto**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/sobucki/minesweeper-98.git
   cd minesweeper-98
   ```

2. **Abra o arquivo `index.html` em um navegador:**
   - Você pode abrir o arquivo diretamente ou usar um servidor local para melhor compatibilidade.

3. **Para rodar o servidor local (opcional):**
   - Instale o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.
   - Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

4. **Para rodar os testes automatizados:**
   - Certifique-se de que o Node.js está instalado.
   - Instale as dependências:

     ```bash
     npm install
     ```

   - Execute os testes:

     ```bash
     npm test
     ```

---

## **Licença**

Este projeto é distribuído sob a licença **MIT**. Sinta-se à vontade para usá-lo, modificá-lo e distribuí-lo.

---
