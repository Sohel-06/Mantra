import { useEffect, useState } from "react";
import { headings } from "./constants";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useDrag, useDrop } from "react-dnd";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentForm from "./ContentForm";
const Section = ({ heading, age18, age25, age45, ageabove, tasks,setTasks }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (id) => dropCard(id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    let taskstoMap = age18
    if (heading == "Age 19-25") {
        taskstoMap = age25
    }
    if (heading == "Age 25-45") {
        taskstoMap = age45
    }
    if (heading == "Age 45+") {
        taskstoMap = ageabove
    }
    const dropCard = ({ item }) => {
        console.log(item)
    }
    return (
        <Grid ref={drop} sx={{ marginLeft: '16px' }}>
            {heading}

            {taskstoMap.length > 0 && taskstoMap.map((task) => (<CardSection task={task} tasks={tasks} setTasks={setTasks}/>))}

        </Grid>

    )
}
const CardSection = ({ task,tasks,setTasks }) => {
    const [open, setOpen] = useState(false);
    const [editData,setEditData]=useState()
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id:task },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    const handleClick = (id) => {
        setOpen(true)
        const check=tasks.filter((val)=> {
            return val.id !== id;
          });
          setEditData(check)
    }
    const handledelete = (id) => {
        const check=tasks.filter((val)=> {
            return val.id !== id;
          });
          setTasks(check)
    } 
    return (
        <div>
            <Card sx={{ minWidth: 275, marginBottom: '10px', backgroundColor: '"#253053"' }} item ref={drag}>
                <CardContent>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Name :{task.Name}
                        </Typography>
                        <DeleteIcon sx={{ marginLeft: '100px' }} onClick={()=>{handledelete(task.id)}} />
                        <EditNoteIcon sx={{ marginLeft: 'auto' }} onClick={()=>{handleClick(task.id)}} />
                    </Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Email:{task.Email}
                    </Typography>
                    <Typography variant="body2">
                        Age:{task.Age}
                    </Typography> <Typography variant="body2">
                        Phone:{task.Phone}
                    </Typography>
                </CardContent>
                {/* <CardActions>
     <Button size="small">Learn More</Button>
 </CardActions> */}
             <ContentForm open={open}
                setOpen={setOpen}
                setData={setTasks}
                data={editData} 
                editData={task}
                />
            </Card>

        </div>
    )
}

const Listdata = ({ tasks, setTasks }) => {
    const [age18, setAge18] = useState([]);
    const [age25, setAge25] = useState([]);
    const [age45, setAge45] = useState([]);
    const [ageabove, setabove] = useState([]);
    useEffect(() => {
        const fage18 = tasks.filter(task => task.Age < 18 && task.Age >= 0)
        const fage25 = tasks.filter(task => task.Age < 25 && task.Age >= 18)
        const fage45 = tasks.filter(task => task.Age < 45 && task.Age >= 25)
        const fageabove = tasks.filter(task => task.Age > 45)
        setAge18(fage18)
        setAge25(fage25)
        setAge45(fage45)
        setabove(fageabove)

    }, [tasks])
    return (
        <div>
            <Grid container justifyContent="space-between" spacing={2} sx={{ marginTop: '10px' }}>
                {headings.map((val, index) => <Section heading={val} key={index} tasks={tasks} setTasks={setTasks} age18={age18} age25={age25} age45={age45} ageabove={ageabove} />)}
            </Grid>
          
        </div>
    )
}


export default Listdata