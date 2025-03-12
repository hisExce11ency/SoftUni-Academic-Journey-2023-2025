import ControledForm from "./components/ControledForm";
import FormAction from "./components/FormAction/FormAction";
import UncontroledForm from "./components/UncontroledForm";
import UncontroledFormRef from "./components/UncontroledFormRef/UncontroledFormRef";
import UnifiedControledForm from "./components/UnifiedControledForm";
import UseActionState from "./components/UseActionState";
import UserRef from "./components/UseRef";
import UseTransition from "./components/UseTransition";

function App() {
    return (
        <>
            <UncontroledForm />
            <ControledForm />
            <UnifiedControledForm />
            <UserRef />
            <UncontroledFormRef />
            <FormAction />
            <UseTransition />
            <UseActionState />
        </>
    );
}

export default App;
