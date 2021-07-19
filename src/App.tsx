import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import axios from "axios";

export interface IQuestion {
  category: string;
  question: string;
  correct_answer: string;
}

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [curQuestionIndex, setCurQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [router, setRouter] = useState<Router>();

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const url = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;
      const { data } = await axios.get(url);

      if (data?.results.length > 0) {
        setQuestions(data?.results);
        setCurQuestionIndex(0);
      }
    } catch (e) {
      console.log(e);
      setQuestions([]);
    }
  };

  const onAnswerClick = (answer: string) => {
    answers[curQuestionIndex] = answer;

    setAnswers(answers);

    if (curQuestionIndex < questions.length - 1) {
      setCurQuestionIndex(curQuestionIndex + 1);
    } else {
      (router as any).history.push("/result");
    }
  };

  const onPlayAgain = () => {
    setAnswers({});
    setCurQuestionIndex(0);
    (router as any).history.push("/");
  };

  return (
    <Router ref={(el) => setRouter(el as Router)}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home questions={questions} />
          </Route>
          <Route exact path="/quiz">
            <Quiz
              questions={questions}
              curQuestionIndex={curQuestionIndex}
              onAnswerClick={onAnswerClick}
            />
          </Route>
          <Route exact path="/quiz">
            <Quiz
              questions={questions}
              curQuestionIndex={curQuestionIndex}
              onAnswerClick={onAnswerClick}
            />
          </Route>
          <Route exact path="/quiz">
            <Quiz
              questions={questions}
              curQuestionIndex={curQuestionIndex}
              onAnswerClick={onAnswerClick}
            />
          </Route>
          <Route exact path="/result">
            <Result
              questions={questions}
              answers={answers}
              onPlayAgain={onPlayAgain}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
