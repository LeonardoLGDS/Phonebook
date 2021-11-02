const Filter = (props) => {
  return (
    <form>
      <div>
        filter shown with: <input onInput={props.filterInput} />
      </div>
    </form>
  );
};

export default Filter;
