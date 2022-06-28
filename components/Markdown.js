import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export default function Markdown(props) {
    return (
      <ReactMarkdown
        renderers={ChakraUIRenderer()}
        plugins={[gfm]}
        children={props.markdown}
      />
    );
}