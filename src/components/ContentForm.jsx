import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import useStyles from "./PageStyles";
import { fields } from "./constants";
import schemaValidation from "./SchemaValidation";
import Loader from "./Loader";

const ContentForm = (props) => {
    const { isNew, setIsNew, open, setOpen, data, setData,editData='' } = props;
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues:editData,
        resolver: yupResolver(schemaValidation),
    });
    const handleClose = () => {
        setOpen(false);
        reset({
            Name: "",
            Email: "",
            Phone:"",
            Age:""
            })
    };
    const onSubmit = (formData) => {
        let userData={...formData,id:Math.floor(Math.random() * 100)}
        setOpen(false);
        setData([...data, userData])
        reset({
            Name: "",
            Email: "",
            Phone:"",
            Age:""
            })
    };
    return (
        <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            scroll="paper"
            // classes={{
            //     scrollPaper: classes.topScrollPaper,
            //     paperScrollBody: classes.topPaperScrollBody,
            // }}
        >
            <DialogTitle id="simple-dialog-title" sx={{ textAlign: "center" }}>
                Submit your Content
            </DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={3} sx={{ marginBottom: "16px" }}>
                    {fields.map((fieldName, index) => (
                        <Grid item xs={12} sm={fieldName.size} key={index}>
                            <TextField
                                required
                                label={fieldName.name}
                                fullWidth
                                variant="outlined"
                                {...register(fieldName.name)}
                                error={errors[fieldName.name] ? true : false}
                                helperText={
                                    errors[fieldName.name] ? errors[fieldName.name]?.message : ""
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button color="inherit" sx={{ mr: 1 }} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        sx={{ display: "inline-block", marginLeft: "auto" }}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Add
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default ContentForm;