import Products from './pages/Products';
import {Navigation} from "./component/Navigation"
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

 function App() {
  return (
  <MantineProvider>
    <Navigation />
    <Products />
  </MantineProvider>
  
  )
}
export default App