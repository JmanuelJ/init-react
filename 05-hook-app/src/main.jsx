import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomKook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <MultipleCustomHooks/>
  //</StrictMode>,
)
