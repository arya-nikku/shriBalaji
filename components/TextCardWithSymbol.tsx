import { JSX } from "react";

interface TextCardWithSymbolProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

export default function TextCardWithSymbol({ title, description, icon }: TextCardWithSymbolProps) {
    return (
        <div className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="p-3 bg-white rounded-full shadow-md">{icon}</div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    );
}
