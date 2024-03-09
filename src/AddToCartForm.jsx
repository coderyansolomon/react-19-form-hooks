import {useFormState} from 'react-dom'
import { addToCart } from './actions'
import AddToCartFormStatus from './AddToCartFormStatus'

export default function AddToCartForm({itemTitle}){
    const [formState, formAction] = useFormState(addToCart, {message: '', size: 0})
    return (
        <>
            <form action={formAction}>
                <h2>{itemTitle}</h2>
                <input type="hidden" name="itemTitle" value={itemTitle} />
                <button type="submit">Add To Cart</button>
                {
                    formState.message
                }
                <p>
                    Cart Size: {formState.size}
                </p>
                <AddToCartFormStatus />
            </form>
        </>
    )
}