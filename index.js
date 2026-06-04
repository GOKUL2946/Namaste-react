// const h1 = document.createElement('h1');
// h1.innerText = 'Namaste javascript';
// h1.className = 'heading';

// const root = document.getElementById('root');
// root.appendChild(h1);
const root = ReactDOM.createRoot(document.getElementById('root'))

const parent = React.createElement(
  'div',
  { id: 'parent' },

  [
    React.createElement(
      'div',
      { id: 'child1' },
      [
        React.createElement('h1', {}, 'I am child 1'),
        React.createElement('h2', {}, 'I am child 1')
      ]
    ),

    React.createElement(
      'div',
      { id: 'child2' },
      [
        React.createElement('h1', {}, 'I am child 2'),
        React.createElement('h2', {}, 'I am child 2')
      ]
    ),

    React.createElement(
      'div',
      { id: 'child3' },
      [
        React.createElement('h1', {}, 'I am child 3'),
        React.createElement('h2', {}, 'I am child 3')
      ]
    )
  ]
);

console.log(parent);
root.render(parent);


// const heading = React.createElement('h1', { id: 'heading', data: 'react' }, 'Hello, Namaste React!');
// console.log(heading); // React element is an object which has type and props
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);