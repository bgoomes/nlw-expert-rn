import { Link, LinkProps } from "expo-router";

type LinButtonProps = LinkProps<string> & {
    title: string
}

export function LinkButton( {title, ...rest}: LinButtonProps){
    return(
        <Link className="text-slate-300 text-left text-base font-bold p-3" {...rest}>{title}</Link>
    )
}