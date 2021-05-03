# LUBY

Teste para vaga.

## Tabela de Conteúdo

<!--ts-->

- [Tabela de Conteúdo](#tabela-de-conteudo)
- [Descrição](#Descrição)
- [Pré-requisitos](#pré-requisitos)
- [Rodando o Back End](#rodando-o-back-end)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [License](#license)
- [Autor](#autor)
<!--te-->

## Descrição

Considere que uma Instituição de Ensino Superior precisa de uma solução para cadastrar e gerenciar matrículas de usuários em turmas online.

Um crud de alunos com nome, número de matrícula, série, sexo, idade, cpf,telefone e endereço.

O cadastro deve ser gerenciado por uma camada administrativa simples
com apenas um perfil de usuário mas que necessitará de uma senha segura para acessar.

Além de gerenciar o cadastro o administrador deve
: atribuir uma nota geral em uma segunda área no sistema que
se for superior a 5 deve mostrar aprovado do contrário reprovado.

## Rodando com Docker Compose

```bash
# Clone este repositório
$ git clone git@github.com:brlga002/luby.git

# Acesse a pasta do projeto no terminal/cmd
$ cd luby

# inicie o servedor
$ cd docker-compose up -d

# rode o sh da migration e seed
docker exec -it academico-app sh migrate.sh

# O servidor inciará na porta:8000 - acesse http://localhost:8000
```

## Rodando com sem Docker Compose

No arquivo .env não esqueça das variáveis:

DB_HOST=
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

```bash
# Clone este repositório
$ git clone git@github.com:brlga002/luby.git

# Acesse a pasta do projeto no terminal/cmd
$ cd luby

# rode as migrações
$ php artisan migrate

# semeie o banco de dados com registros
$ php artisan db:seed

# inicie o servedor
$ php artisan serve

# O servidor inciará na porta:8000 - acesse http://localhost:8000
```

## Arquitetura

o servidor é uma api REST feita em nodejs. A sigla REST, em português, significa “Transferência de Estado Representacional”. Concebido como uma abstração da arquitetura da web, trata-se de um conjunto de princípios e definições necessários para a criação de um projeto com interfaces bem definidas.

A utilização da arquitetura REST, portanto, permite a comunicação entre aplicações. Ao abrir o navegador, ele estabelece uma conexão TCP/IP com o servidor de destino e envia uma requisição GET HTTP, com o endereço buscado.

O cliente faz requisições REST ao servidor. Esse processo é repetido diversas vezes em um período de navegação. Cada nova URL aberta ou formulário submetido refaz as etapas que descrevemos. Dessa forma, esses elementos permitem a criação de aplicações web, desenhando a forma como navegamos na internet.

As rotas privadas esperam um Bearer Token no header da requisição.

Referência:https://www.totvs.com/blog/developers/rest

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Laravel](https://laravel.com/)
- [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum#api-token-authentication)
- [Reactjs](https://pt-br.reactjs.org/)
- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## License

MIT License

Copyright (c) <2020> <Gabriel Fernandes Lima>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Autor

---

<a href="https://github.com/brlga002">
  <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/22845294?s=460&u=60e45878447fa5b46c2a5572134f69b8d5c92d91&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Fernandes</b></sub>
</a>

<a href="https://github.com/brlga002" title="Gabriel Github link">🚀</a>

Feito com ❤️ por Gabriel Fernandes Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-lima-983701141)](https://www.linkedin.com/in/gabriel-lima-983701141)
[![Gmail Badge](https://img.shields.io/badge/-gabriel@devmanaus.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabriel@devmanaus.com)](mailto:gabriel@devmanaus.com)
[![badge](https://img.shields.io/badge/Whatsapp-99772008-E66581.svg?logo=data:image/png;base64,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)](https://api.whatsapp.com/send?phone=559299772008&text=Ola%2C%20gabriel%20vi%20seu%20numero%20no%20github.)

```

```
