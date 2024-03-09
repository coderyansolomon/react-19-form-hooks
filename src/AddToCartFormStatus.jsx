import {useFormStatus} from 'react-dom';

export default function AddToCartFormStatus(){
    const {pending, data, method, action} = useFormStatus()
    const itemTitle = data?.get('itemTitle');
    console.log({method, action})
    return pending && <p>{`Adding ${itemTitle} to cart`}</p>
}