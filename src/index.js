import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./Index.css"
import { Provider } from "./context/context"
import { SpeechProvider } from "@speechly/react-client"

ReactDOM.render(
  <SpeechProvider appId="e0961da1-d6a7-43f6-8b35-92175ef3caad" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
)
