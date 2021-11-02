const AddPerson = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name: <input onInput={props.nameInput} />
      </div>
      <div>
        number: <input onInput={props.numberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPerson;
