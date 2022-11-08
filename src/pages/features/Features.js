import React from 'react'
import './Features.css'
import feature1 from '../../images/feature_1.png'
import feature2 from '../../images/feature_2.png'
import feature3 from '../../images/feature_3.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';


const rows = [   
  {name: 'Frozen yoghurt' , calories: 159 , fat: 6.0 , carbs: 24  ,protein:  4.0 },
  {name: 'Ice cream sandwich' , calories: 237 , fat:9.0,   carbs:  37  ,protein:4.3  },
  {name: 'Eclair' , calories: 262 , fat:  16.0 , carbs:24  ,protein: 6.0 },
  {name: 'Cupcake' , calories: 305  , fat: 3.7 , carbs:67   ,protein: 4.3 },
  {name: 'Gingerbread' , calories: 356 , fat: 16.0 , carbs:  49 ,protein: 49 },
  {name: 'FrenchFries' , calories: 486 , fat: 18.0 , carbs:  72 ,protein: 94 },

];

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function Features() {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };

  return (
    <div className='features-container'>
        <br/><br/><br/><br/>
         <div className='featureList'>
            <div className='feature1'>
                  <img src={feature1} alt="book"/>
                  <h2>Development course</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis et felis bibendum congue. </p>       
         
            </div>
            <div className='feature2'>
            <img src={feature2} alt="pot"/>
            <h2>Money saving services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis et felis bibendum congue. </p>       
         
            </div>
            <div className='feature3'>
            <img src={feature3} alt="interface"/>
            <h2>Usability interface</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis et felis bibendum congue. </p>       
         
            </div>
          </div><br/><br/><br/><br/><br/>

          <TableContainer style={{ width: '90vw' , marginLeft: '5%',}}component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'lightgray', }}>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell  >Calories</TableCell>
            <TableCell  >Fat&nbsp;(g)</TableCell>
            <TableCell >Carbs&nbsp;(g)</TableCell>
            <TableCell  >Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                       
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell  >{row.calories}</TableCell>
                      <TableCell  >{row.fat}</TableCell>
                      <TableCell  >{row.carbs}</TableCell>
                      <TableCell >{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
          {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={5} />
                </TableRow>
              )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
             style={{textAlign:'right', marginLeft: '50px' , }}
              rowsPerPageOptions={[5, 10, 25,  { label: 'All', value: -1 }]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </TableRow>
            </TableFooter>
      </Table>
       
      {/* <Paper elevation={3} > */}
      

      {/* </Paper> */}
    </TableContainer> 
   
        
        <br/><br/><br/><br/><br/>

        </div>
  )
}

export default Features