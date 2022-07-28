import * as C from "./styles";

export const Sidebar = () => {
  return (
    <C.Container>
      <C.LogoArea>
      <C.Logo src={require("../../assets/logo-white.png")} alt="foto-perfil" />
      </C.LogoArea>

      <C.Categories>
        <C.Titulo>Categorias</C.Titulo>

        <C.Items>
          <C.Item>
            <C.Popular
              src={require("../../assets/menu/clapperboard.png")}
              alt="foto-perfil"
            />
            Popular
          </C.Item>
          <C.Item>
            <C.Popular
              src={require("../../assets/menu/estrela.png")}
              alt="foto-perfil"
            />
            Top Votado
          </C.Item>
          <C.Item>
            <C.Popular
              src={require("../../assets/menu/megaphone.png")}
              alt="foto-perfil"
            />
            Novidades
          </C.Item>
        </C.Items>
      </C.Categories>
      <C.Categories>
        <C.Titulo>Gêneros</C.Titulo>

        <C.Items>
          <C.Item>
            <C.Popular
              src={require("../../assets/menu/clapperboard.png")}
              alt="foto-perfil"
            />
            Popular
          </C.Item>
          <C.Item>
            <C.Popular
              src={require("../../assets/menu/estrela.png")}
              alt="foto-perfil"
            />
            Top Votado
          </C.Item>
          <C.Item>
            <C.Popular
              src={require("../../assets/menu/megaphone.png")}
              alt="foto-perfil"
            />
            Novidades
          </C.Item>
        </C.Items>
      </C.Categories>
    </C.Container>
  );
};
