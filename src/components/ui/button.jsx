const borderMap = {
    borderLess: 'none'
}

const borderRadiusMap = {
    circle: '9999px'
}
export default function Button({children, border,borderRadius, backGroundColor, color, onClick}){
    return(

        <button 
            className="rounded-sm border p-2 flex flex-row justify-center aitems-center gap-1.5"
            style={{color: color, backGroundColor: backGroundColor ,border: borderMap[border], borderRadius: borderRadiusMap[borderRadius]}}
            onClick={onClick}
        >
            {children}
        </button>
    )
}