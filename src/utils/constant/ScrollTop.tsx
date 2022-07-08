import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollTop(){
    const PathDefault = useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    },[PathDefault])
    return null;
}