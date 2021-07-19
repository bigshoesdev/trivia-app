import { IQuestion } from "../App";
import "../styles/Quiz.scss";

interface Props {
  questions: IQuestion[];
  curQuestionIndex: number;
  onAnswerClick: (answer: string) => void;
}

export default function Quiz({
  questions,
  curQuestionIndex,
  onAnswerClick,
}: Props) {
  const question = questions?.[curQuestionIndex];

  return (
    <>
      {question && (
        <div className="quiz">
          <h1>{question.category}</h1>
          <div className="question-box">
            <div className="question">
              <span dangerouslySetInnerHTML={{ __html: question.question }} />
            </div>
            <div className="index">
              {`${curQuestionIndex + 1} of ${questions.length}`}
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => onAnswerClick("True")}>True</button>
            <button onClick={() => onAnswerClick("False")}>False</button>
          </div>
        </div>
      )}
    </>
  );
}
