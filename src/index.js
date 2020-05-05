import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 6:00 PM"
          content="blah blah blah"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 7:00 PM"
          content="I love sushi"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 8:00 PM"
          content="Go shop after school"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
