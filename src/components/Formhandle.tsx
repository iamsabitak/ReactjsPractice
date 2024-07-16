import React, { useState } from "react";

interface DATA {
  name: string;
  email: string;
}

const Formhandle: React.FC = () => {
  const data: DATA = { name: "", email: "" };
  const [input, setInput] = useState<DATA>(data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onChangeHandler1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      //   if (!res.ok) {
      //     throw new Error("Failed to submit data");
      //   }

      const data = await res.json();

      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    setInput({ name: "", email: "" });
  }

  async function onSubmitHandlerr(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      const data = await res.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    setEmail("");
    setName("");
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={onChangeHandler}
          placeholder="Enter name"
        />
        <input
          type="text"
          //   type="email"
          name="email"
          value={input.email}
          placeholder="Enter email"
          onChange={onChangeHandler}
        />
        <button type="submit">submit</button>
      </form>
      <form onSubmit={onSubmitHandlerr}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeHandler1}
          placeholder="Enter name"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeHandler2}
          placeholder="Enter email"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Formhandle;
