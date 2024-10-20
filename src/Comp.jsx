import {consumeContext, cs, provideContext} from "cs-react";
import {ChildComp} from "./ChildComp.jsx";
const Comp = () => {
    return (
      <>
      <h1>Comp</h1>
          <ChildComp/>
      </>
    )
}
export default Comp;