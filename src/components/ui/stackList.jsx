import Stack from './stack.jsx'

export default function StackList({ techStack }) {
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {techStack?.map((stack, index) => (
                <Stack
                    key={index}
                    color={stack.color}
                    backgroundColor={stack.backgroundColor}
                    size={stack.size}
                    fontSize={stack.fontSize}
                    logo={stack.logo}
                >
                    {stack.name}
                </Stack>
            ))}
        </div>
    )
}