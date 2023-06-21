import { useState } from "react";
import produce from "immer";
import Expandable from "./components/Expandable";

function App() {
  return (
    <>
      <Expandable maxChar={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        consequatur voluptatem repudiandae, aliquam provident quisquam enim
        nesciunt molestias, eos amet consectetur, praesentium recusandae
        accusamus quidem? Ipsa, iusto accusamus. Distinctio deleniti similique
        nisi blanditiis, animi a vel eius dolor! Accusamus modi officia odio
        fugit nulla, voluptas non, animi excepturi neque magni rem corrupti
        impedit earum, dicta eveniet nam exercitationem maiores accusantium
        possimus? Explicabo sed pariatur quaerat harum nulla molestiae, placeat
        id hic porro tempore non amet consequatur dicta dignissimos, earum
        possimus accusamus nam corrupti aspernatur. Ratione consectetur
        blanditiis unde mollitia eius. Perspiciatis quo officia cupiditate
        distinctio sed illo doloribus ullam porro.
      </Expandable>
    </>
  );
}

export default App;
