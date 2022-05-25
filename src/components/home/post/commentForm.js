import React, { useCallback } from "react";
import styled from "styled-components";
import { useInput } from "../../../hook/useInput";
import { useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../../../reducer/post";

const CommentForm = ({ post }) => {
  const [comment, onChangeComment] = useInput("");
  const dispatch = useDispatch();

  const onAddComment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: {
          postId: post.id,
          content: comment,
        },
      });
    },
    [comment, dispatch, post.id]
  );

  return (
    <StyledForm>
      <input
        type="text"
        placeholder="댓글을 남겨주세요"
        value={comment}
        onChange={onChangeComment}
      />
      <button onClick={onAddComment}>등록</button>
    </StyledForm>
  );
};
export default CommentForm;

const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;

  & input {
    box-sizing: border-box;
    width: 90%;
    padding: 0.2rem;
    border: 1px solid #ddd;
    color: #666;

    ::placeholder {
      color: #ccc;
    }

    :focus {
      outline: none;
      border: 1px solid #7784cc;
      box-shadow: 0 0 0 0.1rem rgb(59 65 99/ 25%);
    }
  }

  & button {
    box-sizing: border-box;
    width: 10%;
    padding: 0.2rem;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    background-color: #4f5681;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`;
