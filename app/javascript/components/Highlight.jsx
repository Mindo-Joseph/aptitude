import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Highlight = ({ language, children }) => (
  <SyntaxHighlighter language={language} style={solarizedlight}>
    {children}
  </SyntaxHighlighter>
);
