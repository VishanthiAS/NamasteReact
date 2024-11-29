     //const heading = document.createElement('h1');
     // heading.innerHTML="Hello World From Javascript!";
      //const root = document.getElementById('root');
     // root.appendChild(heading);
      const parent = React.createElement("div",{id :"parent"},[
        React.createElement("div",{id :"child1"},[
        React.createElement("h1",{id :"heading_1"},"heading1"),
        React.createElement("h2",{id :"heading_2"},"heading2"),
       ]),
        React.createElement("div",{id :"child2"},[
        React.createElement("h1",{id :"heading_1"},"heading1"),
        React.createElement("h2",{id :"heading_2"},"heading2"),
       ]),
    ]);
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);