import { memo } from "react";
import { CommentType } from "../../Helpers/DummyComments";

type commentProps = {
  comments: CommentType[];
};

function Comment({ comments }: commentProps) {
  //* With the help of recursion we are able to implement infinite comments sections
  return (
    <>
      {comments.map(function (comment) {
        return (
          <div className="font-bold mt-3 bg-gray-100" key={comment.id}>
            {comment.text}
            <div className="ml-3 border-l-2 pl-2 border-black">
              <Comment comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default memo(Comment);
