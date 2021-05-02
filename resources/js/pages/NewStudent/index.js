import React from "react";
import { IoTrash, IoCreateOutline, IoCalendarOutline } from "react-icons/io5";

import { Title, ContainerIcon } from "./styles";
import ThemePage from "../../components/ThemePage";
import { colors } from "../../theme";

function NewStudent() {
  return (
    <ThemePage>
      <Title>Cadastrar estudante</Title>
    </ThemePage>
  );
}

export default NewStudent;
