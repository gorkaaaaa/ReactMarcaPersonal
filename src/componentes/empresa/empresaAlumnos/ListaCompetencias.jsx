import { useEffect } from "react";
import "./ListaCompetencias.css";
import { useForm } from "react-hook-form";

const ListaCompetencias = (props) => {
  const COMPETENCIA = {
    COMPETENCIA: "competencia",
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm({ [COMPETENCIA.COMPETENCIA]: "" });

  //Con el watch monitorizamos los cambios en los campos del formulario, igual el de busqueda se podria
  // haber hecho con watch tambien
  const competenciaSelect = watch(COMPETENCIA.COMPETENCIA);

   useEffect(() => {
    // console.log(props.id)
     props.filtrarLista(competenciaSelect ? props.id : null);
   }, [competenciaSelect]);

  return (
    <form>
      <input
        className="customCheckBoxInput"
        id={props.id}
        type="checkbox"
        {...register(COMPETENCIA.COMPETENCIA)}
      ></input>
      <label htmlFor={props.id} className="customCheckBoxWrapper">
        <div className="customCheckBox">
          <div className="inner">{props?.competencia}</div>
        </div>
      </label>
    </form>
  );
};
export default ListaCompetencias;
