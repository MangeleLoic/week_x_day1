import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchComments = async () => {
    if (asin) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjN2IwMWZkZWUzZDAwMTU5YmRlZjgiLCJpYXQiOjE3MjQ2NzY4NjUsImV4cCI6MTcyNTg4NjQ2NX0.OnWKaApxKcI6Ro144As_C3vXAlNdljjDcXsiQq-UvcA',
            },
          }
        );

        if (response.ok) {
          const comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setIsLoading(false);
        setIsError(true);
      }
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
