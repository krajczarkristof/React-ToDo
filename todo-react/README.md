#Frontend

A frontend kód a todo-react/src mappában található.
```bash
├───components
│ ├───Todo.js
│ ├───TodoForm.js
│ └───TodoList.js
├───actions
├───assets
└───reducers
```

A **components** mappában található a három fő komponens (TodoForm/TodoList/Todo). A TodoFormon található egy beviteli mező és egy szűrés, valamint egy felugró ablak amin fel lehet venni egy új teendőt. A TodoList iterálunk végig az összes teendőn és pakoljuk sorba egymása alá. A todo felel egy teendőért, itt kezeljük minden teendő gombját. Itt lehet törölni státuszt és minden mást módosítani. Az **actions** mappában található az api.js ami a kéréseket intézi (fetch/ create/ update/ delete/). Itt található a store.js is ami azért felel hogy mindenhonnan elérjük a teendők listáját. A todoActions.js pedig azokat a müveleteket kezeli és hívja meg ami az adatbázishoz és a teendők listájához tartoznak. **Assets** itt találhatók azok a fileok amiket meg kell jeleníteni, esetünkben csak a háttérkép. **Reducers** mappában található egy index.js és egy todo.js ezek is azért fellenek hogy egységesen "globálisan" tudjuk használni a teendők listáját és egyszerűen hozzáférhető legyen minden komponens számára. Megjelenítésért bootstrap-et használtam, css file pedig a háttérképért felel.
