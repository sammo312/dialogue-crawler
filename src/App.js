import { TextCrawl } from "./components/TextCrawl/Main";

export function App() {
    return <div>
        <TextCrawl
              speaker={'sam'}
              textArr={[[{ text: 'test text', speed: 50, }]]}
              textArrayIndex={0}
        />
    </div>;
  }