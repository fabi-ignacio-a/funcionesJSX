import "./styles.css";

let ListNames = ({ children, names }) => {
  return children(names);
};

export default function App() {
  let names = [
    { name: "Anna", id: 1 },
    { name: "Jhon", id: 2 },
    { name: "Julia", id: 3 }
  ];
  //Recuerda que si trabajas en una lista, debe tener una key
  //Cuando se trabaja con React, esta dentro del mundo de JavaScript
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/*Esta es una forma de hacerlo*/}
      {/*Forma A:
        <ListNames names={names}>
        {(names) => names.map((e) => <p key={e.id}> {e.name} </p>)}
        </ListNames>*/}
      {/*Esta es otra
        Forma B:*/}
      {names.map((e) => (
        <p key={e.id}> {e.name} </p>
      ))}
    </div>
  );
}
