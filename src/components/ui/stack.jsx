const paddingMap = {
    wOIcon: `0.1rem 0.3rem`
}

export default function Stack({children, color, backgroundColor,size,fontSize, img}){
    return(
        <div 
            class="flex flex-row p-2 justify-center items-center border rounded-sm" 
            style={{color: color, backgroundColor: backgroundColor,padding: paddingMap[size], fontSize: fontSize}}>
            {img && <div class="w-5">{img}</div>}
            <span>{children}</span>
        </div>
    )
}