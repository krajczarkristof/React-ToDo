# Backend


```bash
├───WEBAPI
│   ├───Controllers
│   ├───Properties
│   ├───Migrations
│   ├───TodoData  
│   └───Models
└───Web_Api_Test
```

Két projekt található, a WebApi projektben szerepelnek a Properties/Controllers/Migrations/Models/TodoData könyvtárak. A **Controllers** mappában található kontroller segítségével küldünk választ a bejövő kérésekre (get/put/post/delete). Ez köti össze a frontend-et és az adatbázist. 
A **Models** mappában található az adatbázis és a tábla létrehozásához szükséges osztályok, ebből generálódik a migráció, valamint maga a teendőt leíró osztály entitás itt található.
A **TodoData** mappában maga az adatbázis kommunikáció zajlik, itt kérjük le az adatokat és szolgáljuk ki a kontrollereket, ebben az esetben egyet. Valamint a "dependency injection" elősegítő interface is itt található.

Web_Api_Test a kontrollert teszteli Mock adatokkal.

## Kérések/Válaszok


**GET /api/Todo**

Válasz:
```bash
Status: 200 OK
[
    {
        "id": 1,
        "text": "Lets do it!",
        "order": 0,
        "title": "First Todo",
        "date": "2021-10-15T00:00:00",
        "completed": false,
        "status": "active"
    },
    {
        "id": 2,
        "text": "Nemtudni.",
        "order": 0,
        "title": "Second todo",
        "date": "2021-04-17T00:00:00",
        "completed": true,
        "status": "complete"
    }
]
```

**GET /api/Todo/{id}**

Válasz:
```bash
Status: 200 OK
{
    "id": 1,
    "text": "Lets do it!",
    "order": 0,
    "title": "First Todo",
    "date": "2021-10-15T00:00:00",
    "completed": false,
    "status": "active"
}
```

**POST /api/Todo**
```bash
JSON body:
{
    "text": "postman!",
    "order": 5,
    "title": "postman!",
    "date": "2021-10-15T00:00:00",
    "completed": false,
    "status": "active"
}
```

Válasz:
```bash
Status: 201 Created
{
    "id": 12,
    "text": "postman!",
    "order": 5,
    "title": "postman!",
    "date": "2021-10-15T00:00:00",
    "completed": false,
    "status": "active"
}
```

**DELETE /api/Todo/{id}**

Válasz:
```bash
Status: 200 OK
{
    "id": 12,
    "text": "postman!",
    "order": 5,
    "title": "postman!",
    "date": "2021-10-15T00:00:00",
    "completed": false,
    "status": "active"
}
```

**PUT /api/Todo/{id}**
```bash
JSON body:

{
    "text": "updatetext",
    "date": "2021-10-15T00:00:00",

}
```

Válasz:
```bash
Status: 200 OK
{
    "id": 12,
    "text": "updatetext",
    "order": 5,
    "title": "postman!",
    "date": "2021-10-15T00:00:00",
    "completed": false,
    "status": "active"
}
```
