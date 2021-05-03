# "Teendő lista" dokumentáció


# Az alkalmazásról általánosan
Ez egy egyszerű webalkalmazás , ami a teendőket tudja kezelni webes felületen, és adatbázisban tárolja az adatokat. Tudsz új teendőt létrehozni, meglévőn módosítani, és  törőlni. A teendők rendelkeznek címmel, leírással, határidővel és állapottal (függőben, folyamatban, kész, elhalasztva). A prioritást a teendők sorrendje határozza meg.
Az alkalmazást elindítva betöltődnek a meglévő teendőink, alapból az összes teendönk elénk tárul. Új teendőt létrehozni a beviteli mezőre kattintva lehet, ilyenkor felugrik egy ablak és ott meg kell adni az adatokat, amíg nincsen minden kitöltve addig nem fog létrejönni a teendőnk. A teendőnk folyamatban státusszal jön létre. A státuszt módosítani a felületen a teendőnk végén egy lenyitható menüvel lehet. Felül hasonló lenyíló menüvel lehet szűrni az adatokat. Így az ott található állapotok mellett található egy "összes" nevű is amivel láthatjuk az összes teendőnket.
 
 # Frontend
 
 ## Útmutató
 
 ### Követelmények
 
- node version 12+
- npm version 6+
 
 ### Parancsok
Ezek telepítése után menj a frontend mappájába és add ki a következő parancsokat a konzolba:

```
npm install
```

Miután végzett, el tudod indítani az alkalmazást a következő segítségével:

```
npm start
```
### Projekt struktúra

```bash
├───components
│ ├───Todo
│ ├───TodoForm
│ └───TodoList
├───actions
└───reducers
```

A frontend megvalósítása React technológiát vesz igénybe. Kinézetért a Bootstrap felelős. Bővebben...
[click here](todo-react/README.md).


# Backend

## Útmutató

 ### Követelmények
 
 - Visual Studio 2019+
 - .NET SDK 5.0+
 - Microsoft SQL Server 2016+
 - Nuget packages installed
   - Microsoft.EntityFrameworkCore.SqlServer 5.0.3
   - Microsoft.EntityFrameworkCore.Design 5.0.3

Miután ezeket telepítettük indíthatjuk a projektünket.

### Projekt struktúra

Két projekt van egyik maga a megvalósítás másik pedig a teszt.

```bash
├───WEBAPI
│   ├───Controllers
│   ├───Properties
│   ├───Migrations
│   ├───TodoData  
│   └───Models
└───Web_Api_Test
```

A backend megvalósítása ASP.NET Core Web Api-n alapul. Bővebben...
[click here](WebAPI/README.md).
