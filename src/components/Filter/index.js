import React from "react";
import { WrapperFilter, Select } from "./styles";

const Filter = ({ handleChange, users }) => {
  return (
    <>
      <WrapperFilter>
        <h3>Filtrar por usuário</h3>
        <Select onChange={handleChange}>
          <option value="all">Todos</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
      </WrapperFilter>
    </>
  );
};

export default Filter;
