## "Teendő lista" dokumentáció

Ez egy egyszerű webalkalmazás , ami a teendőket tudja kezelni webes felületen, és adatbázisban tárolja az adatokat. Tudsz új teendőt létrehozni, meglévőn módosítani, és  törőlni. A teendők rendelkeznek címmel, leírással, határidővel és állapottal (függőben, folyamatban, kész, elhalasztva). A prioritást a teendők sorrendje határozza meg.

# Az alkalmazásról
Az alkalmazást elindítva betöltődnek a meglévő teendőink, alapból az összes teendönk elénk tárul. Új teendőt létrehozni a beviteli mezőre kattintva lehet, ilyenkor felugrik egy ablak és ott meg kell adni az adatokat, amíg nincsen minen kitöltve addig nem fog létrejönni a teendőnk. A teendőnk folyamatban státusszal jön létre. A státuszt módosítani a felületen a teendőnk végén egy lenyitható menüvel lehet. Felül hasonló lenyíló menüvel lehet szűrni az adatokat. Így az ott található állapotok mellett található egy "összes" nevű is amivel láthatjuk az összes teendőnket.

# Backend
 
A backend megvalósítása ASP.NET Core Web Api alapul.
[click here](WebAPI/README.md).
 
 # Frontend
 
A frontend megvalósítása React technológiát vesz igénybe. Bootstrap.......... 
[click here](todo-react/README.md).
