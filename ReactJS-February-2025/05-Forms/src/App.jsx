import ControledForm from "./components/ControledForm";
import FormAction from "./components/FormAction/FormAction";
import UncontroledForm from "./components/UncontroledForm";
import UncontroledFormRef from "./components/UncontroledFormRef/UncontroledFormRef";
import UnifiedControledForm from "./components/UnifiedControledForm";
import UserRef from "./components/UseRef";

function App() {
    return (
        <>
            <UncontroledForm />
            <ControledForm />
            <UnifiedControledForm />
            <UserRef />
            <UncontroledFormRef />
            <FormAction />
        </>
    );
}

export default App;
