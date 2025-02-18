import { useEffect } from "react";
import "./ListaFamiliasProf.css";
import { useForm } from "react-hook-form";

const ListaFamiliasProfesionales = (props) => {
  const FAMILIA = {
    FAMILIA: "familia",
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm({ [FAMILIA.FAMILIA]: "" });

  //Con el watch monitorizamos los cambios en los campos del formulario, igual el de busqueda se podria
  // haber hecho con watch tambien
  const familiaSelect = watch(FAMILIA.FAMILIA);

  useEffect(() => {
    console.log(familiaSelect);
    props.filtrarLista(familiaSelect ? props.familia : null);
  }, [familiaSelect]);

  return (
    <form>
      <input
        className="customCheckBoxInput"
        id={props?.id}
        type="checkbox"
        {...register(FAMILIA.FAMILIA)}
      ></input>
      <label htmlFor={props?.id} className="customCheckBoxWrapper">
        <div className="customCheckBox">
          <div className="inner">{props?.familia}</div>
        </div>
      </label>
    </form>
  );
};
export default ListaFamiliasProfesionales;
