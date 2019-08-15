import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { spacing } from "@material-ui/system";
import { flex } from "@material-ui/system/flexbox";
import Swal from "sweetalert2";
class App extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.handleNotas = this.handleNotas.bind(this);
    this.handlePorcentaje = this.handlePorcentaje.bind(this);
    this.calcularNotas = this.calcularNotas.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      notas: [{ nota: 0, porcentaje: 0 }]
    };
  }
  addItem(e) {
    e.preventDefault();
    let i = this.state.notas.length;
    const newItem = { nota: 0, porcentaje: 0 };
    this.setState(
      {
        notas: [...this.state.notas, newItem]
      },
      () => {
        console.log(this.state);
      }
    );
  }
  removeItem(e) {
    e.preventDefault();
    let newArray = [...this.state.notas];
    let index = newArray.length - 1;
    newArray.splice(index, 1);
    this.setState({
      notas: newArray
    });
  }
  handleNotas(e, id) {
    e.preventDefault();
    console.log(id);
    let notas = [...this.state.notas];
    let newnota = { ...notas[id] };
    newnota.nota = e.target.value;
    notas[id] = newnota;
    this.setState({ notas });
  }
  handlePorcentaje(e, id) {
    e.preventDefault();
    console.log(id);
    let sumaPorcentaje = 0;
    this.state.notas.map(i => {
      sumaPorcentaje += parseFloat(i.porcentaje);
    });
    let notas = [...this.state.notas];
    let newPorcentaje = { ...notas[id] };
    newPorcentaje.porcentaje = e.target.value;
    notas[id] = newPorcentaje;
    this.setState({ notas });
  }
  calcularNotas(e) {
    e.preventDefault();
    let notaFinal = 0;
    let porcentajeFinal = 0;
    let l = this.state.notas.length;
    this.state.notas.map(i => {
      notaFinal =
        notaFinal + (parseFloat(i.nota) * parseFloat(i.porcentaje)) / 100;
      porcentajeFinal += parseFloat(i.porcentaje);
    });
    if (porcentajeFinal > 100) {
      Swal.fire("Error!", "Los porcentajes ingresados son invalidos!", "error");
    } else if (porcentajeFinal == 100) {
      notaFinal = Math.round(notaFinal * 100) / 100;
      if (notaFinal >= 4) {
        Swal.fire(
          "Buen trabajo!",
          "Has aprobado! Con un <b>" + notaFinal + "</b> !",
          "success"
        );
      } else {
        Swal.fire(
          "Lamentable!",
          "Has reprobado con un <b>" + notaFinal + "</b> !",
          "error"
        );
      }
    } else {
      let notaFaltante = 0;
      notaFinal = Math.round(notaFinal * 10) / 10;
      let porcentajeRestante = 100 - porcentajeFinal;
      notaFaltante = (4 - notaFinal) / (porcentajeRestante / 100);
      notaFaltante = Math.round(notaFaltante * 10) / 10;
      if (notaFaltante < 1) {
        Swal.fire(
          "Buen trabajo!",
          "Has aprobado! Necesitas un <b>" +
            notaFaltante +
            "</b> para desaprobar",
          "success"
        );
      } else {
        Swal.fire(
          "Cuidado!",
          "Te falta una nota equivalente a: <b>" +
            notaFaltante +
            "</b> con un porcentaje equivalente a un: <b>" +
            porcentajeRestante +
            "%</b> para aprobar",
          "warning"
        );
      }
    }
  }
  render() {
    return (
      <div className="bg-color">
        <Navbar />
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "25px", marginTop: "75px" }}>
              <div>
                {/* <Typography style={{ textAlign: "center" }}>
                  Calcula tu nota final o la nota que te falta para aprobar!
                </Typography>
                <Typography style={{ textAlign: "center" }}>
                  Si el porcentaje ingresado es menor a 100, se calculará la
                  nota faltante
                </Typography>
                <Typography style={{ textAlign: "center" }}>
                  Si el porcentaje ingresado es 100, se calculará la nota final
                </Typography> */}
              </div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell># Nota</TableCell>
                    <TableCell>Nota</TableCell>
                    <TableCell>Porcentaje</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.notas.map((row, i) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography className="s-margin" variant="h6">
                          #{i + 1}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <TextField
                          name={"N" + (i + 1)}
                          label={i + 1}
                          variant="outlined"
                          onChange={e => this.handleNotas(e, i)}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="outlined-name"
                          label="%"
                          variant="outlined"
                          onChange={e => this.handlePorcentaje(e, i)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="b-center">
                <br />
                <div className="separador">
                  <div className="boton">
                    <Fab
                      mx={2}
                      name="add"
                      onClick={this.addItem}
                      color="primary"
                      aria-label="Add"
                    >
                      <AddIcon />
                    </Fab>
                  </div>
                  <div className="boton">
                    <Fab
                      mx={2}
                      name="remove"
                      onClick={this.removeItem}
                      color="primary"
                      aria-label="Remove"
                    >
                      <RemoveIcon />
                    </Fab>
                  </div>
                </div>
                <br />
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.calcularNotas}
                >
                  Calcular nota final o faltante
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;