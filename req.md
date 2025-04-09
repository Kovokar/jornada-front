## Nome do Projeto: Sivirino

### Descrição Geral
Aplicativo web para ajudar na localização de animais desaparecidos, com rotas exclusivas para cada animal, contendo informações cadastradas pelo dono.

---

### Quebra em Subtarefas

#### 1. Estrutura de Roteamento
- Definir formato de rota: `site/rota/hashunica`
- Implementar verificação se é a primeira visita ou não (ex: checar no banco de dados se já existe um registro com aquele hash)

#### 2. Tela de Cadastro (primeiro acesso)
- Criar tela de formulário para:
  - Upload de foto do animal
  - Nome do animal
  - Breve descrição
  - Endereço do dono
  - Contatos dos donos (telefone, e-mail, etc.)
- Validação dos campos
- Armazenar dados em banco de dados associado ao `hashunico`

#### 3. Tela de Exibição (acessos futuros)
- Criar tela que mostra as informações previamente cadastradas:
  - Foto
  - Nome
  - Descrição
  - Endereço do dono
  - Contato
- Garantir layout acessível e visualmente agradável

#### 4. Redirecionamento de Lógica
- Lógica de decisão para redirecionar para cadastro ou exibição com base na existência do hash no sistema

#### 5. Banco de Dados
- Definir estrutura de dados para armazenar as informações dos animais
- Implementar CRUD básico para acesso e atualização de dados (somente leitura e criação por ora)

---

### Prompt para IA (Português)

"Preciso de ajuda para criar uma aplicação web chamada 'Sivirino'. Ela deve servir para auxiliar na busca por animais desaparecidos. Cada animal terá uma rota exclusiva como `site/rota/hashunica`. Na primeira vez que essa rota é acessada, deve aparecer uma tela de cadastro com foto, nome, descrição, endereço e contatos do dono. Nas vezes seguintes, essa mesma rota deve redirecionar para uma tela que mostra os dados cadastrados daquele animal. Preciso que você me ajude a estruturar isso (mas não programe ainda), com foco em como armazenar, identificar e redirecionar com base na existência do hash."

---

### Prompt for AI (English)

"I need help creating a web application called 'Sivirino'. It should help in finding lost pets. Each pet will have a unique route like `site/route/uniquehash`. On the first time this route is accessed, it should redirect to a registration screen where I can upload a photo, provide the pet's name, a short description, the owner's address, and contact information. On future accesses to the same route, it should redirect to a screen displaying the previously registered data. I want your help structuring this (but not coding it yet), focusing on how to store, identify, and redirect based on the presence of the hash."

