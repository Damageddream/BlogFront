import { useState, ChangeEvent, FormEvent } from "react";

interface postIdI {
  postId?: string;
}


const CommentForm: React.FC<postIdI> = (props) => {
  const [authorValue, setAuthorValue] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("");

  const handleAuthorOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthorValue(e.target.value);
  };

  const handleTextOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const submitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${props.postId as string}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: textValue, author: authorValue }),
        }
      );
      if (response.ok) {
        console.log("Form submitted correctly");
        setAuthorValue("");
        setTextValue("");
      } else {
        console.error("Form submission failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="author">Author:</label>
        <input
          name="author"
          id="author"
          type="text"
          value={authorValue}
          onChange={handleAuthorOnChange}
        />
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          name="text"
          value={textValue}
          onChange={handleTextOnChange}
        />
        <button type="submit">Add comment</button>
      </form> 
    </>
  );
};

export default CommentForm;
