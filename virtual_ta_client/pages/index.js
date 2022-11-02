import HomePage from "../components/HomePage";
import WelcomeAppBar from "../components/AppBar";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="main">
      <WelcomeAppBar />
      <Form />
      {/* <link
        rel="stylesheet"
        media="all"
        href="https://guppy.js.org/build/guppy-default-osk.min.css"
      />
      <link
        href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
        rel="stylesheet"
      />
      <script src="https://guppy.js.org//build/guppy_osk.min.js%22%3E" />
      <script src="https://guppy.js.org//build/guppy.min.js%22%3E" /> */}
      {/* <HomePage sx={{zIndex:0}}/> */}
    </div>
  );
}
