import StackList from '../../components/ui/stackList.jsx'
export default function TechStackCard({techStackType, techStack}){
    return(
        <div class="flex flex-col border rounded-sm p-5 gap-3 max-w-xl">
            <div>{techStackType}</div>
            <StackList techStack={techStack}/>
        </div>
    )
}