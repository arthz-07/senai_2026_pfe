// import { TemaProvedor } from './contexts/temaContexto';
// import Header from './components/header';


// function App() {
//   return (
//     <TemaProvedor>
//       <Header />
//     </TemaProvedor>
//   );
// }

// export default App;

import { TemaProvedor } from './contexts/temaContexto';
import Header from './components/header';
import Noticias from './components/noticias';

function App() {
  return (
    <TemaProvedor>
      <Header />
      <Noticias />
    </TemaProvedor>
  );
}

export default App;