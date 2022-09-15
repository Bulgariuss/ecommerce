import React from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './styles'
const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles()
    console.log(item)
    console.log(item.image)
    console.log(item.image.url)
    
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
            <CardContent className={[classes.cardContent, 'modable'].join(' ')}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={[classes.cardActions, 'modable'].join(' ')}>
                <div className={classes.buttons}>
                    <Button className="modable" type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button className="modable" type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    );
}
 
export default CartItem;