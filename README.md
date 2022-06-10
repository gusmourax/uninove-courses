# Grupo

- GUSTAVO MOURA DA SILVA FONSECA - RA 2221101845
- CARLOS DANIEL DOS SANTOS - RA 2221100495
- LEANDRO DELINGER - RA 2221102967
- LUCAS GILSON REIS BARBOSA - RA 2221102701
- MARCIO HENRIQUE DA SILVA - RA 2221103242
- TADEU ASSUNÇÃO DEVESA - RA 2221102447
- VANEI DE JESUS MENDES - RA 2221103954
- VITOR MAZZO COKE - RA 2221103565

# Descrição

O projeto consiste em uma simples API que faz o cadastro de cursos e alunos, onde os dois tem um
relacionamento no banco de dados. O intuito dessa aplicação foi focar em tecnologias e estratégias de ponta, e não apenas na funcionalidade.

# Tecnologias utilizadas

### Projeto
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [PrismaORM](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Winston](https://github.com/winstonjs/winston)

### Banco de dados
- [PostgreSQL](https://www.postgresql.org/)

### Infra
- [AWS EC2](https://aws.amazon.com/pt/ec2/)

# API url

[http://ec2-54-92-212-107.compute-1.amazonaws.com](http://ec2-54-92-212-107.compute-1.amazonaws.com)

# API endpoints

## GET
`api-url` [/courses](http://ec2-54-92-212-107.compute-1.amazonaws.com/courses) <br/>
`api-url` [/courses/:courseId](http://ec2-54-92-212-107.compute-1.amazonaws.com/courses/:courseId) <br/>
`api-url` [/students](http://ec2-54-92-212-107.compute-1.amazonaws.com/students) <br/>
`api-url` [/students/:ra](http://ec2-54-92-212-107.compute-1.amazonaws.com/students/:ra) <br/>

## POST
`api-url` [/courses](http://ec2-54-92-212-107.compute-1.amazonaws.com/courses) <br/>
`api-url` [/students](http://ec2-54-92-212-107.compute-1.amazonaws.com/students) <br/>
___

### GET /courses
Retorna uma lista com todos os cursos cadastrado no banco de dados.

**Response**

```
// CODE: 200
[
  {
    "id": string,
    "nome": string,
    "descricao": string
  }
]
```
___

### GET /courses/:courseId
Retorna um curso buscado pelo ID.

**Parameters**

| Name     | Required | Type   | Description                |
|----------|----------|--------|----------------------------|
| courseId | true     | string | ID do curso a ser buscado. |

**Response**

```
// CODE: 200
{
  "id": string,
  "nome": string,
  "descricao": string
}
```
___

### GET /students
Retorna uma lista com todos os usuários cadastrados no banco de dados.

**Response**

```
// CODE: 200
[
	{
		"id": string,
		"nome": string,
		"email": string,
		"ra": string,
		"curso": {
			"nome": string,
			"descricao": string
		}
	}
]
```
___

### GET /students/:ra
Busca um estudante pelo RA.

**Parameters**

| Name     | Required | Type   | Description                |
|----------|----------|--------|----------------------------|
| ra | true     | string | RA do aluno a ser buscado. |

**Response**

```
// CODE: 200
{
	"id": string,
	"nome": string,
	"email": string,
	"ra": string,
	"curso": {
		"nome": string,
		"descricao": string
	}
}
```
___

### POST /courses
Faz a criação de um curso.

**Parameters**

| Name      | Required | Type   | Description         |
|-----------|----------|--------|---------------------|
| name      | true     | string | Nome do curso.      |
| descricao | true     | string | Descrição do curso. |

**Response**

```
// CODE: 201
```

### POST /students
Faz a criação de um usuário.

**Parameters**

| Name    | Required | Type   | Description                                |
|---------|----------|--------|--------------------------------------------|
| cursoId | true     | string | ID do curso que o estudante está cursando. |
| nome    | true     | string | Nome do estudante.                         |
| email   | true     | string | E-mail do estudante.                       |

**Response**

```
// CODE: 201
{
	"ra": string
}
```
