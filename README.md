# Curseduca | API para teste de frontend react

## Faça o fork deste repositório e crie o seu projeto a partir deste fork.

### Para iniciar a instalação das dependências do projeto rode: `npm install`

### Caso seja necessário execute: `npm audit fix`

### Execute o comando `npm run serve` para rodar o projeto usando a autenticação
### Execute o comando `npm run no-auth-serve` para rodar o projeto sem a autenticação

> Caso haja a necessidade de alterar os parâmetros executados pela API renomeie o arquivo  **.env.example** para **.env** e altere suas propriedades


1. `db.json`
   ```
    {
        "cursos": [
            {
                "id": 1,
                "name": "Meu primeiro curso",
                "valor": 9.90,
                "quantity": 1,
                "image": "imagme-do-curse.png"
            }
        ],
        "avaliacoes": [
            {
                "id": 1,
                "rating": 4.5
            }
        ],
        "avaliacao": [
            {
                "id_curso": 1,
                "id_user": 1,
                "rating": 4.5,
                "descricao" : "Curso muito bom"
            }
        ]
    }
   ```

2. `users.json`
   ```
      {
            "users": [{
                "id": 1,
                "email": "teste1@teste.com",
                "password": "123456"
            },
            {
                "id": 2,
                "email": "teste2@teste.com",
                "password": "123456"
            },
            {
                "id": 3,
                "email": "teste3@teste.com",
                "password": "123456"
            },
            {
                "id": 4,
                "email": "teste4@teste.com",
                "password": "123456"
            },
            {
                "id": 5,
                "email": "teste5@teste.com",
                "password": "123456"
            }
        ]}
   ```
