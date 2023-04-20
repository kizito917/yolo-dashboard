// External imports
import {useState} from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Internal imports
import AlertDialog from '../Feedback/Dialog';
import Notifier from '../Feedback/Alert';
import TextField from '../Inputs/Textfield';
import SelectField from '../Inputs/Select';
import Button from '../Inputs/Button';
import { gameCategory } from '../../utils/constant';

export default function CustomPaginationActionsTable({rows, editUrl, viewUrl, componentType, dataLoading}) {
    // Use state declarations
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openDialog, setOpenDialog] = useState(false);
    const [id, setId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [alertData, setAlertData] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false)
    const [filteredRows, setFilteredRows] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Setup use navigate instance
    const navigate = useNavigate();

    // Function to set the dialog open state to true
    const handleOpenDialog = (id) => {
        setId(id);
        setOpenDialog(true);
    };
    
    // Function to set the dialog open state to false
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
    // Handle pagination page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        const updatedRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(updatedRowsPerPage);
        setPage(0);

    }

    // Handle edit of data from table
    const handleEdit = (id) => {
        navigate(`${editUrl}/${id}`);
    }

    // Handle view of data from table
    const handleView = (id) => {
        navigate(`${viewUrl}/${id}`);
    }

    // Handle delete of data from table
    const handleDeleteItem = async () => {
        setIsLoading(true);
        try {
            // Make API call to delete data
            const response = await fetch(`${process.env.REACT_APP_API_URL}/${componentType}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Check response status and display message based on gotten status
            const {status} = await response.json();
            if (status !== 200) {
                setAlertData(['error', 'Unable to delete data']);
                setIsLoading(false);
                setTimeout(() => { setAlertData([]); }, 2000);
                return;
            }

            setAlertData(['success', 'data deleted successfully']);
            setIsLoading(false);
            setTimeout(() => { 
                setAlertData([]); 
                handleCloseDialog();
                window.location.reload();
            }, 2000);
        } catch (err) {
            setAlertData(['error', 'Unable to delete data']);
            setIsLoading(false);
            setTimeout(() => { setAlertData([]); }, 2000);
        }
    }

    // Handle data search on table
    const handleSearch = (event) => {
        // Filter the rows based on the search keyword
        const keyword = event.target.value;
        setSearchKeyword(keyword);
        setIsFiltering(true);
        const filteredRows = rows.filter(row => {
            // Loop through all columns and check if keyword matches any column value
            for (const key in row) {
              if (row.hasOwnProperty(key)) {
                const columnValue = row[key].toString().toLowerCase();
                if (columnValue.includes(keyword.toLowerCase())) {
                  return true;
                }
              }
            }
            return false;
        });
    
        setPage(0);
        setFilteredRows(filteredRows);
    };
    
    // Handle date range filter on table
    const handleDateFilter = () => {
        // Check if the start and end date has been selected
        setIsLoading(true);
        if (!startDate || !endDate) {
            setAlertData(['error', 'Kindly provide date range.']);
            setIsLoading(false);
            setTimeout(() => { setAlertData([]); }, 2000);
            return;
        }

        setIsFiltering(true);
        const filteredRows = rows.filter(row => {
            // Check if row's createdAt is within the selected date range
            const createdAt = moment(row.createdAt);
            const startDateValue = moment(startDate);
            const endDateValue = moment(endDate);
            return createdAt.isBetween(startDateValue, endDateValue) || createdAt.isSame(startDateValue) || createdAt.isSame(endDateValue);
        });

        setIsLoading(false);
        setPage(0);
        setFilteredRows(filteredRows);
    }

    const rowsToRender = !isFiltering ? rows : filteredRows;

    // Render empty table if no data is found on page load
    if ((!rows || rows.length === 0) && !dataLoading) {
        return (
            <div className="border border-whitesmoke-500 shadow-xl p-7 w-default text-center mt-24">
                <p>There are no data currently</p>
            </div>
        )
    }

    // Render Loader while api fetches data
    if ((!rows || rows.length === 0) && dataLoading) {
        return (
            <div className="border border-whitesmoke-500 shadow-xl p-7 w-default text-center mt-24">
                <p>Loading data...</p>
            </div>
        )
    }

    return (
        <>
            <TableContainer component={Paper}>
                {
                    alertData.length > 0 && <Notifier severity={alertData[0]} message={alertData[1]} />
                }
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-12 w-default">
                    <div className="col-span-2 pb-4">
                        <TextField inputType="text" label="Search Data" nameAttr="name" value={searchKeyword} onChange={handleSearch} />
                    </div>
                    {
                        componentType === "games" && <div className="col-span-2 pb-4">
                            <SelectField label="Filter by category" nameAttr="category" data={gameCategory} onChange={handleSearch} />
                        </div>
                    }
                    <div className="col-span-2 pb-4 mt-8 ml-4">
                        <span>Filter by Date Range:</span>
                    </div>
                    <div className="col-span-2 pb-4">
                        <TextField inputType="date" nameAttr="name" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                    </div>
                    <div className="col-span-2 pb-4">
                        <TextField inputType="date" nameAttr="name" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                    </div>
                    <div className="col-span-2 pb-4 mt-4">
                        <Button btnText="Submit" btnType="form" isLoading={isLoading} onClick={handleDateFilter} />
                    </div>
                </div>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table" className="mt-4">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                S/N
                            </TableCell>

                            {/* Table head dynamic display based on data */}
                            {Object.keys(rows[0]).map((key) => {
                                if (key !== '_id') {
                                    return (
                                        <TableCell key={key}>
                                            <span className="capitalize text-center">
                                                {key}
                                            </span>
                                        </TableCell>
                                    );
                                }
                                return null;
                            })}
                            <TableCell>Action</TableCell> 
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPage > 0
                        ? rowsToRender.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rowsToRender
                    ).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>

                            {/* Loop through table data to extract each objects and properties */}
                            {Object.entries(row).map(([key, value], index) => {
                                if (key !== '_id') { 
                                    return (
                                        (key === 'createdAt') ? <TableCell key={index}>{moment(value).format('MMMM Do YYYY, h:mm:ss a')}</TableCell> : 
                                        <TableCell key={index}>{value}</TableCell>
                                    );
                                }
                                return null;
                            })}

                            {/* Action buttons display on table */}
                            <TableCell>
                                <IconButton style={{ color: '#007bff' }} onClick={() => handleView(row._id)}>
                                    <VisibilityIcon />
                                </IconButton>
                                <IconButton style={{ color: '#28a745' }} onClick={() => handleEdit(row._id)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton style={{ color: '#dc3545' }} onClick={() => handleOpenDialog(row._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Table pagination component */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {/* Alert dialog component for notification */}
            <AlertDialog 
                dialogValue={openDialog} 
                handleClose={handleCloseDialog} 
                handleDelete={handleDeleteItem} 
                isLoading={isLoading}
                alertData={alertData}
            />
        </>
    );
}
