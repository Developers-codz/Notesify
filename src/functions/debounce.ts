interface debounceFunc{
(cb:(params:string)=>void,param:number)
}
export const debounce:debounceFunc = (cb,delay) =>{
    let timer;
    return function(){
        const context = this;
        const args = arguments;
        if(timer) clearInterval(timer)
        timer = setTimeout(() => cb.apply(context,args),delay)
    }
}