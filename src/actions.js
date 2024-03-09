'use server'

export async function addToCart(prevState, formData){
    const itemTitle = formData.get('itemTitle');
    await new Promise(resolve => setTimeout(resolve, 2000))
    return {
        message: `${itemTitle} was added to your cart!`,
        size: prevState.size + 1
    }
}