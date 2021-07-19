import { IQuestion } from "../App";
import "../styles/Result.scss";

interface Props {
  questions: IQuestion[];
  answers: Record<number, string>;
  onPlayAgain: () => void;
}

export default function Result({ questions, answers, onPlayAgain }: Props) {
  let numCorrect = 0;

  questions.map((question, index) => {
    if (question.correct_answer === answers[index]) {
      numCorrect++;
    }
  });

  return (
    <div className="result">
      <div>
        <h1>You scored</h1>
        <h1>{`${numCorrect} / ${questions.length}`}</h1>
      </div>

      <div>
        {questions.map((q, i) => (
          <div className="question" key={q.question}>
            <span className="question-status">
              {q.correct_answer === answers[i] ? "+" : "-"}
            </span>
            <span dangerouslySetInnerHTML={{ __html: q.question }} />
          </div>
        ))}
      </div>
      <a href="#" onClick={onPlayAgain}>
        Play Again?
      </a>
    </div>
  );
}
