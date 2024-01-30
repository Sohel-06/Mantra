import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    TableContainer,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ContentForm from "./ContentForm";
import useStyles from "./PageStyles";
import { headings } from "./constants";
import Listdata from "./ListData";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const TableData = () => {
    const [open, setOpen] = useState(false);
    const [isNew, setIsNew] = useState(false);

    const [data,setData]=useState([]);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(true);
    };
    return (
        <DndProvider backend={HTML5Backend}>
        <TableContainer component={Paper} square sx={{ padding: '10px' }}>
            <Box className={classes.boxStyles}>
                <Button variant="outlined" onClick={handleClick} >
                    Add
                </Button>
            </Box>
            <Listdata tasks={data} setTasks={setData}/>
           <ContentForm
                open={open}
                setOpen={setOpen}
                setIsNew={setIsNew}
                isNew={isNew}
                setData={setData}
                data={data}
                editData={'{}'}
            />
        </TableContainer>
        </DndProvider>
    );
};

export default TableData;