import React from 'react';const Form = (props) => {
  return (<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
      <label>
        <input name="username"
        type="text"
        placeholder="username"
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
      />
      </label>
      <div>
      <input
        type="submit"
        value="See Data"
      />
    </div>
    </form>)};export default Form;
