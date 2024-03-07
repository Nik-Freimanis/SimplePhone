const Icon: ({name, color, height, width, ...props}: { name: any; color: any; height?: any; width?: any; [p: string]: any }) => JSX.Element = ({name, color, height = 24, width = 24, ...props}) => {


    return (
        <svg
            {...props}
            fill={color}
            width={width}
            height={height}
        >
            <use href={`/icons.svg#icon-${name}`}/>
        </svg>
    )
};

export default Icon;