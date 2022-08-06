import React from 'react';

function App() {


    var data = [
    {
      Name : 'this is first product',
      Cost :79888,
    },
    {
      Name : 'this is second product',
      Cost :79889,
    },
    {
      Name : 'this is third product',
      Cost :79890,
    },
    {
      Name : 'this is fouth product',
      Cost :79891,
    },
    {
      Name : 'this is fifth product',
      Cost :79892,
    },
    
    ]
  return (
    <div>
    {
      data.map((data)=>(
        <div>
          {data.Name}
          {data.Cost}
        </div>


          
      ))
       


    }




    </div>
  );
}

export default App;