const PhoneBookView = (props) => {
  if (props.toggleEdit === props.name) {
    return (
      <form>
        <input
          type="text"
          defaultValue={props.name}
          onInput={props.nameInputEdit}
        />
        <button onClick={props.clickToDelete} name={props.name}>
          delete
        </button>
        <br />
        <input
          type="text"
          defaultValue={props.number}
          onInput={props.numberInputEdit}
        />
        <button
          onClick={props.clickToSave}
          number={props.number}
          name={props.name}
        >
          submit change
        </button>
        <p />
      </form>
    );
  } else {
    return (
      <form>
        <input type="text" defaultValue={props.name} disabled />
        <button onClick={props.clickToDelete} name={props.name}>
          delete
        </button>
        <br />
        <input type="text" defaultValue={props.number} disabled />
        <button
          onClick={props.clickToEdit}
          name={props.name}
          value={props.number}
        >
          edit
        </button>
        <p />
      </form>
    );
  }
};

export default PhoneBookView;
