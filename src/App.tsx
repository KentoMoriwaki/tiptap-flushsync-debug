import { useEditor, EditorContent } from "./react";

import StarterKit from "@tiptap/starter-kit";

import { Paragraph } from "./Paragraph";
import "./styles.css";

const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: false
      }),
      Paragraph
    ],
    content: `<p>hello</p><p>tiptap</p>`
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default App;
