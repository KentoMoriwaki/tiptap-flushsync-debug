import { mergeAttributes, NodeViewProps } from "@tiptap/core";
import TiptapParagraph from "@tiptap/extension-paragraph";

import {
  ReactNodeViewRenderer,
  NodeViewContent,
  NodeViewWrapper
} from "./react";

const ParagraphView = (nodeViewProps: NodeViewProps) => {
  return (
    <NodeViewWrapper style={{ position: "relative" }}>
      <NodeViewContent as="div"></NodeViewContent>
    </NodeViewWrapper>
  );
};

export const Paragraph = TiptapParagraph.extend({
  name: "paragraph",

  selectable: false,

  addNodeView() {
    return ReactNodeViewRenderer(ParagraphView);
  },

  parseHTML() {
    return [
      {
        tag: "p"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(HTMLAttributes, { class: "paragraph" }), 0];
  }
});
