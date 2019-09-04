import React from 'react';

const Todos = ({todos}) => {
  return (
      <div>
          {todos.map((todos) => (
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title"><strong>Nombre:</strong></h5>
                      
                  </div>
              </div>
          ))}
      </div>
  )
};

export default Todos;