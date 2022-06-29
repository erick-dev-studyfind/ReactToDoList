import './App.css';
import {Header} from './components/Header'
// import {Balance} from './components/Balance'
// import {IncomeExpenses} from './components/IncomeExpenses'
import {TodoList} from './components/TodoList'
import {AddTodo} from './components/AddTodo'
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
   <GlobalProvider>
     <Header />
     <div className = "container">
       {/* <Balance /> */}
       {/* <IncomeExpenses /> */}
       <TodoList />
       <AddTodo />
     </div>
   </GlobalProvider>
  );
}

export default App;
