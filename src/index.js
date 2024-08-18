import { createRoot } from "react-dom/client";
import { App } from "./App";
import {TextCrawl} from './components/TextCrawl'

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);

export { TextCrawl }
