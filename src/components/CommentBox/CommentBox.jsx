import { useState } from "react";
import "./commentbox.css";
import Button from "../Button/Button";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div id="commentBox">
      <h2>Deja un comentario</h2>
      <form onSubmit={handleAddComment}>
        <input
          rows="4"
          cols="50"
          placeholder="Escribe tu comentario..."
          value={comment}
          onChange={handleCommentChange}
        />
        <Button onClick={handleAddComment} text="Add comment" />
      </form>
      <div>
        <h3>Commentarios:</h3>
        <ul id="comments">
          {comments.map((comment, index) => (
            <li id="comment-box" key={index}>
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentBox;
