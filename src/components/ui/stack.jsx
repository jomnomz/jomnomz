const paddingMap = {
    wOIcon: `0.1rem 0.5rem`
}

export default function Stack({children, color, backgroundColor,size,fontSize, logo}){
    return(
        <div 
            class="flex flex-row p-2 justify-center items-center rounded-sm" 
            style={{color: color, backgroundColor: backgroundColor,padding: paddingMap[size], fontSize: fontSize}}>
            {logo && <img src={logo} class="w-5"/>}
            <span>{children}</span>
        </div>
    )
}