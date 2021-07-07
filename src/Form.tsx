import React, { useState } from "react";

type FormProps = {
  onSubmit: (form: { name: string; desc: string }) => void;
};
function Form({ onSubmit }: FormProps) {
  const [form, setForm] = useState({
    name: "",
    desc: "",
  });

  const { name, desc } = form;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      desc: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="desc" value={desc} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default Form;
