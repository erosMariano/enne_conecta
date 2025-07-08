## 🗂️ Diagrama do Banco de Dados

Abaixo está a estrutura relacional da base de dados do sistema:

![Diagrama ER](./docs/database-diagram.png)


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

