import { Link } from "react-router-dom";
import { IQuestion } from "../App";
import "../styles/Home.scss";
import cn from "classnames";

interface Props {
  questions: IQuestion[];
}

export default function Home({ questions }: Props) {
  return (
    <div className="home">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link to="/quiz" className={cn({ disabled: !questions.length })}>
        Begin
      </Link>
    </div>
  );
}
