import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import style from './style';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const styles = theme => ({
  root: {
    margin: 'auto',
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


let id = 0;
function createData(name, count, changeDirection, max) {
  id += 1;
  return { id, name, count, changeDirection, max };
}

var data = [
  createData('Eclair NGA', 159, 6.0, 24),
  createData('Eclair NGA', 237, 9.0, 37),
  createData('Eclair NGA', 262, 16.0, 24),
  createData('Eclair NGA', 305, 3.7, 67),
  createData('Eclair NGA', 356, 16.0, 49),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Count</TableCell>
            <TableCell numeric>Change Direction</TableCell>
            <TableCell numeric>Max</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.count}</TableCell>
                <TableCell numeric>{n.changeDirection}</TableCell>
                <TableCell numeric>{n.max}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}


SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
