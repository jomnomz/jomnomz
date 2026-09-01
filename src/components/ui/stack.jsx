const paddingMap = {
    wOIcon: `0.1rem 0.5rem`
}

export default function Stack({children, color, backgroundColor,size,fontSize, logo}){
    return(
        <div 
            className="flex flex-row p-2 gap-1 hover:scale-110 transition-transform duration:300 justify-center items-center rounded-sm" 
            style={{color: color, backgroundColor: backgroundColor,padding: paddingMap[size], fontSize: fontSize}}>
            {logo && <img loading="lazy" src={logo} className="w-5"/>}
            <span>{children}</span>
        </div>
    )
}