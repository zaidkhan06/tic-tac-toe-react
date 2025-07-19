import React from "react";

export default function Square({value, onClick}) {
    return (
        <button 
        className="w-24 h-24 text-4-xl border border-gray-400 flex items-center justify-center"
        onClick={onClick}
        >{value}</button>
    )
}