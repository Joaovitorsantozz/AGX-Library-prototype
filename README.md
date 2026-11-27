# AGX LIBRARY

Projeto avaliativo AGX  : Biblioteca ficcional com funções de emprestar,listar,devolver,registrar e apagar livros. Trabalha conceitos como concorrência usando transactions, autenticação com JWT protegendo rotas especificas,
assim como outra camada de proteção apenas para admins.

Cada pasta possui informações mais específicas sobre seu campo

### Pasta back-end
Trata dos assuntos do back-end, explicando melhor as rotas do back-end as tecnologias, assim como subir o servidor isoladamente.

### Pasta front-end
Trata dos assuntos do front-end, explicando melhor as telas, suas respectivas tecnologias, assim como subir o servidor isoladamente.

## Como subir os dois servidores ao mesmo tempo

Na pasta raiz do projeto fora das pastas back-end e front-end digite npm install para instalar concurrently

após isso rode

``` npm run dev```
( é necessário ter instalado as dependências tanto no front quanto no back ja)
Isso irá rodar os dois servidores ao mesmo tempo, note que o front-end **precisa** que o back-end esteja rodando também para que o projeto funcione corretamente

Se tudo correr certo irá aparecer uma mensagem parecida com

```
[1] Task dev deno run --allow-net --allow-env --allow-read --allow-ffi --env-file=.env --watch main.ts
[1] Watcher Process started.
[0] 
[0] > front-end@0.0.0 dev
[0] > vite
[0] 
[0]   VITE v8.3.8  ready in 189 ms
[0] 
[0]   ➜  Local:   http://localhost:5173/
[0]   ➜  Network: use --host to expose
[1] Connected to the database
[1] Server is running on port 3000
```

```[0]   VITE v8.3.8  ready in 189 ms``` essa linha significa que o front subiu

```[1] Connected to the database [1] Server is running on port 3000``` essas significa que o back subiu


Consulte as pastas back-end e front-end para mais informações sobre cada área.

- https://github.com/Joaovitorsantozz/AGX-Library-prototype/tree/main/back-end
- https://github.com/Joaovitorsantozz/AGX-Library-prototype/tree/main/front-end
