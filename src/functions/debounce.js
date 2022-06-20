export const debounce = (cb,delay) =>{
    let timer;
    return function(){
        const context = this;
        const args = arguments;
        if(timer) clearInterval(timer)
        timer = setTimeout(() => cb.apply(context,args),delay)
    }
}