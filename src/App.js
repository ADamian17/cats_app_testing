import CardComponent from './components/Card';

function App() {
  const cardProps = {
    name: 'jax',
    phone: '111-111-1111',
    email: 'jax@gmail.com',
    image: {
      url: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'cute cat'
    },
    favoured: false
  }

  return (
    <div>
      <CardComponent {...cardProps} />
    </div>
  );
}

export default App;
