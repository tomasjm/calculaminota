import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { spacing } from '@material-ui/system';


const notas = [
  {
    "nota": 7,
    "porcentaje": 25
  },
  {
    "nota": 7,
    "porcentaje": 25
  },
  {
    "nota": 7,
    "porcentaje": 25

  }
];


class App extends Component {
  constructor() {
    super();
    notas.map((nota, i) => {
      console.log(i);
    });
  }
  render() {
    return (
      <div className="bg-color">
        <Navbar></Navbar>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} md={6}>


            <Paper style={{ padding: '25px', marginTop: '75px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell># de nota</TableCell>
                    <TableCell>Nota</TableCell>
                    <TableCell>Porcentaje</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    notas.map((row, i) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Typography variant="h6">
                            #{i + 1}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="outlined-name"
                            label={i + 1}
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell><TextField
                          id="outlined-name"
                          label="%"
                          variant="outlined"
                        /></TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>

              <div className="b-center">
                <br />
                <Fab color="primary" aria-label="Add">
                  <AddIcon />
                </Fab>
                <br />
                <br />
                <Button fullWidth variant="contained" color="primary" >
                  Calcula mi nota
              </Button>
                <br />
                <br />
                <Button fullWidth variant="contained" color="primary" >
                  Calcula nota necesaria para aprobar
              </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default App;
