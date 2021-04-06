import { React } from "./CONST";

// import UseMemoPage from "./pages/UseMemoPage";
// import CommentListPage from "./pages/CommentListPage";
// import PureComponentPage from "./pages/PureComponentPage";
// import ReactMemoPage from "./pages/ReactMemoPage";
// import UseCallbackPage from "./pages/UseCallbackPage";
// import ContextPage from "./pages/ContextPage";
// import SetStatePage from "./pages/SetStatePage";
// import RefPage from "./pages/RefPage";
// import ClassFunctionComponent from "./pages/ClassFunctionComponent";
// import UseReducerPage from "./pages/UseReducerPage";

// import DiffPage from "./pages/DiffPage";

import UseStatePage from "./hooks/useState";

export default function App(props) {
  return (
    <div className="app">
      {/* <UseMemoPage />
      <CommentListPage />
      <PureComponentPage />
      <ReactMemoPage />
      <UseCallbackPage />
      <ContextPage />
      <SetStatePage />
      <RefPage />
      <ClassFunctionComponent />
      <UseReducerPage /> */}

      {/* mini版的只有DiffPage有效 */}
      {/* <DiffPage /> */}

      <UseStatePage />
    </div>
  );
}
