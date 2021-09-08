import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Modal activo")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
