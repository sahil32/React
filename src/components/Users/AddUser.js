import React , { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = (props) => {
    const[enteredUsername , setEnteredUsername] = useState('');
    const[enteredAge , setEnteredAge] = useState('');

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        // setEnteredAge(45454);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0)
        return;
        if(+enteredAge < 0){
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        // console.log("hello");
        console.log(enteredAge);
        console.log(enteredUsername);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Name</label>
                <input type="text" name="" id="username" onChange={userNameChangeHandler} />
                <label htmlFor="age">Age(years)</label>
                <input type="number" name="" id="age" onChange={ageChangeHandler}/>
                <Button>Add User</Button>
            </form>
        </Card>
    )
}
export default AddUser;