
export const debounce = (cb:Function,delay:number) =>{
    let timer:NodeJS.Timeout;

    return function(){
        const context:any = this;
        const args = arguments;
        if(timer) clearInterval(timer)
        timer = setTimeout(() => cb.apply(context,args),delay)
    }
}