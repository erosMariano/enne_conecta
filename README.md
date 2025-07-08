## ⚙️ Como rodar o Projeto

### ✅ Pré-requisitos

* Node.js 18+
* PostgreSQL (local ou nuvem)
* `npm` ou `yarn`

---

### 📦 Instalação

```bash
npm install
# ou
yarn
```

---

### 🔐 Configuração do banco

Crie um arquivo `.env` na raiz com:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

---

### 🛠️ Primeira vez rodando

```bash
npx prisma migrate dev --name init
```

---

### 📊 Visualizar dados (opcional)

```bash
npx prisma studio
```

---

### 🧪 Após mudanças no schema

```bash
npx prisma migrate dev --name nome-da-migracao
```




## 🗂️ Diagrama do Banco de Dados

Abaixo está a estrutura relacional da base de dados do sistema:

![Diagrama ER](./docs/database-diagram.png)

### 🗄️ Banco de dados: **PostgreSQL**

Escolhemos o **PostgreSQL** como banco de dados principal por ser um sistema relacional moderno, robusto e amplamente utilizado em aplicações de alta performance. Ele oferece:

*  **Conformidade com padrões SQL**
*  **Suporte nativo a relacionamentos complexos**
*  **Tipos de dados avançados** como `JSONB`, `ARRAY`, `UUID`
*  **Consistência e integridade de dados com constraints completas**
*  Excelente compatibilidade com plataformas como Vercel, Railway, Supabase, Render, AWS, etc.

---

### ⚙️ ORM: **Prisma**

Utilizamos o **Prisma ORM** pela sua excelente integração com o ecossistema TypeScript/JavaScript e sua abordagem moderna de modelagem e acesso ao banco. Entre os principais motivos:

*  **Schema declarativo** fácil de manter e versionar
*  **Migrations automáticas** e confiáveis
*  **Tipos gerados automaticamente** para uso seguro no código
*  **Queries seguras e tipadas**, com suporte a relacionamentos, filtros e paginação
* 🛠️ Compatível com PostgreSQL e preparado para escalar


<br/>

> Com essa stack, temos **produtividade no desenvolvimento**, **manutenção facilitada**, e uma base sólida para **crescimento do projeto** com performance e segurança.



## Qualidade de Código e Padronização

###  Husky + Lint-Staged

O projeto utiliza **[Husky](https://typicode.github.io/husky/)** para garantir que nenhuma alteração com problemas de lint seja commitada. Isso é feito com a ajuda do **[Lint-Staged](https://github.com/okonet/lint-staged)**, que executa o ESLint e o Prettier somente nos arquivos alterados (staged).

**Motivo de uso:**
Como o projeto será desenvolvido em equipe, o Husky ajuda a **padronizar a qualidade do código**, impedindo que commits com erros de lint ou código mal formatado entrem na base. Isso evita problemas futuros, melhora a leitura do código e reduz retrabalho.

**Comportamento atual:**

* Antes de qualquer commit:

  * O `lint-staged` roda o `eslint` com `--max-warnings=0`, ou seja, **nenhum warning ou erro é permitido**.
  * O `prettier --check` verifica a formatação dos arquivos.
  * Se houver problemas, o commit é bloqueado automaticamente.

---

###  ESLint + Prettier

O projeto usa o [ESLint](https://eslint.org/) com o novo sistema de configuração **Flat Config**, integrado ao Next.js 15 e ao TypeScript. Também está integrado ao **Prettier** para manter a formatação de código consistente entre todos os desenvolvedores.

**Configurações aplicadas:**

* **Regras da comunidade**: `eslint:recommended`, `next/core-web-vitals`, `next/typescript`.
* **Prettier integrado** com o ESLint para evitar conflitos entre regras de formatação e lint.
* **Strict mode ativado** no ESLint (`no-unused-vars`, `no-console`, etc.).

**Motivo de uso:**

* **Padronização automática** do código.
* **Detecção precoce** de erros ou más práticas.
* **Melhor experiência em equipe**, já que todos os membros seguem o mesmo padrão sem depender de estilo pessoal.

