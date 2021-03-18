import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
      color: 'white',
  },
  input:{
      color: 'white',
  }

}));
const Form = ({tasks, setTasks}) => {
    const [formValues, setFormValues] = useState({
        text: "",
        value: 0
    })
    const handleChange = e => {
        e.preventDefault()
        console.log(formValues)
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
      e.preventDefault()
        setTasks([
      ...tasks, 
      formValues.text
    ])

  }

    const style = useStyles()

  return (
    <div className={style.root}>
        <form  onSubmit={handleSubmit}>
            <TextField required id="standard-required" label="Required" className={style.root}
            InputProps={{
                className: style.input
            }}
            onChange={handleChange}
            name='text'/>
            <Button type ='submit' variant="contained" color="primary">
            ADD
            </Button>
        </form>
    </div>
  )
}

export default Form
