import React, { useState, useEffect } from 'react';
import './admin.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Admin = () => {

    // const[notes,setnotes] = useState([{

    //     name:'',
    //     email:'',
    //     text:''
    // }])

    // useEffect(()=>{
    //     fetch("http://localhost:3000/app/notes").then(res => {
    //         if(res.ok){
    //             return res.json
    //         }
    //     }).then(jsonRes => setnotes(jsonRes));
    // })

    return <div className='main section__margin'>

        <div className='contact'>
            {/* {notes.map(note=>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {note.name}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                        {note.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {note.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>)} */}
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Faris Rahman
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            farismrahman2@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Faris Rahman
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            farismrahman2@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Faris Rahman
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            farismrahman2@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Faris Rahman
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            farismrahman2@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>


        </div>
        <div className='appointments'>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name: Faris Rahman
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Email: farismrahman2@gmail.com
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Date of Birth: 10/19/1997
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Gender: Male
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Appointment Time: 10:45pm 19/04/2022
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Problem: Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name: Faris Rahman
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Email: farismrahman2@gmail.com
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Date of Birth: 10/19/1997
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Gender: Male
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Appointment Time: 10:45pm 19/04/2022
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Problem: Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name: Faris Rahman
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Email: farismrahman2@gmail.com
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Date of Birth: 10/19/1997
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Gender: Male
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Appointment Time: 10:45pm 19/04/2022
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Problem: Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Close
                    </Button>
                </CardActions>
            </Card>

        </div>

    </div>








}


export default Admin;
