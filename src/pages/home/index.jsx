import React from "react";
import { useTranslation } from "react-i18next";
import { ImageText } from "../../components/ImageText";
import { Wrapper } from "./styles";

export default function Index() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ImageText
        title="Traçando seu próprio caminho na graduação"
        text="No Roadmap você poderá visualizar de um modo interativo as disciplinas oferecidas pelo curso e escolher uma trilha de acordo com à área de sua escolha."
      />
    </Wrapper>
  );
}
