import * as React from "react"
import { ToasterShowContext } from "./ToasterContextProps"

const emptyFn = () => 0

const ToasterContext = React.createContext<{
  show: ToasterShowContext;
  hide:() => void;
}>({
  show: emptyFn,
  hide: emptyFn,
})

export default ToasterContext
