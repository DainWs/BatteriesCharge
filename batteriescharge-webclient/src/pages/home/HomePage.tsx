import BatteriesListComponent from "../../components/batteries/BatteriesListComponent";

const HomePage = function () {
  return (
    <div className="card border-0">
      <BatteriesListComponent/>

      <button className="btn btn-primary" type="button" onClick={}>Actualizar</button>
    </div>
  );
}

export default HomePage;